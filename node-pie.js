var DEFAULT_OPTIONS = {
    radius: 8,
    outerStrokeWidth: 1,
    parentNodeColor: 'blue',
    showPieChartBorder: true,
    pieChartBorderColor: 'white',
    pieChartBorderWidth: '1',
    showLabelText: true,
    labelText: 'text',
    labelWeight: 'bold',
    labelColor: 'blue'
};

function getOptionOrDefault(key, options, defaultOptions) {
    defaultOptions = defaultOptions || DEFAULT_OPTIONS;
    if (options && key in options) {
        return options[key];
    }
    return defaultOptions[key];
}

function drawParentCircle(nodeElement, options) {
    var outerStrokeWidth = getOptionOrDefault('outerStrokeWidth', options);
    var radius = getOptionOrDefault('radius', options);
    var parentNodeColor = getOptionOrDefault('parentNodeColor', options);

    nodeElement.insert("circle")
        .attr("id", "parent-pie")
        .attr("r", radius)
        .attr("fill", function (d) {
            return parentNodeColor;
        })
        .attr("stroke", function (d) {
            return parentNodeColor;
        })
        .attr("stroke-width", outerStrokeWidth);
}

function drawPieChartBorder(nodeElement, options) {
    var radius = getOptionOrDefault('radius', options);
    var pieChartBorderColor = getOptionOrDefault('pieChartBorderColor', options);
    var pieChartBorderWidth = getOptionOrDefault('pieChartBorderWidth', options);

    nodeElement.insert("circle")
        .attr("r", radius)
        .attr("fill", 'transparent')
        .attr("stroke", pieChartBorderColor)
        .attr("stroke-width", pieChartBorderWidth);
}

function drawPieChart(nodeElement, percentages, options, colorScale) {
    var radius = getOptionOrDefault('radius', options);
    var halfRadius = radius / 2;
    var halfCircumference = 2 * Math.PI * halfRadius;

    var percentToDraw = 0;
    for (var p in percentages) {
        percentToDraw += percentages[p].percent;

        nodeElement.insert('circle', '#parent-pie + *')
            .attr("r", halfRadius)
            .attr("fill", 'transparent')
            .style('stroke', colorScale(percentages[p].color))  
            .style('stroke-width', radius)
            .style('stroke-dasharray',
                    halfCircumference * percentToDraw / 100
                    + ' '
                    + halfCircumference);
    }
}

function drawTitleText(nodeElement, options) {
    var radius = getOptionOrDefault('radius', options);
    var text = getOptionOrDefault('labelText', options);
    var color = getOptionOrDefault('labelColor', options);
    var labelWeight = getOptionOrDefault('labelWeight', options);

    var textElement = nodeElement.select(".text-label");
    
    var fontSize = 12;

    if (textElement.empty()) {
        textElement = nodeElement.append("text")
            .attr("class", "text-label")
            .attr("fill", color)
            .attr("dy", radius * 3)
            .style("font-size", fontSize + "px")
            .style("font-weight", labelWeight)
            .style("pointer-events", "none");
    }

    // Set text content
    textElement.text(String(text));

    // Set initial visibility based on the group and showLabelText option
    textElement.style("display", options.group === 1 ? "inline" : "none");

    // Add mouseover and mouseout events directly to the nodeElement
    nodeElement.on("mouseover", function () {
        if (options.group === 0 && options.showLabelText) {
            textElement.style("visibility", "visible");
        }
    }).on("mouseout", function () {
        if (options.group === 0) {
            textElement.style("visibility", "hidden");
        }
    });
}




var NodePieBuilder = {
    drawNodePie: function (nodeElement, percentages, options, colorScale) {
        drawParentCircle(nodeElement, options);

        if (!percentages) return;
        drawPieChart(nodeElement, percentages, options, colorScale);

        var showPieChartBorder = getOptionOrDefault('showPieChartBorder', options);
        if (showPieChartBorder) {
            drawPieChartBorder(nodeElement, options);
        }

        drawTitleText(nodeElement, options);

        // Add mouseover and mouseout events directly to the nodeElement
        nodeElement.on("mouseover", function () {
            if (options.group === 0 && options.showLabelText) {
                nodeElement.select(".text-label").style("display", "inline");
            }
        }).on("mouseout", function () {
            if (options.group === 0) {
                nodeElement.select(".text-label").style("display", "none");
            }
        });
    }
};




