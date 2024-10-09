var svg, simulation, color, colorModule, colorMethylation, BorderDMG, toggleModules;

document.addEventListener("DOMContentLoaded", function () {
    svg = d3.select("svg");
    var width = +svg.attr("width"),
        height = +svg.attr("height");

    color = d3.scaleOrdinal(["#e08214", "#8073ac", "#f7f7f7"]);
    colorMethylation = d3.scaleOrdinal(["#bababa", "#4d4d4d"]);
    colorLabel = d3.scaleOrdinal(["#4d4d4d", "#4d4d4d"]);
    colorModule = d3.scaleOrdinal(['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf', '#5254a3', '#8ca252', '#bd9e39', '#ad494a', '#a55194', '#6baed6', '#999']);
    BorderDMG = [0, 8];
    labelWeight = ["normal", "bold"];

    simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) {
            return d.id;
        }))
        .force("charge", d3.forceManyBody().strength(-30).distanceMin(3).distanceMax(400))
        .force("center", d3.forceCenter(width / 2, height / 2));

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    d3.json("data.json", function (error, graph) {
        if (error) throw error;

        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter().append("line")
            .attr("stroke-width", function (d) {
                return Math.sqrt(d.value);
            });

        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(graph.nodes)
            .enter()
            .append("g")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        // Draw the respective pie chart for each node
        node.each(function (d) {
            NodePieBuilder.drawNodePie(d3.select(this), d.pieChart, {
                parentNodeColor: colorMethylation(d.group),
                outerStrokeWidth: BorderDMG[d.group],
                showLabelText: true,
                labelText: d.label,
                labelColor: colorLabel(d.group),
                labelWeight: labelWeight[d.group],
                group: d.group  // add group information for label visibility
            }, color);
        });

        simulation.nodes(graph.nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(graph.links);

        function ticked() {
            if (!graph || !graph.nodes) {
                console.error("Invalid or missing graph data during tick.");
                return;
            }

            link
                .attr("x1", function (d) {
                    return d.source ? d.source.x : 0;
                })
                .attr("y1", function (d) {
                    return d.source ? d.source.y : 0;
                })
                .attr("x2", function (d) {
                    return d.target ? d.target.x : 0;
                })
                .attr("y2", function (d) {
                    return d.target ? d.target.y : 0;
                });

            d3.selectAll("circle").attr("cx", function (d) {
                return d ? d.x : 0;
            })
                .attr("cy", function (d) {
                    return d ? d.y : 0;
                });

            d3.selectAll("text").attr("x", function (d) {
                return d ? d.x : 0;
            })
                .attr("y", function (d) {
                    return d ? d.y : 0;
                });
        }
    });
});

toggleModules = function (checkbox) {
    var isChecked = checkbox.checked;
    if (isChecked) {
        colorModules();
    } else {
        redrawPieCharts();
    }
};

function colorModules() {
    d3.selectAll("circle")
        .attr("fill", d => colorModule(d.module))
        .on("mouseover", null)
        .on("mouseout", null);

    d3.selectAll(".links line")
        .style("stroke", function (d) { return colorModule(d.interintra) })
        .attr("stroke-opacity", 0.7);
}

function redrawPieCharts() {
    // Remove existing pie chart elements
    d3.selectAll(".nodes g")
        .selectAll("circle")
        .remove();

    // Redraw the initial pie charts for each node
    d3.selectAll(".nodes g")
        .each(function (d) {
            NodePieBuilder.drawNodePie(d3.select(this), d.pieChart, {
                parentNodeColor: colorMethylation(d.group),
                outerStrokeWidth: BorderDMG[d.group],
                showLabelText: true,
                labelText: d.label,
                labelColor: colorLabel(d.group),
                labelWeight: labelWeight[d.group],
                group: d.group  // add group information for label visibility
            }, color);
        });

    // Reset the color of links if needed
    d3.selectAll(".links line")
        .style("stroke", "#999")
        .attr("stroke-opacity", 0.7);

    simulation.restart();
}

highlightSymptoms = function (checkbox) {
    var isChecked = checkbox.checked;
    if (isChecked) {
        d3.selectAll("circle")
        .attr("opacity", d => d.opacity);   
    } else {
        d3.selectAll("circle")
        .attr("opacity", 1.0);        
    }
};
