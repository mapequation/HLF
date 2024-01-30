<!DOCTYPE html>
<head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <title>Interactome</title>
<!--     <link rel="stylesheet" type="text/css" href="style.css"> -->
<!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"
            integrity="sha512-M7nHCiNUOwFt6Us3r8alutZLm9qMt4s9951uo8jqO4UwJ1hziseL6O3ndFyigx6+LREfZqnhHxYjKRJ8ZQ69DQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>-->
     
    <style>
        .links line {
            stroke: #999;
            stroke-opacity: 0.7;
        }

        text {
            font-size: 0.9em;
            font-weight: bold;
            -webkit-font-smoothing: antialiased;
        }
    </style>

    <svg width="1200" height="1400"></svg>
    
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="node-pie.js"></script>    
    
</head>

<body>

<button onClick="toggleModules()">Show modules</button>
<button onClick="plotNetwork()">Hide modules</button>

<script>

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(["#e08214", "#8073ac", "#f7f7f7"]);  
var colorMethylation = d3.scaleOrdinal(["#bababa", "#4d4d4d"]);
var colorModule = d3.scaleOrdinal(["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d"])
var BorderDMG = [0, 8]

var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) {
            return d.id;
        }))
        .force("charge", d3.forceManyBody().strength(-30).distanceMin(3).distanceMax(400))
        .force("center", d3.forceCenter(width / 2, height / 2));

var data={
"nodes": [
 {
  "id": "INTS2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "NUP133", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MYH6", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SQSTM1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "DNM1L", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HSPA13", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PCNA", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HLA-DPB1", "label": "HLA-DPB1", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "RPL26", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "FBRSL1", "label": "FBRSL1", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PSMB2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CLTA", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EEA1", "label": "EEA1", "group": 1, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CSNK2A2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "FTH1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL13A", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ACTR3", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PPP2R1B", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CD44", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MYL4", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CTSB", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "LPGAT1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "XPO1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "STBD1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CREB1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SAR1B", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RTN4", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PCM1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SCAMP1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "H2AFY2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "C3", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MET", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RPL6", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CFL1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "GRWD1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL32", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "SEC24B", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "EBF1", "label": "EBF1", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "JAK1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "EIF3A", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ABCG2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMD3", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMD5", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TCEB2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RANBP2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ITGA6", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TOP2B", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RAB13", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMC2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EXOSC3", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TRIM10", "label": "TRIM10", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "ACTN3", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMD2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "MCM2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EEF1A1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TRIM37", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SNX27", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "FCGR2A", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "NCAPD2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "STOM", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMC5", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HSPA2", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PARK7", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "H2AFX", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MCM3", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL17", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "FZD3", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "FBL", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CAST", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SKP1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "GTF2IRD1", "label": "GTF2IRD1", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "HDAC2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL15", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "U2AF2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HSPA8", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPS24", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "HGS", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TRIM21", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL14", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPA1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "KBTBD6", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CAPZA1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MBP", "label": "MBP", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "RPS27", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RPL5", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DGKA", "label": "DGKA", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "STAT6", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MCM4", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ZBTB22", "label": "ZBTB22", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "DCTN2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "GNAQ", "label": "GNAQ", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "TMED2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "S1PR2", "label": "S1PR2", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PTPN11", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "STRAP", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ACTR1B", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "INSL3", "label": "INSL3", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "NUDT21", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPS5", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL36", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TCEB1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "YKT6", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "UPP1", "label": "UPP1", "group": 1, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "FAM38A", "label": "FAM38A", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "SKI", "label": "SKI", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "ATP2A1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TRIM25", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "AP2M1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ANXA1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPA3", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MYL1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ATP1B3", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "IGF2R", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "EIF3G", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "NOP14", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "THRAP3", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CIT", "label": "CIT", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "TNFRSF10A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "UCHL1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CLTC", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARPC4", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "CDH2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CTDNEP1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CUL5", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "UBE2J1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TAF6", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "NUDC", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "UBA1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "TRIM29", "label": "TRIM29", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "ATP12A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "UTP15", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "REPS1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CREBBP", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMA1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "BANF1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CAPZB", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "FZD2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HOXA4", "label": "HOXA4", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "CTBP1", "label": "CTBP1", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "MACROD1", "label": "MACROD1", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "KRR1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMC3", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "NSF", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EXOSC1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MAP3K11", "label": "MAP3K11", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "NUP37", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "SEC31A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SKIV2L2", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARPC5", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SRP14", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "KDELR1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "POU2F2", "label": "POU2F2", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "GOLGB1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PTPRC", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TPM3", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "NOTCH1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HLA-E", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SEC24A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "RAB5C", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RCC2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PLXNA1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "XPC", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PYGM", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EPN1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SLC15A4", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RAB1B", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "WTAP", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "BNIP3L", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "LAMP1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TLN1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL30", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "MRPL11", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CAPN1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MYBBP1A", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EHD2", "label": "EHD2", "group": 1, "module": 4,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "BOP1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PC", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SNAP25", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "DEGS1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "BET1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "LPAR1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HSPA5", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "NOP58", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CUL3", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HSPD1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RRS1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SEC13", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SMN1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "BASP1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MKI67", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "PACSIN2", "label": "PACSIN2", "group": 1, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "FAU", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "LRP6", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "LAMA3", "label": "LAMA3", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "SUPT5H", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EIF2S3", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DYNC1I2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "RPL38", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "AP1B1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RAB5B", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SMAD3", "label": "SMAD3", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "NUP214", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SMC4", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "WDR5", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PPIB", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "HLA-A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "ACTA1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "GPI", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MSH6", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "WT1", "label": "WT1", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "KIF11", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TUBB", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "KIF24", "label": "KIF24", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "WDR77", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARID1A", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "NCOA3", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "KBTBD7", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HNRNPUL1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "POLR2B", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PARP1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SNX1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PPP1CA", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SLC2A9", "label": "SLC2A9", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "EMG1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PMEPA1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "NFIX", "label": "NFIX", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "EXOC3", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "COTL1", "label": "COTL1", "group": 1, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HLA-C", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "SERPINC1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SEC23A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL9", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MRPS10", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ACVR1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MYBPC2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PNP", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ITCH", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CCT4", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RBBP7", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CDIPT", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PPT2", "label": "PPT2", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "AGPAT5", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "EIF3E", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PPP2CB", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "USP7", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DHX15", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "VAMP2", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "ATXN10", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPS15", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CDK5RAP2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ARPC1A", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ADCY9", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SERPINB6", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TGFB2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "POLA1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HSPA1A", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PFKM", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "USO1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CD81", "label": "CD81", "group": 1, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TRIM22", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ACTR1A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MAPRE1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "MAD1L1", "label": "MAD1L1", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "TBCA", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL23", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "WDR72", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SNW1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DDB2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PTPRA", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TSPAN14", "label": "TSPAN14", "group": 1, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "COG3", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMA4", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CCT7", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "COIL", "label": "COIL", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "RPA2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ITGB2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "COPE", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TNNC2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARPC2", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TNNI2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TFRC", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CD47", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "LTBP3", "label": "LTBP3", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "FBXL4", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PIGQ", "label": "PIGQ", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "SRL", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "BYSL", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMD8", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "TAPBP", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EXOSC8", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "STX4", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PRMT5", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "NF1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "GTF2F2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "LEMD3", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HIVEP3", "label": "HIVEP3", "group": 1, "module": 1,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "LIMK1", "label": "LIMK1", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "RAB27B", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HINT1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMB1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MYO5A", "label": "MYO5A", "group": 1, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMB4", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MCM5", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "LRP8", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SCARB1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "VAMP4", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "YWHAE", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "GBA", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL21", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "RPS16", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RNF220", "label": "RNF220", "group": 1, "module": 1,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "BNIP3", "label": "BNIP3", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "MKS1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ATP6AP2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MYOZ1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HSPA4", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SRP68", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PTPRJ", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "EEF1A2", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMB3", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "CKM", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MCM6", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CAPN2", "label": "CAPN2", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "EMID2", "label": "EMID2", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "HSPH1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "UBR4", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "AHNAK", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EIF3M", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TP53BP1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HSPA9", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "AP1S1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMD12", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "GTF2I", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARPC1B", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "AIMP2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPS27L", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ZFP36L1", "label": "ZFP36L1", "group": 1, "module": 3,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "FNBP1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMD4", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "CEP72", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ITGA5", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMB5", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "STX5", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ACTN2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HSPB1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DAXX", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SF1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TTC27", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "DNAJA2", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPSA", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPS12", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SHC1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MCM7", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMC4", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARCN1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARID1B", "label": "ARID1B", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "TUBB6", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TRIM13", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SMC1A", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PDYN", "label": "PDYN", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PAFAH1B1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SEC24C", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "RPL10L", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ABCB6", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "EEF2", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MTHFD1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MYL3", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPS7", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "DNAJA1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "BUB3", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "GTPBP4", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SIN3A", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPF2", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSME1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSME2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARHGEF1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ATM", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "COG2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CLDN1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HOXA3", "label": "HOXA3", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "MOSPD2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "KCNAB2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CCNK", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DDB1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "RANGAP1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PDCD11", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CANX", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PWP1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TMOD3", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "BET1L", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "FSCN1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "USP15", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "XAB2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ZNRF3", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CCT3", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ATP1A4", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RBPJ", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "WWP2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CYBA", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMD11", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SLC3A2", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "DCTN1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TSR1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "P4HB", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "NFKB1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MYH2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HSP90AB1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "POLE", "label": "POLE", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "OCLN", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TNNT3", "label": "TNNT3", "group": 1, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CPSF2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CDS2", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMD10", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "OPA1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "LMNB1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CAPNS1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DES", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MYH11", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "NEDD4", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MGRN1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RAD50", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPS23", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PRPF19", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "RPS21", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "P4HA1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CTSD", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PLCG2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "WDR36", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DNAJA3", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EIF3B", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TTLL12", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "UBR2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TMED10", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMB8", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HDAC1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TPI1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SRC", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RAB7A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "MYH3", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RAB1A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "SMARCA2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DYNC1H1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARF4", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RPS6", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HVCN1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MYLPF", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ENO1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CNTFR", "label": "CNTFR", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "CLTB", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HSPBP1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PRDM16", "label": "PRDM16", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "SAFB2", "label": "SAFB2", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "SMC2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MLEC", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ITGA3", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "EXOSC7", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RFC2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DDX10", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "INTS12", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "BCL7A", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TTN", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RAB10", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HLA-DMB", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "NOC3L", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MYH14", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "GSK3A", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "DNAJB1", "label": "DNAJB1", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "LDLRAP1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HERC1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "BSG", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RHOA", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "BAIAP2", "label": "BAIAP2", "group": 1, "module": 4,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "FZD1", "label": "FZD1", "group": 1, "module": 1,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PCGF3", "label": "PCGF3", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "FURIN", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ATP1A1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "NAT10", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PAX2", "label": "PAX2", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "ZC3H3", "label": "ZC3H3", "group": 1, "module": 0,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "APOB", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PARK2", "label": "PARK2", "group": 1, "module": 1,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "HAUS6", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RPS15A", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "COG1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TMED9", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "EIF2S1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RAB14", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "SPTBN2", "label": "SPTBN2", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "MYH8", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "NT5C", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ANO6", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PIGO", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MPDU1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "NAPA", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HSP90AA1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TGOLN2", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "WDR48", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "STUB1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ABCA7", "label": "ABCA7", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "UFL1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "GABRA5", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "OFD1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HUWE1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "KRI1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "WDR18", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMA6", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "UBE3C", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMA7", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TBCD", "label": "TBCD", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "YY1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TPR", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "INTS1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "LDLR", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RRP9", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ATP2A2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "VPS35", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MYH1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "BAMBI", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "LYN", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PPP1CC", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ZW10", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RNF130", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HMOX2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RBM19", "label": "RBM19", "group": 1, "module": 3,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "CALM1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PTPN2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "B2M", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "POLR2C", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMD7", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PAK6", "label": "PAK6", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "STIP1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMD1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "POLR2A", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "FAM120B", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RAB11B", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DBNL", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DYNC1LI2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DNAJB4", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "DDX18", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TUBB4B", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL27", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "ITGB1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "CNP", "label": "CNP", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PPP2R5A", "label": "PPP2R5A", "group": 1, "module": 1,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "COPG1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPS3", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "AHSA1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DDX5", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "DUT", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "PSMC6", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "COPZ1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ERI3", "label": "ERI3", "group": 1, "module": 1,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PLEC1", "label": "PLEC1", "group": 1, "module": 3,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PSMC1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "WWP1", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "OPCML", "label": "OPCML", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "MFN2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "GNAI2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "COPB2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "RPL29", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "C19orf25", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RPS8", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TLE3", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SMARCA4", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPS26", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "POLR1B", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "WIPF1", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TPM2", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HLA-B", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "GNA13", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "HLA-DRB1", "label": "HLA-DRB1", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "CKAP5", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPLP2", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "EIF5B", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "IL6ST", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "NIP7", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RUNX3", "label": "RUNX3", "group": 1, "module": 1,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PPP4R2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ORC4", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "JAG1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "VDAC1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "TCTN3", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "STX6", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ADCY6", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TOP2A", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "UBC", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "HSP90B1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "NCKAP1L", "label": " ", "group": 0, "module": 4,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "AURKC", "label": "AURKC", "group": 1, "module": 5,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "H2AFJ", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "SLC9A1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RPL35A", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "KIF5B", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "CTDSP2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "BMPR1B", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MYH4", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "COPB1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "INHBB", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RPL3", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "SOD1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "S1PR3", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "NEDD1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ALDH1A2", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ITGB5", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RPL18A", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PSMA2", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "UBE3A", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RAB8A", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "PKMYT1", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "YES1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ACVR1B", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "KPNB1", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "COPG2", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "ARHGDIA", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "GPR39", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "RPL28", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 50 },
   { "color": 2, "percent": 50 }
  ]
 },
 {
  "id": "GOSR1", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "TUBA1B", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "GRPEL1", "label": " ", "group": 0, "module": 6,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "COL23A1", "label": "COL23A1", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PPP2R1A", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "MAG", "label": "MAG", "group": 1, "module": 2,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "POLR3H", "label": " ", "group": 0, "module": 0,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "ARF5", "label": " ", "group": 0, "module": 5,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
 {
  "id": "MYBPC1", "label": " ", "group": 0, "module": 2,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "KLK4", "label": "KLK4", "group": 1, "module": 6,
  "pieChart": [
   { "color": 3, "percent": 100 }
  ]
 },
 {
  "id": "PSMA8", "label": " ", "group": 0, "module": 1,
  "pieChart": [
   { "color": 2, "percent": 100 }
  ]
 },
 {
  "id": "RPL12", "label": " ", "group": 0, "module": 3,
  "pieChart": [
   { "color": 1, "percent": 100 }
  ]
 },
],"links": [
{"source": "INTS2", "target": "POLR2C", "value": 0.2},
{"source": "INTS2", "target": "GTF2F2", "value": 0.2},
{"source": "INTS2", "target": "POLR2B", "value": 0.2},
{"source": "INTS2", "target": "CCNK", "value": 0.2},
{"source": "INTS2", "target": "INTS1", "value": 0.2},
{"source": "INTS2", "target": "TAF6", "value": 0.2},
{"source": "INTS2", "target": "INTS12", "value": 0.2},
{"source": "INTS2", "target": "SUPT5H", "value": 0.2},
{"source": "INTS2", "target": "POU2F2", "value": 0.2},
{"source": "INTS2", "target": "POLR2A", "value": 0.2},
{"source": "NUP133", "target": "ZW10", "value": 0.2},
{"source": "NUP133", "target": "PPP2CB", "value": 0.2},
{"source": "NUP133", "target": "DYNC1LI2", "value": 0.2},
{"source": "NUP133", "target": "BUB3", "value": 0.2},
{"source": "NUP133", "target": "HSPA5", "value": 0.2},
{"source": "NUP133", "target": "MAPRE1", "value": 0.2},
{"source": "NUP133", "target": "NUP214", "value": 0.2},
{"source": "NUP133", "target": "TOP2A", "value": 0.2},
{"source": "NUP133", "target": "CPSF2", "value": 0.2},
{"source": "NUP133", "target": "U2AF2", "value": 0.2},
{"source": "NUP133", "target": "DYNC1I2", "value": 0.2},
{"source": "NUP133", "target": "HSPA13", "value": 0.2},
{"source": "NUP133", "target": "XPO1", "value": 0.2},
{"source": "NUP133", "target": "PPP2R1A", "value": 0.2},
{"source": "NUP133", "target": "HSPA4", "value": 0.2},
{"source": "NUP133", "target": "PAFAH1B1", "value": 0.2},
{"source": "NUP133", "target": "PPP1CC", "value": 0.2},
{"source": "NUP133", "target": "SEC13", "value": 0.2},
{"source": "NUP133", "target": "RANGAP1", "value": 0.2},
{"source": "NUP133", "target": "HSPA1A", "value": 0.2},
{"source": "NUP133", "target": "RCC2", "value": 0.2},
{"source": "NUP133", "target": "MAD1L1", "value": 0.2},
{"source": "NUP133", "target": "KPNB1", "value": 0.2},
{"source": "NUP133", "target": "SMC1A", "value": 0.2},
{"source": "NUP133", "target": "PPP2R1B", "value": 0.2},
{"source": "NUP133", "target": "RPS27", "value": 0.2},
{"source": "NUP133", "target": "NUDC", "value": 0.2},
{"source": "NUP133", "target": "RANBP2", "value": 0.2},
{"source": "NUP133", "target": "NUP37", "value": 0.2},
{"source": "NUP133", "target": "HSPA2", "value": 0.2},
{"source": "NUP133", "target": "HSPA9", "value": 0.2},
{"source": "NUP133", "target": "TPR", "value": 0.2},
{"source": "NUP133", "target": "PPP2R5A", "value": 0.2},
{"source": "NUP133", "target": "CKAP5", "value": 0.2},
{"source": "NUP133", "target": "DYNC1H1", "value": 0.2},
{"source": "NUP133", "target": "HSPA8", "value": 0.2},
{"source": "MYH6", "target": "MYH1", "value": 0.2},
{"source": "MYH6", "target": "MYH2", "value": 0.2},
{"source": "MYH6", "target": "MYH4", "value": 0.2},
{"source": "MYH6", "target": "TNNT3", "value": 0.2},
{"source": "MYH6", "target": "MYL1", "value": 0.2},
{"source": "MYH6", "target": "TMOD3", "value": 0.2},
{"source": "MYH6", "target": "MYLPF", "value": 0.2},
{"source": "MYH6", "target": "MYL4", "value": 0.2},
{"source": "MYH6", "target": "MYBPC2", "value": 0.2},
{"source": "MYH6", "target": "ACTA1", "value": 0.2},
{"source": "MYH6", "target": "TPM3", "value": 0.2},
{"source": "MYH6", "target": "TNNC2", "value": 0.2},
{"source": "MYH6", "target": "DES", "value": 0.2},
{"source": "MYH6", "target": "TPM2", "value": 0.2},
{"source": "MYH6", "target": "TNNI2", "value": 0.2},
{"source": "MYH6", "target": "MYL3", "value": 0.2},
{"source": "MYH6", "target": "MYH11", "value": 0.2},
{"source": "MYH6", "target": "MYH8", "value": 0.2},
{"source": "MYH6", "target": "MYBPC1", "value": 0.2},
{"source": "MYH6", "target": "MYH3", "value": 0.2},
{"source": "MYH6", "target": "ATP2A2", "value": 0.2},
{"source": "MYH6", "target": "TTN", "value": 0.2},
{"source": "MYH6", "target": "ACTN2", "value": 0.2},
{"source": "MYH6", "target": "ACTN3", "value": 0.2},
{"source": "MYH6", "target": "MYH14", "value": 0.2},
{"source": "SQSTM1", "target": "STUB1", "value": 0.2},
{"source": "SQSTM1", "target": "NFKB1", "value": 0.2},
{"source": "SQSTM1", "target": "MFN2", "value": 0.2},
{"source": "SQSTM1", "target": "VDAC1", "value": 0.2},
{"source": "SQSTM1", "target": "SOD1", "value": 0.2},
{"source": "SQSTM1", "target": "ATM", "value": 0.2},
{"source": "SQSTM1", "target": "HSPA5", "value": 0.2},
{"source": "SQSTM1", "target": "LAMP1", "value": 0.2},
{"source": "SQSTM1", "target": "PARK2", "value": 0.2},
{"source": "SQSTM1", "target": "UBC", "value": 0.2},
{"source": "SQSTM1", "target": "RNF130", "value": 0.2},
{"source": "DNM1L", "target": "MFN2", "value": 0.2},
{"source": "DNM1L", "target": "VDAC1", "value": 0.2},
{"source": "DNM1L", "target": "PARK2", "value": 0.2},
{"source": "HSPA13", "target": "DNAJB1", "value": 0.2},
{"source": "HSPA13", "target": "RANBP2", "value": 0.2},
{"source": "HSPA13", "target": "HSPA5", "value": 0.2},
{"source": "HSPA13", "target": "HSPH1", "value": 0.2},
{"source": "HSPA13", "target": "TPR", "value": 0.2},
{"source": "HSPA13", "target": "HSPA4", "value": 0.2},
{"source": "HSPA13", "target": "STIP1", "value": 0.2},
{"source": "HSPA13", "target": "NUP37", "value": 0.2},
{"source": "HSPA13", "target": "HSPA8", "value": 0.2},
{"source": "HSPA13", "target": "HSPA9", "value": 0.2},
{"source": "HSPA13", "target": "NUP214", "value": 0.2},
{"source": "HSPA13", "target": "HSPA2", "value": 0.2},
{"source": "HSPA13", "target": "DNAJA2", "value": 0.2},
{"source": "HSPA13", "target": "HSPA1A", "value": 0.2},
{"source": "PCNA", "target": "RFC2", "value": 0.2},
{"source": "PCNA", "target": "MCM5", "value": 0.2},
{"source": "PCNA", "target": "POLR2C", "value": 0.2},
{"source": "PCNA", "target": "RPA3", "value": 0.2},
{"source": "PCNA", "target": "PRPF19", "value": 0.2},
{"source": "PCNA", "target": "MSH6", "value": 0.2},
{"source": "PCNA", "target": "RPA1", "value": 0.2},
{"source": "PCNA", "target": "DDB2", "value": 0.2},
{"source": "PCNA", "target": "MCM4", "value": 0.2},
{"source": "PCNA", "target": "MCM6", "value": 0.2},
{"source": "PCNA", "target": "MCM2", "value": 0.2},
{"source": "PCNA", "target": "ATM", "value": 0.2},
{"source": "PCNA", "target": "SMC2", "value": 0.2},
{"source": "PCNA", "target": "DDB1", "value": 0.2},
{"source": "PCNA", "target": "MCM7", "value": 0.2},
{"source": "PCNA", "target": "WDR48", "value": 0.2},
{"source": "PCNA", "target": "POLE", "value": 0.2},
{"source": "PCNA", "target": "TRIM25", "value": 0.2},
{"source": "PCNA", "target": "USP7", "value": 0.2},
{"source": "PCNA", "target": "SMC4", "value": 0.2},
{"source": "PCNA", "target": "XAB2", "value": 0.2},
{"source": "PCNA", "target": "PARP1", "value": 0.2},
{"source": "PCNA", "target": "BUB3", "value": 0.2},
{"source": "PCNA", "target": "RPA2", "value": 0.2},
{"source": "PCNA", "target": "RAD50", "value": 0.2},
{"source": "PCNA", "target": "POLA1", "value": 0.2},
{"source": "PCNA", "target": "DUT", "value": 0.2},
{"source": "PCNA", "target": "MYBBP1A", "value": 0.2},
{"source": "PCNA", "target": "TOP2A", "value": 0.2},
{"source": "PCNA", "target": "RBBP7", "value": 0.2},
{"source": "PCNA", "target": "POLR2A", "value": 0.2},
{"source": "PCNA", "target": "POLR2B", "value": 0.2},
{"source": "PCNA", "target": "UBC", "value": 0.2},
{"source": "PCNA", "target": "MCM3", "value": 0.2},
{"source": "HLA-DPB1", "target": "CTSD", "value": 0.2},
{"source": "HLA-DPB1", "target": "CLTA", "value": 0.2},
{"source": "HLA-DPB1", "target": "CANX", "value": 0.2},
{"source": "HLA-DPB1", "target": "TRIM21", "value": 0.2},
{"source": "HLA-DPB1", "target": "DYNC1LI2", "value": 0.2},
{"source": "HLA-DPB1", "target": "KIF11", "value": 0.2},
{"source": "HLA-DPB1", "target": "CAPZA1", "value": 0.2},
{"source": "HLA-DPB1", "target": "RAB7A", "value": 0.2},
{"source": "HLA-DPB1", "target": "ACTR1B", "value": 0.2},
{"source": "HLA-DPB1", "target": "AP2M1", "value": 0.2},
{"source": "HLA-DPB1", "target": "SEC23A", "value": 0.2},
{"source": "HLA-DPB1", "target": "KIF5B", "value": 0.2},
{"source": "HLA-DPB1", "target": "TRIM25", "value": 0.2},
{"source": "HLA-DPB1", "target": "AP1S1", "value": 0.2},
{"source": "HLA-DPB1", "target": "PTPN11", "value": 0.2},
{"source": "HLA-DPB1", "target": "TRIM29", "value": 0.2},
{"source": "HLA-DPB1", "target": "SEC24C", "value": 0.2},
{"source": "HLA-DPB1", "target": "CTSB", "value": 0.2},
{"source": "HLA-DPB1", "target": "DYNC1H1", "value": 0.2},
{"source": "HLA-DPB1", "target": "AP1B1", "value": 0.2},
{"source": "HLA-DPB1", "target": "HLA-DRB1", "value": 0.2},
{"source": "HLA-DPB1", "target": "DCTN1", "value": 0.2},
{"source": "HLA-DPB1", "target": "ACTR1A", "value": 0.2},
{"source": "HLA-DPB1", "target": "HLA-C", "value": 0.2},
{"source": "HLA-DPB1", "target": "HLA-E", "value": 0.2},
{"source": "HLA-DPB1", "target": "TRIM22", "value": 0.2},
{"source": "HLA-DPB1", "target": "SEC13", "value": 0.2},
{"source": "HLA-DPB1", "target": "SEC31A", "value": 0.2},
{"source": "HLA-DPB1", "target": "HLA-A", "value": 0.2},
{"source": "HLA-DPB1", "target": "DYNC1I2", "value": 0.2},
{"source": "HLA-DPB1", "target": "SEC24A", "value": 0.2},
{"source": "HLA-DPB1", "target": "SAR1B", "value": 0.2},
{"source": "HLA-DPB1", "target": "TRIM10", "value": 0.2},
{"source": "HLA-DPB1", "target": "CD44", "value": 0.2},
{"source": "HLA-DPB1", "target": "HLA-DMB", "value": 0.2},
{"source": "HLA-DPB1", "target": "HLA-B", "value": 0.2},
{"source": "HLA-DPB1", "target": "PTPRJ", "value": 0.2},
{"source": "HLA-DPB1", "target": "CAPZB", "value": 0.2},
{"source": "HLA-DPB1", "target": "CLTC", "value": 0.2},
{"source": "HLA-DPB1", "target": "SEC24B", "value": 0.2},
{"source": "HLA-DPB1", "target": "PTPRC", "value": 0.2},
{"source": "HLA-DPB1", "target": "SPTBN2", "value": 0.2},
{"source": "HLA-DPB1", "target": "B2M", "value": 0.2},
{"source": "HLA-DPB1", "target": "DCTN2", "value": 0.2},
{"source": "RPL26", "target": "MRPS10", "value": 0.2},
{"source": "RPL26", "target": "EEF1A2", "value": 0.2},
{"source": "RPL26", "target": "EIF3E", "value": 0.2},
{"source": "RPL26", "target": "FBL", "value": 0.2},
{"source": "RPL26", "target": "RPL18A", "value": 0.2},
{"source": "RPL26", "target": "RPS12", "value": 0.2},
{"source": "RPL26", "target": "SKIV2L2", "value": 0.2},
{"source": "RPL26", "target": "RPS16", "value": 0.2},
{"source": "RPL26", "target": "EIF2S3", "value": 0.2},
{"source": "RPL26", "target": "EIF3G", "value": 0.2},
{"source": "RPL26", "target": "NIP7", "value": 0.2},
{"source": "RPL26", "target": "EIF2S1", "value": 0.2},
{"source": "RPL26", "target": "CCT7", "value": 0.2},
{"source": "RPL26", "target": "PSMC1", "value": 0.2},
{"source": "RPL26", "target": "EXOSC7", "value": 0.2},
{"source": "RPL26", "target": "SRP14", "value": 0.2},
{"source": "RPL26", "target": "RPS3", "value": 0.2},
{"source": "RPL26", "target": "EIF5B", "value": 0.2},
{"source": "RPL26", "target": "RPS23", "value": 0.2},
{"source": "RPL26", "target": "RPL10L", "value": 0.2},
{"source": "RPL26", "target": "HINT1", "value": 0.2},
{"source": "RPL26", "target": "EEF2", "value": 0.2},
{"source": "RPL26", "target": "MRPL11", "value": 0.2},
{"source": "RPL26", "target": "RPL15", "value": 0.2},
{"source": "RPL26", "target": "RPL38", "value": 0.2},
{"source": "RPL26", "target": "PSMC5", "value": 0.2},
{"source": "RPL26", "target": "SRP68", "value": 0.2},
{"source": "RPL26", "target": "RPS15A", "value": 0.2},
{"source": "RPL26", "target": "RPLP2", "value": 0.2},
{"source": "RPL26", "target": "EXOSC3", "value": 0.2},
{"source": "RPL26", "target": "PLEC1", "value": 0.2},
{"source": "RPL26", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL26", "target": "RPS27L", "value": 0.2},
{"source": "RPL26", "target": "EEF1A1", "value": 0.2},
{"source": "RPL26", "target": "RPS7", "value": 0.2},
{"source": "RPL26", "target": "RPS21", "value": 0.2},
{"source": "RPL26", "target": "RPL3", "value": 0.2},
{"source": "RPL26", "target": "RPL21", "value": 0.2},
{"source": "RPL26", "target": "RPSA", "value": 0.2},
{"source": "RPL26", "target": "RPS26", "value": 0.2},
{"source": "RPL26", "target": "EIF3B", "value": 0.2},
{"source": "RPL26", "target": "RPL12", "value": 0.2},
{"source": "RPL26", "target": "RPS27", "value": 0.2},
{"source": "RPL26", "target": "EIF3A", "value": 0.2},
{"source": "RPL26", "target": "PDCD11", "value": 0.2},
{"source": "RPL26", "target": "RPL5", "value": 0.2},
{"source": "RPL26", "target": "PSMA7", "value": 0.2},
{"source": "RPL26", "target": "EXOSC1", "value": 0.2},
{"source": "RPL26", "target": "RPS6", "value": 0.2},
{"source": "RPL26", "target": "EXOSC8", "value": 0.2},
{"source": "RPL26", "target": "RPL13A", "value": 0.2},
{"source": "RPL26", "target": "CCT4", "value": 0.2},
{"source": "RPL26", "target": "RPL14", "value": 0.2},
{"source": "RPL26", "target": "RPS8", "value": 0.2},
{"source": "RPL26", "target": "RPL17", "value": 0.2},
{"source": "RPL26", "target": "RPL9", "value": 0.2},
{"source": "RPL26", "target": "RPL6", "value": 0.2},
{"source": "RPL26", "target": "RPS24", "value": 0.2},
{"source": "RPL26", "target": "RPL32", "value": 0.2},
{"source": "RPL26", "target": "RPL29", "value": 0.2},
{"source": "RPL26", "target": "RPL35A", "value": 0.2},
{"source": "RPL26", "target": "RPL23", "value": 0.2},
{"source": "RPL26", "target": "RPL30", "value": 0.2},
{"source": "RPL26", "target": "FAU", "value": 0.2},
{"source": "RPL26", "target": "EIF3M", "value": 0.2},
{"source": "RPL26", "target": "RPL28", "value": 0.2},
{"source": "RPL26", "target": "BOP1", "value": 0.2},
{"source": "RPL26", "target": "RPL27", "value": 0.2},
{"source": "RPL26", "target": "WDR18", "value": 0.2},
{"source": "RPL26", "target": "RPS15", "value": 0.2},
{"source": "RPL26", "target": "RPS5", "value": 0.2},
{"source": "RPL26", "target": "RPL36", "value": 0.2},
{"source": "FBRSL1", "target": "CSNK2A2", "value": 0.2},
{"source": "PSMB2", "target": "PSMA4", "value": 0.2},
{"source": "PSMB2", "target": "PSMC4", "value": 0.2},
{"source": "PSMB2", "target": "PSMD5", "value": 0.2},
{"source": "PSMB2", "target": "PSMD8", "value": 0.2},
{"source": "PSMB2", "target": "PSME2", "value": 0.2},
{"source": "PSMB2", "target": "PSMD10", "value": 0.2},
{"source": "PSMB2", "target": "PSMD7", "value": 0.2},
{"source": "PSMB2", "target": "PPP2CB", "value": 0.2},
{"source": "PSMB2", "target": "PSMA2", "value": 0.2},
{"source": "PSMB2", "target": "NFKB1", "value": 0.2},
{"source": "PSMB2", "target": "SKP1", "value": 0.2},
{"source": "PSMB2", "target": "PSMC1", "value": 0.2},
{"source": "PSMB2", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMB2", "target": "PSMA6", "value": 0.2},
{"source": "PSMB2", "target": "PSMD11", "value": 0.2},
{"source": "PSMB2", "target": "PSMB1", "value": 0.2},
{"source": "PSMB2", "target": "TCEB2", "value": 0.2},
{"source": "PSMB2", "target": "CUL3", "value": 0.2},
{"source": "PSMB2", "target": "PSMD3", "value": 0.2},
{"source": "PSMB2", "target": "PSMB4", "value": 0.2},
{"source": "PSMB2", "target": "PSMD1", "value": 0.2},
{"source": "PSMB2", "target": "PSMD2", "value": 0.2},
{"source": "PSMB2", "target": "PSMC5", "value": 0.2},
{"source": "PSMB2", "target": "PSMA8", "value": 0.2},
{"source": "PSMB2", "target": "PPP2R1B", "value": 0.2},
{"source": "PSMB2", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMB2", "target": "PSMD12", "value": 0.2},
{"source": "PSMB2", "target": "NF1", "value": 0.2},
{"source": "PSMB2", "target": "PSMB5", "value": 0.2},
{"source": "PSMB2", "target": "BUB3", "value": 0.2},
{"source": "PSMB2", "target": "PSMD4", "value": 0.2},
{"source": "PSMB2", "target": "PSMA7", "value": 0.2},
{"source": "PSMB2", "target": "HIVEP3", "value": 0.2},
{"source": "PSMB2", "target": "ITCH", "value": 0.2},
{"source": "PSMB2", "target": "PSMC6", "value": 0.2},
{"source": "PSMB2", "target": "UBC", "value": 0.2},
{"source": "PSMB2", "target": "PSMB8", "value": 0.2},
{"source": "PSMB2", "target": "PSMC3", "value": 0.2},
{"source": "PSMB2", "target": "PSMB3", "value": 0.2},
{"source": "PSMB2", "target": "WWP1", "value": 0.2},
{"source": "PSMB2", "target": "PSME1", "value": 0.2},
{"source": "PSMB2", "target": "TCEB1", "value": 0.2},
{"source": "PSMB2", "target": "PSMA1", "value": 0.2},
{"source": "PSMB2", "target": "PSMC2", "value": 0.2},
{"source": "PSMB2", "target": "RUNX3", "value": 0.2},
{"source": "CLTA", "target": "YKT6", "value": 0.2},
{"source": "CLTA", "target": "APOB", "value": 0.2},
{"source": "CLTA", "target": "VAMP4", "value": 0.2},
{"source": "CLTA", "target": "REPS1", "value": 0.2},
{"source": "CLTA", "target": "EHD2", "value": 0.2},
{"source": "CLTA", "target": "CLTC", "value": 0.2},
{"source": "CLTA", "target": "HGS", "value": 0.2},
{"source": "CLTA", "target": "PACSIN2", "value": 0.2},
{"source": "CLTA", "target": "ARPC2", "value": 0.2},
{"source": "CLTA", "target": "TFRC", "value": 0.2},
{"source": "CLTA", "target": "USO1", "value": 0.2},
{"source": "CLTA", "target": "AP1S1", "value": 0.2},
{"source": "CLTA", "target": "HLA-DRB1", "value": 0.2},
{"source": "CLTA", "target": "ARPC5", "value": 0.2},
{"source": "CLTA", "target": "AP1B1", "value": 0.2},
{"source": "CLTA", "target": "LDLR", "value": 0.2},
{"source": "CLTA", "target": "FZD2", "value": 0.2},
{"source": "CLTA", "target": "TGOLN2", "value": 0.2},
{"source": "CLTA", "target": "UBC", "value": 0.2},
{"source": "CLTA", "target": "PSMB4", "value": 0.2},
{"source": "CLTA", "target": "RAB5B", "value": 0.2},
{"source": "CLTA", "target": "AP2M1", "value": 0.2},
{"source": "CLTA", "target": "LDLRAP1", "value": 0.2},
{"source": "CLTA", "target": "EPN1", "value": 0.2},
{"source": "CLTA", "target": "FNBP1", "value": 0.2},
{"source": "CLTA", "target": "ARPC4", "value": 0.2},
{"source": "CLTA", "target": "ARPC1A", "value": 0.2},
{"source": "CLTA", "target": "HSPA8", "value": 0.2},
{"source": "CLTA", "target": "VAMP2", "value": 0.2},
{"source": "CLTA", "target": "CLTB", "value": 0.2},
{"source": "CLTA", "target": "KDELR1", "value": 0.2},
{"source": "CLTA", "target": "ACTR3", "value": 0.2},
{"source": "CLTA", "target": "RAB5C", "value": 0.2},
{"source": "CLTA", "target": "IGF2R", "value": 0.2},
{"source": "EEA1", "target": "CANX", "value": 0.2},
{"source": "EEA1", "target": "STX6", "value": 0.2},
{"source": "EEA1", "target": "SNX1", "value": 0.2},
{"source": "EEA1", "target": "RAB7A", "value": 0.2},
{"source": "EEA1", "target": "VPS35", "value": 0.2},
{"source": "EEA1", "target": "GOLGB1", "value": 0.2},
{"source": "EEA1", "target": "SNX27", "value": 0.2},
{"source": "EEA1", "target": "RAB5B", "value": 0.2},
{"source": "EEA1", "target": "CLTC", "value": 0.2},
{"source": "EEA1", "target": "IGF2R", "value": 0.2},
{"source": "EEA1", "target": "TFRC", "value": 0.2},
{"source": "EEA1", "target": "TGOLN2", "value": 0.2},
{"source": "EEA1", "target": "RAB5C", "value": 0.2},
{"source": "EEA1", "target": "LAMP1", "value": 0.2},
{"source": "CSNK2A2", "target": "HSP90AA1", "value": 0.2},
{"source": "CSNK2A2", "target": "PCGF3", "value": 0.2},
{"source": "CSNK2A2", "target": "SIN3A", "value": 0.2},
{"source": "CSNK2A2", "target": "SMC4", "value": 0.2},
{"source": "CSNK2A2", "target": "SUPT5H", "value": 0.2},
{"source": "CSNK2A2", "target": "NCAPD2", "value": 0.2},
{"source": "CSNK2A2", "target": "SMC2", "value": 0.2},
{"source": "FTH1", "target": "PYGM", "value": 0.2},
{"source": "FTH1", "target": "CTSD", "value": 0.2},
{"source": "FTH1", "target": "IGF2R", "value": 0.2},
{"source": "FTH1", "target": "AHNAK", "value": 0.2},
{"source": "FTH1", "target": "VAMP2", "value": 0.2},
{"source": "FTH1", "target": "HSPA8", "value": 0.2},
{"source": "FTH1", "target": "SLC3A2", "value": 0.2},
{"source": "FTH1", "target": "AP1S1", "value": 0.2},
{"source": "FTH1", "target": "B2M", "value": 0.2},
{"source": "FTH1", "target": "AP1B1", "value": 0.2},
{"source": "FTH1", "target": "RAB5C", "value": 0.2},
{"source": "FTH1", "target": "TFRC", "value": 0.2},
{"source": "FTH1", "target": "MAP3K11", "value": 0.2},
{"source": "FTH1", "target": "SF1", "value": 0.2},
{"source": "FTH1", "target": "TGOLN2", "value": 0.2},
{"source": "FTH1", "target": "FAU", "value": 0.2},
{"source": "FTH1", "target": "DBNL", "value": 0.2},
{"source": "RPL13A", "target": "MRPS10", "value": 0.2},
{"source": "RPL13A", "target": "PSMC4", "value": 0.2},
{"source": "RPL13A", "target": "EEF1A2", "value": 0.2},
{"source": "RPL13A", "target": "EIF3E", "value": 0.2},
{"source": "RPL13A", "target": "FBL", "value": 0.2},
{"source": "RPL13A", "target": "RPL18A", "value": 0.2},
{"source": "RPL13A", "target": "RPS12", "value": 0.2},
{"source": "RPL13A", "target": "SKIV2L2", "value": 0.2},
{"source": "RPL13A", "target": "RPS16", "value": 0.2},
{"source": "RPL13A", "target": "EIF2S3", "value": 0.2},
{"source": "RPL13A", "target": "EIF3G", "value": 0.2},
{"source": "RPL13A", "target": "EIF2S1", "value": 0.2},
{"source": "RPL13A", "target": "CCT7", "value": 0.2},
{"source": "RPL13A", "target": "PSMC1", "value": 0.2},
{"source": "RPL13A", "target": "EXOSC7", "value": 0.2},
{"source": "RPL13A", "target": "SRP14", "value": 0.2},
{"source": "RPL13A", "target": "RPS3", "value": 0.2},
{"source": "RPL13A", "target": "EIF5B", "value": 0.2},
{"source": "RPL13A", "target": "RPS23", "value": 0.2},
{"source": "RPL13A", "target": "RPL10L", "value": 0.2},
{"source": "RPL13A", "target": "EEF2", "value": 0.2},
{"source": "RPL13A", "target": "MRPL11", "value": 0.2},
{"source": "RPL13A", "target": "RPL15", "value": 0.2},
{"source": "RPL13A", "target": "RPL38", "value": 0.2},
{"source": "RPL13A", "target": "PSMC5", "value": 0.2},
{"source": "RPL13A", "target": "SRP68", "value": 0.2},
{"source": "RPL13A", "target": "RPS15A", "value": 0.2},
{"source": "RPL13A", "target": "RPLP2", "value": 0.2},
{"source": "RPL13A", "target": "EXOSC3", "value": 0.2},
{"source": "RPL13A", "target": "PLEC1", "value": 0.2},
{"source": "RPL13A", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL13A", "target": "RPS27L", "value": 0.2},
{"source": "RPL13A", "target": "EEF1A1", "value": 0.2},
{"source": "RPL13A", "target": "RPS7", "value": 0.2},
{"source": "RPL13A", "target": "RPS21", "value": 0.2},
{"source": "RPL13A", "target": "RPL3", "value": 0.2},
{"source": "RPL13A", "target": "RPL21", "value": 0.2},
{"source": "RPL13A", "target": "RPSA", "value": 0.2},
{"source": "RPL13A", "target": "RPS26", "value": 0.2},
{"source": "RPL13A", "target": "EIF3B", "value": 0.2},
{"source": "RPL13A", "target": "RPL12", "value": 0.2},
{"source": "RPL13A", "target": "RPS27", "value": 0.2},
{"source": "RPL13A", "target": "EIF3A", "value": 0.2},
{"source": "RPL13A", "target": "PDCD11", "value": 0.2},
{"source": "RPL13A", "target": "RPL5", "value": 0.2},
{"source": "RPL13A", "target": "EXOSC1", "value": 0.2},
{"source": "RPL13A", "target": "RPS6", "value": 0.2},
{"source": "RPL13A", "target": "EXOSC8", "value": 0.2},
{"source": "RPL13A", "target": "EIF3M", "value": 0.2},
{"source": "RPL13A", "target": "RPL32", "value": 0.2},
{"source": "RPL13A", "target": "CCT4", "value": 0.2},
{"source": "RPL13A", "target": "FAU", "value": 0.2},
{"source": "RPL13A", "target": "RPL30", "value": 0.2},
{"source": "RPL13A", "target": "BOP1", "value": 0.2},
{"source": "RPL13A", "target": "WDR18", "value": 0.2},
{"source": "RPL13A", "target": "B2M", "value": 0.2},
{"source": "RPL13A", "target": "RPL9", "value": 0.2},
{"source": "RPL13A", "target": "PSMC2", "value": 0.2},
{"source": "RPL13A", "target": "UBC", "value": 0.2},
{"source": "RPL13A", "target": "RPL27", "value": 0.2},
{"source": "RPL13A", "target": "RPL6", "value": 0.2},
{"source": "RPL13A", "target": "RPL28", "value": 0.2},
{"source": "RPL13A", "target": "RPL29", "value": 0.2},
{"source": "RPL13A", "target": "RPS5", "value": 0.2},
{"source": "RPL13A", "target": "RPL36", "value": 0.2},
{"source": "RPL13A", "target": "RPL14", "value": 0.2},
{"source": "RPL13A", "target": "RPS24", "value": 0.2},
{"source": "RPL13A", "target": "RPL35A", "value": 0.2},
{"source": "RPL13A", "target": "RPS8", "value": 0.2},
{"source": "RPL13A", "target": "RPS15", "value": 0.2},
{"source": "RPL13A", "target": "RPL23", "value": 0.2},
{"source": "RPL13A", "target": "RPL17", "value": 0.2},
{"source": "ACTR3", "target": "APOB", "value": 0.2},
{"source": "ACTR3", "target": "VAMP4", "value": 0.2},
{"source": "ACTR3", "target": "MYH2", "value": 0.2},
{"source": "ACTR3", "target": "ARPC1A", "value": 0.2},
{"source": "ACTR3", "target": "CAPZA1", "value": 0.2},
{"source": "ACTR3", "target": "UBC", "value": 0.2},
{"source": "ACTR3", "target": "FNBP1", "value": 0.2},
{"source": "ACTR3", "target": "PSMA7", "value": 0.2},
{"source": "ACTR3", "target": "REPS1", "value": 0.2},
{"source": "ACTR3", "target": "NCKAP1L", "value": 0.2},
{"source": "ACTR3", "target": "ARPC1B", "value": 0.2},
{"source": "ACTR3", "target": "HSPA8", "value": 0.2},
{"source": "ACTR3", "target": "CLTB", "value": 0.2},
{"source": "ACTR3", "target": "RAB5B", "value": 0.2},
{"source": "ACTR3", "target": "ARPC2", "value": 0.2},
{"source": "ACTR3", "target": "IGF2R", "value": 0.2},
{"source": "ACTR3", "target": "HGS", "value": 0.2},
{"source": "ACTR3", "target": "DBNL", "value": 0.2},
{"source": "ACTR3", "target": "ARPC4", "value": 0.2},
{"source": "ACTR3", "target": "PACSIN2", "value": 0.2},
{"source": "ACTR3", "target": "LDLR", "value": 0.2},
{"source": "ACTR3", "target": "AP2M1", "value": 0.2},
{"source": "ACTR3", "target": "MYO5A", "value": 0.2},
{"source": "ACTR3", "target": "FCGR2A", "value": 0.2},
{"source": "ACTR3", "target": "LDLRAP1", "value": 0.2},
{"source": "ACTR3", "target": "CAPZB", "value": 0.2},
{"source": "ACTR3", "target": "TFRC", "value": 0.2},
{"source": "ACTR3", "target": "RAB5C", "value": 0.2},
{"source": "ACTR3", "target": "VAMP2", "value": 0.2},
{"source": "ACTR3", "target": "ARPC5", "value": 0.2},
{"source": "ACTR3", "target": "CLTC", "value": 0.2},
{"source": "ACTR3", "target": "BAIAP2", "value": 0.2},
{"source": "ACTR3", "target": "TGOLN2", "value": 0.2},
{"source": "ACTR3", "target": "EPN1", "value": 0.2},
{"source": "ACTR3", "target": "WIPF1", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMA4", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMC4", "value": 0.2},
{"source": "PPP2R1B", "target": "ZW10", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD5", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD8", "value": 0.2},
{"source": "PPP2R1B", "target": "PSME2", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD10", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD7", "value": 0.2},
{"source": "PPP2R1B", "target": "PPP2CB", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMA2", "value": 0.2},
{"source": "PPP2R1B", "target": "SKP1", "value": 0.2},
{"source": "PPP2R1B", "target": "APOB", "value": 0.2},
{"source": "PPP2R1B", "target": "DYNC1LI2", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMC1", "value": 0.2},
{"source": "PPP2R1B", "target": "LRP6", "value": 0.2},
{"source": "PPP2R1B", "target": "PPP2R5A", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMA6", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD11", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMB1", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD3", "value": 0.2},
{"source": "PPP2R1B", "target": "RANBP2", "value": 0.2},
{"source": "PPP2R1B", "target": "FZD1", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMB4", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD1", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD2", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMC5", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMA8", "value": 0.2},
{"source": "PPP2R1B", "target": "PAFAH1B1", "value": 0.2},
{"source": "PPP2R1B", "target": "XPO1", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMB3", "value": 0.2},
{"source": "PPP2R1B", "target": "SEC13", "value": 0.2},
{"source": "PPP2R1B", "target": "MAPRE1", "value": 0.2},
{"source": "PPP2R1B", "target": "PPP1CC", "value": 0.2},
{"source": "PPP2R1B", "target": "RCC2", "value": 0.2},
{"source": "PPP2R1B", "target": "SMC1A", "value": 0.2},
{"source": "PPP2R1B", "target": "YES1", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD4", "value": 0.2},
{"source": "PPP2R1B", "target": "NUDC", "value": 0.2},
{"source": "PPP2R1B", "target": "FZD2", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMA1", "value": 0.2},
{"source": "PPP2R1B", "target": "PTPN11", "value": 0.2},
{"source": "PPP2R1B", "target": "UBC", "value": 0.2},
{"source": "PPP2R1B", "target": "RANGAP1", "value": 0.2},
{"source": "PPP2R1B", "target": "BUB3", "value": 0.2},
{"source": "PPP2R1B", "target": "INTS1", "value": 0.2},
{"source": "PPP2R1B", "target": "DYNC1H1", "value": 0.2},
{"source": "PPP2R1B", "target": "PPP2R1A", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMB8", "value": 0.2},
{"source": "PPP2R1B", "target": "NUP37", "value": 0.2},
{"source": "PPP2R1B", "target": "PSME1", "value": 0.2},
{"source": "PPP2R1B", "target": "CKAP5", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMC2", "value": 0.2},
{"source": "PPP2R1B", "target": "MAD1L1", "value": 0.2},
{"source": "PPP2R1B", "target": "DYNC1I2", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMC3", "value": 0.2},
{"source": "PPP2R1B", "target": "RPS27", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMD12", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMC6", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMA7", "value": 0.2},
{"source": "PPP2R1B", "target": "PSMB5", "value": 0.2},
{"source": "PPP2R1B", "target": "LYN", "value": 0.2},
{"source": "CD44", "target": "ABCG2", "value": 0.2},
{"source": "CD44", "target": "TRIM21", "value": 0.2},
{"source": "CD44", "target": "SLC9A1", "value": 0.2},
{"source": "CD44", "target": "NOTCH1", "value": 0.2},
{"source": "CD44", "target": "MET", "value": 0.2},
{"source": "CD44", "target": "TRIM25", "value": 0.2},
{"source": "CD44", "target": "BSG", "value": 0.2},
{"source": "CD44", "target": "ARHGEF1", "value": 0.2},
{"source": "CD44", "target": "TRIM29", "value": 0.2},
{"source": "CD44", "target": "HLA-DRB1", "value": 0.2},
{"source": "CD44", "target": "SRC", "value": 0.2},
{"source": "CD44", "target": "HLA-C", "value": 0.2},
{"source": "CD44", "target": "HLA-E", "value": 0.2},
{"source": "CD44", "target": "TRIM22", "value": 0.2},
{"source": "CD44", "target": "ITGB1", "value": 0.2},
{"source": "CD44", "target": "HLA-A", "value": 0.2},
{"source": "CD44", "target": "ITGA6", "value": 0.2},
{"source": "CD44", "target": "TRIM10", "value": 0.2},
{"source": "CD44", "target": "RHOA", "value": 0.2},
{"source": "CD44", "target": "HLA-B", "value": 0.2},
{"source": "CD44", "target": "B2M", "value": 0.2},
{"source": "CD44", "target": "PTPRC", "value": 0.2},
{"source": "MYL4", "target": "MYH1", "value": 0.2},
{"source": "MYL4", "target": "MYH2", "value": 0.2},
{"source": "MYL4", "target": "MYH4", "value": 0.2},
{"source": "MYL4", "target": "TNNT3", "value": 0.2},
{"source": "MYL4", "target": "MYL1", "value": 0.2},
{"source": "MYL4", "target": "TMOD3", "value": 0.2},
{"source": "MYL4", "target": "MYBPC1", "value": 0.2},
{"source": "MYL4", "target": "MYBPC2", "value": 0.2},
{"source": "MYL4", "target": "TPM3", "value": 0.2},
{"source": "MYL4", "target": "TTN", "value": 0.2},
{"source": "MYL4", "target": "ACTN3", "value": 0.2},
{"source": "MYL4", "target": "TNNC2", "value": 0.2},
{"source": "MYL4", "target": "MYH3", "value": 0.2},
{"source": "MYL4", "target": "TNNI2", "value": 0.2},
{"source": "MYL4", "target": "MYH11", "value": 0.2},
{"source": "MYL4", "target": "MYL3", "value": 0.2},
{"source": "MYL4", "target": "MYH14", "value": 0.2},
{"source": "MYL4", "target": "TPM2", "value": 0.2},
{"source": "MYL4", "target": "ACTN2", "value": 0.2},
{"source": "MYL4", "target": "DES", "value": 0.2},
{"source": "MYL4", "target": "MYH8", "value": 0.2},
{"source": "CTSB", "target": "CTSD", "value": 0.2},
{"source": "CTSB", "target": "LAMP1", "value": 0.2},
{"source": "CTSB", "target": "HLA-DRB1", "value": 0.2},
{"source": "LPGAT1", "target": "PPP2R5A", "value": 0.2},
{"source": "XPO1", "target": "ZW10", "value": 0.2},
{"source": "XPO1", "target": "PPP2CB", "value": 0.2},
{"source": "XPO1", "target": "NFKB1", "value": 0.2},
{"source": "XPO1", "target": "DYNC1LI2", "value": 0.2},
{"source": "XPO1", "target": "PPP2R5A", "value": 0.2},
{"source": "XPO1", "target": "YWHAE", "value": 0.2},
{"source": "XPO1", "target": "RPS3", "value": 0.2},
{"source": "XPO1", "target": "RANBP2", "value": 0.2},
{"source": "XPO1", "target": "KPNB1", "value": 0.2},
{"source": "XPO1", "target": "NUDC", "value": 0.2},
{"source": "XPO1", "target": "SMC1A", "value": 0.2},
{"source": "XPO1", "target": "PPP2R1A", "value": 0.2},
{"source": "XPO1", "target": "PPP1CC", "value": 0.2},
{"source": "XPO1", "target": "USP7", "value": 0.2},
{"source": "XPO1", "target": "DYNC1H1", "value": 0.2},
{"source": "XPO1", "target": "NUP214", "value": 0.2},
{"source": "XPO1", "target": "RPS27", "value": 0.2},
{"source": "XPO1", "target": "BUB3", "value": 0.2},
{"source": "XPO1", "target": "HDAC1", "value": 0.2},
{"source": "XPO1", "target": "RCC2", "value": 0.2},
{"source": "XPO1", "target": "MAPRE1", "value": 0.2},
{"source": "XPO1", "target": "SEC13", "value": 0.2},
{"source": "XPO1", "target": "CCT4", "value": 0.2},
{"source": "XPO1", "target": "DYNC1I2", "value": 0.2},
{"source": "XPO1", "target": "PAFAH1B1", "value": 0.2},
{"source": "XPO1", "target": "MAD1L1", "value": 0.2},
{"source": "XPO1", "target": "RANGAP1", "value": 0.2},
{"source": "XPO1", "target": "NUP37", "value": 0.2},
{"source": "XPO1", "target": "CLTC", "value": 0.2},
{"source": "XPO1", "target": "CKAP5", "value": 0.2},
{"source": "STBD1", "target": "ATP6AP2", "value": 0.2},
{"source": "STBD1", "target": "KCNAB2", "value": 0.2},
{"source": "STBD1", "target": "STOM", "value": 0.2},
{"source": "STBD1", "target": "ANO6", "value": 0.2},
{"source": "STBD1", "target": "CD47", "value": 0.2},
{"source": "STBD1", "target": "COPB1", "value": 0.2},
{"source": "STBD1", "target": "UBR4", "value": 0.2},
{"source": "STBD1", "target": "TSPAN14", "value": 0.2},
{"source": "STBD1", "target": "CYBA", "value": 0.2},
{"source": "STBD1", "target": "SERPINB6", "value": 0.2},
{"source": "STBD1", "target": "RAB14", "value": 0.2},
{"source": "STBD1", "target": "ITGB2", "value": 0.2},
{"source": "STBD1", "target": "SNAP25", "value": 0.2},
{"source": "CREB1", "target": "YY1", "value": 0.2},
{"source": "CREB1", "target": "CREBBP", "value": 0.2},
{"source": "CREB1", "target": "ATM", "value": 0.2},
{"source": "CREB1", "target": "PPP1CA", "value": 0.2},
{"source": "CREB1", "target": "PPP1CC", "value": 0.2},
{"source": "CREB1", "target": "RBPJ", "value": 0.2},
{"source": "CREB1", "target": "HDAC1", "value": 0.2},
{"source": "CREB1", "target": "HDAC2", "value": 0.2},
{"source": "CREB1", "target": "PDYN", "value": 0.2},
{"source": "CREB1", "target": "SHC1", "value": 0.2},
{"source": "CREB1", "target": "HMOX2", "value": 0.2},
{"source": "SAR1B", "target": "YKT6", "value": 0.2},
{"source": "SAR1B", "target": "APOB", "value": 0.2},
{"source": "SAR1B", "target": "CANX", "value": 0.2},
{"source": "SAR1B", "target": "TMED2", "value": 0.2},
{"source": "SAR1B", "target": "STX5", "value": 0.2},
{"source": "SAR1B", "target": "TMED10", "value": 0.2},
{"source": "SAR1B", "target": "SEC23A", "value": 0.2},
{"source": "SAR1B", "target": "RAB1B", "value": 0.2},
{"source": "SAR1B", "target": "SEC24C", "value": 0.2},
{"source": "SAR1B", "target": "HLA-DRB1", "value": 0.2},
{"source": "SAR1B", "target": "HLA-C", "value": 0.2},
{"source": "SAR1B", "target": "HLA-E", "value": 0.2},
{"source": "SAR1B", "target": "SEC13", "value": 0.2},
{"source": "SAR1B", "target": "SEC31A", "value": 0.2},
{"source": "SAR1B", "target": "HLA-A", "value": 0.2},
{"source": "SAR1B", "target": "SEC24A", "value": 0.2},
{"source": "SAR1B", "target": "SEC24B", "value": 0.2},
{"source": "SAR1B", "target": "B2M", "value": 0.2},
{"source": "SAR1B", "target": "HLA-B", "value": 0.2},
{"source": "SAR1B", "target": "RAB1A", "value": 0.2},
{"source": "RTN4", "target": "ARHGDIA", "value": 0.2},
{"source": "RTN4", "target": "MBP", "value": 0.2},
{"source": "RTN4", "target": "MAG", "value": 0.2},
{"source": "RTN4", "target": "RHOA", "value": 0.2},
{"source": "RTN4", "target": "EMG1", "value": 0.2},
{"source": "PCM1", "target": "YWHAE", "value": 0.2},
{"source": "PCM1", "target": "CEP72", "value": 0.2},
{"source": "PCM1", "target": "RAB8A", "value": 0.2},
{"source": "PCM1", "target": "PPP2R1A", "value": 0.2},
{"source": "PCM1", "target": "DYNC1H1", "value": 0.2},
{"source": "PCM1", "target": "MAPRE1", "value": 0.2},
{"source": "PCM1", "target": "HSP90AA1", "value": 0.2},
{"source": "PCM1", "target": "TUBB4B", "value": 0.2},
{"source": "PCM1", "target": "CDK5RAP2", "value": 0.2},
{"source": "PCM1", "target": "TCTN3", "value": 0.2},
{"source": "PCM1", "target": "TUBB", "value": 0.2},
{"source": "PCM1", "target": "PAFAH1B1", "value": 0.2},
{"source": "PCM1", "target": "NEDD1", "value": 0.2},
{"source": "PCM1", "target": "CKAP5", "value": 0.2},
{"source": "PCM1", "target": "DYNC1I2", "value": 0.2},
{"source": "PCM1", "target": "HAUS6", "value": 0.2},
{"source": "PCM1", "target": "KIF24", "value": 0.2},
{"source": "PCM1", "target": "DCTN2", "value": 0.2},
{"source": "PCM1", "target": "ACTR1A", "value": 0.2},
{"source": "PCM1", "target": "OFD1", "value": 0.2},
{"source": "PCM1", "target": "MKS1", "value": 0.2},
{"source": "SCAMP1", "target": "MLEC", "value": 0.2},
{"source": "SCAMP1", "target": "SNAP25", "value": 0.2},
{"source": "SCAMP1", "target": "CYBA", "value": 0.2},
{"source": "SCAMP1", "target": "SLC15A4", "value": 0.2},
{"source": "SCAMP1", "target": "STOM", "value": 0.2},
{"source": "SCAMP1", "target": "DEGS1", "value": 0.2},
{"source": "SCAMP1", "target": "HVCN1", "value": 0.2},
{"source": "SCAMP1", "target": "CD47", "value": 0.2},
{"source": "SCAMP1", "target": "UBR4", "value": 0.2},
{"source": "SCAMP1", "target": "KCNAB2", "value": 0.2},
{"source": "SCAMP1", "target": "MOSPD2", "value": 0.2},
{"source": "SCAMP1", "target": "ITGB2", "value": 0.2},
{"source": "SCAMP1", "target": "TSPAN14", "value": 0.2},
{"source": "SCAMP1", "target": "PTPRJ", "value": 0.2},
{"source": "SCAMP1", "target": "ANO6", "value": 0.2},
{"source": "SCAMP1", "target": "HMOX2", "value": 0.2},
{"source": "H2AFY2", "target": "MACROD1", "value": 0.2},
{"source": "H2AFY2", "target": "HDAC2", "value": 0.2},
{"source": "H2AFY2", "target": "HDAC1", "value": 0.2},
{"source": "C3", "target": "APOB", "value": 0.2},
{"source": "C3", "target": "SERPINC1", "value": 0.2},
{"source": "C3", "target": "TUBB", "value": 0.2},
{"source": "C3", "target": "S1PR2", "value": 0.2},
{"source": "C3", "target": "ADCY6", "value": 0.2},
{"source": "C3", "target": "GNAI2", "value": 0.2},
{"source": "C3", "target": "ITGB2", "value": 0.2},
{"source": "C3", "target": "CDH2", "value": 0.2},
{"source": "C3", "target": "PSMD1", "value": 0.2},
{"source": "C3", "target": "HSP90B1", "value": 0.2},
{"source": "C3", "target": "DYNC1H1", "value": 0.2},
{"source": "C3", "target": "CD81", "value": 0.2},
{"source": "C3", "target": "TGOLN2", "value": 0.2},
{"source": "C3", "target": "TUBB4B", "value": 0.2},
{"source": "C3", "target": "S1PR3", "value": 0.2},
{"source": "C3", "target": "ANXA1", "value": 0.2},
{"source": "C3", "target": "LPAR1", "value": 0.2},
{"source": "C3", "target": "P4HB", "value": 0.2},
{"source": "C3", "target": "ADCY9", "value": 0.2},
{"source": "C3", "target": "PDYN", "value": 0.2},
{"source": "MET", "target": "ITGA3", "value": 0.2},
{"source": "MET", "target": "CDH2", "value": 0.2},
{"source": "MET", "target": "KPNB1", "value": 0.2},
{"source": "MET", "target": "PTPN2", "value": 0.2},
{"source": "MET", "target": "SHC1", "value": 0.2},
{"source": "MET", "target": "UBC", "value": 0.2},
{"source": "MET", "target": "HGS", "value": 0.2},
{"source": "MET", "target": "PTPN11", "value": 0.2},
{"source": "MET", "target": "SRC", "value": 0.2},
{"source": "MET", "target": "JAK1", "value": 0.2},
{"source": "MET", "target": "LAMA3", "value": 0.2},
{"source": "MET", "target": "RHOA", "value": 0.2},
{"source": "MET", "target": "ITGA6", "value": 0.2},
{"source": "MET", "target": "ITGB1", "value": 0.2},
{"source": "MET", "target": "PLCG2", "value": 0.2},
{"source": "MET", "target": "HSP90AA1", "value": 0.2},
{"source": "MET", "target": "PTPRJ", "value": 0.2},
{"source": "RPL6", "target": "MRPS10", "value": 0.2},
{"source": "RPL6", "target": "EIF3E", "value": 0.2},
{"source": "RPL6", "target": "FBL", "value": 0.2},
{"source": "RPL6", "target": "RPL18A", "value": 0.2},
{"source": "RPL6", "target": "RPS12", "value": 0.2},
{"source": "RPL6", "target": "SKIV2L2", "value": 0.2},
{"source": "RPL6", "target": "RPS16", "value": 0.2},
{"source": "RPL6", "target": "EIF2S3", "value": 0.2},
{"source": "RPL6", "target": "EIF3G", "value": 0.2},
{"source": "RPL6", "target": "EIF2S1", "value": 0.2},
{"source": "RPL6", "target": "CCT7", "value": 0.2},
{"source": "RPL6", "target": "EXOSC7", "value": 0.2},
{"source": "RPL6", "target": "SRP14", "value": 0.2},
{"source": "RPL6", "target": "RPS3", "value": 0.2},
{"source": "RPL6", "target": "EIF5B", "value": 0.2},
{"source": "RPL6", "target": "KPNB1", "value": 0.2},
{"source": "RPL6", "target": "RPS23", "value": 0.2},
{"source": "RPL6", "target": "RPL10L", "value": 0.2},
{"source": "RPL6", "target": "EEF2", "value": 0.2},
{"source": "RPL6", "target": "MRPL11", "value": 0.2},
{"source": "RPL6", "target": "RPL15", "value": 0.2},
{"source": "RPL6", "target": "RPL38", "value": 0.2},
{"source": "RPL6", "target": "SRP68", "value": 0.2},
{"source": "RPL6", "target": "RPS15A", "value": 0.2},
{"source": "RPL6", "target": "RPLP2", "value": 0.2},
{"source": "RPL6", "target": "EXOSC3", "value": 0.2},
{"source": "RPL6", "target": "PLEC1", "value": 0.2},
{"source": "RPL6", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL6", "target": "RPS27L", "value": 0.2},
{"source": "RPL6", "target": "EEF1A1", "value": 0.2},
{"source": "RPL6", "target": "RPS7", "value": 0.2},
{"source": "RPL6", "target": "RPS21", "value": 0.2},
{"source": "RPL6", "target": "RPL3", "value": 0.2},
{"source": "RPL6", "target": "RPL21", "value": 0.2},
{"source": "RPL6", "target": "RPSA", "value": 0.2},
{"source": "RPL6", "target": "RPS26", "value": 0.2},
{"source": "RPL6", "target": "GTPBP4", "value": 0.2},
{"source": "RPL6", "target": "EIF3B", "value": 0.2},
{"source": "RPL6", "target": "RPL12", "value": 0.2},
{"source": "RPL6", "target": "RPS27", "value": 0.2},
{"source": "RPL6", "target": "EIF3A", "value": 0.2},
{"source": "RPL6", "target": "RPL5", "value": 0.2},
{"source": "RPL6", "target": "EXOSC1", "value": 0.2},
{"source": "RPL6", "target": "RPS6", "value": 0.2},
{"source": "RPL6", "target": "EXOSC8", "value": 0.2},
{"source": "RPL6", "target": "CCT4", "value": 0.2},
{"source": "RPL6", "target": "RPL14", "value": 0.2},
{"source": "RPL6", "target": "RPS8", "value": 0.2},
{"source": "RPL6", "target": "RPL17", "value": 0.2},
{"source": "RPL6", "target": "RPL9", "value": 0.2},
{"source": "RPL6", "target": "WDR18", "value": 0.2},
{"source": "RPL6", "target": "RPS5", "value": 0.2},
{"source": "RPL6", "target": "RPL32", "value": 0.2},
{"source": "RPL6", "target": "RPL29", "value": 0.2},
{"source": "RPL6", "target": "BOP1", "value": 0.2},
{"source": "RPL6", "target": "HSPA8", "value": 0.2},
{"source": "RPL6", "target": "RPL27", "value": 0.2},
{"source": "RPL6", "target": "RPS15", "value": 0.2},
{"source": "RPL6", "target": "UBC", "value": 0.2},
{"source": "RPL6", "target": "RPS24", "value": 0.2},
{"source": "RPL6", "target": "RPL23", "value": 0.2},
{"source": "RPL6", "target": "RPL36", "value": 0.2},
{"source": "RPL6", "target": "FAU", "value": 0.2},
{"source": "RPL6", "target": "RPL35A", "value": 0.2},
{"source": "RPL6", "target": "RPL30", "value": 0.2},
{"source": "RPL6", "target": "EIF3M", "value": 0.2},
{"source": "RPL6", "target": "RPL28", "value": 0.2},
{"source": "CFL1", "target": "ENO1", "value": 0.2},
{"source": "CFL1", "target": "ARPC1A", "value": 0.2},
{"source": "CFL1", "target": "YWHAE", "value": 0.2},
{"source": "CFL1", "target": "ARHGDIA", "value": 0.2},
{"source": "CFL1", "target": "HSP90AA1", "value": 0.2},
{"source": "CFL1", "target": "LIMK1", "value": 0.2},
{"source": "CFL1", "target": "ACTA1", "value": 0.2},
{"source": "CFL1", "target": "HSP90AB1", "value": 0.2},
{"source": "CFL1", "target": "SRC", "value": 0.2},
{"source": "CFL1", "target": "RHOA", "value": 0.2},
{"source": "CFL1", "target": "CAPZB", "value": 0.2},
{"source": "CFL1", "target": "DBNL", "value": 0.2},
{"source": "GRWD1", "target": "FBL", "value": 0.2},
{"source": "GRWD1", "target": "KRR1", "value": 0.2},
{"source": "GRWD1", "target": "BYSL", "value": 0.2},
{"source": "GRWD1", "target": "SKIV2L2", "value": 0.2},
{"source": "GRWD1", "target": "RRP9", "value": 0.2},
{"source": "GRWD1", "target": "RPL3", "value": 0.2},
{"source": "GRWD1", "target": "EIF3B", "value": 0.2},
{"source": "GRWD1", "target": "WDR36", "value": 0.2},
{"source": "GRWD1", "target": "RRS1", "value": 0.2},
{"source": "GRWD1", "target": "GTPBP4", "value": 0.2},
{"source": "GRWD1", "target": "WDR18", "value": 0.2},
{"source": "GRWD1", "target": "RPS26", "value": 0.2},
{"source": "GRWD1", "target": "NOP14", "value": 0.2},
{"source": "GRWD1", "target": "NAT10", "value": 0.2},
{"source": "GRWD1", "target": "DDX18", "value": 0.2},
{"source": "GRWD1", "target": "BOP1", "value": 0.2},
{"source": "GRWD1", "target": "MYBBP1A", "value": 0.2},
{"source": "GRWD1", "target": "RBM19", "value": 0.2},
{"source": "GRWD1", "target": "NOP58", "value": 0.2},
{"source": "GRWD1", "target": "EMG1", "value": 0.2},
{"source": "GRWD1", "target": "KRI1", "value": 0.2},
{"source": "GRWD1", "target": "POLR1B", "value": 0.2},
{"source": "GRWD1", "target": "DHX15", "value": 0.2},
{"source": "GRWD1", "target": "NIP7", "value": 0.2},
{"source": "GRWD1", "target": "UTP15", "value": 0.2},
{"source": "GRWD1", "target": "DDX10", "value": 0.2},
{"source": "GRWD1", "target": "TSR1", "value": 0.2},
{"source": "GRWD1", "target": "PWP1", "value": 0.2},
{"source": "GRWD1", "target": "PDCD11", "value": 0.2},
{"source": "GRWD1", "target": "RPF2", "value": 0.2},
{"source": "GRWD1", "target": "NOC3L", "value": 0.2},
{"source": "RPL32", "target": "MRPS10", "value": 0.2},
{"source": "RPL32", "target": "EEF1A2", "value": 0.2},
{"source": "RPL32", "target": "EIF3E", "value": 0.2},
{"source": "RPL32", "target": "RPL18A", "value": 0.2},
{"source": "RPL32", "target": "RPS12", "value": 0.2},
{"source": "RPL32", "target": "SKIV2L2", "value": 0.2},
{"source": "RPL32", "target": "RPS16", "value": 0.2},
{"source": "RPL32", "target": "EIF2S3", "value": 0.2},
{"source": "RPL32", "target": "EIF3G", "value": 0.2},
{"source": "RPL32", "target": "NIP7", "value": 0.2},
{"source": "RPL32", "target": "EIF2S1", "value": 0.2},
{"source": "RPL32", "target": "EXOSC7", "value": 0.2},
{"source": "RPL32", "target": "SRP14", "value": 0.2},
{"source": "RPL32", "target": "RPS3", "value": 0.2},
{"source": "RPL32", "target": "EIF5B", "value": 0.2},
{"source": "RPL32", "target": "RPS23", "value": 0.2},
{"source": "RPL32", "target": "RPL10L", "value": 0.2},
{"source": "RPL32", "target": "EEF2", "value": 0.2},
{"source": "RPL32", "target": "MRPL11", "value": 0.2},
{"source": "RPL32", "target": "RPL15", "value": 0.2},
{"source": "RPL32", "target": "RPL38", "value": 0.2},
{"source": "RPL32", "target": "SRP68", "value": 0.2},
{"source": "RPL32", "target": "RPS15A", "value": 0.2},
{"source": "RPL32", "target": "RRS1", "value": 0.2},
{"source": "RPL32", "target": "RPLP2", "value": 0.2},
{"source": "RPL32", "target": "EXOSC3", "value": 0.2},
{"source": "RPL32", "target": "PLEC1", "value": 0.2},
{"source": "RPL32", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL32", "target": "RPS27L", "value": 0.2},
{"source": "RPL32", "target": "HSP90AA1", "value": 0.2},
{"source": "RPL32", "target": "EEF1A1", "value": 0.2},
{"source": "RPL32", "target": "RPS7", "value": 0.2},
{"source": "RPL32", "target": "RPS21", "value": 0.2},
{"source": "RPL32", "target": "RPL3", "value": 0.2},
{"source": "RPL32", "target": "RPL21", "value": 0.2},
{"source": "RPL32", "target": "RPSA", "value": 0.2},
{"source": "RPL32", "target": "RPS26", "value": 0.2},
{"source": "RPL32", "target": "EIF3B", "value": 0.2},
{"source": "RPL32", "target": "RPL12", "value": 0.2},
{"source": "RPL32", "target": "RPS27", "value": 0.2},
{"source": "RPL32", "target": "EIF3A", "value": 0.2},
{"source": "RPL32", "target": "RPL5", "value": 0.2},
{"source": "RPL32", "target": "EXOSC1", "value": 0.2},
{"source": "RPL32", "target": "HSP90AB1", "value": 0.2},
{"source": "RPL32", "target": "RPS6", "value": 0.2},
{"source": "RPL32", "target": "EXOSC8", "value": 0.2},
{"source": "RPL32", "target": "RPL14", "value": 0.2},
{"source": "RPL32", "target": "RPS8", "value": 0.2},
{"source": "RPL32", "target": "RPL17", "value": 0.2},
{"source": "RPL32", "target": "RPL9", "value": 0.2},
{"source": "RPL32", "target": "RPF2", "value": 0.2},
{"source": "RPL32", "target": "RPS24", "value": 0.2},
{"source": "RPL32", "target": "RPL35A", "value": 0.2},
{"source": "RPL32", "target": "RPL27", "value": 0.2},
{"source": "RPL32", "target": "RPS15", "value": 0.2},
{"source": "RPL32", "target": "RPL29", "value": 0.2},
{"source": "RPL32", "target": "RPL30", "value": 0.2},
{"source": "RPL32", "target": "RPL23", "value": 0.2},
{"source": "RPL32", "target": "FAU", "value": 0.2},
{"source": "RPL32", "target": "RPL28", "value": 0.2},
{"source": "RPL32", "target": "UBC", "value": 0.2},
{"source": "RPL32", "target": "WDR18", "value": 0.2},
{"source": "RPL32", "target": "RPS5", "value": 0.2},
{"source": "RPL32", "target": "BOP1", "value": 0.2},
{"source": "RPL32", "target": "EIF3M", "value": 0.2},
{"source": "RPL32", "target": "RPL36", "value": 0.2},
{"source": "SEC24B", "target": "BET1", "value": 0.2},
{"source": "SEC24B", "target": "YKT6", "value": 0.2},
{"source": "SEC24B", "target": "CANX", "value": 0.2},
{"source": "SEC24B", "target": "COPB1", "value": 0.2},
{"source": "SEC24B", "target": "TMED2", "value": 0.2},
{"source": "SEC24B", "target": "COPE", "value": 0.2},
{"source": "SEC24B", "target": "ARCN1", "value": 0.2},
{"source": "SEC24B", "target": "AP2M1", "value": 0.2},
{"source": "SEC24B", "target": "STX5", "value": 0.2},
{"source": "SEC24B", "target": "TMED10", "value": 0.2},
{"source": "SEC24B", "target": "SEC23A", "value": 0.2},
{"source": "SEC24B", "target": "RAB1B", "value": 0.2},
{"source": "SEC24B", "target": "COPG1", "value": 0.2},
{"source": "SEC24B", "target": "COPB2", "value": 0.2},
{"source": "SEC24B", "target": "AP1S1", "value": 0.2},
{"source": "SEC24B", "target": "SEC24C", "value": 0.2},
{"source": "SEC24B", "target": "HLA-DRB1", "value": 0.2},
{"source": "SEC24B", "target": "HLA-C", "value": 0.2},
{"source": "SEC24B", "target": "HLA-E", "value": 0.2},
{"source": "SEC24B", "target": "SEC13", "value": 0.2},
{"source": "SEC24B", "target": "SEC31A", "value": 0.2},
{"source": "SEC24B", "target": "HLA-A", "value": 0.2},
{"source": "SEC24B", "target": "SEC24A", "value": 0.2},
{"source": "SEC24B", "target": "RAB1A", "value": 0.2},
{"source": "SEC24B", "target": "HLA-B", "value": 0.2},
{"source": "SEC24B", "target": "COPG2", "value": 0.2},
{"source": "SEC24B", "target": "B2M", "value": 0.2},
{"source": "SEC24B", "target": "USO1", "value": 0.2},
{"source": "SEC24B", "target": "COPZ1", "value": 0.2},
{"source": "EBF1", "target": "CREBBP", "value": 0.2},
{"source": "EBF1", "target": "THRAP3", "value": 0.2},
{"source": "EBF1", "target": "FAM120B", "value": 0.2},
{"source": "EBF1", "target": "NCOA3", "value": 0.2},
{"source": "JAK1", "target": "STAT6", "value": 0.2},
{"source": "JAK1", "target": "MAP3K11", "value": 0.2},
{"source": "JAK1", "target": "PTPN2", "value": 0.2},
{"source": "JAK1", "target": "TRIM25", "value": 0.2},
{"source": "JAK1", "target": "HSP90AA1", "value": 0.2},
{"source": "JAK1", "target": "PTPN11", "value": 0.2},
{"source": "JAK1", "target": "RHOA", "value": 0.2},
{"source": "JAK1", "target": "CNTFR", "value": 0.2},
{"source": "JAK1", "target": "SHC1", "value": 0.2},
{"source": "JAK1", "target": "SRC", "value": 0.2},
{"source": "JAK1", "target": "IL6ST", "value": 0.2},
{"source": "EIF3A", "target": "EIF3E", "value": 0.2},
{"source": "EIF3A", "target": "RPL18A", "value": 0.2},
{"source": "EIF3A", "target": "RPS12", "value": 0.2},
{"source": "EIF3A", "target": "RPS16", "value": 0.2},
{"source": "EIF3A", "target": "EIF2S3", "value": 0.2},
{"source": "EIF3A", "target": "EIF3G", "value": 0.2},
{"source": "EIF3A", "target": "EIF2S1", "value": 0.2},
{"source": "EIF3A", "target": "NOP58", "value": 0.2},
{"source": "EIF3A", "target": "RPS3", "value": 0.2},
{"source": "EIF3A", "target": "EIF5B", "value": 0.2},
{"source": "EIF3A", "target": "RPS23", "value": 0.2},
{"source": "EIF3A", "target": "RPL10L", "value": 0.2},
{"source": "EIF3A", "target": "RPL15", "value": 0.2},
{"source": "EIF3A", "target": "RPL38", "value": 0.2},
{"source": "EIF3A", "target": "RPS15A", "value": 0.2},
{"source": "EIF3A", "target": "RPLP2", "value": 0.2},
{"source": "EIF3A", "target": "PLEC1", "value": 0.2},
{"source": "EIF3A", "target": "RPS27L", "value": 0.2},
{"source": "EIF3A", "target": "RPS7", "value": 0.2},
{"source": "EIF3A", "target": "RPS21", "value": 0.2},
{"source": "EIF3A", "target": "RPL3", "value": 0.2},
{"source": "EIF3A", "target": "RPL21", "value": 0.2},
{"source": "EIF3A", "target": "RPSA", "value": 0.2},
{"source": "EIF3A", "target": "RPS26", "value": 0.2},
{"source": "EIF3A", "target": "GTPBP4", "value": 0.2},
{"source": "EIF3A", "target": "EIF3B", "value": 0.2},
{"source": "EIF3A", "target": "RPL12", "value": 0.2},
{"source": "EIF3A", "target": "RPS27", "value": 0.2},
{"source": "EIF3A", "target": "RPS8", "value": 0.2},
{"source": "EIF3A", "target": "RPS6", "value": 0.2},
{"source": "EIF3A", "target": "RPL9", "value": 0.2},
{"source": "EIF3A", "target": "RPL35A", "value": 0.2},
{"source": "EIF3A", "target": "RPL14", "value": 0.2},
{"source": "EIF3A", "target": "RPS24", "value": 0.2},
{"source": "EIF3A", "target": "RPL17", "value": 0.2},
{"source": "EIF3A", "target": "BOP1", "value": 0.2},
{"source": "EIF3A", "target": "EIF3M", "value": 0.2},
{"source": "EIF3A", "target": "RPL5", "value": 0.2},
{"source": "EIF3A", "target": "RPS15", "value": 0.2},
{"source": "EIF3A", "target": "RPS5", "value": 0.2},
{"source": "EIF3A", "target": "RPL29", "value": 0.2},
{"source": "EIF3A", "target": "RPL23", "value": 0.2},
{"source": "EIF3A", "target": "RPL30", "value": 0.2},
{"source": "EIF3A", "target": "FAU", "value": 0.2},
{"source": "EIF3A", "target": "RPL28", "value": 0.2},
{"source": "EIF3A", "target": "RPL36", "value": 0.2},
{"source": "EIF3A", "target": "RPL27", "value": 0.2},
{"source": "ABCG2", "target": "SLC2A9", "value": 0.2},
{"source": "PSMD3", "target": "PSMA4", "value": 0.2},
{"source": "PSMD3", "target": "PSMC4", "value": 0.2},
{"source": "PSMD3", "target": "PSMD5", "value": 0.2},
{"source": "PSMD3", "target": "PSMD8", "value": 0.2},
{"source": "PSMD3", "target": "PSME2", "value": 0.2},
{"source": "PSMD3", "target": "PSMD10", "value": 0.2},
{"source": "PSMD3", "target": "PSMD7", "value": 0.2},
{"source": "PSMD3", "target": "PPP2CB", "value": 0.2},
{"source": "PSMD3", "target": "PSMA2", "value": 0.2},
{"source": "PSMD3", "target": "NFKB1", "value": 0.2},
{"source": "PSMD3", "target": "SKP1", "value": 0.2},
{"source": "PSMD3", "target": "PSMC1", "value": 0.2},
{"source": "PSMD3", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMD3", "target": "PSMA6", "value": 0.2},
{"source": "PSMD3", "target": "PSMD11", "value": 0.2},
{"source": "PSMD3", "target": "PSMB1", "value": 0.2},
{"source": "PSMD3", "target": "TCEB2", "value": 0.2},
{"source": "PSMD3", "target": "CUL3", "value": 0.2},
{"source": "PSMD3", "target": "HIVEP3", "value": 0.2},
{"source": "PSMD3", "target": "PSMA8", "value": 0.2},
{"source": "PSMD3", "target": "PSMC5", "value": 0.2},
{"source": "PSMD3", "target": "PSMC2", "value": 0.2},
{"source": "PSMD3", "target": "PSMB4", "value": 0.2},
{"source": "PSMD3", "target": "NF1", "value": 0.2},
{"source": "PSMD3", "target": "RUNX3", "value": 0.2},
{"source": "PSMD3", "target": "PSMB5", "value": 0.2},
{"source": "PSMD3", "target": "PSMC3", "value": 0.2},
{"source": "PSMD3", "target": "UBC", "value": 0.2},
{"source": "PSMD3", "target": "ITCH", "value": 0.2},
{"source": "PSMD3", "target": "PSMB8", "value": 0.2},
{"source": "PSMD3", "target": "PSMA7", "value": 0.2},
{"source": "PSMD3", "target": "PSMC6", "value": 0.2},
{"source": "PSMD3", "target": "TCEB1", "value": 0.2},
{"source": "PSMD3", "target": "PSMA1", "value": 0.2},
{"source": "PSMD3", "target": "PSMD2", "value": 0.2},
{"source": "PSMD3", "target": "PSMD4", "value": 0.2},
{"source": "PSMD3", "target": "WWP1", "value": 0.2},
{"source": "PSMD3", "target": "PSMB3", "value": 0.2},
{"source": "PSMD3", "target": "PSME1", "value": 0.2},
{"source": "PSMD3", "target": "PSMD1", "value": 0.2},
{"source": "PSMD3", "target": "PSMD12", "value": 0.2},
{"source": "PSMD3", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD3", "target": "BUB3", "value": 0.2},
{"source": "PSMD5", "target": "PSMA4", "value": 0.2},
{"source": "PSMD5", "target": "PSMC4", "value": 0.2},
{"source": "PSMD5", "target": "PPP2CB", "value": 0.2},
{"source": "PSMD5", "target": "PSMD1", "value": 0.2},
{"source": "PSMD5", "target": "PSMA1", "value": 0.2},
{"source": "PSMD5", "target": "TCEB2", "value": 0.2},
{"source": "PSMD5", "target": "WWP1", "value": 0.2},
{"source": "PSMD5", "target": "PSMC1", "value": 0.2},
{"source": "PSMD5", "target": "PSMD11", "value": 0.2},
{"source": "PSMD5", "target": "PSMC2", "value": 0.2},
{"source": "PSMD5", "target": "CUL3", "value": 0.2},
{"source": "PSMD5", "target": "NFKB1", "value": 0.2},
{"source": "PSMD5", "target": "PSMC5", "value": 0.2},
{"source": "PSMD5", "target": "HIVEP3", "value": 0.2},
{"source": "PSMD5", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD5", "target": "PSME1", "value": 0.2},
{"source": "PSMD5", "target": "PSMC3", "value": 0.2},
{"source": "PSMD5", "target": "PSMD7", "value": 0.2},
{"source": "PSMD5", "target": "PSMA7", "value": 0.2},
{"source": "PSMD5", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMD5", "target": "PSMB8", "value": 0.2},
{"source": "PSMD5", "target": "ITCH", "value": 0.2},
{"source": "PSMD5", "target": "PSMB1", "value": 0.2},
{"source": "PSMD5", "target": "PSMD8", "value": 0.2},
{"source": "PSMD5", "target": "PSMC6", "value": 0.2},
{"source": "PSMD5", "target": "NF1", "value": 0.2},
{"source": "PSMD5", "target": "RUNX3", "value": 0.2},
{"source": "PSMD5", "target": "BUB3", "value": 0.2},
{"source": "PSMD5", "target": "PSMA2", "value": 0.2},
{"source": "PSMD5", "target": "PSMD4", "value": 0.2},
{"source": "PSMD5", "target": "PSME2", "value": 0.2},
{"source": "PSMD5", "target": "UBC", "value": 0.2},
{"source": "PSMD5", "target": "SKP1", "value": 0.2},
{"source": "PSMD5", "target": "PSMA6", "value": 0.2},
{"source": "PSMD5", "target": "PSMD10", "value": 0.2},
{"source": "PSMD5", "target": "PSMA8", "value": 0.2},
{"source": "PSMD5", "target": "PSMB4", "value": 0.2},
{"source": "PSMD5", "target": "PSMD2", "value": 0.2},
{"source": "PSMD5", "target": "PSMB3", "value": 0.2},
{"source": "PSMD5", "target": "PSMD12", "value": 0.2},
{"source": "PSMD5", "target": "PSMB5", "value": 0.2},
{"source": "PSMD5", "target": "TCEB1", "value": 0.2},
{"source": "TCEB2", "target": "PSMA4", "value": 0.2},
{"source": "TCEB2", "target": "PSMC4", "value": 0.2},
{"source": "TCEB2", "target": "PSMD8", "value": 0.2},
{"source": "TCEB2", "target": "PSME2", "value": 0.2},
{"source": "TCEB2", "target": "PSMD10", "value": 0.2},
{"source": "TCEB2", "target": "POLR2C", "value": 0.2},
{"source": "TCEB2", "target": "PSMD7", "value": 0.2},
{"source": "TCEB2", "target": "STUB1", "value": 0.2},
{"source": "TCEB2", "target": "PSMA2", "value": 0.2},
{"source": "TCEB2", "target": "SKP1", "value": 0.2},
{"source": "TCEB2", "target": "UBE3A", "value": 0.2},
{"source": "TCEB2", "target": "TRIM21", "value": 0.2},
{"source": "TCEB2", "target": "PSMC1", "value": 0.2},
{"source": "TCEB2", "target": "PSMA6", "value": 0.2},
{"source": "TCEB2", "target": "PSMD11", "value": 0.2},
{"source": "TCEB2", "target": "PSMB1", "value": 0.2},
{"source": "TCEB2", "target": "TRIM37", "value": 0.2},
{"source": "TCEB2", "target": "PSMB4", "value": 0.2},
{"source": "TCEB2", "target": "WWP1", "value": 0.2},
{"source": "TCEB2", "target": "PSMC6", "value": 0.2},
{"source": "TCEB2", "target": "PSMB8", "value": 0.2},
{"source": "TCEB2", "target": "NEDD4", "value": 0.2},
{"source": "TCEB2", "target": "PSMB3", "value": 0.2},
{"source": "TCEB2", "target": "PSME1", "value": 0.2},
{"source": "TCEB2", "target": "PARK2", "value": 0.2},
{"source": "TCEB2", "target": "PSMB5", "value": 0.2},
{"source": "TCEB2", "target": "KBTBD6", "value": 0.2},
{"source": "TCEB2", "target": "CUL5", "value": 0.2},
{"source": "TCEB2", "target": "PSMC5", "value": 0.2},
{"source": "TCEB2", "target": "UBA1", "value": 0.2},
{"source": "TCEB2", "target": "POLR2A", "value": 0.2},
{"source": "TCEB2", "target": "CCNK", "value": 0.2},
{"source": "TCEB2", "target": "GTF2F2", "value": 0.2},
{"source": "TCEB2", "target": "ATM", "value": 0.2},
{"source": "TCEB2", "target": "HERC1", "value": 0.2},
{"source": "TCEB2", "target": "POLR2B", "value": 0.2},
{"source": "TCEB2", "target": "RNF130", "value": 0.2},
{"source": "TCEB2", "target": "PSMC3", "value": 0.2},
{"source": "TCEB2", "target": "PSMD2", "value": 0.2},
{"source": "TCEB2", "target": "HUWE1", "value": 0.2},
{"source": "TCEB2", "target": "RNF220", "value": 0.2},
{"source": "TCEB2", "target": "UBR2", "value": 0.2},
{"source": "TCEB2", "target": "CUL3", "value": 0.2},
{"source": "TCEB2", "target": "UFL1", "value": 0.2},
{"source": "TCEB2", "target": "PSMD1", "value": 0.2},
{"source": "TCEB2", "target": "HSP90AA1", "value": 0.2},
{"source": "TCEB2", "target": "PSMA7", "value": 0.2},
{"source": "TCEB2", "target": "KBTBD7", "value": 0.2},
{"source": "TCEB2", "target": "SUPT5H", "value": 0.2},
{"source": "TCEB2", "target": "FBXL4", "value": 0.2},
{"source": "TCEB2", "target": "UBR4", "value": 0.2},
{"source": "TCEB2", "target": "PSMD4", "value": 0.2},
{"source": "TCEB2", "target": "UBC", "value": 0.2},
{"source": "TCEB2", "target": "ITCH", "value": 0.2},
{"source": "TCEB2", "target": "TCEB1", "value": 0.2},
{"source": "TCEB2", "target": "PSMC2", "value": 0.2},
{"source": "TCEB2", "target": "PSMD12", "value": 0.2},
{"source": "TCEB2", "target": "UBE3C", "value": 0.2},
{"source": "TCEB2", "target": "UBE2J1", "value": 0.2},
{"source": "TCEB2", "target": "PSMA1", "value": 0.2},
{"source": "TCEB2", "target": "PSMA8", "value": 0.2},
{"source": "TCEB2", "target": "MGRN1", "value": 0.2},
{"source": "RANBP2", "target": "ZW10", "value": 0.2},
{"source": "RANBP2", "target": "PPP2CB", "value": 0.2},
{"source": "RANBP2", "target": "DYNC1LI2", "value": 0.2},
{"source": "RANBP2", "target": "PPP2R5A", "value": 0.2},
{"source": "RANBP2", "target": "NUDC", "value": 0.2},
{"source": "RANBP2", "target": "HSPA1A", "value": 0.2},
{"source": "RANBP2", "target": "NUP37", "value": 0.2},
{"source": "RANBP2", "target": "PAFAH1B1", "value": 0.2},
{"source": "RANBP2", "target": "U2AF2", "value": 0.2},
{"source": "RANBP2", "target": "KIF5B", "value": 0.2},
{"source": "RANBP2", "target": "NUP214", "value": 0.2},
{"source": "RANBP2", "target": "PPP2R1A", "value": 0.2},
{"source": "RANBP2", "target": "MAPRE1", "value": 0.2},
{"source": "RANBP2", "target": "B2M", "value": 0.2},
{"source": "RANBP2", "target": "HDAC1", "value": 0.2},
{"source": "RANBP2", "target": "SEC13", "value": 0.2},
{"source": "RANBP2", "target": "HSPA4", "value": 0.2},
{"source": "RANBP2", "target": "RPS27", "value": 0.2},
{"source": "RANBP2", "target": "PPP1CC", "value": 0.2},
{"source": "RANBP2", "target": "HSPA5", "value": 0.2},
{"source": "RANBP2", "target": "DYNC1H1", "value": 0.2},
{"source": "RANBP2", "target": "CPSF2", "value": 0.2},
{"source": "RANBP2", "target": "RANGAP1", "value": 0.2},
{"source": "RANBP2", "target": "TPR", "value": 0.2},
{"source": "RANBP2", "target": "HSPA8", "value": 0.2},
{"source": "RANBP2", "target": "RCC2", "value": 0.2},
{"source": "RANBP2", "target": "KPNB1", "value": 0.2},
{"source": "RANBP2", "target": "MAD1L1", "value": 0.2},
{"source": "RANBP2", "target": "BUB3", "value": 0.2},
{"source": "RANBP2", "target": "HSPA2", "value": 0.2},
{"source": "RANBP2", "target": "SMC1A", "value": 0.2},
{"source": "RANBP2", "target": "CKAP5", "value": 0.2},
{"source": "RANBP2", "target": "DYNC1I2", "value": 0.2},
{"source": "RANBP2", "target": "HSPA9", "value": 0.2},
{"source": "RANBP2", "target": "TOP2A", "value": 0.2},
{"source": "ITGA6", "target": "ITGA3", "value": 0.2},
{"source": "ITGA6", "target": "YWHAE", "value": 0.2},
{"source": "ITGA6", "target": "ITGB5", "value": 0.2},
{"source": "ITGA6", "target": "TLN1", "value": 0.2},
{"source": "ITGA6", "target": "PLEC1", "value": 0.2},
{"source": "ITGA6", "target": "LAMA3", "value": 0.2},
{"source": "ITGA6", "target": "BSG", "value": 0.2},
{"source": "ITGA6", "target": "SRC", "value": 0.2},
{"source": "ITGA6", "target": "ITGB1", "value": 0.2},
{"source": "ITGA6", "target": "ITGB2", "value": 0.2},
{"source": "ITGA6", "target": "PTPRC", "value": 0.2},
{"source": "ITGA6", "target": "SHC1", "value": 0.2},
{"source": "TOP2B", "target": "MCM5", "value": 0.2},
{"source": "TOP2B", "target": "KIF11", "value": 0.2},
{"source": "TOP2B", "target": "SMARCA2", "value": 0.2},
{"source": "TOP2B", "target": "XPC", "value": 0.2},
{"source": "TOP2B", "target": "SMC2", "value": 0.2},
{"source": "TOP2B", "target": "MCM7", "value": 0.2},
{"source": "TOP2B", "target": "ARID1A", "value": 0.2},
{"source": "TOP2B", "target": "POLE", "value": 0.2},
{"source": "TOP2B", "target": "NCAPD2", "value": 0.2},
{"source": "TOP2B", "target": "SMC4", "value": 0.2},
{"source": "TOP2B", "target": "SMARCA4", "value": 0.2},
{"source": "TOP2B", "target": "TOP2A", "value": 0.2},
{"source": "TOP2B", "target": "MCM3", "value": 0.2},
{"source": "RAB13", "target": "RAB27B", "value": 0.2},
{"source": "RAB13", "target": "YWHAE", "value": 0.2},
{"source": "RAB13", "target": "RAB10", "value": 0.2},
{"source": "RAB13", "target": "RAB7A", "value": 0.2},
{"source": "RAB13", "target": "RAB8A", "value": 0.2},
{"source": "RAB13", "target": "RAB1B", "value": 0.2},
{"source": "RAB13", "target": "VAMP2", "value": 0.2},
{"source": "RAB13", "target": "STX4", "value": 0.2},
{"source": "RAB13", "target": "RAB11B", "value": 0.2},
{"source": "RAB13", "target": "RAB5B", "value": 0.2},
{"source": "RAB13", "target": "EXOC3", "value": 0.2},
{"source": "RAB13", "target": "RAB5C", "value": 0.2},
{"source": "RAB13", "target": "RAB14", "value": 0.2},
{"source": "RAB13", "target": "RAB1A", "value": 0.2},
{"source": "RAB13", "target": "MYO5A", "value": 0.2},
{"source": "PSMC2", "target": "PSMA4", "value": 0.2},
{"source": "PSMC2", "target": "PSMC4", "value": 0.2},
{"source": "PSMC2", "target": "PSMD8", "value": 0.2},
{"source": "PSMC2", "target": "PSME2", "value": 0.2},
{"source": "PSMC2", "target": "PSMD10", "value": 0.2},
{"source": "PSMC2", "target": "PSMD7", "value": 0.2},
{"source": "PSMC2", "target": "PPP2CB", "value": 0.2},
{"source": "PSMC2", "target": "RPL18A", "value": 0.2},
{"source": "PSMC2", "target": "PSMA2", "value": 0.2},
{"source": "PSMC2", "target": "NFKB1", "value": 0.2},
{"source": "PSMC2", "target": "RPS12", "value": 0.2},
{"source": "PSMC2", "target": "SKP1", "value": 0.2},
{"source": "PSMC2", "target": "EIF2S1", "value": 0.2},
{"source": "PSMC2", "target": "PSMC1", "value": 0.2},
{"source": "PSMC2", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMC2", "target": "PSMA6", "value": 0.2},
{"source": "PSMC2", "target": "PSMD11", "value": 0.2},
{"source": "PSMC2", "target": "PSMB1", "value": 0.2},
{"source": "PSMC2", "target": "CUL3", "value": 0.2},
{"source": "PSMC2", "target": "RPS3", "value": 0.2},
{"source": "PSMC2", "target": "PSMB4", "value": 0.2},
{"source": "PSMC2", "target": "CCT3", "value": 0.2},
{"source": "PSMC2", "target": "HSPA4", "value": 0.2},
{"source": "PSMC2", "target": "RPL15", "value": 0.2},
{"source": "PSMC2", "target": "PSMD1", "value": 0.2},
{"source": "PSMC2", "target": "RPL38", "value": 0.2},
{"source": "PSMC2", "target": "PSMD2", "value": 0.2},
{"source": "PSMC2", "target": "PSMC5", "value": 0.2},
{"source": "PSMC2", "target": "PSMA8", "value": 0.2},
{"source": "PSMC2", "target": "RPS15A", "value": 0.2},
{"source": "PSMC2", "target": "SMC1A", "value": 0.2},
{"source": "PSMC2", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMC2", "target": "RPS7", "value": 0.2},
{"source": "PSMC2", "target": "RPL3", "value": 0.2},
{"source": "PSMC2", "target": "RPL21", "value": 0.2},
{"source": "PSMC2", "target": "PSMD12", "value": 0.2},
{"source": "PSMC2", "target": "RPS26", "value": 0.2},
{"source": "PSMC2", "target": "NF1", "value": 0.2},
{"source": "PSMC2", "target": "PSMB5", "value": 0.2},
{"source": "PSMC2", "target": "RPS27", "value": 0.2},
{"source": "PSMC2", "target": "BUB3", "value": 0.2},
{"source": "PSMC2", "target": "PSMD4", "value": 0.2},
{"source": "PSMC2", "target": "RPL5", "value": 0.2},
{"source": "PSMC2", "target": "PSMA7", "value": 0.2},
{"source": "PSMC2", "target": "HIVEP3", "value": 0.2},
{"source": "PSMC2", "target": "PSMB8", "value": 0.2},
{"source": "PSMC2", "target": "RPS6", "value": 0.2},
{"source": "PSMC2", "target": "PSME1", "value": 0.2},
{"source": "PSMC2", "target": "CCT4", "value": 0.2},
{"source": "PSMC2", "target": "RUNX3", "value": 0.2},
{"source": "PSMC2", "target": "RPL23", "value": 0.2},
{"source": "PSMC2", "target": "RPS24", "value": 0.2},
{"source": "PSMC2", "target": "PSMA1", "value": 0.2},
{"source": "PSMC2", "target": "TCEB1", "value": 0.2},
{"source": "PSMC2", "target": "WWP1", "value": 0.2},
{"source": "PSMC2", "target": "UBC", "value": 0.2},
{"source": "PSMC2", "target": "ITCH", "value": 0.2},
{"source": "PSMC2", "target": "PSMB3", "value": 0.2},
{"source": "PSMC2", "target": "RPS5", "value": 0.2},
{"source": "PSMC2", "target": "RPL17", "value": 0.2},
{"source": "PSMC2", "target": "PSMC3", "value": 0.2},
{"source": "PSMC2", "target": "PSMC6", "value": 0.2},
{"source": "PSMC2", "target": "RPL9", "value": 0.2},
{"source": "EXOSC3", "target": "FBL", "value": 0.2},
{"source": "EXOSC3", "target": "RPL18A", "value": 0.2},
{"source": "EXOSC3", "target": "KRR1", "value": 0.2},
{"source": "EXOSC3", "target": "SKIV2L2", "value": 0.2},
{"source": "EXOSC3", "target": "RRP9", "value": 0.2},
{"source": "EXOSC3", "target": "NIP7", "value": 0.2},
{"source": "EXOSC3", "target": "NOP58", "value": 0.2},
{"source": "EXOSC3", "target": "EXOSC7", "value": 0.2},
{"source": "EXOSC3", "target": "UTP15", "value": 0.2},
{"source": "EXOSC3", "target": "RPL10L", "value": 0.2},
{"source": "EXOSC3", "target": "RPL15", "value": 0.2},
{"source": "EXOSC3", "target": "RPL38", "value": 0.2},
{"source": "EXOSC3", "target": "RPLP2", "value": 0.2},
{"source": "EXOSC3", "target": "RPL28", "value": 0.2},
{"source": "EXOSC3", "target": "RPL17", "value": 0.2},
{"source": "EXOSC3", "target": "RPL5", "value": 0.2},
{"source": "EXOSC3", "target": "RPL27", "value": 0.2},
{"source": "EXOSC3", "target": "RPS6", "value": 0.2},
{"source": "EXOSC3", "target": "RPL21", "value": 0.2},
{"source": "EXOSC3", "target": "WDR36", "value": 0.2},
{"source": "EXOSC3", "target": "ZFP36L1", "value": 0.2},
{"source": "EXOSC3", "target": "RPL9", "value": 0.2},
{"source": "EXOSC3", "target": "WDR18", "value": 0.2},
{"source": "EXOSC3", "target": "RPL36", "value": 0.2},
{"source": "EXOSC3", "target": "RPL35A", "value": 0.2},
{"source": "EXOSC3", "target": "RPL23", "value": 0.2},
{"source": "EXOSC3", "target": "EXOSC8", "value": 0.2},
{"source": "EXOSC3", "target": "PDCD11", "value": 0.2},
{"source": "EXOSC3", "target": "RPL30", "value": 0.2},
{"source": "EXOSC3", "target": "RPS7", "value": 0.2},
{"source": "EXOSC3", "target": "NOP14", "value": 0.2},
{"source": "EXOSC3", "target": "EMG1", "value": 0.2},
{"source": "EXOSC3", "target": "EXOSC1", "value": 0.2},
{"source": "EXOSC3", "target": "RPL29", "value": 0.2},
{"source": "EXOSC3", "target": "RPL12", "value": 0.2},
{"source": "EXOSC3", "target": "RPL14", "value": 0.2},
{"source": "EXOSC3", "target": "RPL3", "value": 0.2},
{"source": "TRIM10", "target": "HLA-DRB1", "value": 0.2},
{"source": "TRIM10", "target": "HLA-C", "value": 0.2},
{"source": "TRIM10", "target": "HLA-E", "value": 0.2},
{"source": "TRIM10", "target": "HLA-A", "value": 0.2},
{"source": "TRIM10", "target": "B2M", "value": 0.2},
{"source": "TRIM10", "target": "HLA-B", "value": 0.2},
{"source": "ACTN3", "target": "CKM", "value": 0.2},
{"source": "ACTN3", "target": "MYH1", "value": 0.2},
{"source": "ACTN3", "target": "MYH4", "value": 0.2},
{"source": "ACTN3", "target": "TNNT3", "value": 0.2},
{"source": "ACTN3", "target": "MYL1", "value": 0.2},
{"source": "ACTN3", "target": "TMOD3", "value": 0.2},
{"source": "ACTN3", "target": "TLN1", "value": 0.2},
{"source": "ACTN3", "target": "MYLPF", "value": 0.2},
{"source": "ACTN3", "target": "MYBPC2", "value": 0.2},
{"source": "ACTN3", "target": "MYOZ1", "value": 0.2},
{"source": "ACTN3", "target": "ACTA1", "value": 0.2},
{"source": "ACTN3", "target": "TPM3", "value": 0.2},
{"source": "ACTN3", "target": "TNNC2", "value": 0.2},
{"source": "ACTN3", "target": "SRC", "value": 0.2},
{"source": "ACTN3", "target": "DES", "value": 0.2},
{"source": "ACTN3", "target": "TPM2", "value": 0.2},
{"source": "ACTN3", "target": "TNNI2", "value": 0.2},
{"source": "ACTN3", "target": "MYL3", "value": 0.2},
{"source": "ACTN3", "target": "ITGB1", "value": 0.2},
{"source": "ACTN3", "target": "MYH8", "value": 0.2},
{"source": "ACTN3", "target": "RHOA", "value": 0.2},
{"source": "ACTN3", "target": "MYBPC1", "value": 0.2},
{"source": "ACTN3", "target": "TTN", "value": 0.2},
{"source": "ACTN3", "target": "MYH3", "value": 0.2},
{"source": "ACTN3", "target": "ACTN2", "value": 0.2},
{"source": "ACTN3", "target": "CAPN1", "value": 0.2},
{"source": "PSMD2", "target": "PSMA4", "value": 0.2},
{"source": "PSMD2", "target": "PSMC4", "value": 0.2},
{"source": "PSMD2", "target": "PSMD8", "value": 0.2},
{"source": "PSMD2", "target": "PSME2", "value": 0.2},
{"source": "PSMD2", "target": "PSMD10", "value": 0.2},
{"source": "PSMD2", "target": "PSMD7", "value": 0.2},
{"source": "PSMD2", "target": "PPP2CB", "value": 0.2},
{"source": "PSMD2", "target": "PSMA2", "value": 0.2},
{"source": "PSMD2", "target": "NFKB1", "value": 0.2},
{"source": "PSMD2", "target": "SKP1", "value": 0.2},
{"source": "PSMD2", "target": "COPB1", "value": 0.2},
{"source": "PSMD2", "target": "RPS16", "value": 0.2},
{"source": "PSMD2", "target": "EIF2S3", "value": 0.2},
{"source": "PSMD2", "target": "CCT7", "value": 0.2},
{"source": "PSMD2", "target": "PSMC1", "value": 0.2},
{"source": "PSMD2", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMD2", "target": "PSMA6", "value": 0.2},
{"source": "PSMD2", "target": "PSMD11", "value": 0.2},
{"source": "PSMD2", "target": "PSMB1", "value": 0.2},
{"source": "PSMD2", "target": "CUL3", "value": 0.2},
{"source": "PSMD2", "target": "KPNB1", "value": 0.2},
{"source": "PSMD2", "target": "PSMB4", "value": 0.2},
{"source": "PSMD2", "target": "PSMD1", "value": 0.2},
{"source": "PSMD2", "target": "PSMC3", "value": 0.2},
{"source": "PSMD2", "target": "PSMA7", "value": 0.2},
{"source": "PSMD2", "target": "EIF3M", "value": 0.2},
{"source": "PSMD2", "target": "RPL14", "value": 0.2},
{"source": "PSMD2", "target": "CCT4", "value": 0.2},
{"source": "PSMD2", "target": "UBC", "value": 0.2},
{"source": "PSMD2", "target": "PSMC5", "value": 0.2},
{"source": "PSMD2", "target": "WWP1", "value": 0.2},
{"source": "PSMD2", "target": "PSMB8", "value": 0.2},
{"source": "PSMD2", "target": "RUNX3", "value": 0.2},
{"source": "PSMD2", "target": "PSMB3", "value": 0.2},
{"source": "PSMD2", "target": "PSMD12", "value": 0.2},
{"source": "PSMD2", "target": "HIVEP3", "value": 0.2},
{"source": "PSMD2", "target": "PSMB5", "value": 0.2},
{"source": "PSMD2", "target": "TCEB1", "value": 0.2},
{"source": "PSMD2", "target": "RPL27", "value": 0.2},
{"source": "PSMD2", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD2", "target": "PSMA1", "value": 0.2},
{"source": "PSMD2", "target": "ITCH", "value": 0.2},
{"source": "PSMD2", "target": "RPS8", "value": 0.2},
{"source": "PSMD2", "target": "BUB3", "value": 0.2},
{"source": "PSMD2", "target": "PSMD4", "value": 0.2},
{"source": "PSMD2", "target": "PSMC6", "value": 0.2},
{"source": "PSMD2", "target": "TP53BP1", "value": 0.2},
{"source": "PSMD2", "target": "PSMA8", "value": 0.2},
{"source": "PSMD2", "target": "NF1", "value": 0.2},
{"source": "PSMD2", "target": "PSME1", "value": 0.2},
{"source": "PSMD2", "target": "EIF3B", "value": 0.2},
{"source": "PSMD2", "target": "EEF1A1", "value": 0.2},
{"source": "PSMD2", "target": "RPSA", "value": 0.2},
{"source": "MCM2", "target": "RFC2", "value": 0.2},
{"source": "MCM2", "target": "MCM5", "value": 0.2},
{"source": "MCM2", "target": "RPA3", "value": 0.2},
{"source": "MCM2", "target": "MSH6", "value": 0.2},
{"source": "MCM2", "target": "RPA1", "value": 0.2},
{"source": "MCM2", "target": "KIF11", "value": 0.2},
{"source": "MCM2", "target": "MCM4", "value": 0.2},
{"source": "MCM2", "target": "PKMYT1", "value": 0.2},
{"source": "MCM2", "target": "MCM6", "value": 0.2},
{"source": "MCM2", "target": "NCAPD2", "value": 0.2},
{"source": "MCM2", "target": "DUT", "value": 0.2},
{"source": "MCM2", "target": "MKI67", "value": 0.2},
{"source": "MCM2", "target": "SMC2", "value": 0.2},
{"source": "MCM2", "target": "ATM", "value": 0.2},
{"source": "MCM2", "target": "UBC", "value": 0.2},
{"source": "MCM2", "target": "TOP2A", "value": 0.2},
{"source": "MCM2", "target": "RPA2", "value": 0.2},
{"source": "MCM2", "target": "POLE", "value": 0.2},
{"source": "MCM2", "target": "MCM7", "value": 0.2},
{"source": "MCM2", "target": "POLA1", "value": 0.2},
{"source": "MCM2", "target": "WDR18", "value": 0.2},
{"source": "MCM2", "target": "SMC4", "value": 0.2},
{"source": "MCM2", "target": "TP53BP1", "value": 0.2},
{"source": "MCM2", "target": "MCM3", "value": 0.2},
{"source": "MCM2", "target": "ORC4", "value": 0.2},
{"source": "EEF1A1", "target": "TTLL12", "value": 0.2},
{"source": "EEF1A1", "target": "EEF1A2", "value": 0.2},
{"source": "EEF1A1", "target": "RPL18A", "value": 0.2},
{"source": "EEF1A1", "target": "PSMA2", "value": 0.2},
{"source": "EEF1A1", "target": "TPI1", "value": 0.2},
{"source": "EEF1A1", "target": "RPS12", "value": 0.2},
{"source": "EEF1A1", "target": "RPS16", "value": 0.2},
{"source": "EEF1A1", "target": "EIF2S3", "value": 0.2},
{"source": "EEF1A1", "target": "EIF2S1", "value": 0.2},
{"source": "EEF1A1", "target": "CCT7", "value": 0.2},
{"source": "EEF1A1", "target": "PSMA6", "value": 0.2},
{"source": "EEF1A1", "target": "PSMD11", "value": 0.2},
{"source": "EEF1A1", "target": "RPS3", "value": 0.2},
{"source": "EEF1A1", "target": "EIF5B", "value": 0.2},
{"source": "EEF1A1", "target": "KPNB1", "value": 0.2},
{"source": "EEF1A1", "target": "RPS23", "value": 0.2},
{"source": "EEF1A1", "target": "HSPA9", "value": 0.2},
{"source": "EEF1A1", "target": "RPL10L", "value": 0.2},
{"source": "EEF1A1", "target": "HSPA4", "value": 0.2},
{"source": "EEF1A1", "target": "EEF2", "value": 0.2},
{"source": "EEF1A1", "target": "RPL15", "value": 0.2},
{"source": "EEF1A1", "target": "PSMD1", "value": 0.2},
{"source": "EEF1A1", "target": "RPL38", "value": 0.2},
{"source": "EEF1A1", "target": "PSMC5", "value": 0.2},
{"source": "EEF1A1", "target": "RPS15A", "value": 0.2},
{"source": "EEF1A1", "target": "RPLP2", "value": 0.2},
{"source": "EEF1A1", "target": "PLEC1", "value": 0.2},
{"source": "EEF1A1", "target": "RPS27L", "value": 0.2},
{"source": "EEF1A1", "target": "HSP90AA1", "value": 0.2},
{"source": "EEF1A1", "target": "RPL36", "value": 0.2},
{"source": "EEF1A1", "target": "RPL14", "value": 0.2},
{"source": "EEF1A1", "target": "PSMC6", "value": 0.2},
{"source": "EEF1A1", "target": "RPS5", "value": 0.2},
{"source": "EEF1A1", "target": "RPS24", "value": 0.2},
{"source": "EEF1A1", "target": "HSPD1", "value": 0.2},
{"source": "EEF1A1", "target": "RPL30", "value": 0.2},
{"source": "EEF1A1", "target": "PSMA7", "value": 0.2},
{"source": "EEF1A1", "target": "RPL21", "value": 0.2},
{"source": "EEF1A1", "target": "FAU", "value": 0.2},
{"source": "EEF1A1", "target": "PSMC3", "value": 0.2},
{"source": "EEF1A1", "target": "POLR2B", "value": 0.2},
{"source": "EEF1A1", "target": "RPL3", "value": 0.2},
{"source": "EEF1A1", "target": "RPL29", "value": 0.2},
{"source": "EEF1A1", "target": "RPL35A", "value": 0.2},
{"source": "EEF1A1", "target": "RPS26", "value": 0.2},
{"source": "EEF1A1", "target": "RPL12", "value": 0.2},
{"source": "EEF1A1", "target": "RPL23", "value": 0.2},
{"source": "EEF1A1", "target": "RPS6", "value": 0.2},
{"source": "EEF1A1", "target": "RPS21", "value": 0.2},
{"source": "EEF1A1", "target": "POLR2A", "value": 0.2},
{"source": "EEF1A1", "target": "RPSA", "value": 0.2},
{"source": "EEF1A1", "target": "RPL17", "value": 0.2},
{"source": "EEF1A1", "target": "EIF3M", "value": 0.2},
{"source": "EEF1A1", "target": "RPS15", "value": 0.2},
{"source": "EEF1A1", "target": "RPS27", "value": 0.2},
{"source": "EEF1A1", "target": "CCT4", "value": 0.2},
{"source": "EEF1A1", "target": "RPL28", "value": 0.2},
{"source": "EEF1A1", "target": "RPS7", "value": 0.2},
{"source": "EEF1A1", "target": "HSPA8", "value": 0.2},
{"source": "EEF1A1", "target": "RPL27", "value": 0.2},
{"source": "EEF1A1", "target": "EIF3B", "value": 0.2},
{"source": "EEF1A1", "target": "RPL5", "value": 0.2},
{"source": "EEF1A1", "target": "RPL9", "value": 0.2},
{"source": "EEF1A1", "target": "HSP90AB1", "value": 0.2},
{"source": "EEF1A1", "target": "RPS8", "value": 0.2},
{"source": "TRIM37", "target": "STUB1", "value": 0.2},
{"source": "TRIM37", "target": "SKP1", "value": 0.2},
{"source": "TRIM37", "target": "UBE3A", "value": 0.2},
{"source": "TRIM37", "target": "TRIM21", "value": 0.2},
{"source": "TRIM37", "target": "HUWE1", "value": 0.2},
{"source": "TRIM37", "target": "UBE3C", "value": 0.2},
{"source": "TRIM37", "target": "HERC1", "value": 0.2},
{"source": "TRIM37", "target": "UBC", "value": 0.2},
{"source": "TRIM37", "target": "UBE2J1", "value": 0.2},
{"source": "TRIM37", "target": "NEDD4", "value": 0.2},
{"source": "TRIM37", "target": "KBTBD6", "value": 0.2},
{"source": "TRIM37", "target": "UFL1", "value": 0.2},
{"source": "TRIM37", "target": "ITCH", "value": 0.2},
{"source": "TRIM37", "target": "UBA1", "value": 0.2},
{"source": "TRIM37", "target": "TCEB1", "value": 0.2},
{"source": "TRIM37", "target": "RNF220", "value": 0.2},
{"source": "TRIM37", "target": "CUL3", "value": 0.2},
{"source": "TRIM37", "target": "KBTBD7", "value": 0.2},
{"source": "TRIM37", "target": "MGRN1", "value": 0.2},
{"source": "TRIM37", "target": "FBXL4", "value": 0.2},
{"source": "TRIM37", "target": "UBR4", "value": 0.2},
{"source": "TRIM37", "target": "CUL5", "value": 0.2},
{"source": "TRIM37", "target": "UBR2", "value": 0.2},
{"source": "TRIM37", "target": "PARK2", "value": 0.2},
{"source": "TRIM37", "target": "RNF130", "value": 0.2},
{"source": "TRIM37", "target": "WWP1", "value": 0.2},
{"source": "SNX27", "target": "SNX1", "value": 0.2},
{"source": "SNX27", "target": "VPS35", "value": 0.2},
{"source": "FCGR2A", "target": "MYH2", "value": 0.2},
{"source": "FCGR2A", "target": "ARPC1A", "value": 0.2},
{"source": "FCGR2A", "target": "ARPC1B", "value": 0.2},
{"source": "FCGR2A", "target": "BAIAP2", "value": 0.2},
{"source": "FCGR2A", "target": "ARPC4", "value": 0.2},
{"source": "FCGR2A", "target": "PLCG2", "value": 0.2},
{"source": "FCGR2A", "target": "SRC", "value": 0.2},
{"source": "FCGR2A", "target": "ITGB2", "value": 0.2},
{"source": "FCGR2A", "target": "NCKAP1L", "value": 0.2},
{"source": "FCGR2A", "target": "MYO5A", "value": 0.2},
{"source": "FCGR2A", "target": "PTPRC", "value": 0.2},
{"source": "FCGR2A", "target": "LYN", "value": 0.2},
{"source": "FCGR2A", "target": "ARPC5", "value": 0.2},
{"source": "FCGR2A", "target": "ARPC2", "value": 0.2},
{"source": "FCGR2A", "target": "YES1", "value": 0.2},
{"source": "NCAPD2", "target": "MCM5", "value": 0.2},
{"source": "NCAPD2", "target": "KIF11", "value": 0.2},
{"source": "NCAPD2", "target": "MCM4", "value": 0.2},
{"source": "NCAPD2", "target": "SMC2", "value": 0.2},
{"source": "NCAPD2", "target": "MCM7", "value": 0.2},
{"source": "NCAPD2", "target": "POLE", "value": 0.2},
{"source": "NCAPD2", "target": "SMC1A", "value": 0.2},
{"source": "NCAPD2", "target": "SMC4", "value": 0.2},
{"source": "NCAPD2", "target": "MCM3", "value": 0.2},
{"source": "NCAPD2", "target": "POLA1", "value": 0.2},
{"source": "NCAPD2", "target": "TOP2A", "value": 0.2},
{"source": "STOM", "target": "MLEC", "value": 0.2},
{"source": "STOM", "target": "COPB1", "value": 0.2},
{"source": "STOM", "target": "SNAP25", "value": 0.2},
{"source": "STOM", "target": "CYBA", "value": 0.2},
{"source": "STOM", "target": "SLC15A4", "value": 0.2},
{"source": "STOM", "target": "KCNAB2", "value": 0.2},
{"source": "STOM", "target": "PTPRJ", "value": 0.2},
{"source": "STOM", "target": "TSPAN14", "value": 0.2},
{"source": "STOM", "target": "CD47", "value": 0.2},
{"source": "STOM", "target": "RAB5C", "value": 0.2},
{"source": "STOM", "target": "HMOX2", "value": 0.2},
{"source": "STOM", "target": "HVCN1", "value": 0.2},
{"source": "STOM", "target": "ANO6", "value": 0.2},
{"source": "STOM", "target": "DEGS1", "value": 0.2},
{"source": "STOM", "target": "UBR4", "value": 0.2},
{"source": "STOM", "target": "RAB14", "value": 0.2},
{"source": "STOM", "target": "LAMP1", "value": 0.2},
{"source": "STOM", "target": "SERPINB6", "value": 0.2},
{"source": "STOM", "target": "ITGB2", "value": 0.2},
{"source": "STOM", "target": "MOSPD2", "value": 0.2},
{"source": "STOM", "target": "FAM38A", "value": 0.2},
{"source": "STOM", "target": "ATP6AP2", "value": 0.2},
{"source": "PSMC5", "target": "PSMA4", "value": 0.2},
{"source": "PSMC5", "target": "PSMC4", "value": 0.2},
{"source": "PSMC5", "target": "PSMD8", "value": 0.2},
{"source": "PSMC5", "target": "PSME2", "value": 0.2},
{"source": "PSMC5", "target": "PSMD10", "value": 0.2},
{"source": "PSMC5", "target": "PSMD7", "value": 0.2},
{"source": "PSMC5", "target": "PPP2CB", "value": 0.2},
{"source": "PSMC5", "target": "RPL18A", "value": 0.2},
{"source": "PSMC5", "target": "PSMA2", "value": 0.2},
{"source": "PSMC5", "target": "NFKB1", "value": 0.2},
{"source": "PSMC5", "target": "RPS12", "value": 0.2},
{"source": "PSMC5", "target": "SKP1", "value": 0.2},
{"source": "PSMC5", "target": "RPS16", "value": 0.2},
{"source": "PSMC5", "target": "EIF2S1", "value": 0.2},
{"source": "PSMC5", "target": "CCT7", "value": 0.2},
{"source": "PSMC5", "target": "PSMC1", "value": 0.2},
{"source": "PSMC5", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMC5", "target": "PSMA6", "value": 0.2},
{"source": "PSMC5", "target": "PSMD11", "value": 0.2},
{"source": "PSMC5", "target": "PSMB1", "value": 0.2},
{"source": "PSMC5", "target": "CUL3", "value": 0.2},
{"source": "PSMC5", "target": "RPS3", "value": 0.2},
{"source": "PSMC5", "target": "KPNB1", "value": 0.2},
{"source": "PSMC5", "target": "PSMB4", "value": 0.2},
{"source": "PSMC5", "target": "RPL15", "value": 0.2},
{"source": "PSMC5", "target": "PSMD1", "value": 0.2},
{"source": "PSMC5", "target": "WWP1", "value": 0.2},
{"source": "PSMC5", "target": "PSMB8", "value": 0.2},
{"source": "PSMC5", "target": "RPS8", "value": 0.2},
{"source": "PSMC5", "target": "PSMC3", "value": 0.2},
{"source": "PSMC5", "target": "RPS6", "value": 0.2},
{"source": "PSMC5", "target": "UBC", "value": 0.2},
{"source": "PSMC5", "target": "RPS15A", "value": 0.2},
{"source": "PSMC5", "target": "PSMA1", "value": 0.2},
{"source": "PSMC5", "target": "PSMD12", "value": 0.2},
{"source": "PSMC5", "target": "PSMB5", "value": 0.2},
{"source": "PSMC5", "target": "RUNX3", "value": 0.2},
{"source": "PSMC5", "target": "RPS27", "value": 0.2},
{"source": "PSMC5", "target": "RPL23", "value": 0.2},
{"source": "PSMC5", "target": "RPS7", "value": 0.2},
{"source": "PSMC5", "target": "PSMA8", "value": 0.2},
{"source": "PSMC5", "target": "PSMB3", "value": 0.2},
{"source": "PSMC5", "target": "RPS26", "value": 0.2},
{"source": "PSMC5", "target": "RPL21", "value": 0.2},
{"source": "PSMC5", "target": "HIVEP3", "value": 0.2},
{"source": "PSMC5", "target": "CCT4", "value": 0.2},
{"source": "PSMC5", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMC5", "target": "BUB3", "value": 0.2},
{"source": "PSMC5", "target": "RPL12", "value": 0.2},
{"source": "PSMC5", "target": "RPL17", "value": 0.2},
{"source": "PSMC5", "target": "PSMD4", "value": 0.2},
{"source": "PSMC5", "target": "PSMC6", "value": 0.2},
{"source": "PSMC5", "target": "RPS5", "value": 0.2},
{"source": "PSMC5", "target": "PSMA7", "value": 0.2},
{"source": "PSMC5", "target": "RPL3", "value": 0.2},
{"source": "PSMC5", "target": "RPL5", "value": 0.2},
{"source": "PSMC5", "target": "TCEB1", "value": 0.2},
{"source": "PSMC5", "target": "RPL9", "value": 0.2},
{"source": "PSMC5", "target": "NCOA3", "value": 0.2},
{"source": "PSMC5", "target": "ITCH", "value": 0.2},
{"source": "PSMC5", "target": "PSME1", "value": 0.2},
{"source": "PSMC5", "target": "RPS24", "value": 0.2},
{"source": "PSMC5", "target": "NF1", "value": 0.2},
{"source": "HSPA2", "target": "DNAJB1", "value": 0.2},
{"source": "HSPA2", "target": "HSPBP1", "value": 0.2},
{"source": "HSPA2", "target": "LMNB1", "value": 0.2},
{"source": "HSPA2", "target": "CREBBP", "value": 0.2},
{"source": "HSPA2", "target": "GRPEL1", "value": 0.2},
{"source": "HSPA2", "target": "HSPA9", "value": 0.2},
{"source": "HSPA2", "target": "HSP90B1", "value": 0.2},
{"source": "HSPA2", "target": "HSPA4", "value": 0.2},
{"source": "HSPA2", "target": "DNAJA2", "value": 0.2},
{"source": "HSPA2", "target": "HSPH1", "value": 0.2},
{"source": "HSPA2", "target": "SMC1A", "value": 0.2},
{"source": "HSPA2", "target": "HSPA5", "value": 0.2},
{"source": "HSPA2", "target": "HSP90AA1", "value": 0.2},
{"source": "HSPA2", "target": "STIP1", "value": 0.2},
{"source": "HSPA2", "target": "NUP214", "value": 0.2},
{"source": "HSPA2", "target": "TPR", "value": 0.2},
{"source": "HSPA2", "target": "DNAJB4", "value": 0.2},
{"source": "HSPA2", "target": "HSP90AB1", "value": 0.2},
{"source": "HSPA2", "target": "HSPA1A", "value": 0.2},
{"source": "HSPA2", "target": "DNAJA1", "value": 0.2},
{"source": "HSPA2", "target": "HSPD1", "value": 0.2},
{"source": "HSPA2", "target": "HSPA8", "value": 0.2},
{"source": "HSPA2", "target": "H2AFX", "value": 0.2},
{"source": "HSPA2", "target": "H2AFJ", "value": 0.2},
{"source": "HSPA2", "target": "NUP37", "value": 0.2},
{"source": "PARK7", "target": "ENO1", "value": 0.2},
{"source": "PARK7", "target": "SOD1", "value": 0.2},
{"source": "PARK7", "target": "UCHL1", "value": 0.2},
{"source": "PARK7", "target": "VPS35", "value": 0.2},
{"source": "PARK7", "target": "HSPA4", "value": 0.2},
{"source": "PARK7", "target": "PARK2", "value": 0.2},
{"source": "PARK7", "target": "DAXX", "value": 0.2},
{"source": "H2AFX", "target": "POLR2C", "value": 0.2},
{"source": "H2AFX", "target": "RPA3", "value": 0.2},
{"source": "H2AFX", "target": "WDR77", "value": 0.2},
{"source": "H2AFX", "target": "RPA1", "value": 0.2},
{"source": "H2AFX", "target": "LMNB1", "value": 0.2},
{"source": "H2AFX", "target": "YY1", "value": 0.2},
{"source": "H2AFX", "target": "CREBBP", "value": 0.2},
{"source": "H2AFX", "target": "ATM", "value": 0.2},
{"source": "H2AFX", "target": "SMC2", "value": 0.2},
{"source": "H2AFX", "target": "CTBP1", "value": 0.2},
{"source": "H2AFX", "target": "PRMT5", "value": 0.2},
{"source": "H2AFX", "target": "SMC1A", "value": 0.2},
{"source": "H2AFX", "target": "SMC4", "value": 0.2},
{"source": "H2AFX", "target": "WDR5", "value": 0.2},
{"source": "H2AFX", "target": "HOXA4", "value": 0.2},
{"source": "H2AFX", "target": "PARP1", "value": 0.2},
{"source": "H2AFX", "target": "NCOA3", "value": 0.2},
{"source": "H2AFX", "target": "HDAC1", "value": 0.2},
{"source": "H2AFX", "target": "RPA2", "value": 0.2},
{"source": "H2AFX", "target": "RAD50", "value": 0.2},
{"source": "H2AFX", "target": "RBBP7", "value": 0.2},
{"source": "H2AFX", "target": "POLR2B", "value": 0.2},
{"source": "H2AFX", "target": "MYBBP1A", "value": 0.2},
{"source": "H2AFX", "target": "TP53BP1", "value": 0.2},
{"source": "H2AFX", "target": "SIN3A", "value": 0.2},
{"source": "H2AFX", "target": "SMARCA4", "value": 0.2},
{"source": "H2AFX", "target": "HDAC2", "value": 0.2},
{"source": "H2AFX", "target": "H2AFJ", "value": 0.2},
{"source": "H2AFX", "target": "POLR2A", "value": 0.2},
{"source": "H2AFX", "target": "UBC", "value": 0.2},
{"source": "H2AFX", "target": "POLR1B", "value": 0.2},
{"source": "H2AFX", "target": "HOXA3", "value": 0.2},
{"source": "MCM3", "target": "RFC2", "value": 0.2},
{"source": "MCM3", "target": "MCM5", "value": 0.2},
{"source": "MCM3", "target": "RPA3", "value": 0.2},
{"source": "MCM3", "target": "MSH6", "value": 0.2},
{"source": "MCM3", "target": "RPA1", "value": 0.2},
{"source": "MCM3", "target": "KIF11", "value": 0.2},
{"source": "MCM3", "target": "MCM4", "value": 0.2},
{"source": "MCM3", "target": "MCM6", "value": 0.2},
{"source": "MCM3", "target": "ATM", "value": 0.2},
{"source": "MCM3", "target": "SMC2", "value": 0.2},
{"source": "MCM3", "target": "MCM7", "value": 0.2},
{"source": "MCM3", "target": "POLE", "value": 0.2},
{"source": "MCM3", "target": "SMC4", "value": 0.2},
{"source": "MCM3", "target": "RPA2", "value": 0.2},
{"source": "MCM3", "target": "POLA1", "value": 0.2},
{"source": "MCM3", "target": "DUT", "value": 0.2},
{"source": "MCM3", "target": "TP53BP1", "value": 0.2},
{"source": "MCM3", "target": "TOP2A", "value": 0.2},
{"source": "MCM3", "target": "UBC", "value": 0.2},
{"source": "MCM3", "target": "ORC4", "value": 0.2},
{"source": "MCM3", "target": "WDR18", "value": 0.2},
{"source": "RPL17", "target": "PSMC4", "value": 0.2},
{"source": "RPL17", "target": "EEF1A2", "value": 0.2},
{"source": "RPL17", "target": "EIF3E", "value": 0.2},
{"source": "RPL17", "target": "FBL", "value": 0.2},
{"source": "RPL17", "target": "RPL18A", "value": 0.2},
{"source": "RPL17", "target": "RPS12", "value": 0.2},
{"source": "RPL17", "target": "SKIV2L2", "value": 0.2},
{"source": "RPL17", "target": "RPS16", "value": 0.2},
{"source": "RPL17", "target": "EIF2S3", "value": 0.2},
{"source": "RPL17", "target": "EIF3G", "value": 0.2},
{"source": "RPL17", "target": "EIF2S1", "value": 0.2},
{"source": "RPL17", "target": "CCT7", "value": 0.2},
{"source": "RPL17", "target": "PSMC1", "value": 0.2},
{"source": "RPL17", "target": "EXOSC7", "value": 0.2},
{"source": "RPL17", "target": "SRP14", "value": 0.2},
{"source": "RPL17", "target": "RPS3", "value": 0.2},
{"source": "RPL17", "target": "EIF5B", "value": 0.2},
{"source": "RPL17", "target": "RPS23", "value": 0.2},
{"source": "RPL17", "target": "RPL10L", "value": 0.2},
{"source": "RPL17", "target": "EEF2", "value": 0.2},
{"source": "RPL17", "target": "MRPL11", "value": 0.2},
{"source": "RPL17", "target": "RPL15", "value": 0.2},
{"source": "RPL17", "target": "RPL38", "value": 0.2},
{"source": "RPL17", "target": "SRP68", "value": 0.2},
{"source": "RPL17", "target": "RPS15A", "value": 0.2},
{"source": "RPL17", "target": "RPLP2", "value": 0.2},
{"source": "RPL17", "target": "PLEC1", "value": 0.2},
{"source": "RPL17", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL17", "target": "RPS27L", "value": 0.2},
{"source": "RPL17", "target": "HSP90AA1", "value": 0.2},
{"source": "RPL17", "target": "RPS7", "value": 0.2},
{"source": "RPL17", "target": "RPS21", "value": 0.2},
{"source": "RPL17", "target": "RPL3", "value": 0.2},
{"source": "RPL17", "target": "RPL21", "value": 0.2},
{"source": "RPL17", "target": "RPSA", "value": 0.2},
{"source": "RPL17", "target": "RPS26", "value": 0.2},
{"source": "RPL17", "target": "EIF3B", "value": 0.2},
{"source": "RPL17", "target": "RPL12", "value": 0.2},
{"source": "RPL17", "target": "RPS27", "value": 0.2},
{"source": "RPL17", "target": "PDCD11", "value": 0.2},
{"source": "RPL17", "target": "RPL5", "value": 0.2},
{"source": "RPL17", "target": "EXOSC1", "value": 0.2},
{"source": "RPL17", "target": "RPS6", "value": 0.2},
{"source": "RPL17", "target": "EXOSC8", "value": 0.2},
{"source": "RPL17", "target": "CCT4", "value": 0.2},
{"source": "RPL17", "target": "RPL14", "value": 0.2},
{"source": "RPL17", "target": "RPS8", "value": 0.2},
{"source": "RPL17", "target": "EIF3M", "value": 0.2},
{"source": "RPL17", "target": "RPL9", "value": 0.2},
{"source": "RPL17", "target": "RPL23", "value": 0.2},
{"source": "RPL17", "target": "RPL35A", "value": 0.2},
{"source": "RPL17", "target": "WDR18", "value": 0.2},
{"source": "RPL17", "target": "RPL29", "value": 0.2},
{"source": "RPL17", "target": "RPS15", "value": 0.2},
{"source": "RPL17", "target": "RPS5", "value": 0.2},
{"source": "RPL17", "target": "FAU", "value": 0.2},
{"source": "RPL17", "target": "BOP1", "value": 0.2},
{"source": "RPL17", "target": "RPL28", "value": 0.2},
{"source": "RPL17", "target": "RPL27", "value": 0.2},
{"source": "RPL17", "target": "RPS24", "value": 0.2},
{"source": "RPL17", "target": "RPL30", "value": 0.2},
{"source": "RPL17", "target": "RPL36", "value": 0.2},
{"source": "FZD3", "target": "LRP6", "value": 0.2},
{"source": "FZD3", "target": "FZD1", "value": 0.2},
{"source": "FZD3", "target": "FZD2", "value": 0.2},
{"source": "FBL", "target": "KRR1", "value": 0.2},
{"source": "FBL", "target": "RPS8", "value": 0.2},
{"source": "FBL", "target": "NIP7", "value": 0.2},
{"source": "FBL", "target": "RPS23", "value": 0.2},
{"source": "FBL", "target": "CCT7", "value": 0.2},
{"source": "FBL", "target": "BOP1", "value": 0.2},
{"source": "FBL", "target": "SKIV2L2", "value": 0.2},
{"source": "FBL", "target": "EXOSC1", "value": 0.2},
{"source": "FBL", "target": "EXOSC8", "value": 0.2},
{"source": "FBL", "target": "RPS27L", "value": 0.2},
{"source": "FBL", "target": "RPL35A", "value": 0.2},
{"source": "FBL", "target": "RPS21", "value": 0.2},
{"source": "FBL", "target": "RPS15", "value": 0.2},
{"source": "FBL", "target": "RPL9", "value": 0.2},
{"source": "FBL", "target": "NAT10", "value": 0.2},
{"source": "FBL", "target": "PWP1", "value": 0.2},
{"source": "FBL", "target": "RPS15A", "value": 0.2},
{"source": "FBL", "target": "EIF3B", "value": 0.2},
{"source": "FBL", "target": "WDR36", "value": 0.2},
{"source": "FBL", "target": "RPL15", "value": 0.2},
{"source": "FBL", "target": "RPL3", "value": 0.2},
{"source": "FBL", "target": "DDX5", "value": 0.2},
{"source": "FBL", "target": "PRPF19", "value": 0.2},
{"source": "FBL", "target": "BYSL", "value": 0.2},
{"source": "FBL", "target": "RPL27", "value": 0.2},
{"source": "FBL", "target": "RPS26", "value": 0.2},
{"source": "FBL", "target": "U2AF2", "value": 0.2},
{"source": "FBL", "target": "WDR18", "value": 0.2},
{"source": "FBL", "target": "RPS27", "value": 0.2},
{"source": "FBL", "target": "RPS3", "value": 0.2},
{"source": "FBL", "target": "EMG1", "value": 0.2},
{"source": "FBL", "target": "RPS5", "value": 0.2},
{"source": "FBL", "target": "DDX10", "value": 0.2},
{"source": "FBL", "target": "RPS24", "value": 0.2},
{"source": "FBL", "target": "UTP15", "value": 0.2},
{"source": "FBL", "target": "RPL18A", "value": 0.2},
{"source": "FBL", "target": "RPS7", "value": 0.2},
{"source": "FBL", "target": "COIL", "value": 0.2},
{"source": "FBL", "target": "NOP14", "value": 0.2},
{"source": "FBL", "target": "PDCD11", "value": 0.2},
{"source": "FBL", "target": "RPSA", "value": 0.2},
{"source": "FBL", "target": "DHX15", "value": 0.2},
{"source": "FBL", "target": "RPL5", "value": 0.2},
{"source": "FBL", "target": "TSR1", "value": 0.2},
{"source": "FBL", "target": "DDX18", "value": 0.2},
{"source": "FBL", "target": "GTPBP4", "value": 0.2},
{"source": "FBL", "target": "RPF2", "value": 0.2},
{"source": "FBL", "target": "RPS12", "value": 0.2},
{"source": "FBL", "target": "PRMT5", "value": 0.2},
{"source": "FBL", "target": "NOC3L", "value": 0.2},
{"source": "FBL", "target": "FAU", "value": 0.2},
{"source": "FBL", "target": "RPS6", "value": 0.2},
{"source": "FBL", "target": "NOP58", "value": 0.2},
{"source": "FBL", "target": "POLR1B", "value": 0.2},
{"source": "FBL", "target": "RBM19", "value": 0.2},
{"source": "FBL", "target": "RRS1", "value": 0.2},
{"source": "FBL", "target": "EXOSC7", "value": 0.2},
{"source": "FBL", "target": "RRP9", "value": 0.2},
{"source": "FBL", "target": "RPS16", "value": 0.2},
{"source": "CAST", "target": "CAPNS1", "value": 0.2},
{"source": "CAST", "target": "CAPN2", "value": 0.2},
{"source": "CAST", "target": "TLN1", "value": 0.2},
{"source": "CAST", "target": "ACTA1", "value": 0.2},
{"source": "CAST", "target": "CAPN1", "value": 0.2},
{"source": "CAST", "target": "ITGB1", "value": 0.2},
{"source": "SKP1", "target": "PSMA4", "value": 0.2},
{"source": "SKP1", "target": "PSMC4", "value": 0.2},
{"source": "SKP1", "target": "PSMD8", "value": 0.2},
{"source": "SKP1", "target": "PSME2", "value": 0.2},
{"source": "SKP1", "target": "PSMD10", "value": 0.2},
{"source": "SKP1", "target": "PSMD7", "value": 0.2},
{"source": "SKP1", "target": "STUB1", "value": 0.2},
{"source": "SKP1", "target": "PPP2CB", "value": 0.2},
{"source": "SKP1", "target": "PSMA2", "value": 0.2},
{"source": "SKP1", "target": "NFKB1", "value": 0.2},
{"source": "SKP1", "target": "PSMB1", "value": 0.2},
{"source": "SKP1", "target": "UFL1", "value": 0.2},
{"source": "SKP1", "target": "KBTBD7", "value": 0.2},
{"source": "SKP1", "target": "DDB1", "value": 0.2},
{"source": "SKP1", "target": "UBE3A", "value": 0.2},
{"source": "SKP1", "target": "PSMC6", "value": 0.2},
{"source": "SKP1", "target": "SNW1", "value": 0.2},
{"source": "SKP1", "target": "UBR4", "value": 0.2},
{"source": "SKP1", "target": "CREBBP", "value": 0.2},
{"source": "SKP1", "target": "RNF130", "value": 0.2},
{"source": "SKP1", "target": "PSMD4", "value": 0.2},
{"source": "SKP1", "target": "PSMB5", "value": 0.2},
{"source": "SKP1", "target": "UBE2J1", "value": 0.2},
{"source": "SKP1", "target": "PSMB8", "value": 0.2},
{"source": "SKP1", "target": "TCEB1", "value": 0.2},
{"source": "SKP1", "target": "TRIM21", "value": 0.2},
{"source": "SKP1", "target": "PSMD1", "value": 0.2},
{"source": "SKP1", "target": "PSMA1", "value": 0.2},
{"source": "SKP1", "target": "UBC", "value": 0.2},
{"source": "SKP1", "target": "CUL3", "value": 0.2},
{"source": "SKP1", "target": "PSMA6", "value": 0.2},
{"source": "SKP1", "target": "RBPJ", "value": 0.2},
{"source": "SKP1", "target": "ITCH", "value": 0.2},
{"source": "SKP1", "target": "PSMB3", "value": 0.2},
{"source": "SKP1", "target": "SMAD3", "value": 0.2},
{"source": "SKP1", "target": "FBXL4", "value": 0.2},
{"source": "SKP1", "target": "RNF220", "value": 0.2},
{"source": "SKP1", "target": "PSME1", "value": 0.2},
{"source": "SKP1", "target": "UBR2", "value": 0.2},
{"source": "SKP1", "target": "KBTBD6", "value": 0.2},
{"source": "SKP1", "target": "PSMA8", "value": 0.2},
{"source": "SKP1", "target": "PARK2", "value": 0.2},
{"source": "SKP1", "target": "PSMC1", "value": 0.2},
{"source": "SKP1", "target": "HUWE1", "value": 0.2},
{"source": "SKP1", "target": "PSMD11", "value": 0.2},
{"source": "SKP1", "target": "PSMA7", "value": 0.2},
{"source": "SKP1", "target": "PPP2R5A", "value": 0.2},
{"source": "SKP1", "target": "UBA1", "value": 0.2},
{"source": "SKP1", "target": "PSMB4", "value": 0.2},
{"source": "SKP1", "target": "NEDD4", "value": 0.2},
{"source": "SKP1", "target": "UBE3C", "value": 0.2},
{"source": "SKP1", "target": "PSMD12", "value": 0.2},
{"source": "SKP1", "target": "HSP90AA1", "value": 0.2},
{"source": "SKP1", "target": "WWP1", "value": 0.2},
{"source": "SKP1", "target": "PPP2R1A", "value": 0.2},
{"source": "SKP1", "target": "HERC1", "value": 0.2},
{"source": "SKP1", "target": "MGRN1", "value": 0.2},
{"source": "SKP1", "target": "PSMC3", "value": 0.2},
{"source": "SKP1", "target": "NOTCH1", "value": 0.2},
{"source": "SKP1", "target": "CUL5", "value": 0.2},
{"source": "GTF2IRD1", "target": "RFC2", "value": 0.2},
{"source": "GTF2IRD1", "target": "GTF2I", "value": 0.2},
{"source": "HDAC2", "target": "NFKB1", "value": 0.2},
{"source": "HDAC2", "target": "UBE3A", "value": 0.2},
{"source": "HDAC2", "target": "WDR77", "value": 0.2},
{"source": "HDAC2", "target": "SNW1", "value": 0.2},
{"source": "HDAC2", "target": "YY1", "value": 0.2},
{"source": "HDAC2", "target": "CREBBP", "value": 0.2},
{"source": "HDAC2", "target": "SMARCA2", "value": 0.2},
{"source": "HDAC2", "target": "NOTCH1", "value": 0.2},
{"source": "HDAC2", "target": "CTBP1", "value": 0.2},
{"source": "HDAC2", "target": "HINT1", "value": 0.2},
{"source": "HDAC2", "target": "PRMT5", "value": 0.2},
{"source": "HDAC2", "target": "SMAD3", "value": 0.2},
{"source": "HDAC2", "target": "RBPJ", "value": 0.2},
{"source": "HDAC2", "target": "PCGF3", "value": 0.2},
{"source": "HDAC2", "target": "HDAC1", "value": 0.2},
{"source": "HDAC2", "target": "SKI", "value": 0.2},
{"source": "HDAC2", "target": "RBBP7", "value": 0.2},
{"source": "HDAC2", "target": "SIN3A", "value": 0.2},
{"source": "HDAC2", "target": "SMARCA4", "value": 0.2},
{"source": "HDAC2", "target": "H2AFJ", "value": 0.2},
{"source": "RPL15", "target": "MRPS10", "value": 0.2},
{"source": "RPL15", "target": "EEF1A2", "value": 0.2},
{"source": "RPL15", "target": "EIF3E", "value": 0.2},
{"source": "RPL15", "target": "RPL18A", "value": 0.2},
{"source": "RPL15", "target": "RPS12", "value": 0.2},
{"source": "RPL15", "target": "SKIV2L2", "value": 0.2},
{"source": "RPL15", "target": "RPS16", "value": 0.2},
{"source": "RPL15", "target": "EIF2S3", "value": 0.2},
{"source": "RPL15", "target": "EIF3G", "value": 0.2},
{"source": "RPL15", "target": "EIF2S1", "value": 0.2},
{"source": "RPL15", "target": "CCT7", "value": 0.2},
{"source": "RPL15", "target": "EXOSC7", "value": 0.2},
{"source": "RPL15", "target": "SRP14", "value": 0.2},
{"source": "RPL15", "target": "RPS3", "value": 0.2},
{"source": "RPL15", "target": "EIF5B", "value": 0.2},
{"source": "RPL15", "target": "KPNB1", "value": 0.2},
{"source": "RPL15", "target": "CCT3", "value": 0.2},
{"source": "RPL15", "target": "RPS23", "value": 0.2},
{"source": "RPL15", "target": "RPL10L", "value": 0.2},
{"source": "RPL15", "target": "EEF2", "value": 0.2},
{"source": "RPL15", "target": "MRPL11", "value": 0.2},
{"source": "RPL15", "target": "RPLP2", "value": 0.2},
{"source": "RPL15", "target": "RPL12", "value": 0.2},
{"source": "RPL15", "target": "RPL36", "value": 0.2},
{"source": "RPL15", "target": "EIF3B", "value": 0.2},
{"source": "RPL15", "target": "RPL28", "value": 0.2},
{"source": "RPL15", "target": "RPS21", "value": 0.2},
{"source": "RPL15", "target": "WDR18", "value": 0.2},
{"source": "RPL15", "target": "RPSA", "value": 0.2},
{"source": "RPL15", "target": "RPS15", "value": 0.2},
{"source": "RPL15", "target": "RPL21", "value": 0.2},
{"source": "RPL15", "target": "RPL38", "value": 0.2},
{"source": "RPL15", "target": "RPS8", "value": 0.2},
{"source": "RPL15", "target": "RPS27L", "value": 0.2},
{"source": "RPL15", "target": "EXOSC8", "value": 0.2},
{"source": "RPL15", "target": "SRP68", "value": 0.2},
{"source": "RPL15", "target": "CCT4", "value": 0.2},
{"source": "RPL15", "target": "RPS7", "value": 0.2},
{"source": "RPL15", "target": "RPS27", "value": 0.2},
{"source": "RPL15", "target": "EIF3M", "value": 0.2},
{"source": "RPL15", "target": "RPS5", "value": 0.2},
{"source": "RPL15", "target": "RPS6", "value": 0.2},
{"source": "RPL15", "target": "PSMA7", "value": 0.2},
{"source": "RPL15", "target": "RPS15A", "value": 0.2},
{"source": "RPL15", "target": "BOP1", "value": 0.2},
{"source": "RPL15", "target": "FAU", "value": 0.2},
{"source": "RPL15", "target": "RPL29", "value": 0.2},
{"source": "RPL15", "target": "RPS26", "value": 0.2},
{"source": "RPL15", "target": "EXOSC1", "value": 0.2},
{"source": "RPL15", "target": "PLEC1", "value": 0.2},
{"source": "RPL15", "target": "RPL14", "value": 0.2},
{"source": "RPL15", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL15", "target": "RPL30", "value": 0.2},
{"source": "RPL15", "target": "RPL9", "value": 0.2},
{"source": "RPL15", "target": "RPS24", "value": 0.2},
{"source": "RPL15", "target": "RPL23", "value": 0.2},
{"source": "RPL15", "target": "RPL27", "value": 0.2},
{"source": "RPL15", "target": "RPL3", "value": 0.2},
{"source": "RPL15", "target": "RPL5", "value": 0.2},
{"source": "RPL15", "target": "RPL35A", "value": 0.2},
{"source": "RPL15", "target": "RPF2", "value": 0.2},
{"source": "U2AF2", "target": "POLR2C", "value": 0.2},
{"source": "U2AF2", "target": "DDX5", "value": 0.2},
{"source": "U2AF2", "target": "PRPF19", "value": 0.2},
{"source": "U2AF2", "target": "SKIV2L2", "value": 0.2},
{"source": "U2AF2", "target": "SNW1", "value": 0.2},
{"source": "U2AF2", "target": "CPSF2", "value": 0.2},
{"source": "U2AF2", "target": "NUDT21", "value": 0.2},
{"source": "U2AF2", "target": "DHX15", "value": 0.2},
{"source": "U2AF2", "target": "THRAP3", "value": 0.2},
{"source": "U2AF2", "target": "GTF2F2", "value": 0.2},
{"source": "U2AF2", "target": "POLR2B", "value": 0.2},
{"source": "U2AF2", "target": "TPR", "value": 0.2},
{"source": "U2AF2", "target": "NUP214", "value": 0.2},
{"source": "U2AF2", "target": "HNRNPUL1", "value": 0.2},
{"source": "U2AF2", "target": "SF1", "value": 0.2},
{"source": "U2AF2", "target": "HSPA8", "value": 0.2},
{"source": "U2AF2", "target": "NUP37", "value": 0.2},
{"source": "U2AF2", "target": "POLR2A", "value": 0.2},
{"source": "U2AF2", "target": "XAB2", "value": 0.2},
{"source": "U2AF2", "target": "LEMD3", "value": 0.2},
{"source": "U2AF2", "target": "WT1", "value": 0.2},
{"source": "HSPA8", "target": "AHSA1", "value": 0.2},
{"source": "HSPA8", "target": "POLR2C", "value": 0.2},
{"source": "HSPA8", "target": "STUB1", "value": 0.2},
{"source": "HSPA8", "target": "DDX5", "value": 0.2},
{"source": "HSPA8", "target": "PRPF19", "value": 0.2},
{"source": "HSPA8", "target": "SKIV2L2", "value": 0.2},
{"source": "HSPA8", "target": "APOB", "value": 0.2},
{"source": "HSPA8", "target": "VAMP4", "value": 0.2},
{"source": "HSPA8", "target": "HSPB1", "value": 0.2},
{"source": "HSPA8", "target": "DNAJB1", "value": 0.2},
{"source": "HSPA8", "target": "SNAP25", "value": 0.2},
{"source": "HSPA8", "target": "HSPBP1", "value": 0.2},
{"source": "HSPA8", "target": "CCT7", "value": 0.2},
{"source": "HSPA8", "target": "SNW1", "value": 0.2},
{"source": "HSPA8", "target": "CREBBP", "value": 0.2},
{"source": "HSPA8", "target": "DNAJA3", "value": 0.2},
{"source": "HSPA8", "target": "ARPC1A", "value": 0.2},
{"source": "HSPA8", "target": "PACSIN2", "value": 0.2},
{"source": "HSPA8", "target": "NAPA", "value": 0.2},
{"source": "HSPA8", "target": "GRPEL1", "value": 0.2},
{"source": "HSPA8", "target": "SOD1", "value": 0.2},
{"source": "HSPA8", "target": "UCHL1", "value": 0.2},
{"source": "HSPA8", "target": "AP2M1", "value": 0.2},
{"source": "HSPA8", "target": "ARPC5", "value": 0.2},
{"source": "HSPA8", "target": "ARPC2", "value": 0.2},
{"source": "HSPA8", "target": "CCT3", "value": 0.2},
{"source": "HSPA8", "target": "HSPA9", "value": 0.2},
{"source": "HSPA8", "target": "CPSF2", "value": 0.2},
{"source": "HSPA8", "target": "HSP90B1", "value": 0.2},
{"source": "HSPA8", "target": "NUDT21", "value": 0.2},
{"source": "HSPA8", "target": "HSPA4", "value": 0.2},
{"source": "HSPA8", "target": "EEF2", "value": 0.2},
{"source": "HSPA8", "target": "CLTB", "value": 0.2},
{"source": "HSPA8", "target": "DNAJA2", "value": 0.2},
{"source": "HSPA8", "target": "VAMP2", "value": 0.2},
{"source": "HSPA8", "target": "HSPH1", "value": 0.2},
{"source": "HSPA8", "target": "HSPA5", "value": 0.2},
{"source": "HSPA8", "target": "HGS", "value": 0.2},
{"source": "HSPA8", "target": "SMAD3", "value": 0.2},
{"source": "HSPA8", "target": "HSP90AA1", "value": 0.2},
{"source": "HSPA8", "target": "AP1S1", "value": 0.2},
{"source": "HSPA8", "target": "DHX15", "value": 0.2},
{"source": "HSPA8", "target": "GTF2F2", "value": 0.2},
{"source": "HSPA8", "target": "RPSA", "value": 0.2},
{"source": "HSPA8", "target": "IGF2R", "value": 0.2},
{"source": "HSPA8", "target": "AP1B1", "value": 0.2},
{"source": "HSPA8", "target": "XAB2", "value": 0.2},
{"source": "HSPA8", "target": "STIP1", "value": 0.2},
{"source": "HSPA8", "target": "NUP214", "value": 0.2},
{"source": "HSPA8", "target": "TFRC", "value": 0.2},
{"source": "HSPA8", "target": "RAB5B", "value": 0.2},
{"source": "HSPA8", "target": "TPR", "value": 0.2},
{"source": "HSPA8", "target": "DNAJB4", "value": 0.2},
{"source": "HSPA8", "target": "HSP90AB1", "value": 0.2},
{"source": "HSPA8", "target": "LDLRAP1", "value": 0.2},
{"source": "HSPA8", "target": "HSPA1A", "value": 0.2},
{"source": "HSPA8", "target": "SF1", "value": 0.2},
{"source": "HSPA8", "target": "DNAJA1", "value": 0.2},
{"source": "HSPA8", "target": "POLR2B", "value": 0.2},
{"source": "HSPA8", "target": "HSPD1", "value": 0.2},
{"source": "HSPA8", "target": "HNRNPUL1", "value": 0.2},
{"source": "HSPA8", "target": "CCT4", "value": 0.2},
{"source": "HSPA8", "target": "TGOLN2", "value": 0.2},
{"source": "HSPA8", "target": "ARPC4", "value": 0.2},
{"source": "HSPA8", "target": "REPS1", "value": 0.2},
{"source": "HSPA8", "target": "EPN1", "value": 0.2},
{"source": "HSPA8", "target": "FNBP1", "value": 0.2},
{"source": "HSPA8", "target": "LDLR", "value": 0.2},
{"source": "HSPA8", "target": "RAB5C", "value": 0.2},
{"source": "HSPA8", "target": "NUP37", "value": 0.2},
{"source": "HSPA8", "target": "UBC", "value": 0.2},
{"source": "HSPA8", "target": "CLTC", "value": 0.2},
{"source": "HSPA8", "target": "POLR2A", "value": 0.2},
{"source": "RPS24", "target": "MRPS10", "value": 0.2},
{"source": "RPS24", "target": "PSMC4", "value": 0.2},
{"source": "RPS24", "target": "EEF1A2", "value": 0.2},
{"source": "RPS24", "target": "EIF3E", "value": 0.2},
{"source": "RPS24", "target": "RPL18A", "value": 0.2},
{"source": "RPS24", "target": "KRR1", "value": 0.2},
{"source": "RPS24", "target": "RPS12", "value": 0.2},
{"source": "RPS24", "target": "BYSL", "value": 0.2},
{"source": "RPS24", "target": "RRP9", "value": 0.2},
{"source": "RPS24", "target": "RPS16", "value": 0.2},
{"source": "RPS24", "target": "EIF2S3", "value": 0.2},
{"source": "RPS24", "target": "EIF3G", "value": 0.2},
{"source": "RPS24", "target": "EIF2S1", "value": 0.2},
{"source": "RPS24", "target": "NAT10", "value": 0.2},
{"source": "RPS24", "target": "CCT7", "value": 0.2},
{"source": "RPS24", "target": "PSMC1", "value": 0.2},
{"source": "RPS24", "target": "NOP58", "value": 0.2},
{"source": "RPS24", "target": "SRP14", "value": 0.2},
{"source": "RPS24", "target": "RPS3", "value": 0.2},
{"source": "RPS24", "target": "EIF5B", "value": 0.2},
{"source": "RPS24", "target": "RPS23", "value": 0.2},
{"source": "RPS24", "target": "UTP15", "value": 0.2},
{"source": "RPS24", "target": "RPL10L", "value": 0.2},
{"source": "RPS24", "target": "TSR1", "value": 0.2},
{"source": "RPS24", "target": "EEF2", "value": 0.2},
{"source": "RPS24", "target": "MRPL11", "value": 0.2},
{"source": "RPS24", "target": "RPL38", "value": 0.2},
{"source": "RPS24", "target": "SRP68", "value": 0.2},
{"source": "RPS24", "target": "RPS15A", "value": 0.2},
{"source": "RPS24", "target": "RPLP2", "value": 0.2},
{"source": "RPS24", "target": "PLEC1", "value": 0.2},
{"source": "RPS24", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS24", "target": "RPS27L", "value": 0.2},
{"source": "RPS24", "target": "RPS7", "value": 0.2},
{"source": "RPS24", "target": "RPS21", "value": 0.2},
{"source": "RPS24", "target": "RPL3", "value": 0.2},
{"source": "RPS24", "target": "RPL21", "value": 0.2},
{"source": "RPS24", "target": "RPSA", "value": 0.2},
{"source": "RPS24", "target": "RPS26", "value": 0.2},
{"source": "RPS24", "target": "EIF3B", "value": 0.2},
{"source": "RPS24", "target": "RPL12", "value": 0.2},
{"source": "RPS24", "target": "RPS27", "value": 0.2},
{"source": "RPS24", "target": "PDCD11", "value": 0.2},
{"source": "RPS24", "target": "RPL5", "value": 0.2},
{"source": "RPS24", "target": "RPS6", "value": 0.2},
{"source": "RPS24", "target": "CCT4", "value": 0.2},
{"source": "RPS24", "target": "RPL14", "value": 0.2},
{"source": "RPS24", "target": "RPS8", "value": 0.2},
{"source": "RPS24", "target": "RPL9", "value": 0.2},
{"source": "RPS24", "target": "NOP14", "value": 0.2},
{"source": "RPS24", "target": "RPL30", "value": 0.2},
{"source": "RPS24", "target": "RPL23", "value": 0.2},
{"source": "RPS24", "target": "EMG1", "value": 0.2},
{"source": "RPS24", "target": "RPL36", "value": 0.2},
{"source": "RPS24", "target": "EIF3M", "value": 0.2},
{"source": "RPS24", "target": "RPL28", "value": 0.2},
{"source": "RPS24", "target": "RPL35A", "value": 0.2},
{"source": "RPS24", "target": "RPS5", "value": 0.2},
{"source": "RPS24", "target": "FAU", "value": 0.2},
{"source": "RPS24", "target": "RPL29", "value": 0.2},
{"source": "RPS24", "target": "WDR36", "value": 0.2},
{"source": "RPS24", "target": "RPL27", "value": 0.2},
{"source": "RPS24", "target": "RPS15", "value": 0.2},
{"source": "RPS24", "target": "BOP1", "value": 0.2},
{"source": "HGS", "target": "APOB", "value": 0.2},
{"source": "HGS", "target": "VAMP4", "value": 0.2},
{"source": "HGS", "target": "SNX1", "value": 0.2},
{"source": "HGS", "target": "ARPC1A", "value": 0.2},
{"source": "HGS", "target": "PACSIN2", "value": 0.2},
{"source": "HGS", "target": "RAB7A", "value": 0.2},
{"source": "HGS", "target": "AP2M1", "value": 0.2},
{"source": "HGS", "target": "ARPC5", "value": 0.2},
{"source": "HGS", "target": "ARPC2", "value": 0.2},
{"source": "HGS", "target": "VPS35", "value": 0.2},
{"source": "HGS", "target": "CLTB", "value": 0.2},
{"source": "HGS", "target": "VAMP2", "value": 0.2},
{"source": "HGS", "target": "EPN1", "value": 0.2},
{"source": "HGS", "target": "IGF2R", "value": 0.2},
{"source": "HGS", "target": "RAB5B", "value": 0.2},
{"source": "HGS", "target": "TGOLN2", "value": 0.2},
{"source": "HGS", "target": "SRC", "value": 0.2},
{"source": "HGS", "target": "CLTC", "value": 0.2},
{"source": "HGS", "target": "REPS1", "value": 0.2},
{"source": "HGS", "target": "ARPC4", "value": 0.2},
{"source": "HGS", "target": "LDLRAP1", "value": 0.2},
{"source": "HGS", "target": "FNBP1", "value": 0.2},
{"source": "HGS", "target": "TFRC", "value": 0.2},
{"source": "HGS", "target": "ITCH", "value": 0.2},
{"source": "HGS", "target": "LDLR", "value": 0.2},
{"source": "HGS", "target": "RAB5C", "value": 0.2},
{"source": "HGS", "target": "UBC", "value": 0.2},
{"source": "TRIM21", "target": "STUB1", "value": 0.2},
{"source": "TRIM21", "target": "UBE3A", "value": 0.2},
{"source": "TRIM21", "target": "HLA-B", "value": 0.2},
{"source": "TRIM21", "target": "B2M", "value": 0.2},
{"source": "TRIM21", "target": "HLA-C", "value": 0.2},
{"source": "TRIM21", "target": "RNF220", "value": 0.2},
{"source": "TRIM21", "target": "KBTBD7", "value": 0.2},
{"source": "TRIM21", "target": "UBE2J1", "value": 0.2},
{"source": "TRIM21", "target": "HLA-E", "value": 0.2},
{"source": "TRIM21", "target": "RNF130", "value": 0.2},
{"source": "TRIM21", "target": "ITCH", "value": 0.2},
{"source": "TRIM21", "target": "PARK2", "value": 0.2},
{"source": "TRIM21", "target": "UBE3C", "value": 0.2},
{"source": "TRIM21", "target": "HSPBP1", "value": 0.2},
{"source": "TRIM21", "target": "MGRN1", "value": 0.2},
{"source": "TRIM21", "target": "CUL3", "value": 0.2},
{"source": "TRIM21", "target": "KBTBD6", "value": 0.2},
{"source": "TRIM21", "target": "TCEB1", "value": 0.2},
{"source": "TRIM21", "target": "UBA1", "value": 0.2},
{"source": "TRIM21", "target": "UBR2", "value": 0.2},
{"source": "TRIM21", "target": "FBXL4", "value": 0.2},
{"source": "TRIM21", "target": "CUL5", "value": 0.2},
{"source": "TRIM21", "target": "HLA-DRB1", "value": 0.2},
{"source": "TRIM21", "target": "UBR4", "value": 0.2},
{"source": "TRIM21", "target": "HUWE1", "value": 0.2},
{"source": "TRIM21", "target": "UBC", "value": 0.2},
{"source": "TRIM21", "target": "HLA-A", "value": 0.2},
{"source": "TRIM21", "target": "UFL1", "value": 0.2},
{"source": "TRIM21", "target": "HERC1", "value": 0.2},
{"source": "TRIM21", "target": "WWP1", "value": 0.2},
{"source": "TRIM21", "target": "NEDD4", "value": 0.2},
{"source": "RPL14", "target": "MRPS10", "value": 0.2},
{"source": "RPL14", "target": "EIF3E", "value": 0.2},
{"source": "RPL14", "target": "RPL18A", "value": 0.2},
{"source": "RPL14", "target": "RPS12", "value": 0.2},
{"source": "RPL14", "target": "SKIV2L2", "value": 0.2},
{"source": "RPL14", "target": "RPS16", "value": 0.2},
{"source": "RPL14", "target": "EIF2S3", "value": 0.2},
{"source": "RPL14", "target": "EIF3G", "value": 0.2},
{"source": "RPL14", "target": "EIF2S1", "value": 0.2},
{"source": "RPL14", "target": "CCT7", "value": 0.2},
{"source": "RPL14", "target": "PSMD11", "value": 0.2},
{"source": "RPL14", "target": "EXOSC7", "value": 0.2},
{"source": "RPL14", "target": "SRP14", "value": 0.2},
{"source": "RPL14", "target": "RPS3", "value": 0.2},
{"source": "RPL14", "target": "EIF5B", "value": 0.2},
{"source": "RPL14", "target": "RPS23", "value": 0.2},
{"source": "RPL14", "target": "RPL10L", "value": 0.2},
{"source": "RPL14", "target": "EEF2", "value": 0.2},
{"source": "RPL14", "target": "PSMD1", "value": 0.2},
{"source": "RPL14", "target": "RPL38", "value": 0.2},
{"source": "RPL14", "target": "SRP68", "value": 0.2},
{"source": "RPL14", "target": "RPS15A", "value": 0.2},
{"source": "RPL14", "target": "RPLP2", "value": 0.2},
{"source": "RPL14", "target": "PLEC1", "value": 0.2},
{"source": "RPL14", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL14", "target": "RPS27L", "value": 0.2},
{"source": "RPL14", "target": "RPS7", "value": 0.2},
{"source": "RPL14", "target": "RPS21", "value": 0.2},
{"source": "RPL14", "target": "RPL3", "value": 0.2},
{"source": "RPL14", "target": "RPL21", "value": 0.2},
{"source": "RPL14", "target": "RPSA", "value": 0.2},
{"source": "RPL14", "target": "RPS26", "value": 0.2},
{"source": "RPL14", "target": "EIF3B", "value": 0.2},
{"source": "RPL14", "target": "RPL12", "value": 0.2},
{"source": "RPL14", "target": "RPS27", "value": 0.2},
{"source": "RPL14", "target": "RPL5", "value": 0.2},
{"source": "RPL14", "target": "EXOSC1", "value": 0.2},
{"source": "RPL14", "target": "RPS6", "value": 0.2},
{"source": "RPL14", "target": "EXOSC8", "value": 0.2},
{"source": "RPL14", "target": "CCT4", "value": 0.2},
{"source": "RPL14", "target": "RPL35A", "value": 0.2},
{"source": "RPL14", "target": "RPS8", "value": 0.2},
{"source": "RPL14", "target": "RPS5", "value": 0.2},
{"source": "RPL14", "target": "RPL27", "value": 0.2},
{"source": "RPL14", "target": "EIF3M", "value": 0.2},
{"source": "RPL14", "target": "RPL23", "value": 0.2},
{"source": "RPL14", "target": "RPL36", "value": 0.2},
{"source": "RPL14", "target": "RPL9", "value": 0.2},
{"source": "RPL14", "target": "FAU", "value": 0.2},
{"source": "RPL14", "target": "RPL30", "value": 0.2},
{"source": "RPL14", "target": "WDR18", "value": 0.2},
{"source": "RPL14", "target": "RPL29", "value": 0.2},
{"source": "RPL14", "target": "RPL28", "value": 0.2},
{"source": "RPL14", "target": "RPF2", "value": 0.2},
{"source": "RPL14", "target": "RPS15", "value": 0.2},
{"source": "RPL14", "target": "BOP1", "value": 0.2},
{"source": "RPA1", "target": "RFC2", "value": 0.2},
{"source": "RPA1", "target": "MCM5", "value": 0.2},
{"source": "RPA1", "target": "POLR2C", "value": 0.2},
{"source": "RPA1", "target": "RPA3", "value": 0.2},
{"source": "RPA1", "target": "PRPF19", "value": 0.2},
{"source": "RPA1", "target": "MSH6", "value": 0.2},
{"source": "RPA1", "target": "WDR48", "value": 0.2},
{"source": "RPA1", "target": "DDB2", "value": 0.2},
{"source": "RPA1", "target": "XPC", "value": 0.2},
{"source": "RPA1", "target": "PPP4R2", "value": 0.2},
{"source": "RPA1", "target": "PARP1", "value": 0.2},
{"source": "RPA1", "target": "POLR2A", "value": 0.2},
{"source": "RPA1", "target": "POLR2B", "value": 0.2},
{"source": "RPA1", "target": "POLA1", "value": 0.2},
{"source": "RPA1", "target": "SMC2", "value": 0.2},
{"source": "RPA1", "target": "ATM", "value": 0.2},
{"source": "RPA1", "target": "TP53BP1", "value": 0.2},
{"source": "RPA1", "target": "TRIM25", "value": 0.2},
{"source": "RPA1", "target": "MCM4", "value": 0.2},
{"source": "RPA1", "target": "XAB2", "value": 0.2},
{"source": "RPA1", "target": "MCM6", "value": 0.2},
{"source": "RPA1", "target": "RPA2", "value": 0.2},
{"source": "RPA1", "target": "POLE", "value": 0.2},
{"source": "RPA1", "target": "MCM7", "value": 0.2},
{"source": "RPA1", "target": "RAD50", "value": 0.2},
{"source": "RPA1", "target": "LMNB1", "value": 0.2},
{"source": "RPA1", "target": "USP7", "value": 0.2},
{"source": "RPA1", "target": "ORC4", "value": 0.2},
{"source": "RPA1", "target": "DDB1", "value": 0.2},
{"source": "RPA1", "target": "UBC", "value": 0.2},
{"source": "KBTBD6", "target": "STUB1", "value": 0.2},
{"source": "KBTBD6", "target": "UBE3A", "value": 0.2},
{"source": "KBTBD6", "target": "MGRN1", "value": 0.2},
{"source": "KBTBD6", "target": "CUL3", "value": 0.2},
{"source": "KBTBD6", "target": "UBE3C", "value": 0.2},
{"source": "KBTBD6", "target": "UBA1", "value": 0.2},
{"source": "KBTBD6", "target": "HUWE1", "value": 0.2},
{"source": "KBTBD6", "target": "RNF220", "value": 0.2},
{"source": "KBTBD6", "target": "PARK2", "value": 0.2},
{"source": "KBTBD6", "target": "FBXL4", "value": 0.2},
{"source": "KBTBD6", "target": "UFL1", "value": 0.2},
{"source": "KBTBD6", "target": "UBR2", "value": 0.2},
{"source": "KBTBD6", "target": "UBR4", "value": 0.2},
{"source": "KBTBD6", "target": "KBTBD7", "value": 0.2},
{"source": "KBTBD6", "target": "ITCH", "value": 0.2},
{"source": "KBTBD6", "target": "WWP1", "value": 0.2},
{"source": "KBTBD6", "target": "HERC1", "value": 0.2},
{"source": "KBTBD6", "target": "UBE2J1", "value": 0.2},
{"source": "KBTBD6", "target": "RNF130", "value": 0.2},
{"source": "KBTBD6", "target": "NEDD4", "value": 0.2},
{"source": "KBTBD6", "target": "UBC", "value": 0.2},
{"source": "KBTBD6", "target": "TCEB1", "value": 0.2},
{"source": "KBTBD6", "target": "CUL5", "value": 0.2},
{"source": "CAPZA1", "target": "ARF5", "value": 0.2},
{"source": "CAPZA1", "target": "BET1", "value": 0.2},
{"source": "CAPZA1", "target": "YKT6", "value": 0.2},
{"source": "CAPZA1", "target": "GOSR1", "value": 0.2},
{"source": "CAPZA1", "target": "COPB1", "value": 0.2},
{"source": "CAPZA1", "target": "DYNC1LI2", "value": 0.2},
{"source": "CAPZA1", "target": "COG3", "value": 0.2},
{"source": "CAPZA1", "target": "KIF11", "value": 0.2},
{"source": "CAPZA1", "target": "TMED2", "value": 0.2},
{"source": "CAPZA1", "target": "COPE", "value": 0.2},
{"source": "CAPZA1", "target": "ARPC1A", "value": 0.2},
{"source": "CAPZA1", "target": "DCTN1", "value": 0.2},
{"source": "CAPZA1", "target": "COPZ1", "value": 0.2},
{"source": "CAPZA1", "target": "GOLGB1", "value": 0.2},
{"source": "CAPZA1", "target": "TMED10", "value": 0.2},
{"source": "CAPZA1", "target": "ARPC2", "value": 0.2},
{"source": "CAPZA1", "target": "DCTN2", "value": 0.2},
{"source": "CAPZA1", "target": "TMED9", "value": 0.2},
{"source": "CAPZA1", "target": "ACTR1A", "value": 0.2},
{"source": "CAPZA1", "target": "DYNC1H1", "value": 0.2},
{"source": "CAPZA1", "target": "HSP90AB1", "value": 0.2},
{"source": "CAPZA1", "target": "BET1L", "value": 0.2},
{"source": "CAPZA1", "target": "DYNC1I2", "value": 0.2},
{"source": "CAPZA1", "target": "RAB7A", "value": 0.2},
{"source": "CAPZA1", "target": "COG1", "value": 0.2},
{"source": "CAPZA1", "target": "COPB2", "value": 0.2},
{"source": "CAPZA1", "target": "COG2", "value": 0.2},
{"source": "CAPZA1", "target": "COPG1", "value": 0.2},
{"source": "CAPZA1", "target": "ACTR1B", "value": 0.2},
{"source": "CAPZA1", "target": "USO1", "value": 0.2},
{"source": "CAPZA1", "target": "HLA-DMB", "value": 0.2},
{"source": "CAPZA1", "target": "COPG2", "value": 0.2},
{"source": "CAPZA1", "target": "KDELR1", "value": 0.2},
{"source": "CAPZA1", "target": "PAFAH1B1", "value": 0.2},
{"source": "CAPZA1", "target": "RAB1B", "value": 0.2},
{"source": "CAPZA1", "target": "SPTBN2", "value": 0.2},
{"source": "CAPZA1", "target": "STX5", "value": 0.2},
{"source": "CAPZA1", "target": "KIF5B", "value": 0.2},
{"source": "CAPZA1", "target": "RAB1A", "value": 0.2},
{"source": "CAPZA1", "target": "HLA-DRB1", "value": 0.2},
{"source": "CAPZA1", "target": "ARCN1", "value": 0.2},
{"source": "CAPZA1", "target": "CAPZB", "value": 0.2},
{"source": "CAPZA1", "target": "HSP90AA1", "value": 0.2},
{"source": "CAPZA1", "target": "ARF4", "value": 0.2},
{"source": "MBP", "target": "PRMT5", "value": 0.2},
{"source": "MBP", "target": "MAG", "value": 0.2},
{"source": "MBP", "target": "CNP", "value": 0.2},
{"source": "RPS27", "target": "MRPS10", "value": 0.2},
{"source": "RPS27", "target": "PSMC4", "value": 0.2},
{"source": "RPS27", "target": "ZW10", "value": 0.2},
{"source": "RPS27", "target": "EEF1A2", "value": 0.2},
{"source": "RPS27", "target": "EIF3E", "value": 0.2},
{"source": "RPS27", "target": "PPP2CB", "value": 0.2},
{"source": "RPS27", "target": "RPL18A", "value": 0.2},
{"source": "RPS27", "target": "KRR1", "value": 0.2},
{"source": "RPS27", "target": "RPS12", "value": 0.2},
{"source": "RPS27", "target": "BYSL", "value": 0.2},
{"source": "RPS27", "target": "RRP9", "value": 0.2},
{"source": "RPS27", "target": "RPS16", "value": 0.2},
{"source": "RPS27", "target": "EIF2S3", "value": 0.2},
{"source": "RPS27", "target": "EIF3G", "value": 0.2},
{"source": "RPS27", "target": "EIF2S1", "value": 0.2},
{"source": "RPS27", "target": "DYNC1LI2", "value": 0.2},
{"source": "RPS27", "target": "PSMC1", "value": 0.2},
{"source": "RPS27", "target": "PPP2R5A", "value": 0.2},
{"source": "RPS27", "target": "NOP58", "value": 0.2},
{"source": "RPS27", "target": "SRP14", "value": 0.2},
{"source": "RPS27", "target": "RPS3", "value": 0.2},
{"source": "RPS27", "target": "EIF5B", "value": 0.2},
{"source": "RPS27", "target": "RPS23", "value": 0.2},
{"source": "RPS27", "target": "UTP15", "value": 0.2},
{"source": "RPS27", "target": "RPL10L", "value": 0.2},
{"source": "RPS27", "target": "TSR1", "value": 0.2},
{"source": "RPS27", "target": "EEF2", "value": 0.2},
{"source": "RPS27", "target": "MRPL11", "value": 0.2},
{"source": "RPS27", "target": "RPL38", "value": 0.2},
{"source": "RPS27", "target": "SRP68", "value": 0.2},
{"source": "RPS27", "target": "RPS15A", "value": 0.2},
{"source": "RPS27", "target": "NUDC", "value": 0.2},
{"source": "RPS27", "target": "RPLP2", "value": 0.2},
{"source": "RPS27", "target": "SMC1A", "value": 0.2},
{"source": "RPS27", "target": "PLEC1", "value": 0.2},
{"source": "RPS27", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS27", "target": "RPS27L", "value": 0.2},
{"source": "RPS27", "target": "RPS7", "value": 0.2},
{"source": "RPS27", "target": "PPP1CC", "value": 0.2},
{"source": "RPS27", "target": "RPS21", "value": 0.2},
{"source": "RPS27", "target": "RPL3", "value": 0.2},
{"source": "RPS27", "target": "RPL21", "value": 0.2},
{"source": "RPS27", "target": "RPSA", "value": 0.2},
{"source": "RPS27", "target": "RPS26", "value": 0.2},
{"source": "RPS27", "target": "DYNC1H1", "value": 0.2},
{"source": "RPS27", "target": "EIF3B", "value": 0.2},
{"source": "RPS27", "target": "RPL12", "value": 0.2},
{"source": "RPS27", "target": "EIF3M", "value": 0.2},
{"source": "RPS27", "target": "BUB3", "value": 0.2},
{"source": "RPS27", "target": "PAFAH1B1", "value": 0.2},
{"source": "RPS27", "target": "RPL36", "value": 0.2},
{"source": "RPS27", "target": "RANGAP1", "value": 0.2},
{"source": "RPS27", "target": "RPL35A", "value": 0.2},
{"source": "RPS27", "target": "SEC13", "value": 0.2},
{"source": "RPS27", "target": "RPL30", "value": 0.2},
{"source": "RPS27", "target": "MAPRE1", "value": 0.2},
{"source": "RPS27", "target": "RPL29", "value": 0.2},
{"source": "RPS27", "target": "NUP37", "value": 0.2},
{"source": "RPS27", "target": "RPS5", "value": 0.2},
{"source": "RPS27", "target": "RPL5", "value": 0.2},
{"source": "RPS27", "target": "MAD1L1", "value": 0.2},
{"source": "RPS27", "target": "WDR36", "value": 0.2},
{"source": "RPS27", "target": "RPS6", "value": 0.2},
{"source": "RPS27", "target": "RCC2", "value": 0.2},
{"source": "RPS27", "target": "RPL27", "value": 0.2},
{"source": "RPS27", "target": "RPS15", "value": 0.2},
{"source": "RPS27", "target": "DYNC1I2", "value": 0.2},
{"source": "RPS27", "target": "FAU", "value": 0.2},
{"source": "RPS27", "target": "EMG1", "value": 0.2},
{"source": "RPS27", "target": "CKAP5", "value": 0.2},
{"source": "RPS27", "target": "RPL23", "value": 0.2},
{"source": "RPS27", "target": "PDCD11", "value": 0.2},
{"source": "RPS27", "target": "BOP1", "value": 0.2},
{"source": "RPS27", "target": "NOP14", "value": 0.2},
{"source": "RPS27", "target": "RPL9", "value": 0.2},
{"source": "RPS27", "target": "RPS8", "value": 0.2},
{"source": "RPS27", "target": "RPL28", "value": 0.2},
{"source": "RPL5", "target": "MRPS10", "value": 0.2},
{"source": "RPL5", "target": "PSMC4", "value": 0.2},
{"source": "RPL5", "target": "EEF1A2", "value": 0.2},
{"source": "RPL5", "target": "POLR2C", "value": 0.2},
{"source": "RPL5", "target": "EIF3E", "value": 0.2},
{"source": "RPL5", "target": "RPL18A", "value": 0.2},
{"source": "RPL5", "target": "RPS12", "value": 0.2},
{"source": "RPL5", "target": "SKIV2L2", "value": 0.2},
{"source": "RPL5", "target": "RPS16", "value": 0.2},
{"source": "RPL5", "target": "EIF2S3", "value": 0.2},
{"source": "RPL5", "target": "EIF3G", "value": 0.2},
{"source": "RPL5", "target": "HSPBP1", "value": 0.2},
{"source": "RPL5", "target": "EIF2S1", "value": 0.2},
{"source": "RPL5", "target": "CCT7", "value": 0.2},
{"source": "RPL5", "target": "PSMC1", "value": 0.2},
{"source": "RPL5", "target": "NOP58", "value": 0.2},
{"source": "RPL5", "target": "EXOSC7", "value": 0.2},
{"source": "RPL5", "target": "SRP14", "value": 0.2},
{"source": "RPL5", "target": "RPS3", "value": 0.2},
{"source": "RPL5", "target": "EIF5B", "value": 0.2},
{"source": "RPL5", "target": "KPNB1", "value": 0.2},
{"source": "RPL5", "target": "RPS23", "value": 0.2},
{"source": "RPL5", "target": "RPL10L", "value": 0.2},
{"source": "RPL5", "target": "EEF2", "value": 0.2},
{"source": "RPL5", "target": "MRPL11", "value": 0.2},
{"source": "RPL5", "target": "RPL38", "value": 0.2},
{"source": "RPL5", "target": "SRP68", "value": 0.2},
{"source": "RPL5", "target": "RPS15A", "value": 0.2},
{"source": "RPL5", "target": "RRS1", "value": 0.2},
{"source": "RPL5", "target": "RPLP2", "value": 0.2},
{"source": "RPL5", "target": "PLEC1", "value": 0.2},
{"source": "RPL5", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL5", "target": "RPS27L", "value": 0.2},
{"source": "RPL5", "target": "RPS7", "value": 0.2},
{"source": "RPL5", "target": "RPS21", "value": 0.2},
{"source": "RPL5", "target": "RPL3", "value": 0.2},
{"source": "RPL5", "target": "RPL21", "value": 0.2},
{"source": "RPL5", "target": "RPSA", "value": 0.2},
{"source": "RPL5", "target": "RPS26", "value": 0.2},
{"source": "RPL5", "target": "GTPBP4", "value": 0.2},
{"source": "RPL5", "target": "EIF3B", "value": 0.2},
{"source": "RPL5", "target": "RPL12", "value": 0.2},
{"source": "RPL5", "target": "PDCD11", "value": 0.2},
{"source": "RPL5", "target": "BOP1", "value": 0.2},
{"source": "RPL5", "target": "RPL29", "value": 0.2},
{"source": "RPL5", "target": "EXOSC1", "value": 0.2},
{"source": "RPL5", "target": "RPL9", "value": 0.2},
{"source": "RPL5", "target": "RPF2", "value": 0.2},
{"source": "RPL5", "target": "RPL36", "value": 0.2},
{"source": "RPL5", "target": "RPL27", "value": 0.2},
{"source": "RPL5", "target": "EIF3M", "value": 0.2},
{"source": "RPL5", "target": "RPS8", "value": 0.2},
{"source": "RPL5", "target": "RPL23", "value": 0.2},
{"source": "RPL5", "target": "WDR18", "value": 0.2},
{"source": "RPL5", "target": "EXOSC8", "value": 0.2},
{"source": "RPL5", "target": "CCT4", "value": 0.2},
{"source": "RPL5", "target": "RPS5", "value": 0.2},
{"source": "RPL5", "target": "RPS6", "value": 0.2},
{"source": "RPL5", "target": "RPL28", "value": 0.2},
{"source": "RPL5", "target": "RPL35A", "value": 0.2},
{"source": "RPL5", "target": "FAU", "value": 0.2},
{"source": "RPL5", "target": "RPS15", "value": 0.2},
{"source": "RPL5", "target": "RPL30", "value": 0.2},
{"source": "DGKA", "target": "AGPAT5", "value": 0.2},
{"source": "DGKA", "target": "PLCG2", "value": 0.2},
{"source": "DGKA", "target": "PFKM", "value": 0.2},
{"source": "DGKA", "target": "CDS2", "value": 0.2},
{"source": "STAT6", "target": "CREBBP", "value": 0.2},
{"source": "STAT6", "target": "HLA-DRB1", "value": 0.2},
{"source": "STAT6", "target": "HSP90AA1", "value": 0.2},
{"source": "STAT6", "target": "PTPN2", "value": 0.2},
{"source": "STAT6", "target": "ITGB1", "value": 0.2},
{"source": "STAT6", "target": "FSCN1", "value": 0.2},
{"source": "STAT6", "target": "SEC24A", "value": 0.2},
{"source": "STAT6", "target": "ITGB2", "value": 0.2},
{"source": "MCM4", "target": "RFC2", "value": 0.2},
{"source": "MCM4", "target": "MCM5", "value": 0.2},
{"source": "MCM4", "target": "RPA3", "value": 0.2},
{"source": "MCM4", "target": "MSH6", "value": 0.2},
{"source": "MCM4", "target": "KIF11", "value": 0.2},
{"source": "MCM4", "target": "SMC4", "value": 0.2},
{"source": "MCM4", "target": "MCM7", "value": 0.2},
{"source": "MCM4", "target": "WDR18", "value": 0.2},
{"source": "MCM4", "target": "SMC1A", "value": 0.2},
{"source": "MCM4", "target": "DCTN2", "value": 0.2},
{"source": "MCM4", "target": "ORC4", "value": 0.2},
{"source": "MCM4", "target": "SMC2", "value": 0.2},
{"source": "MCM4", "target": "RPA2", "value": 0.2},
{"source": "MCM4", "target": "POLE", "value": 0.2},
{"source": "MCM4", "target": "DUT", "value": 0.2},
{"source": "MCM4", "target": "POLA1", "value": 0.2},
{"source": "MCM4", "target": "MCM6", "value": 0.2},
{"source": "MCM4", "target": "UBC", "value": 0.2},
{"source": "MCM4", "target": "TOP2A", "value": 0.2},
{"source": "ZBTB22", "target": "DAXX", "value": 0.2},
{"source": "ZBTB22", "target": "TAPBP", "value": 0.2},
{"source": "DCTN2", "target": "ARF5", "value": 0.2},
{"source": "DCTN2", "target": "ZW10", "value": 0.2},
{"source": "DCTN2", "target": "BET1", "value": 0.2},
{"source": "DCTN2", "target": "YKT6", "value": 0.2},
{"source": "DCTN2", "target": "GOSR1", "value": 0.2},
{"source": "DCTN2", "target": "COPB1", "value": 0.2},
{"source": "DCTN2", "target": "DYNC1LI2", "value": 0.2},
{"source": "DCTN2", "target": "COG3", "value": 0.2},
{"source": "DCTN2", "target": "KIF11", "value": 0.2},
{"source": "DCTN2", "target": "TMED2", "value": 0.2},
{"source": "DCTN2", "target": "COPE", "value": 0.2},
{"source": "DCTN2", "target": "ARCN1", "value": 0.2},
{"source": "DCTN2", "target": "MCM6", "value": 0.2},
{"source": "DCTN2", "target": "YWHAE", "value": 0.2},
{"source": "DCTN2", "target": "CEP72", "value": 0.2},
{"source": "DCTN2", "target": "RAB7A", "value": 0.2},
{"source": "DCTN2", "target": "ACTR1B", "value": 0.2},
{"source": "DCTN2", "target": "STX5", "value": 0.2},
{"source": "DCTN2", "target": "COG1", "value": 0.2},
{"source": "DCTN2", "target": "RAB8A", "value": 0.2},
{"source": "DCTN2", "target": "TMED10", "value": 0.2},
{"source": "DCTN2", "target": "ARF4", "value": 0.2},
{"source": "DCTN2", "target": "KIF5B", "value": 0.2},
{"source": "DCTN2", "target": "MCM7", "value": 0.2},
{"source": "DCTN2", "target": "RAB1B", "value": 0.2},
{"source": "DCTN2", "target": "PPP2R1A", "value": 0.2},
{"source": "DCTN2", "target": "COPG1", "value": 0.2},
{"source": "DCTN2", "target": "COPB2", "value": 0.2},
{"source": "DCTN2", "target": "KDELR1", "value": 0.2},
{"source": "DCTN2", "target": "TMED9", "value": 0.2},
{"source": "DCTN2", "target": "HSP90AA1", "value": 0.2},
{"source": "DCTN2", "target": "TUBB", "value": 0.2},
{"source": "DCTN2", "target": "TUBB4B", "value": 0.2},
{"source": "DCTN2", "target": "CDK5RAP2", "value": 0.2},
{"source": "DCTN2", "target": "OFD1", "value": 0.2},
{"source": "DCTN2", "target": "DYNC1H1", "value": 0.2},
{"source": "DCTN2", "target": "HLA-DRB1", "value": 0.2},
{"source": "DCTN2", "target": "DCTN1", "value": 0.2},
{"source": "DCTN2", "target": "COG2", "value": 0.2},
{"source": "DCTN2", "target": "ACTA1", "value": 0.2},
{"source": "DCTN2", "target": "ACTR1A", "value": 0.2},
{"source": "DCTN2", "target": "HSP90AB1", "value": 0.2},
{"source": "DCTN2", "target": "MAPRE1", "value": 0.2},
{"source": "DCTN2", "target": "KIF24", "value": 0.2},
{"source": "DCTN2", "target": "HAUS6", "value": 0.2},
{"source": "DCTN2", "target": "BET1L", "value": 0.2},
{"source": "DCTN2", "target": "MKS1", "value": 0.2},
{"source": "DCTN2", "target": "GOLGB1", "value": 0.2},
{"source": "DCTN2", "target": "DYNC1I2", "value": 0.2},
{"source": "DCTN2", "target": "PAFAH1B1", "value": 0.2},
{"source": "DCTN2", "target": "RAB1A", "value": 0.2},
{"source": "DCTN2", "target": "HLA-DMB", "value": 0.2},
{"source": "DCTN2", "target": "CAPZB", "value": 0.2},
{"source": "DCTN2", "target": "COPG2", "value": 0.2},
{"source": "DCTN2", "target": "CKAP5", "value": 0.2},
{"source": "DCTN2", "target": "TCTN3", "value": 0.2},
{"source": "DCTN2", "target": "NEDD1", "value": 0.2},
{"source": "DCTN2", "target": "USO1", "value": 0.2},
{"source": "DCTN2", "target": "COPZ1", "value": 0.2},
{"source": "DCTN2", "target": "SPTBN2", "value": 0.2},
{"source": "GNAQ", "target": "FZD1", "value": 0.2},
{"source": "GNAQ", "target": "ANXA1", "value": 0.2},
{"source": "GNAQ", "target": "S1PR3", "value": 0.2},
{"source": "GNAQ", "target": "GPR39", "value": 0.2},
{"source": "GNAQ", "target": "S1PR2", "value": 0.2},
{"source": "GNAQ", "target": "ARHGEF1", "value": 0.2},
{"source": "GNAQ", "target": "GNA13", "value": 0.2},
{"source": "GNAQ", "target": "GNAI2", "value": 0.2},
{"source": "GNAQ", "target": "FZD2", "value": 0.2},
{"source": "GNAQ", "target": "RHOA", "value": 0.2},
{"source": "GNAQ", "target": "LPAR1", "value": 0.2},
{"source": "TMED2", "target": "ARF5", "value": 0.2},
{"source": "TMED2", "target": "ZW10", "value": 0.2},
{"source": "TMED2", "target": "BET1", "value": 0.2},
{"source": "TMED2", "target": "YKT6", "value": 0.2},
{"source": "TMED2", "target": "GOSR1", "value": 0.2},
{"source": "TMED2", "target": "COPB1", "value": 0.2},
{"source": "TMED2", "target": "DYNC1LI2", "value": 0.2},
{"source": "TMED2", "target": "COG3", "value": 0.2},
{"source": "TMED2", "target": "KIF11", "value": 0.2},
{"source": "TMED2", "target": "KIF5B", "value": 0.2},
{"source": "TMED2", "target": "ARF4", "value": 0.2},
{"source": "TMED2", "target": "COPG1", "value": 0.2},
{"source": "TMED2", "target": "ARCN1", "value": 0.2},
{"source": "TMED2", "target": "NAPA", "value": 0.2},
{"source": "TMED2", "target": "NOTCH1", "value": 0.2},
{"source": "TMED2", "target": "COG1", "value": 0.2},
{"source": "TMED2", "target": "ACTR1A", "value": 0.2},
{"source": "TMED2", "target": "DCTN1", "value": 0.2},
{"source": "TMED2", "target": "DYNC1H1", "value": 0.2},
{"source": "TMED2", "target": "COPG2", "value": 0.2},
{"source": "TMED2", "target": "COG2", "value": 0.2},
{"source": "TMED2", "target": "SEC24A", "value": 0.2},
{"source": "TMED2", "target": "BET1L", "value": 0.2},
{"source": "TMED2", "target": "SEC23A", "value": 0.2},
{"source": "TMED2", "target": "STX5", "value": 0.2},
{"source": "TMED2", "target": "SEC24C", "value": 0.2},
{"source": "TMED2", "target": "CAPZB", "value": 0.2},
{"source": "TMED2", "target": "COPE", "value": 0.2},
{"source": "TMED2", "target": "TMED9", "value": 0.2},
{"source": "TMED2", "target": "SEC13", "value": 0.2},
{"source": "TMED2", "target": "SPTBN2", "value": 0.2},
{"source": "TMED2", "target": "KDELR1", "value": 0.2},
{"source": "TMED2", "target": "RAB1B", "value": 0.2},
{"source": "TMED2", "target": "RAB1A", "value": 0.2},
{"source": "TMED2", "target": "USO1", "value": 0.2},
{"source": "TMED2", "target": "GOLGB1", "value": 0.2},
{"source": "TMED2", "target": "DYNC1I2", "value": 0.2},
{"source": "TMED2", "target": "TMED10", "value": 0.2},
{"source": "TMED2", "target": "NSF", "value": 0.2},
{"source": "TMED2", "target": "COPZ1", "value": 0.2},
{"source": "TMED2", "target": "COPB2", "value": 0.2},
{"source": "TMED2", "target": "SEC31A", "value": 0.2},
{"source": "S1PR2", "target": "ADCY9", "value": 0.2},
{"source": "S1PR2", "target": "ADCY6", "value": 0.2},
{"source": "S1PR2", "target": "GNAI2", "value": 0.2},
{"source": "S1PR2", "target": "LPAR1", "value": 0.2},
{"source": "S1PR2", "target": "S1PR3", "value": 0.2},
{"source": "S1PR2", "target": "ANXA1", "value": 0.2},
{"source": "S1PR2", "target": "RHOA", "value": 0.2},
{"source": "S1PR2", "target": "GNA13", "value": 0.2},
{"source": "S1PR2", "target": "PDYN", "value": 0.2},
{"source": "PTPN11", "target": "PPP2CB", "value": 0.2},
{"source": "PTPN11", "target": "APOB", "value": 0.2},
{"source": "PTPN11", "target": "PPP2R5A", "value": 0.2},
{"source": "PTPN11", "target": "CDH2", "value": 0.2},
{"source": "PTPN11", "target": "PPP2R1A", "value": 0.2},
{"source": "PTPN11", "target": "SMAD3", "value": 0.2},
{"source": "PTPN11", "target": "SRC", "value": 0.2},
{"source": "PTPN11", "target": "YES1", "value": 0.2},
{"source": "PTPN11", "target": "HLA-DRB1", "value": 0.2},
{"source": "PTPN11", "target": "CD47", "value": 0.2},
{"source": "PTPN11", "target": "LYN", "value": 0.2},
{"source": "PTPN11", "target": "ACTA1", "value": 0.2},
{"source": "PTPN11", "target": "RHOA", "value": 0.2},
{"source": "PTPN11", "target": "SHC1", "value": 0.2},
{"source": "PTPN11", "target": "UBC", "value": 0.2},
{"source": "PTPN11", "target": "IL6ST", "value": 0.2},
{"source": "STRAP", "target": "SMAD3", "value": 0.2},
{"source": "STRAP", "target": "SMN1", "value": 0.2},
{"source": "ACTR1B", "target": "DYNC1LI2", "value": 0.2},
{"source": "ACTR1B", "target": "KIF11", "value": 0.2},
{"source": "ACTR1B", "target": "RAB7A", "value": 0.2},
{"source": "ACTR1B", "target": "CAPZB", "value": 0.2},
{"source": "ACTR1B", "target": "ACTR1A", "value": 0.2},
{"source": "ACTR1B", "target": "SPTBN2", "value": 0.2},
{"source": "ACTR1B", "target": "HLA-DRB1", "value": 0.2},
{"source": "ACTR1B", "target": "DYNC1H1", "value": 0.2},
{"source": "ACTR1B", "target": "DYNC1I2", "value": 0.2},
{"source": "ACTR1B", "target": "DCTN1", "value": 0.2},
{"source": "ACTR1B", "target": "KIF5B", "value": 0.2},
{"source": "ACTR1B", "target": "HLA-DMB", "value": 0.2},
{"source": "INSL3", "target": "ADCY9", "value": 0.2},
{"source": "INSL3", "target": "ADCY6", "value": 0.2},
{"source": "INSL3", "target": "GPR39", "value": 0.2},
{"source": "NUDT21", "target": "POLR2C", "value": 0.2},
{"source": "NUDT21", "target": "DDX5", "value": 0.2},
{"source": "NUDT21", "target": "PRPF19", "value": 0.2},
{"source": "NUDT21", "target": "SKIV2L2", "value": 0.2},
{"source": "NUDT21", "target": "SNW1", "value": 0.2},
{"source": "NUDT21", "target": "ZC3H3", "value": 0.2},
{"source": "NUDT21", "target": "CPSF2", "value": 0.2},
{"source": "NUDT21", "target": "HNRNPUL1", "value": 0.2},
{"source": "NUDT21", "target": "POLR2B", "value": 0.2},
{"source": "NUDT21", "target": "XAB2", "value": 0.2},
{"source": "NUDT21", "target": "GTF2F2", "value": 0.2},
{"source": "NUDT21", "target": "POLR2A", "value": 0.2},
{"source": "NUDT21", "target": "DHX15", "value": 0.2},
{"source": "RPS5", "target": "MRPS10", "value": 0.2},
{"source": "RPS5", "target": "PSMC4", "value": 0.2},
{"source": "RPS5", "target": "EEF1A2", "value": 0.2},
{"source": "RPS5", "target": "POLR2C", "value": 0.2},
{"source": "RPS5", "target": "EIF3E", "value": 0.2},
{"source": "RPS5", "target": "RPL18A", "value": 0.2},
{"source": "RPS5", "target": "KRR1", "value": 0.2},
{"source": "RPS5", "target": "RPS12", "value": 0.2},
{"source": "RPS5", "target": "BYSL", "value": 0.2},
{"source": "RPS5", "target": "RRP9", "value": 0.2},
{"source": "RPS5", "target": "RPS16", "value": 0.2},
{"source": "RPS5", "target": "EIF2S3", "value": 0.2},
{"source": "RPS5", "target": "EIF3G", "value": 0.2},
{"source": "RPS5", "target": "EIF2S1", "value": 0.2},
{"source": "RPS5", "target": "NAT10", "value": 0.2},
{"source": "RPS5", "target": "CCT7", "value": 0.2},
{"source": "RPS5", "target": "PSMC1", "value": 0.2},
{"source": "RPS5", "target": "NOP58", "value": 0.2},
{"source": "RPS5", "target": "SRP14", "value": 0.2},
{"source": "RPS5", "target": "RPS3", "value": 0.2},
{"source": "RPS5", "target": "EIF5B", "value": 0.2},
{"source": "RPS5", "target": "RPS23", "value": 0.2},
{"source": "RPS5", "target": "UTP15", "value": 0.2},
{"source": "RPS5", "target": "RPL10L", "value": 0.2},
{"source": "RPS5", "target": "TSR1", "value": 0.2},
{"source": "RPS5", "target": "EEF2", "value": 0.2},
{"source": "RPS5", "target": "MRPL11", "value": 0.2},
{"source": "RPS5", "target": "RPL38", "value": 0.2},
{"source": "RPS5", "target": "SRP68", "value": 0.2},
{"source": "RPS5", "target": "RPS15A", "value": 0.2},
{"source": "RPS5", "target": "RPLP2", "value": 0.2},
{"source": "RPS5", "target": "PLEC1", "value": 0.2},
{"source": "RPS5", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS5", "target": "RPS27L", "value": 0.2},
{"source": "RPS5", "target": "RPS7", "value": 0.2},
{"source": "RPS5", "target": "RPS21", "value": 0.2},
{"source": "RPS5", "target": "RPL3", "value": 0.2},
{"source": "RPS5", "target": "RPL21", "value": 0.2},
{"source": "RPS5", "target": "RPSA", "value": 0.2},
{"source": "RPS5", "target": "RPS26", "value": 0.2},
{"source": "RPS5", "target": "EIF3B", "value": 0.2},
{"source": "RPS5", "target": "RPL12", "value": 0.2},
{"source": "RPS5", "target": "PDCD11", "value": 0.2},
{"source": "RPS5", "target": "RPS6", "value": 0.2},
{"source": "RPS5", "target": "POLR2B", "value": 0.2},
{"source": "RPS5", "target": "CCT4", "value": 0.2},
{"source": "RPS5", "target": "RPS8", "value": 0.2},
{"source": "RPS5", "target": "RPL9", "value": 0.2},
{"source": "RPS5", "target": "NOP14", "value": 0.2},
{"source": "RPS5", "target": "RPL29", "value": 0.2},
{"source": "RPS5", "target": "RPL35A", "value": 0.2},
{"source": "RPS5", "target": "RPL23", "value": 0.2},
{"source": "RPS5", "target": "WDR36", "value": 0.2},
{"source": "RPS5", "target": "RPL30", "value": 0.2},
{"source": "RPS5", "target": "FAU", "value": 0.2},
{"source": "RPS5", "target": "EIF3M", "value": 0.2},
{"source": "RPS5", "target": "POLR1B", "value": 0.2},
{"source": "RPS5", "target": "RPL28", "value": 0.2},
{"source": "RPS5", "target": "BOP1", "value": 0.2},
{"source": "RPS5", "target": "RPL36", "value": 0.2},
{"source": "RPS5", "target": "RPL27", "value": 0.2},
{"source": "RPS5", "target": "RPS15", "value": 0.2},
{"source": "RPS5", "target": "EMG1", "value": 0.2},
{"source": "RPS5", "target": "POLR2A", "value": 0.2},
{"source": "RPL36", "target": "MRPS10", "value": 0.2},
{"source": "RPL36", "target": "EIF3E", "value": 0.2},
{"source": "RPL36", "target": "RPL18A", "value": 0.2},
{"source": "RPL36", "target": "RPS12", "value": 0.2},
{"source": "RPL36", "target": "SKIV2L2", "value": 0.2},
{"source": "RPL36", "target": "RPS16", "value": 0.2},
{"source": "RPL36", "target": "EIF2S3", "value": 0.2},
{"source": "RPL36", "target": "EIF3G", "value": 0.2},
{"source": "RPL36", "target": "EIF2S1", "value": 0.2},
{"source": "RPL36", "target": "EXOSC7", "value": 0.2},
{"source": "RPL36", "target": "SRP14", "value": 0.2},
{"source": "RPL36", "target": "RPS3", "value": 0.2},
{"source": "RPL36", "target": "EIF5B", "value": 0.2},
{"source": "RPL36", "target": "RPS23", "value": 0.2},
{"source": "RPL36", "target": "RPL10L", "value": 0.2},
{"source": "RPL36", "target": "EEF2", "value": 0.2},
{"source": "RPL36", "target": "MRPL11", "value": 0.2},
{"source": "RPL36", "target": "RPL38", "value": 0.2},
{"source": "RPL36", "target": "SRP68", "value": 0.2},
{"source": "RPL36", "target": "RPS15A", "value": 0.2},
{"source": "RPL36", "target": "RPLP2", "value": 0.2},
{"source": "RPL36", "target": "PLEC1", "value": 0.2},
{"source": "RPL36", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL36", "target": "RPS27L", "value": 0.2},
{"source": "RPL36", "target": "RPS7", "value": 0.2},
{"source": "RPL36", "target": "RPS21", "value": 0.2},
{"source": "RPL36", "target": "RPL3", "value": 0.2},
{"source": "RPL36", "target": "RPL21", "value": 0.2},
{"source": "RPL36", "target": "RPSA", "value": 0.2},
{"source": "RPL36", "target": "RPS26", "value": 0.2},
{"source": "RPL36", "target": "EIF3B", "value": 0.2},
{"source": "RPL36", "target": "RPL12", "value": 0.2},
{"source": "RPL36", "target": "EXOSC1", "value": 0.2},
{"source": "RPL36", "target": "RPS6", "value": 0.2},
{"source": "RPL36", "target": "EXOSC8", "value": 0.2},
{"source": "RPL36", "target": "RPS8", "value": 0.2},
{"source": "RPL36", "target": "RPL9", "value": 0.2},
{"source": "RPL36", "target": "RPL29", "value": 0.2},
{"source": "RPL36", "target": "RPL35A", "value": 0.2},
{"source": "RPL36", "target": "RPL23", "value": 0.2},
{"source": "RPL36", "target": "RPL30", "value": 0.2},
{"source": "RPL36", "target": "FAU", "value": 0.2},
{"source": "RPL36", "target": "EIF3M", "value": 0.2},
{"source": "RPL36", "target": "RPL28", "value": 0.2},
{"source": "RPL36", "target": "BOP1", "value": 0.2},
{"source": "RPL36", "target": "WDR18", "value": 0.2},
{"source": "RPL36", "target": "RPS15", "value": 0.2},
{"source": "RPL36", "target": "RPL27", "value": 0.2},
{"source": "TCEB1", "target": "PSMA4", "value": 0.2},
{"source": "TCEB1", "target": "PSMC4", "value": 0.2},
{"source": "TCEB1", "target": "PSMD8", "value": 0.2},
{"source": "TCEB1", "target": "PSME2", "value": 0.2},
{"source": "TCEB1", "target": "PSMD10", "value": 0.2},
{"source": "TCEB1", "target": "POLR2C", "value": 0.2},
{"source": "TCEB1", "target": "PSMD7", "value": 0.2},
{"source": "TCEB1", "target": "STUB1", "value": 0.2},
{"source": "TCEB1", "target": "PSMA2", "value": 0.2},
{"source": "TCEB1", "target": "UBE3A", "value": 0.2},
{"source": "TCEB1", "target": "PSMC1", "value": 0.2},
{"source": "TCEB1", "target": "PSMA6", "value": 0.2},
{"source": "TCEB1", "target": "PSMD11", "value": 0.2},
{"source": "TCEB1", "target": "PSMB1", "value": 0.2},
{"source": "TCEB1", "target": "MGRN1", "value": 0.2},
{"source": "TCEB1", "target": "CUL3", "value": 0.2},
{"source": "TCEB1", "target": "ATM", "value": 0.2},
{"source": "TCEB1", "target": "PSMB4", "value": 0.2},
{"source": "TCEB1", "target": "DDB1", "value": 0.2},
{"source": "TCEB1", "target": "UBE3C", "value": 0.2},
{"source": "TCEB1", "target": "PSMD1", "value": 0.2},
{"source": "TCEB1", "target": "PSMA8", "value": 0.2},
{"source": "TCEB1", "target": "HSP90AA1", "value": 0.2},
{"source": "TCEB1", "target": "UBA1", "value": 0.2},
{"source": "TCEB1", "target": "HUWE1", "value": 0.2},
{"source": "TCEB1", "target": "GTF2F2", "value": 0.2},
{"source": "TCEB1", "target": "RNF220", "value": 0.2},
{"source": "TCEB1", "target": "PSMD12", "value": 0.2},
{"source": "TCEB1", "target": "PSMB5", "value": 0.2},
{"source": "TCEB1", "target": "PARK2", "value": 0.2},
{"source": "TCEB1", "target": "PSMD4", "value": 0.2},
{"source": "TCEB1", "target": "FBXL4", "value": 0.2},
{"source": "TCEB1", "target": "UFL1", "value": 0.2},
{"source": "TCEB1", "target": "PSMA7", "value": 0.2},
{"source": "TCEB1", "target": "UBR2", "value": 0.2},
{"source": "TCEB1", "target": "PSMB8", "value": 0.2},
{"source": "TCEB1", "target": "UBR4", "value": 0.2},
{"source": "TCEB1", "target": "KBTBD7", "value": 0.2},
{"source": "TCEB1", "target": "POLR2B", "value": 0.2},
{"source": "TCEB1", "target": "PSME1", "value": 0.2},
{"source": "TCEB1", "target": "CCNK", "value": 0.2},
{"source": "TCEB1", "target": "CUL5", "value": 0.2},
{"source": "TCEB1", "target": "HERC1", "value": 0.2},
{"source": "TCEB1", "target": "PSMC6", "value": 0.2},
{"source": "TCEB1", "target": "PSMA1", "value": 0.2},
{"source": "TCEB1", "target": "NEDD4", "value": 0.2},
{"source": "TCEB1", "target": "WWP1", "value": 0.2},
{"source": "TCEB1", "target": "RNF130", "value": 0.2},
{"source": "TCEB1", "target": "UBC", "value": 0.2},
{"source": "TCEB1", "target": "UBE2J1", "value": 0.2},
{"source": "TCEB1", "target": "SUPT5H", "value": 0.2},
{"source": "TCEB1", "target": "ITCH", "value": 0.2},
{"source": "TCEB1", "target": "POLR2A", "value": 0.2},
{"source": "TCEB1", "target": "PSMC3", "value": 0.2},
{"source": "TCEB1", "target": "PSMB3", "value": 0.2},
{"source": "YKT6", "target": "ARF5", "value": 0.2},
{"source": "YKT6", "target": "BET1", "value": 0.2},
{"source": "YKT6", "target": "STX4", "value": 0.2},
{"source": "YKT6", "target": "COG2", "value": 0.2},
{"source": "YKT6", "target": "ARF4", "value": 0.2},
{"source": "YKT6", "target": "BET1L", "value": 0.2},
{"source": "YKT6", "target": "RAB1A", "value": 0.2},
{"source": "YKT6", "target": "STX5", "value": 0.2},
{"source": "YKT6", "target": "GOLGB1", "value": 0.2},
{"source": "YKT6", "target": "VAMP4", "value": 0.2},
{"source": "YKT6", "target": "COPG1", "value": 0.2},
{"source": "YKT6", "target": "STX6", "value": 0.2},
{"source": "YKT6", "target": "NAPA", "value": 0.2},
{"source": "YKT6", "target": "TMED9", "value": 0.2},
{"source": "YKT6", "target": "COPG2", "value": 0.2},
{"source": "YKT6", "target": "SEC24A", "value": 0.2},
{"source": "YKT6", "target": "COPB1", "value": 0.2},
{"source": "YKT6", "target": "CAPZB", "value": 0.2},
{"source": "YKT6", "target": "SEC23A", "value": 0.2},
{"source": "YKT6", "target": "ARCN1", "value": 0.2},
{"source": "YKT6", "target": "RAB7A", "value": 0.2},
{"source": "YKT6", "target": "SEC24C", "value": 0.2},
{"source": "YKT6", "target": "GOSR1", "value": 0.2},
{"source": "YKT6", "target": "COG3", "value": 0.2},
{"source": "YKT6", "target": "COPB2", "value": 0.2},
{"source": "YKT6", "target": "KDELR1", "value": 0.2},
{"source": "YKT6", "target": "SEC13", "value": 0.2},
{"source": "YKT6", "target": "DYNC1H1", "value": 0.2},
{"source": "YKT6", "target": "SNAP25", "value": 0.2},
{"source": "YKT6", "target": "COG1", "value": 0.2},
{"source": "YKT6", "target": "RAB1B", "value": 0.2},
{"source": "YKT6", "target": "VAMP2", "value": 0.2},
{"source": "YKT6", "target": "USO1", "value": 0.2},
{"source": "YKT6", "target": "ACTR1A", "value": 0.2},
{"source": "YKT6", "target": "DYNC1LI2", "value": 0.2},
{"source": "YKT6", "target": "SEC31A", "value": 0.2},
{"source": "YKT6", "target": "DYNC1I2", "value": 0.2},
{"source": "YKT6", "target": "SPTBN2", "value": 0.2},
{"source": "YKT6", "target": "COPE", "value": 0.2},
{"source": "YKT6", "target": "CLTB", "value": 0.2},
{"source": "YKT6", "target": "DCTN1", "value": 0.2},
{"source": "YKT6", "target": "TMED10", "value": 0.2},
{"source": "YKT6", "target": "NSF", "value": 0.2},
{"source": "YKT6", "target": "COPZ1", "value": 0.2},
{"source": "UPP1", "target": "NT5C", "value": 0.2},
{"source": "UPP1", "target": "PNP", "value": 0.2},
{"source": "SKI", "target": "SMAD3", "value": 0.2},
{"source": "SKI", "target": "HDAC1", "value": 0.2},
{"source": "SKI", "target": "UBC", "value": 0.2},
{"source": "SKI", "target": "SIN3A", "value": 0.2},
{"source": "SKI", "target": "RBBP7", "value": 0.2},
{"source": "ATP2A1", "target": "MYH1", "value": 0.2},
{"source": "ATP2A1", "target": "MYH4", "value": 0.2},
{"source": "ATP2A1", "target": "NOTCH1", "value": 0.2},
{"source": "ATP2A1", "target": "TNNT3", "value": 0.2},
{"source": "ATP2A1", "target": "MYL1", "value": 0.2},
{"source": "ATP2A1", "target": "MYLPF", "value": 0.2},
{"source": "ATP2A1", "target": "SRL", "value": 0.2},
{"source": "ATP2A1", "target": "TNNC2", "value": 0.2},
{"source": "ATP2A1", "target": "MYOZ1", "value": 0.2},
{"source": "ATP2A1", "target": "ATP2A2", "value": 0.2},
{"source": "ATP2A1", "target": "TNNI2", "value": 0.2},
{"source": "TRIM25", "target": "RFC2", "value": 0.2},
{"source": "TRIM25", "target": "RPA3", "value": 0.2},
{"source": "TRIM25", "target": "NFKB1", "value": 0.2},
{"source": "TRIM25", "target": "B2M", "value": 0.2},
{"source": "TRIM25", "target": "HLA-C", "value": 0.2},
{"source": "TRIM25", "target": "UBC", "value": 0.2},
{"source": "TRIM25", "target": "HLA-B", "value": 0.2},
{"source": "TRIM25", "target": "HLA-DRB1", "value": 0.2},
{"source": "TRIM25", "target": "HLA-A", "value": 0.2},
{"source": "TRIM25", "target": "ITCH", "value": 0.2},
{"source": "TRIM25", "target": "RPA2", "value": 0.2},
{"source": "TRIM25", "target": "HLA-E", "value": 0.2},
{"source": "AP2M1", "target": "APOB", "value": 0.2},
{"source": "AP2M1", "target": "VAMP4", "value": 0.2},
{"source": "AP2M1", "target": "COPB1", "value": 0.2},
{"source": "AP2M1", "target": "COPE", "value": 0.2},
{"source": "AP2M1", "target": "ARPC1A", "value": 0.2},
{"source": "AP2M1", "target": "PACSIN2", "value": 0.2},
{"source": "AP2M1", "target": "EHD2", "value": 0.2},
{"source": "AP2M1", "target": "ARCN1", "value": 0.2},
{"source": "AP2M1", "target": "UBC", "value": 0.2},
{"source": "AP2M1", "target": "RAB5B", "value": 0.2},
{"source": "AP2M1", "target": "TGOLN2", "value": 0.2},
{"source": "AP2M1", "target": "AP1S1", "value": 0.2},
{"source": "AP2M1", "target": "ARPC5", "value": 0.2},
{"source": "AP2M1", "target": "CLTC", "value": 0.2},
{"source": "AP2M1", "target": "ARPC4", "value": 0.2},
{"source": "AP2M1", "target": "COPB2", "value": 0.2},
{"source": "AP2M1", "target": "EPN1", "value": 0.2},
{"source": "AP2M1", "target": "AP1B1", "value": 0.2},
{"source": "AP2M1", "target": "COPG1", "value": 0.2},
{"source": "AP2M1", "target": "LDLRAP1", "value": 0.2},
{"source": "AP2M1", "target": "LDLR", "value": 0.2},
{"source": "AP2M1", "target": "ARPC2", "value": 0.2},
{"source": "AP2M1", "target": "VAMP2", "value": 0.2},
{"source": "AP2M1", "target": "FNBP1", "value": 0.2},
{"source": "AP2M1", "target": "SEC31A", "value": 0.2},
{"source": "AP2M1", "target": "REPS1", "value": 0.2},
{"source": "AP2M1", "target": "SEC13", "value": 0.2},
{"source": "AP2M1", "target": "IGF2R", "value": 0.2},
{"source": "AP2M1", "target": "SEC23A", "value": 0.2},
{"source": "AP2M1", "target": "CLTB", "value": 0.2},
{"source": "AP2M1", "target": "COPG2", "value": 0.2},
{"source": "AP2M1", "target": "HLA-DRB1", "value": 0.2},
{"source": "AP2M1", "target": "RAB5C", "value": 0.2},
{"source": "AP2M1", "target": "SEC24C", "value": 0.2},
{"source": "AP2M1", "target": "COPZ1", "value": 0.2},
{"source": "AP2M1", "target": "SEC24A", "value": 0.2},
{"source": "AP2M1", "target": "FZD2", "value": 0.2},
{"source": "AP2M1", "target": "TFRC", "value": 0.2},
{"source": "ANXA1", "target": "ADCY9", "value": 0.2},
{"source": "ANXA1", "target": "ADCY6", "value": 0.2},
{"source": "ANXA1", "target": "GNAI2", "value": 0.2},
{"source": "ANXA1", "target": "GPR39", "value": 0.2},
{"source": "ANXA1", "target": "LPAR1", "value": 0.2},
{"source": "ANXA1", "target": "S1PR3", "value": 0.2},
{"source": "ANXA1", "target": "AHNAK", "value": 0.2},
{"source": "ANXA1", "target": "PDYN", "value": 0.2},
{"source": "RPA3", "target": "RFC2", "value": 0.2},
{"source": "RPA3", "target": "MCM5", "value": 0.2},
{"source": "RPA3", "target": "POLR2C", "value": 0.2},
{"source": "RPA3", "target": "ORC4", "value": 0.2},
{"source": "RPA3", "target": "POLR2B", "value": 0.2},
{"source": "RPA3", "target": "USP7", "value": 0.2},
{"source": "RPA3", "target": "PRPF19", "value": 0.2},
{"source": "RPA3", "target": "ATM", "value": 0.2},
{"source": "RPA3", "target": "PPP4R2", "value": 0.2},
{"source": "RPA3", "target": "XAB2", "value": 0.2},
{"source": "RPA3", "target": "PARP1", "value": 0.2},
{"source": "RPA3", "target": "POLA1", "value": 0.2},
{"source": "RPA3", "target": "DUT", "value": 0.2},
{"source": "RPA3", "target": "POLR2A", "value": 0.2},
{"source": "RPA3", "target": "UBC", "value": 0.2},
{"source": "RPA3", "target": "RPA2", "value": 0.2},
{"source": "RPA3", "target": "WDR48", "value": 0.2},
{"source": "RPA3", "target": "DDB1", "value": 0.2},
{"source": "RPA3", "target": "MSH6", "value": 0.2},
{"source": "RPA3", "target": "POLE", "value": 0.2},
{"source": "RPA3", "target": "MCM7", "value": 0.2},
{"source": "RPA3", "target": "DDB2", "value": 0.2},
{"source": "RPA3", "target": "MCM6", "value": 0.2},
{"source": "RPA3", "target": "LMNB1", "value": 0.2},
{"source": "RPA3", "target": "RAD50", "value": 0.2},
{"source": "RPA3", "target": "XPC", "value": 0.2},
{"source": "MYL1", "target": "CKM", "value": 0.2},
{"source": "MYL1", "target": "MYH1", "value": 0.2},
{"source": "MYL1", "target": "MYH2", "value": 0.2},
{"source": "MYL1", "target": "MYH4", "value": 0.2},
{"source": "MYL1", "target": "TNNT3", "value": 0.2},
{"source": "MYL1", "target": "DES", "value": 0.2},
{"source": "MYL1", "target": "MYH3", "value": 0.2},
{"source": "MYL1", "target": "MYH8", "value": 0.2},
{"source": "MYL1", "target": "ACTN2", "value": 0.2},
{"source": "MYL1", "target": "MYLPF", "value": 0.2},
{"source": "MYL1", "target": "TNNC2", "value": 0.2},
{"source": "MYL1", "target": "MYH11", "value": 0.2},
{"source": "MYL1", "target": "MYBPC2", "value": 0.2},
{"source": "MYL1", "target": "MYBPC1", "value": 0.2},
{"source": "MYL1", "target": "TPM2", "value": 0.2},
{"source": "MYL1", "target": "MYH14", "value": 0.2},
{"source": "MYL1", "target": "MYL3", "value": 0.2},
{"source": "MYL1", "target": "SRL", "value": 0.2},
{"source": "MYL1", "target": "TNNI2", "value": 0.2},
{"source": "MYL1", "target": "TMOD3", "value": 0.2},
{"source": "MYL1", "target": "TPM3", "value": 0.2},
{"source": "MYL1", "target": "ACTA1", "value": 0.2},
{"source": "MYL1", "target": "TTN", "value": 0.2},
{"source": "ATP1B3", "target": "ATP12A", "value": 0.2},
{"source": "ATP1B3", "target": "ABCA7", "value": 0.2},
{"source": "ATP1B3", "target": "SLC9A1", "value": 0.2},
{"source": "ATP1B3", "target": "ABCB6", "value": 0.2},
{"source": "ATP1B3", "target": "ADCY6", "value": 0.2},
{"source": "ATP1B3", "target": "ATP1A4", "value": 0.2},
{"source": "ATP1B3", "target": "ATP1A1", "value": 0.2},
{"source": "ATP1B3", "target": "BSG", "value": 0.2},
{"source": "ATP1B3", "target": "ATP2A2", "value": 0.2},
{"source": "IGF2R", "target": "APOB", "value": 0.2},
{"source": "IGF2R", "target": "VAMP4", "value": 0.2},
{"source": "IGF2R", "target": "CTSD", "value": 0.2},
{"source": "IGF2R", "target": "SNX1", "value": 0.2},
{"source": "IGF2R", "target": "ARPC1A", "value": 0.2},
{"source": "IGF2R", "target": "PACSIN2", "value": 0.2},
{"source": "IGF2R", "target": "NAPA", "value": 0.2},
{"source": "IGF2R", "target": "ARPC5", "value": 0.2},
{"source": "IGF2R", "target": "ARPC2", "value": 0.2},
{"source": "IGF2R", "target": "VPS35", "value": 0.2},
{"source": "IGF2R", "target": "CLTB", "value": 0.2},
{"source": "IGF2R", "target": "VAMP2", "value": 0.2},
{"source": "IGF2R", "target": "BSG", "value": 0.2},
{"source": "IGF2R", "target": "AP1S1", "value": 0.2},
{"source": "IGF2R", "target": "ARPC4", "value": 0.2},
{"source": "IGF2R", "target": "TGOLN2", "value": 0.2},
{"source": "IGF2R", "target": "REPS1", "value": 0.2},
{"source": "IGF2R", "target": "FNBP1", "value": 0.2},
{"source": "IGF2R", "target": "AP1B1", "value": 0.2},
{"source": "IGF2R", "target": "LDLRAP1", "value": 0.2},
{"source": "IGF2R", "target": "RAB5C", "value": 0.2},
{"source": "IGF2R", "target": "RAB5B", "value": 0.2},
{"source": "IGF2R", "target": "CLTC", "value": 0.2},
{"source": "IGF2R", "target": "NSF", "value": 0.2},
{"source": "IGF2R", "target": "UBC", "value": 0.2},
{"source": "IGF2R", "target": "TFRC", "value": 0.2},
{"source": "IGF2R", "target": "LDLR", "value": 0.2},
{"source": "IGF2R", "target": "EPN1", "value": 0.2},
{"source": "EIF3G", "target": "MRPS10", "value": 0.2},
{"source": "EIF3G", "target": "EIF3E", "value": 0.2},
{"source": "EIF3G", "target": "RPL18A", "value": 0.2},
{"source": "EIF3G", "target": "RPS12", "value": 0.2},
{"source": "EIF3G", "target": "RPS16", "value": 0.2},
{"source": "EIF3G", "target": "EIF2S3", "value": 0.2},
{"source": "EIF3G", "target": "EIF2S1", "value": 0.2},
{"source": "EIF3G", "target": "EIF3B", "value": 0.2},
{"source": "EIF3G", "target": "RPS27L", "value": 0.2},
{"source": "EIF3G", "target": "EIF3M", "value": 0.2},
{"source": "EIF3G", "target": "RPS15", "value": 0.2},
{"source": "EIF3G", "target": "RPS7", "value": 0.2},
{"source": "EIF3G", "target": "RPL38", "value": 0.2},
{"source": "EIF3G", "target": "RPS8", "value": 0.2},
{"source": "EIF3G", "target": "RPL30", "value": 0.2},
{"source": "EIF3G", "target": "RPSA", "value": 0.2},
{"source": "EIF3G", "target": "EEF2", "value": 0.2},
{"source": "EIF3G", "target": "RPS3", "value": 0.2},
{"source": "EIF3G", "target": "FAU", "value": 0.2},
{"source": "EIF3G", "target": "PLEC1", "value": 0.2},
{"source": "EIF3G", "target": "RPLP2", "value": 0.2},
{"source": "EIF3G", "target": "RPL23", "value": 0.2},
{"source": "EIF3G", "target": "GTPBP4", "value": 0.2},
{"source": "EIF3G", "target": "RPL10L", "value": 0.2},
{"source": "EIF3G", "target": "RPS26", "value": 0.2},
{"source": "EIF3G", "target": "RPL27", "value": 0.2},
{"source": "EIF3G", "target": "RPL12", "value": 0.2},
{"source": "EIF3G", "target": "RPS15A", "value": 0.2},
{"source": "EIF3G", "target": "RPL29", "value": 0.2},
{"source": "EIF3G", "target": "RPS21", "value": 0.2},
{"source": "EIF3G", "target": "RPL35A", "value": 0.2},
{"source": "EIF3G", "target": "RPS6", "value": 0.2},
{"source": "EIF3G", "target": "RPL28", "value": 0.2},
{"source": "EIF3G", "target": "RPL3", "value": 0.2},
{"source": "EIF3G", "target": "RPS23", "value": 0.2},
{"source": "EIF3G", "target": "RPL9", "value": 0.2},
{"source": "EIF3G", "target": "EIF5B", "value": 0.2},
{"source": "EIF3G", "target": "RPL21", "value": 0.2},
{"source": "NOP14", "target": "KRR1", "value": 0.2},
{"source": "NOP14", "target": "RPS12", "value": 0.2},
{"source": "NOP14", "target": "BYSL", "value": 0.2},
{"source": "NOP14", "target": "SKIV2L2", "value": 0.2},
{"source": "NOP14", "target": "RRP9", "value": 0.2},
{"source": "NOP14", "target": "RPS16", "value": 0.2},
{"source": "NOP14", "target": "NIP7", "value": 0.2},
{"source": "NOP14", "target": "NAT10", "value": 0.2},
{"source": "NOP14", "target": "DDX18", "value": 0.2},
{"source": "NOP14", "target": "NOP58", "value": 0.2},
{"source": "NOP14", "target": "EXOSC7", "value": 0.2},
{"source": "NOP14", "target": "RPS3", "value": 0.2},
{"source": "NOP14", "target": "RPS23", "value": 0.2},
{"source": "NOP14", "target": "UTP15", "value": 0.2},
{"source": "NOP14", "target": "TSR1", "value": 0.2},
{"source": "NOP14", "target": "TTC27", "value": 0.2},
{"source": "NOP14", "target": "DDX10", "value": 0.2},
{"source": "NOP14", "target": "RPS15A", "value": 0.2},
{"source": "NOP14", "target": "KRI1", "value": 0.2},
{"source": "NOP14", "target": "RRS1", "value": 0.2},
{"source": "NOP14", "target": "RPS27L", "value": 0.2},
{"source": "NOP14", "target": "DHX15", "value": 0.2},
{"source": "NOP14", "target": "RPS7", "value": 0.2},
{"source": "NOP14", "target": "RPS21", "value": 0.2},
{"source": "NOP14", "target": "RPSA", "value": 0.2},
{"source": "NOP14", "target": "RPS26", "value": 0.2},
{"source": "NOP14", "target": "GTPBP4", "value": 0.2},
{"source": "NOP14", "target": "PDCD11", "value": 0.2},
{"source": "NOP14", "target": "EXOSC1", "value": 0.2},
{"source": "NOP14", "target": "NOC3L", "value": 0.2},
{"source": "NOP14", "target": "RPS6", "value": 0.2},
{"source": "NOP14", "target": "MYBBP1A", "value": 0.2},
{"source": "NOP14", "target": "EXOSC8", "value": 0.2},
{"source": "NOP14", "target": "RPS8", "value": 0.2},
{"source": "NOP14", "target": "PWP1", "value": 0.2},
{"source": "NOP14", "target": "RPF2", "value": 0.2},
{"source": "NOP14", "target": "RPS15", "value": 0.2},
{"source": "NOP14", "target": "FAU", "value": 0.2},
{"source": "NOP14", "target": "BOP1", "value": 0.2},
{"source": "NOP14", "target": "POLR1B", "value": 0.2},
{"source": "NOP14", "target": "WDR36", "value": 0.2},
{"source": "NOP14", "target": "EMG1", "value": 0.2},
{"source": "NOP14", "target": "RBM19", "value": 0.2},
{"source": "NOP14", "target": "WDR18", "value": 0.2},
{"source": "THRAP3", "target": "CREBBP", "value": 0.2},
{"source": "THRAP3", "target": "NCOA3", "value": 0.2},
{"source": "THRAP3", "target": "FAM120B", "value": 0.2},
{"source": "CIT", "target": "KIF11", "value": 0.2},
{"source": "CIT", "target": "RHOA", "value": 0.2},
{"source": "CIT", "target": "MYH14", "value": 0.2},
{"source": "CIT", "target": "MYH11", "value": 0.2},
{"source": "TNFRSF10A", "target": "HLA-DRB1", "value": 0.2},
{"source": "TNFRSF10A", "target": "HLA-A", "value": 0.2},
{"source": "TNFRSF10A", "target": "CUL3", "value": 0.2},
{"source": "UCHL1", "target": "UBC", "value": 0.2},
{"source": "UCHL1", "target": "PARK2", "value": 0.2},
{"source": "CLTC", "target": "APOB", "value": 0.2},
{"source": "CLTC", "target": "VAMP4", "value": 0.2},
{"source": "CLTC", "target": "COPB1", "value": 0.2},
{"source": "CLTC", "target": "ARPC1A", "value": 0.2},
{"source": "CLTC", "target": "PACSIN2", "value": 0.2},
{"source": "CLTC", "target": "EHD2", "value": 0.2},
{"source": "CLTC", "target": "RAB7A", "value": 0.2},
{"source": "CLTC", "target": "ARPC5", "value": 0.2},
{"source": "CLTC", "target": "ARPC2", "value": 0.2},
{"source": "CLTC", "target": "VPS35", "value": 0.2},
{"source": "CLTC", "target": "SEC23A", "value": 0.2},
{"source": "CLTC", "target": "CLTB", "value": 0.2},
{"source": "CLTC", "target": "VAMP2", "value": 0.2},
{"source": "CLTC", "target": "FZD2", "value": 0.2},
{"source": "CLTC", "target": "AP1S1", "value": 0.2},
{"source": "CLTC", "target": "AP1B1", "value": 0.2},
{"source": "CLTC", "target": "HLA-DRB1", "value": 0.2},
{"source": "CLTC", "target": "TFRC", "value": 0.2},
{"source": "CLTC", "target": "RAB5B", "value": 0.2},
{"source": "CLTC", "target": "LDLRAP1", "value": 0.2},
{"source": "CLTC", "target": "SEC31A", "value": 0.2},
{"source": "CLTC", "target": "TGOLN2", "value": 0.2},
{"source": "CLTC", "target": "ARPC4", "value": 0.2},
{"source": "CLTC", "target": "REPS1", "value": 0.2},
{"source": "CLTC", "target": "EPN1", "value": 0.2},
{"source": "CLTC", "target": "FNBP1", "value": 0.2},
{"source": "CLTC", "target": "UBC", "value": 0.2},
{"source": "CLTC", "target": "RAB5C", "value": 0.2},
{"source": "CLTC", "target": "LDLR", "value": 0.2},
{"source": "ARPC4", "target": "APOB", "value": 0.2},
{"source": "ARPC4", "target": "VAMP4", "value": 0.2},
{"source": "ARPC4", "target": "MYH2", "value": 0.2},
{"source": "ARPC4", "target": "ARPC1A", "value": 0.2},
{"source": "ARPC4", "target": "PACSIN2", "value": 0.2},
{"source": "ARPC4", "target": "NCKAP1L", "value": 0.2},
{"source": "ARPC4", "target": "ARPC5", "value": 0.2},
{"source": "ARPC4", "target": "ARPC2", "value": 0.2},
{"source": "ARPC4", "target": "CLTB", "value": 0.2},
{"source": "ARPC4", "target": "VAMP2", "value": 0.2},
{"source": "ARPC4", "target": "BAIAP2", "value": 0.2},
{"source": "ARPC4", "target": "TFRC", "value": 0.2},
{"source": "ARPC4", "target": "RAB5B", "value": 0.2},
{"source": "ARPC4", "target": "PSMA7", "value": 0.2},
{"source": "ARPC4", "target": "LDLRAP1", "value": 0.2},
{"source": "ARPC4", "target": "WIPF1", "value": 0.2},
{"source": "ARPC4", "target": "MYO5A", "value": 0.2},
{"source": "ARPC4", "target": "TGOLN2", "value": 0.2},
{"source": "ARPC4", "target": "FNBP1", "value": 0.2},
{"source": "ARPC4", "target": "LDLR", "value": 0.2},
{"source": "ARPC4", "target": "UBC", "value": 0.2},
{"source": "ARPC4", "target": "ARPC1B", "value": 0.2},
{"source": "ARPC4", "target": "RAB5C", "value": 0.2},
{"source": "ARPC4", "target": "EPN1", "value": 0.2},
{"source": "ARPC4", "target": "REPS1", "value": 0.2},
{"source": "CDH2", "target": "MTHFD1", "value": 0.2},
{"source": "CDH2", "target": "APOB", "value": 0.2},
{"source": "CDH2", "target": "CREBBP", "value": 0.2},
{"source": "CDH2", "target": "HSP90B1", "value": 0.2},
{"source": "CDH2", "target": "OCLN", "value": 0.2},
{"source": "CDH2", "target": "KIF5B", "value": 0.2},
{"source": "CDH2", "target": "NOTCH1", "value": 0.2},
{"source": "CDH2", "target": "RHOA", "value": 0.2},
{"source": "CDH2", "target": "SERPINC1", "value": 0.2},
{"source": "CDH2", "target": "PC", "value": 0.2},
{"source": "CDH2", "target": "TGOLN2", "value": 0.2},
{"source": "CDH2", "target": "P4HB", "value": 0.2},
{"source": "CDH2", "target": "PPT2", "value": 0.2},
{"source": "CTDNEP1", "target": "PPP2CB", "value": 0.2},
{"source": "CTDNEP1", "target": "PPP2R5A", "value": 0.2},
{"source": "CTDNEP1", "target": "PPP2R1A", "value": 0.2},
{"source": "CTDNEP1", "target": "PPP1CA", "value": 0.2},
{"source": "CTDNEP1", "target": "PPP1CC", "value": 0.2},
{"source": "CTDNEP1", "target": "PPP4R2", "value": 0.2},
{"source": "CUL5", "target": "STUB1", "value": 0.2},
{"source": "CUL5", "target": "UBE3A", "value": 0.2},
{"source": "CUL5", "target": "DDB2", "value": 0.2},
{"source": "CUL5", "target": "MGRN1", "value": 0.2},
{"source": "CUL5", "target": "CUL3", "value": 0.2},
{"source": "CUL5", "target": "DDB1", "value": 0.2},
{"source": "CUL5", "target": "UBE3C", "value": 0.2},
{"source": "CUL5", "target": "HSP90AA1", "value": 0.2},
{"source": "CUL5", "target": "UBA1", "value": 0.2},
{"source": "CUL5", "target": "HUWE1", "value": 0.2},
{"source": "CUL5", "target": "RNF220", "value": 0.2},
{"source": "CUL5", "target": "PARK2", "value": 0.2},
{"source": "CUL5", "target": "FBXL4", "value": 0.2},
{"source": "CUL5", "target": "UFL1", "value": 0.2},
{"source": "CUL5", "target": "UBR2", "value": 0.2},
{"source": "CUL5", "target": "UBR4", "value": 0.2},
{"source": "CUL5", "target": "KBTBD7", "value": 0.2},
{"source": "CUL5", "target": "HERC1", "value": 0.2},
{"source": "CUL5", "target": "WWP1", "value": 0.2},
{"source": "CUL5", "target": "UBC", "value": 0.2},
{"source": "CUL5", "target": "ITCH", "value": 0.2},
{"source": "CUL5", "target": "RNF130", "value": 0.2},
{"source": "CUL5", "target": "NEDD4", "value": 0.2},
{"source": "CUL5", "target": "UBE2J1", "value": 0.2},
{"source": "UBE2J1", "target": "STUB1", "value": 0.2},
{"source": "UBE2J1", "target": "UBE3A", "value": 0.2},
{"source": "UBE2J1", "target": "CANX", "value": 0.2},
{"source": "UBE2J1", "target": "MGRN1", "value": 0.2},
{"source": "UBE2J1", "target": "CUL3", "value": 0.2},
{"source": "UBE2J1", "target": "UBE3C", "value": 0.2},
{"source": "UBE2J1", "target": "HSPA5", "value": 0.2},
{"source": "UBE2J1", "target": "P4HB", "value": 0.2},
{"source": "UBE2J1", "target": "UBA1", "value": 0.2},
{"source": "UBE2J1", "target": "HUWE1", "value": 0.2},
{"source": "UBE2J1", "target": "RNF220", "value": 0.2},
{"source": "UBE2J1", "target": "PARK2", "value": 0.2},
{"source": "UBE2J1", "target": "FBXL4", "value": 0.2},
{"source": "UBE2J1", "target": "UFL1", "value": 0.2},
{"source": "UBE2J1", "target": "UBR2", "value": 0.2},
{"source": "UBE2J1", "target": "UBR4", "value": 0.2},
{"source": "UBE2J1", "target": "KBTBD7", "value": 0.2},
{"source": "UBE2J1", "target": "HERC1", "value": 0.2},
{"source": "UBE2J1", "target": "NEDD4", "value": 0.2},
{"source": "UBE2J1", "target": "WWP1", "value": 0.2},
{"source": "UBE2J1", "target": "RNF130", "value": 0.2},
{"source": "UBE2J1", "target": "UBC", "value": 0.2},
{"source": "UBE2J1", "target": "ITCH", "value": 0.2},
{"source": "TAF6", "target": "POLR2C", "value": 0.2},
{"source": "TAF6", "target": "GTF2F2", "value": 0.2},
{"source": "TAF6", "target": "WDR5", "value": 0.2},
{"source": "TAF6", "target": "POLR2B", "value": 0.2},
{"source": "TAF6", "target": "CCNK", "value": 0.2},
{"source": "TAF6", "target": "INTS1", "value": 0.2},
{"source": "TAF6", "target": "SUPT5H", "value": 0.2},
{"source": "TAF6", "target": "POU2F2", "value": 0.2},
{"source": "TAF6", "target": "POLR2A", "value": 0.2},
{"source": "TAF6", "target": "INTS12", "value": 0.2},
{"source": "NUDC", "target": "ZW10", "value": 0.2},
{"source": "NUDC", "target": "PPP2CB", "value": 0.2},
{"source": "NUDC", "target": "CCT7", "value": 0.2},
{"source": "NUDC", "target": "DYNC1LI2", "value": 0.2},
{"source": "NUDC", "target": "PPP2R5A", "value": 0.2},
{"source": "NUDC", "target": "CKAP5", "value": 0.2},
{"source": "NUDC", "target": "PPP2R1A", "value": 0.2},
{"source": "NUDC", "target": "SEC13", "value": 0.2},
{"source": "NUDC", "target": "RCC2", "value": 0.2},
{"source": "NUDC", "target": "CCT4", "value": 0.2},
{"source": "NUDC", "target": "NUP37", "value": 0.2},
{"source": "NUDC", "target": "SMC1A", "value": 0.2},
{"source": "NUDC", "target": "RANGAP1", "value": 0.2},
{"source": "NUDC", "target": "DYNC1H1", "value": 0.2},
{"source": "NUDC", "target": "MAD1L1", "value": 0.2},
{"source": "NUDC", "target": "PPP1CC", "value": 0.2},
{"source": "NUDC", "target": "PAFAH1B1", "value": 0.2},
{"source": "NUDC", "target": "HSP90AA1", "value": 0.2},
{"source": "NUDC", "target": "BUB3", "value": 0.2},
{"source": "NUDC", "target": "DYNC1I2", "value": 0.2},
{"source": "NUDC", "target": "PSMB3", "value": 0.2},
{"source": "NUDC", "target": "PSMA7", "value": 0.2},
{"source": "NUDC", "target": "MAPRE1", "value": 0.2},
{"source": "UBA1", "target": "STUB1", "value": 0.2},
{"source": "UBA1", "target": "AIMP2", "value": 0.2},
{"source": "UBA1", "target": "UBE3A", "value": 0.2},
{"source": "UBA1", "target": "MGRN1", "value": 0.2},
{"source": "UBA1", "target": "CUL3", "value": 0.2},
{"source": "UBA1", "target": "USP15", "value": 0.2},
{"source": "UBA1", "target": "CTBP1", "value": 0.2},
{"source": "UBA1", "target": "UBE3C", "value": 0.2},
{"source": "UBA1", "target": "PSMD1", "value": 0.2},
{"source": "UBA1", "target": "TLN1", "value": 0.2},
{"source": "UBA1", "target": "AP1S1", "value": 0.2},
{"source": "UBA1", "target": "UFL1", "value": 0.2},
{"source": "UBA1", "target": "HUWE1", "value": 0.2},
{"source": "UBA1", "target": "RNF220", "value": 0.2},
{"source": "UBA1", "target": "FBXL4", "value": 0.2},
{"source": "UBA1", "target": "ITCH", "value": 0.2},
{"source": "UBA1", "target": "AP1B1", "value": 0.2},
{"source": "UBA1", "target": "KBTBD7", "value": 0.2},
{"source": "UBA1", "target": "UBC", "value": 0.2},
{"source": "UBA1", "target": "WWP1", "value": 0.2},
{"source": "UBA1", "target": "RNF130", "value": 0.2},
{"source": "UBA1", "target": "PARK2", "value": 0.2},
{"source": "UBA1", "target": "UBR4", "value": 0.2},
{"source": "UBA1", "target": "HERC1", "value": 0.2},
{"source": "UBA1", "target": "NEDD4", "value": 0.2},
{"source": "UBA1", "target": "UBR2", "value": 0.2},
{"source": "TRIM29", "target": "HINT1", "value": 0.2},
{"source": "TRIM29", "target": "HLA-DRB1", "value": 0.2},
{"source": "TRIM29", "target": "HLA-A", "value": 0.2},
{"source": "TRIM29", "target": "B2M", "value": 0.2},
{"source": "TRIM29", "target": "HLA-C", "value": 0.2},
{"source": "TRIM29", "target": "HLA-B", "value": 0.2},
{"source": "TRIM29", "target": "HLA-E", "value": 0.2},
{"source": "ATP12A", "target": "ATP1A1", "value": 0.2},
{"source": "ATP12A", "target": "ATP2A2", "value": 0.2},
{"source": "ATP12A", "target": "ABCB6", "value": 0.2},
{"source": "ATP12A", "target": "SLC9A1", "value": 0.2},
{"source": "ATP12A", "target": "ATP1A4", "value": 0.2},
{"source": "ATP12A", "target": "ABCA7", "value": 0.2},
{"source": "UTP15", "target": "KRR1", "value": 0.2},
{"source": "UTP15", "target": "RPS12", "value": 0.2},
{"source": "UTP15", "target": "BYSL", "value": 0.2},
{"source": "UTP15", "target": "SKIV2L2", "value": 0.2},
{"source": "UTP15", "target": "RRP9", "value": 0.2},
{"source": "UTP15", "target": "RPS16", "value": 0.2},
{"source": "UTP15", "target": "NIP7", "value": 0.2},
{"source": "UTP15", "target": "NAT10", "value": 0.2},
{"source": "UTP15", "target": "DDX18", "value": 0.2},
{"source": "UTP15", "target": "NOP58", "value": 0.2},
{"source": "UTP15", "target": "EXOSC7", "value": 0.2},
{"source": "UTP15", "target": "RPS3", "value": 0.2},
{"source": "UTP15", "target": "RPS23", "value": 0.2},
{"source": "UTP15", "target": "WDR36", "value": 0.2},
{"source": "UTP15", "target": "RPS6", "value": 0.2},
{"source": "UTP15", "target": "RPS21", "value": 0.2},
{"source": "UTP15", "target": "POLR1B", "value": 0.2},
{"source": "UTP15", "target": "RPS27L", "value": 0.2},
{"source": "UTP15", "target": "RPS8", "value": 0.2},
{"source": "UTP15", "target": "FAU", "value": 0.2},
{"source": "UTP15", "target": "RBM19", "value": 0.2},
{"source": "UTP15", "target": "EMG1", "value": 0.2},
{"source": "UTP15", "target": "RPF2", "value": 0.2},
{"source": "UTP15", "target": "NOC3L", "value": 0.2},
{"source": "UTP15", "target": "GTPBP4", "value": 0.2},
{"source": "UTP15", "target": "RPS15", "value": 0.2},
{"source": "UTP15", "target": "RPS26", "value": 0.2},
{"source": "UTP15", "target": "BOP1", "value": 0.2},
{"source": "UTP15", "target": "EXOSC1", "value": 0.2},
{"source": "UTP15", "target": "MYBBP1A", "value": 0.2},
{"source": "UTP15", "target": "RPSA", "value": 0.2},
{"source": "UTP15", "target": "KRI1", "value": 0.2},
{"source": "UTP15", "target": "RPS7", "value": 0.2},
{"source": "UTP15", "target": "DHX15", "value": 0.2},
{"source": "UTP15", "target": "TTC27", "value": 0.2},
{"source": "UTP15", "target": "DDX10", "value": 0.2},
{"source": "UTP15", "target": "EXOSC8", "value": 0.2},
{"source": "UTP15", "target": "RRS1", "value": 0.2},
{"source": "UTP15", "target": "PDCD11", "value": 0.2},
{"source": "UTP15", "target": "TSR1", "value": 0.2},
{"source": "UTP15", "target": "PWP1", "value": 0.2},
{"source": "UTP15", "target": "RPS15A", "value": 0.2},
{"source": "UTP15", "target": "WDR18", "value": 0.2},
{"source": "REPS1", "target": "APOB", "value": 0.2},
{"source": "REPS1", "target": "VAMP4", "value": 0.2},
{"source": "REPS1", "target": "ARPC1A", "value": 0.2},
{"source": "REPS1", "target": "PACSIN2", "value": 0.2},
{"source": "REPS1", "target": "ARPC5", "value": 0.2},
{"source": "REPS1", "target": "ARPC2", "value": 0.2},
{"source": "REPS1", "target": "CLTB", "value": 0.2},
{"source": "REPS1", "target": "VAMP2", "value": 0.2},
{"source": "REPS1", "target": "TFRC", "value": 0.2},
{"source": "REPS1", "target": "RAB5B", "value": 0.2},
{"source": "REPS1", "target": "LDLRAP1", "value": 0.2},
{"source": "REPS1", "target": "TGOLN2", "value": 0.2},
{"source": "REPS1", "target": "LDLR", "value": 0.2},
{"source": "REPS1", "target": "EPN1", "value": 0.2},
{"source": "REPS1", "target": "FNBP1", "value": 0.2},
{"source": "REPS1", "target": "RAB5C", "value": 0.2},
{"source": "REPS1", "target": "UBC", "value": 0.2},
{"source": "CREBBP", "target": "POLR2C", "value": 0.2},
{"source": "CREBBP", "target": "NFKB1", "value": 0.2},
{"source": "CREBBP", "target": "DNAJB1", "value": 0.2},
{"source": "CREBBP", "target": "SNW1", "value": 0.2},
{"source": "CREBBP", "target": "YY1", "value": 0.2},
{"source": "CREBBP", "target": "TLE3", "value": 0.2},
{"source": "CREBBP", "target": "NCOA3", "value": 0.2},
{"source": "CREBBP", "target": "RBPJ", "value": 0.2},
{"source": "CREBBP", "target": "H2AFJ", "value": 0.2},
{"source": "CREBBP", "target": "HSPA1A", "value": 0.2},
{"source": "CREBBP", "target": "RUNX3", "value": 0.2},
{"source": "CREBBP", "target": "POLR2B", "value": 0.2},
{"source": "CREBBP", "target": "SMARCA4", "value": 0.2},
{"source": "CREBBP", "target": "POLR2A", "value": 0.2},
{"source": "CREBBP", "target": "NOTCH1", "value": 0.2},
{"source": "CREBBP", "target": "RBBP7", "value": 0.2},
{"source": "CREBBP", "target": "ARID1A", "value": 0.2},
{"source": "CREBBP", "target": "BNIP3L", "value": 0.2},
{"source": "CREBBP", "target": "SMAD3", "value": 0.2},
{"source": "CREBBP", "target": "SIN3A", "value": 0.2},
{"source": "CREBBP", "target": "PARP1", "value": 0.2},
{"source": "CREBBP", "target": "WDR5", "value": 0.2},
{"source": "CREBBP", "target": "HDAC1", "value": 0.2},
{"source": "CREBBP", "target": "ARID1B", "value": 0.2},
{"source": "CREBBP", "target": "TP53BP1", "value": 0.2},
{"source": "CREBBP", "target": "FAM120B", "value": 0.2},
{"source": "CREBBP", "target": "CTBP1", "value": 0.2},
{"source": "PSMA1", "target": "PSMA4", "value": 0.2},
{"source": "PSMA1", "target": "PSMC4", "value": 0.2},
{"source": "PSMA1", "target": "PSMD8", "value": 0.2},
{"source": "PSMA1", "target": "PSME2", "value": 0.2},
{"source": "PSMA1", "target": "PSMD10", "value": 0.2},
{"source": "PSMA1", "target": "PSMD7", "value": 0.2},
{"source": "PSMA1", "target": "PPP2CB", "value": 0.2},
{"source": "PSMA1", "target": "PSMA2", "value": 0.2},
{"source": "PSMA1", "target": "NFKB1", "value": 0.2},
{"source": "PSMA1", "target": "COPB1", "value": 0.2},
{"source": "PSMA1", "target": "CCT7", "value": 0.2},
{"source": "PSMA1", "target": "PSMC1", "value": 0.2},
{"source": "PSMA1", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMA1", "target": "PSMA6", "value": 0.2},
{"source": "PSMA1", "target": "PSMD11", "value": 0.2},
{"source": "PSMA1", "target": "PSMB1", "value": 0.2},
{"source": "PSMA1", "target": "CUL3", "value": 0.2},
{"source": "PSMA1", "target": "KPNB1", "value": 0.2},
{"source": "PSMA1", "target": "PSMB4", "value": 0.2},
{"source": "PSMA1", "target": "PSMD1", "value": 0.2},
{"source": "PSMA1", "target": "PSMA8", "value": 0.2},
{"source": "PSMA1", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMA1", "target": "RPSA", "value": 0.2},
{"source": "PSMA1", "target": "PSMD12", "value": 0.2},
{"source": "PSMA1", "target": "NF1", "value": 0.2},
{"source": "PSMA1", "target": "PSMB5", "value": 0.2},
{"source": "PSMA1", "target": "BUB3", "value": 0.2},
{"source": "PSMA1", "target": "PSMD4", "value": 0.2},
{"source": "PSMA1", "target": "PSMA7", "value": 0.2},
{"source": "PSMA1", "target": "HIVEP3", "value": 0.2},
{"source": "PSMA1", "target": "PSMB8", "value": 0.2},
{"source": "PSMA1", "target": "PSME1", "value": 0.2},
{"source": "PSMA1", "target": "CCT4", "value": 0.2},
{"source": "PSMA1", "target": "RUNX3", "value": 0.2},
{"source": "PSMA1", "target": "PSMC6", "value": 0.2},
{"source": "PSMA1", "target": "UBC", "value": 0.2},
{"source": "PSMA1", "target": "PSMC3", "value": 0.2},
{"source": "PSMA1", "target": "WWP1", "value": 0.2},
{"source": "PSMA1", "target": "PSMB3", "value": 0.2},
{"source": "PSMA1", "target": "ITCH", "value": 0.2},
{"source": "BANF1", "target": "LMNB1", "value": 0.2},
{"source": "BANF1", "target": "SMARCA2", "value": 0.2},
{"source": "BANF1", "target": "LEMD3", "value": 0.2},
{"source": "BANF1", "target": "PPP2R1A", "value": 0.2},
{"source": "BANF1", "target": "ARID1B", "value": 0.2},
{"source": "BANF1", "target": "SMARCA4", "value": 0.2},
{"source": "BANF1", "target": "ARID1A", "value": 0.2},
{"source": "CAPZB", "target": "ARF5", "value": 0.2},
{"source": "CAPZB", "target": "BET1", "value": 0.2},
{"source": "CAPZB", "target": "GOSR1", "value": 0.2},
{"source": "CAPZB", "target": "COPB1", "value": 0.2},
{"source": "CAPZB", "target": "DYNC1LI2", "value": 0.2},
{"source": "CAPZB", "target": "COG3", "value": 0.2},
{"source": "CAPZB", "target": "KIF11", "value": 0.2},
{"source": "CAPZB", "target": "COTL1", "value": 0.2},
{"source": "CAPZB", "target": "COPE", "value": 0.2},
{"source": "CAPZB", "target": "ARPC1A", "value": 0.2},
{"source": "CAPZB", "target": "ARCN1", "value": 0.2},
{"source": "CAPZB", "target": "RAB7A", "value": 0.2},
{"source": "CAPZB", "target": "STX5", "value": 0.2},
{"source": "CAPZB", "target": "ARPC5", "value": 0.2},
{"source": "CAPZB", "target": "ARPC2", "value": 0.2},
{"source": "CAPZB", "target": "COG1", "value": 0.2},
{"source": "CAPZB", "target": "TMED10", "value": 0.2},
{"source": "CAPZB", "target": "ARF4", "value": 0.2},
{"source": "CAPZB", "target": "KIF5B", "value": 0.2},
{"source": "CAPZB", "target": "RAB1B", "value": 0.2},
{"source": "CAPZB", "target": "COPG1", "value": 0.2},
{"source": "CAPZB", "target": "COPB2", "value": 0.2},
{"source": "CAPZB", "target": "KDELR1", "value": 0.2},
{"source": "CAPZB", "target": "TMED9", "value": 0.2},
{"source": "CAPZB", "target": "HSP90AA1", "value": 0.2},
{"source": "CAPZB", "target": "DYNC1H1", "value": 0.2},
{"source": "CAPZB", "target": "HLA-DRB1", "value": 0.2},
{"source": "CAPZB", "target": "DCTN1", "value": 0.2},
{"source": "CAPZB", "target": "COG2", "value": 0.2},
{"source": "CAPZB", "target": "ACTA1", "value": 0.2},
{"source": "CAPZB", "target": "ACTR1A", "value": 0.2},
{"source": "CAPZB", "target": "HSP90AB1", "value": 0.2},
{"source": "CAPZB", "target": "BET1L", "value": 0.2},
{"source": "CAPZB", "target": "GOLGB1", "value": 0.2},
{"source": "CAPZB", "target": "DYNC1I2", "value": 0.2},
{"source": "CAPZB", "target": "PAFAH1B1", "value": 0.2},
{"source": "CAPZB", "target": "RAB1A", "value": 0.2},
{"source": "CAPZB", "target": "ARPC1B", "value": 0.2},
{"source": "CAPZB", "target": "HLA-DMB", "value": 0.2},
{"source": "CAPZB", "target": "COPZ1", "value": 0.2},
{"source": "CAPZB", "target": "USO1", "value": 0.2},
{"source": "CAPZB", "target": "SPTBN2", "value": 0.2},
{"source": "CAPZB", "target": "COPG2", "value": 0.2},
{"source": "CAPZB", "target": "DBNL", "value": 0.2},
{"source": "FZD2", "target": "PPP2CB", "value": 0.2},
{"source": "FZD2", "target": "LRP6", "value": 0.2},
{"source": "FZD2", "target": "PPP2R5A", "value": 0.2},
{"source": "FZD2", "target": "FZD1", "value": 0.2},
{"source": "FZD2", "target": "CLTB", "value": 0.2},
{"source": "FZD2", "target": "PPP2R1A", "value": 0.2},
{"source": "FZD2", "target": "YES1", "value": 0.2},
{"source": "HOXA4", "target": "POLR2C", "value": 0.2},
{"source": "HOXA4", "target": "NCOA3", "value": 0.2},
{"source": "HOXA4", "target": "POLR2A", "value": 0.2},
{"source": "HOXA4", "target": "POLR2B", "value": 0.2},
{"source": "HOXA4", "target": "H2AFJ", "value": 0.2},
{"source": "CTBP1", "target": "UBE3A", "value": 0.2},
{"source": "CTBP1", "target": "NOTCH1", "value": 0.2},
{"source": "CTBP1", "target": "ATM", "value": 0.2},
{"source": "CTBP1", "target": "TLE3", "value": 0.2},
{"source": "CTBP1", "target": "TP53BP1", "value": 0.2},
{"source": "CTBP1", "target": "HDAC1", "value": 0.2},
{"source": "CTBP1", "target": "RAD50", "value": 0.2},
{"source": "CTBP1", "target": "RBPJ", "value": 0.2},
{"source": "CTBP1", "target": "RBBP7", "value": 0.2},
{"source": "CTBP1", "target": "SIN3A", "value": 0.2},
{"source": "MACROD1", "target": "PARP1", "value": 0.2},
{"source": "MACROD1", "target": "XPC", "value": 0.2},
{"source": "KRR1", "target": "RPS7", "value": 0.2},
{"source": "KRR1", "target": "RRP9", "value": 0.2},
{"source": "KRR1", "target": "EMG1", "value": 0.2},
{"source": "KRR1", "target": "RPS12", "value": 0.2},
{"source": "KRR1", "target": "RPS27L", "value": 0.2},
{"source": "KRR1", "target": "EXOSC7", "value": 0.2},
{"source": "KRR1", "target": "MYBBP1A", "value": 0.2},
{"source": "KRR1", "target": "POLR1B", "value": 0.2},
{"source": "KRR1", "target": "FAU", "value": 0.2},
{"source": "KRR1", "target": "RPS15A", "value": 0.2},
{"source": "KRR1", "target": "TSR1", "value": 0.2},
{"source": "KRR1", "target": "RPS6", "value": 0.2},
{"source": "KRR1", "target": "EXOSC1", "value": 0.2},
{"source": "KRR1", "target": "RBM19", "value": 0.2},
{"source": "KRR1", "target": "RPS15", "value": 0.2},
{"source": "KRR1", "target": "WDR18", "value": 0.2},
{"source": "KRR1", "target": "RPS26", "value": 0.2},
{"source": "KRR1", "target": "RPF2", "value": 0.2},
{"source": "KRR1", "target": "DDX10", "value": 0.2},
{"source": "KRR1", "target": "RPS21", "value": 0.2},
{"source": "KRR1", "target": "RPS8", "value": 0.2},
{"source": "KRR1", "target": "DDX18", "value": 0.2},
{"source": "KRR1", "target": "NIP7", "value": 0.2},
{"source": "KRR1", "target": "BYSL", "value": 0.2},
{"source": "KRR1", "target": "RPSA", "value": 0.2},
{"source": "KRR1", "target": "GTPBP4", "value": 0.2},
{"source": "KRR1", "target": "PWP1", "value": 0.2},
{"source": "KRR1", "target": "SKIV2L2", "value": 0.2},
{"source": "KRR1", "target": "KRI1", "value": 0.2},
{"source": "KRR1", "target": "WDR36", "value": 0.2},
{"source": "KRR1", "target": "RPS3", "value": 0.2},
{"source": "KRR1", "target": "RPS23", "value": 0.2},
{"source": "KRR1", "target": "DHX15", "value": 0.2},
{"source": "KRR1", "target": "BOP1", "value": 0.2},
{"source": "KRR1", "target": "EXOSC8", "value": 0.2},
{"source": "KRR1", "target": "NOP58", "value": 0.2},
{"source": "KRR1", "target": "NAT10", "value": 0.2},
{"source": "KRR1", "target": "PDCD11", "value": 0.2},
{"source": "KRR1", "target": "RPS16", "value": 0.2},
{"source": "KRR1", "target": "NOC3L", "value": 0.2},
{"source": "KRR1", "target": "RRS1", "value": 0.2},
{"source": "PSMC3", "target": "PSMA4", "value": 0.2},
{"source": "PSMC3", "target": "PSMC4", "value": 0.2},
{"source": "PSMC3", "target": "PSMD8", "value": 0.2},
{"source": "PSMC3", "target": "PSME2", "value": 0.2},
{"source": "PSMC3", "target": "PSMD10", "value": 0.2},
{"source": "PSMC3", "target": "PSMD7", "value": 0.2},
{"source": "PSMC3", "target": "PPP2CB", "value": 0.2},
{"source": "PSMC3", "target": "PSMA2", "value": 0.2},
{"source": "PSMC3", "target": "NFKB1", "value": 0.2},
{"source": "PSMC3", "target": "CCT7", "value": 0.2},
{"source": "PSMC3", "target": "PSMC1", "value": 0.2},
{"source": "PSMC3", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMC3", "target": "PSMA6", "value": 0.2},
{"source": "PSMC3", "target": "PSMD11", "value": 0.2},
{"source": "PSMC3", "target": "PSMB1", "value": 0.2},
{"source": "PSMC3", "target": "CUL3", "value": 0.2},
{"source": "PSMC3", "target": "PSMB4", "value": 0.2},
{"source": "PSMC3", "target": "PSMD1", "value": 0.2},
{"source": "PSMC3", "target": "PSMA8", "value": 0.2},
{"source": "PSMC3", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMC3", "target": "PSMD12", "value": 0.2},
{"source": "PSMC3", "target": "NF1", "value": 0.2},
{"source": "PSMC3", "target": "PSMB5", "value": 0.2},
{"source": "PSMC3", "target": "BUB3", "value": 0.2},
{"source": "PSMC3", "target": "PSMD4", "value": 0.2},
{"source": "PSMC3", "target": "PSMA7", "value": 0.2},
{"source": "PSMC3", "target": "HIVEP3", "value": 0.2},
{"source": "PSMC3", "target": "PSMB8", "value": 0.2},
{"source": "PSMC3", "target": "PSME1", "value": 0.2},
{"source": "PSMC3", "target": "CCT4", "value": 0.2},
{"source": "PSMC3", "target": "RUNX3", "value": 0.2},
{"source": "PSMC3", "target": "PSMC6", "value": 0.2},
{"source": "PSMC3", "target": "WWP1", "value": 0.2},
{"source": "PSMC3", "target": "UBC", "value": 0.2},
{"source": "PSMC3", "target": "ITCH", "value": 0.2},
{"source": "PSMC3", "target": "PSMB3", "value": 0.2},
{"source": "NSF", "target": "ZW10", "value": 0.2},
{"source": "NSF", "target": "PSMD8", "value": 0.2},
{"source": "NSF", "target": "BET1", "value": 0.2},
{"source": "NSF", "target": "GOSR1", "value": 0.2},
{"source": "NSF", "target": "VAMP4", "value": 0.2},
{"source": "NSF", "target": "COPB1", "value": 0.2},
{"source": "NSF", "target": "SNAP25", "value": 0.2},
{"source": "NSF", "target": "STX6", "value": 0.2},
{"source": "NSF", "target": "COG3", "value": 0.2},
{"source": "NSF", "target": "COPE", "value": 0.2},
{"source": "NSF", "target": "NAPA", "value": 0.2},
{"source": "NSF", "target": "ARCN1", "value": 0.2},
{"source": "NSF", "target": "RAB7A", "value": 0.2},
{"source": "NSF", "target": "STX5", "value": 0.2},
{"source": "NSF", "target": "COG1", "value": 0.2},
{"source": "NSF", "target": "TMED10", "value": 0.2},
{"source": "NSF", "target": "SEC23A", "value": 0.2},
{"source": "NSF", "target": "RAB1B", "value": 0.2},
{"source": "NSF", "target": "VAMP2", "value": 0.2},
{"source": "NSF", "target": "STX4", "value": 0.2},
{"source": "NSF", "target": "COPG1", "value": 0.2},
{"source": "NSF", "target": "COPB2", "value": 0.2},
{"source": "NSF", "target": "KDELR1", "value": 0.2},
{"source": "NSF", "target": "TMED9", "value": 0.2},
{"source": "NSF", "target": "GABRA5", "value": 0.2},
{"source": "NSF", "target": "SEC24C", "value": 0.2},
{"source": "NSF", "target": "COG2", "value": 0.2},
{"source": "NSF", "target": "BET1L", "value": 0.2},
{"source": "NSF", "target": "SEC13", "value": 0.2},
{"source": "NSF", "target": "GOLGB1", "value": 0.2},
{"source": "NSF", "target": "TGOLN2", "value": 0.2},
{"source": "NSF", "target": "RAB1A", "value": 0.2},
{"source": "NSF", "target": "COPZ1", "value": 0.2},
{"source": "NSF", "target": "SPTBN2", "value": 0.2},
{"source": "NSF", "target": "COPG2", "value": 0.2},
{"source": "NSF", "target": "USO1", "value": 0.2},
{"source": "EXOSC1", "target": "RPL18A", "value": 0.2},
{"source": "EXOSC1", "target": "SKIV2L2", "value": 0.2},
{"source": "EXOSC1", "target": "RRP9", "value": 0.2},
{"source": "EXOSC1", "target": "NIP7", "value": 0.2},
{"source": "EXOSC1", "target": "NOP58", "value": 0.2},
{"source": "EXOSC1", "target": "EXOSC7", "value": 0.2},
{"source": "EXOSC1", "target": "RPL10L", "value": 0.2},
{"source": "EXOSC1", "target": "RPL38", "value": 0.2},
{"source": "EXOSC1", "target": "RPLP2", "value": 0.2},
{"source": "EXOSC1", "target": "RPS7", "value": 0.2},
{"source": "EXOSC1", "target": "RPL3", "value": 0.2},
{"source": "EXOSC1", "target": "RPL21", "value": 0.2},
{"source": "EXOSC1", "target": "RPL12", "value": 0.2},
{"source": "EXOSC1", "target": "PDCD11", "value": 0.2},
{"source": "EXOSC1", "target": "RPL30", "value": 0.2},
{"source": "EXOSC1", "target": "WDR18", "value": 0.2},
{"source": "EXOSC1", "target": "EXOSC8", "value": 0.2},
{"source": "EXOSC1", "target": "RPL35A", "value": 0.2},
{"source": "EXOSC1", "target": "RPL29", "value": 0.2},
{"source": "EXOSC1", "target": "RPL27", "value": 0.2},
{"source": "EXOSC1", "target": "EMG1", "value": 0.2},
{"source": "EXOSC1", "target": "RPL28", "value": 0.2},
{"source": "EXOSC1", "target": "ZFP36L1", "value": 0.2},
{"source": "EXOSC1", "target": "RPL9", "value": 0.2},
{"source": "EXOSC1", "target": "WDR36", "value": 0.2},
{"source": "EXOSC1", "target": "RPL23", "value": 0.2},
{"source": "EXOSC1", "target": "RPS6", "value": 0.2},
{"source": "MAP3K11", "target": "PYGM", "value": 0.2},
{"source": "MAP3K11", "target": "LRP8", "value": 0.2},
{"source": "MAP3K11", "target": "AHNAK", "value": 0.2},
{"source": "MAP3K11", "target": "SF1", "value": 0.2},
{"source": "MAP3K11", "target": "SLC3A2", "value": 0.2},
{"source": "MAP3K11", "target": "FAU", "value": 0.2},
{"source": "NUP37", "target": "ZW10", "value": 0.2},
{"source": "NUP37", "target": "PPP2CB", "value": 0.2},
{"source": "NUP37", "target": "DYNC1LI2", "value": 0.2},
{"source": "NUP37", "target": "PPP2R5A", "value": 0.2},
{"source": "NUP37", "target": "KPNB1", "value": 0.2},
{"source": "NUP37", "target": "HSPA9", "value": 0.2},
{"source": "NUP37", "target": "CPSF2", "value": 0.2},
{"source": "NUP37", "target": "HSPA4", "value": 0.2},
{"source": "NUP37", "target": "SMC1A", "value": 0.2},
{"source": "NUP37", "target": "HSPA5", "value": 0.2},
{"source": "NUP37", "target": "PPP2R1A", "value": 0.2},
{"source": "NUP37", "target": "PPP1CC", "value": 0.2},
{"source": "NUP37", "target": "DYNC1H1", "value": 0.2},
{"source": "NUP37", "target": "NUP214", "value": 0.2},
{"source": "NUP37", "target": "TPR", "value": 0.2},
{"source": "NUP37", "target": "BUB3", "value": 0.2},
{"source": "NUP37", "target": "RCC2", "value": 0.2},
{"source": "NUP37", "target": "MAPRE1", "value": 0.2},
{"source": "NUP37", "target": "HSPA1A", "value": 0.2},
{"source": "NUP37", "target": "SEC13", "value": 0.2},
{"source": "NUP37", "target": "DYNC1I2", "value": 0.2},
{"source": "NUP37", "target": "PAFAH1B1", "value": 0.2},
{"source": "NUP37", "target": "MAD1L1", "value": 0.2},
{"source": "NUP37", "target": "RANGAP1", "value": 0.2},
{"source": "NUP37", "target": "TOP2A", "value": 0.2},
{"source": "NUP37", "target": "CKAP5", "value": 0.2},
{"source": "SEC31A", "target": "BET1", "value": 0.2},
{"source": "SEC31A", "target": "CANX", "value": 0.2},
{"source": "SEC31A", "target": "COPB1", "value": 0.2},
{"source": "SEC31A", "target": "COPE", "value": 0.2},
{"source": "SEC31A", "target": "ARCN1", "value": 0.2},
{"source": "SEC31A", "target": "STX5", "value": 0.2},
{"source": "SEC31A", "target": "TMED10", "value": 0.2},
{"source": "SEC31A", "target": "SEC23A", "value": 0.2},
{"source": "SEC31A", "target": "RAB1B", "value": 0.2},
{"source": "SEC31A", "target": "COPG1", "value": 0.2},
{"source": "SEC31A", "target": "COPB2", "value": 0.2},
{"source": "SEC31A", "target": "AP1S1", "value": 0.2},
{"source": "SEC31A", "target": "SEC24C", "value": 0.2},
{"source": "SEC31A", "target": "HLA-DRB1", "value": 0.2},
{"source": "SEC31A", "target": "HLA-C", "value": 0.2},
{"source": "SEC31A", "target": "HLA-E", "value": 0.2},
{"source": "SEC31A", "target": "SEC13", "value": 0.2},
{"source": "SEC31A", "target": "HLA-B", "value": 0.2},
{"source": "SEC31A", "target": "COPG2", "value": 0.2},
{"source": "SEC31A", "target": "HLA-A", "value": 0.2},
{"source": "SEC31A", "target": "USO1", "value": 0.2},
{"source": "SEC31A", "target": "SEC24A", "value": 0.2},
{"source": "SEC31A", "target": "COPZ1", "value": 0.2},
{"source": "SEC31A", "target": "RAB1A", "value": 0.2},
{"source": "SEC31A", "target": "B2M", "value": 0.2},
{"source": "SKIV2L2", "target": "POLR2C", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL18A", "value": 0.2},
{"source": "SKIV2L2", "target": "DDX5", "value": 0.2},
{"source": "SKIV2L2", "target": "PRPF19", "value": 0.2},
{"source": "SKIV2L2", "target": "BYSL", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL23", "value": 0.2},
{"source": "SKIV2L2", "target": "TTC27", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL10L", "value": 0.2},
{"source": "SKIV2L2", "target": "RPLP2", "value": 0.2},
{"source": "SKIV2L2", "target": "EXOSC7", "value": 0.2},
{"source": "SKIV2L2", "target": "RPF2", "value": 0.2},
{"source": "SKIV2L2", "target": "RRP9", "value": 0.2},
{"source": "SKIV2L2", "target": "EXOSC8", "value": 0.2},
{"source": "SKIV2L2", "target": "POLR2B", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL27", "value": 0.2},
{"source": "SKIV2L2", "target": "RPS7", "value": 0.2},
{"source": "SKIV2L2", "target": "POLR2A", "value": 0.2},
{"source": "SKIV2L2", "target": "RRS1", "value": 0.2},
{"source": "SKIV2L2", "target": "MYBBP1A", "value": 0.2},
{"source": "SKIV2L2", "target": "WDR36", "value": 0.2},
{"source": "SKIV2L2", "target": "PWP1", "value": 0.2},
{"source": "SKIV2L2", "target": "RPS6", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL9", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL35A", "value": 0.2},
{"source": "SKIV2L2", "target": "WDR18", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL29", "value": 0.2},
{"source": "SKIV2L2", "target": "NAT10", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL30", "value": 0.2},
{"source": "SKIV2L2", "target": "DHX15", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL38", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL12", "value": 0.2},
{"source": "SKIV2L2", "target": "CPSF2", "value": 0.2},
{"source": "SKIV2L2", "target": "PDCD11", "value": 0.2},
{"source": "SKIV2L2", "target": "TSR1", "value": 0.2},
{"source": "SKIV2L2", "target": "EMG1", "value": 0.2},
{"source": "SKIV2L2", "target": "NOC3L", "value": 0.2},
{"source": "SKIV2L2", "target": "RBM19", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL28", "value": 0.2},
{"source": "SKIV2L2", "target": "BOP1", "value": 0.2},
{"source": "SKIV2L2", "target": "SNW1", "value": 0.2},
{"source": "SKIV2L2", "target": "XAB2", "value": 0.2},
{"source": "SKIV2L2", "target": "GTF2F2", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL21", "value": 0.2},
{"source": "SKIV2L2", "target": "NIP7", "value": 0.2},
{"source": "SKIV2L2", "target": "DDX10", "value": 0.2},
{"source": "SKIV2L2", "target": "NOP58", "value": 0.2},
{"source": "SKIV2L2", "target": "KRI1", "value": 0.2},
{"source": "SKIV2L2", "target": "DDX18", "value": 0.2},
{"source": "SKIV2L2", "target": "RPL3", "value": 0.2},
{"source": "SKIV2L2", "target": "GTPBP4", "value": 0.2},
{"source": "SKIV2L2", "target": "POLR1B", "value": 0.2},
{"source": "SKIV2L2", "target": "HNRNPUL1", "value": 0.2},
{"source": "ARPC5", "target": "APOB", "value": 0.2},
{"source": "ARPC5", "target": "VAMP4", "value": 0.2},
{"source": "ARPC5", "target": "MYH2", "value": 0.2},
{"source": "ARPC5", "target": "ARPC1A", "value": 0.2},
{"source": "ARPC5", "target": "PACSIN2", "value": 0.2},
{"source": "ARPC5", "target": "NCKAP1L", "value": 0.2},
{"source": "ARPC5", "target": "RAB5C", "value": 0.2},
{"source": "ARPC5", "target": "ARPC1B", "value": 0.2},
{"source": "ARPC5", "target": "LDLR", "value": 0.2},
{"source": "ARPC5", "target": "VAMP2", "value": 0.2},
{"source": "ARPC5", "target": "ARPC2", "value": 0.2},
{"source": "ARPC5", "target": "TFRC", "value": 0.2},
{"source": "ARPC5", "target": "EPN1", "value": 0.2},
{"source": "ARPC5", "target": "RAB5B", "value": 0.2},
{"source": "ARPC5", "target": "CLTB", "value": 0.2},
{"source": "ARPC5", "target": "BAIAP2", "value": 0.2},
{"source": "ARPC5", "target": "UBC", "value": 0.2},
{"source": "ARPC5", "target": "MYO5A", "value": 0.2},
{"source": "ARPC5", "target": "LDLRAP1", "value": 0.2},
{"source": "ARPC5", "target": "WIPF1", "value": 0.2},
{"source": "ARPC5", "target": "FNBP1", "value": 0.2},
{"source": "ARPC5", "target": "TGOLN2", "value": 0.2},
{"source": "SRP14", "target": "MRPS10", "value": 0.2},
{"source": "SRP14", "target": "RPL18A", "value": 0.2},
{"source": "SRP14", "target": "DDX5", "value": 0.2},
{"source": "SRP14", "target": "RPS12", "value": 0.2},
{"source": "SRP14", "target": "RPS16", "value": 0.2},
{"source": "SRP14", "target": "RPL38", "value": 0.2},
{"source": "SRP14", "target": "RPL30", "value": 0.2},
{"source": "SRP14", "target": "RPS23", "value": 0.2},
{"source": "SRP14", "target": "RPS21", "value": 0.2},
{"source": "SRP14", "target": "RPS3", "value": 0.2},
{"source": "SRP14", "target": "RPS26", "value": 0.2},
{"source": "SRP14", "target": "RPSA", "value": 0.2},
{"source": "SRP14", "target": "RPL12", "value": 0.2},
{"source": "SRP14", "target": "RPLP2", "value": 0.2},
{"source": "SRP14", "target": "RPL27", "value": 0.2},
{"source": "SRP14", "target": "RPS8", "value": 0.2},
{"source": "SRP14", "target": "RPS7", "value": 0.2},
{"source": "SRP14", "target": "PLEC1", "value": 0.2},
{"source": "SRP14", "target": "RPL3", "value": 0.2},
{"source": "SRP14", "target": "RPL29", "value": 0.2},
{"source": "SRP14", "target": "FAU", "value": 0.2},
{"source": "SRP14", "target": "RPS27L", "value": 0.2},
{"source": "SRP14", "target": "RPL10L", "value": 0.2},
{"source": "SRP14", "target": "RPL21", "value": 0.2},
{"source": "SRP14", "target": "RPS6", "value": 0.2},
{"source": "SRP14", "target": "RPL23", "value": 0.2},
{"source": "SRP14", "target": "RPS15A", "value": 0.2},
{"source": "SRP14", "target": "RPL9", "value": 0.2},
{"source": "SRP14", "target": "RPL28", "value": 0.2},
{"source": "SRP14", "target": "RPL35A", "value": 0.2},
{"source": "SRP14", "target": "SRP68", "value": 0.2},
{"source": "SRP14", "target": "RPS15", "value": 0.2},
{"source": "KDELR1", "target": "ARF5", "value": 0.2},
{"source": "KDELR1", "target": "ZW10", "value": 0.2},
{"source": "KDELR1", "target": "BET1", "value": 0.2},
{"source": "KDELR1", "target": "GOSR1", "value": 0.2},
{"source": "KDELR1", "target": "CANX", "value": 0.2},
{"source": "KDELR1", "target": "COPB1", "value": 0.2},
{"source": "KDELR1", "target": "DYNC1LI2", "value": 0.2},
{"source": "KDELR1", "target": "COG3", "value": 0.2},
{"source": "KDELR1", "target": "KIF11", "value": 0.2},
{"source": "KDELR1", "target": "COPE", "value": 0.2},
{"source": "KDELR1", "target": "NAPA", "value": 0.2},
{"source": "KDELR1", "target": "ARCN1", "value": 0.2},
{"source": "KDELR1", "target": "STX5", "value": 0.2},
{"source": "KDELR1", "target": "COG1", "value": 0.2},
{"source": "KDELR1", "target": "TMED10", "value": 0.2},
{"source": "KDELR1", "target": "ARF4", "value": 0.2},
{"source": "KDELR1", "target": "KIF5B", "value": 0.2},
{"source": "KDELR1", "target": "CLTB", "value": 0.2},
{"source": "KDELR1", "target": "RAB1B", "value": 0.2},
{"source": "KDELR1", "target": "HSPA5", "value": 0.2},
{"source": "KDELR1", "target": "COPG1", "value": 0.2},
{"source": "KDELR1", "target": "P4HB", "value": 0.2},
{"source": "KDELR1", "target": "COPB2", "value": 0.2},
{"source": "KDELR1", "target": "USO1", "value": 0.2},
{"source": "KDELR1", "target": "ACTR1A", "value": 0.2},
{"source": "KDELR1", "target": "COG2", "value": 0.2},
{"source": "KDELR1", "target": "DCTN1", "value": 0.2},
{"source": "KDELR1", "target": "DYNC1H1", "value": 0.2},
{"source": "KDELR1", "target": "COPG2", "value": 0.2},
{"source": "KDELR1", "target": "BET1L", "value": 0.2},
{"source": "KDELR1", "target": "SPTBN2", "value": 0.2},
{"source": "KDELR1", "target": "PSMD4", "value": 0.2},
{"source": "KDELR1", "target": "TMED9", "value": 0.2},
{"source": "KDELR1", "target": "RAB1A", "value": 0.2},
{"source": "KDELR1", "target": "DYNC1I2", "value": 0.2},
{"source": "KDELR1", "target": "GOLGB1", "value": 0.2},
{"source": "KDELR1", "target": "COPZ1", "value": 0.2},
{"source": "POU2F2", "target": "POLR2C", "value": 0.2},
{"source": "POU2F2", "target": "NFKB1", "value": 0.2},
{"source": "POU2F2", "target": "GTF2F2", "value": 0.2},
{"source": "POU2F2", "target": "POLR2B", "value": 0.2},
{"source": "POU2F2", "target": "CCNK", "value": 0.2},
{"source": "POU2F2", "target": "INTS1", "value": 0.2},
{"source": "POU2F2", "target": "INTS12", "value": 0.2},
{"source": "POU2F2", "target": "SUPT5H", "value": 0.2},
{"source": "POU2F2", "target": "POLR2A", "value": 0.2},
{"source": "GOLGB1", "target": "BET1", "value": 0.2},
{"source": "GOLGB1", "target": "GOSR1", "value": 0.2},
{"source": "GOLGB1", "target": "CANX", "value": 0.2},
{"source": "GOLGB1", "target": "COPB1", "value": 0.2},
{"source": "GOLGB1", "target": "DYNC1LI2", "value": 0.2},
{"source": "GOLGB1", "target": "COG3", "value": 0.2},
{"source": "GOLGB1", "target": "COPE", "value": 0.2},
{"source": "GOLGB1", "target": "NAPA", "value": 0.2},
{"source": "GOLGB1", "target": "ARCN1", "value": 0.2},
{"source": "GOLGB1", "target": "STX5", "value": 0.2},
{"source": "GOLGB1", "target": "COG1", "value": 0.2},
{"source": "GOLGB1", "target": "TMED10", "value": 0.2},
{"source": "GOLGB1", "target": "RAB1B", "value": 0.2},
{"source": "GOLGB1", "target": "COPG1", "value": 0.2},
{"source": "GOLGB1", "target": "COPB2", "value": 0.2},
{"source": "GOLGB1", "target": "TMED9", "value": 0.2},
{"source": "GOLGB1", "target": "DYNC1H1", "value": 0.2},
{"source": "GOLGB1", "target": "DCTN1", "value": 0.2},
{"source": "GOLGB1", "target": "COG2", "value": 0.2},
{"source": "GOLGB1", "target": "ACTR1A", "value": 0.2},
{"source": "GOLGB1", "target": "BET1L", "value": 0.2},
{"source": "GOLGB1", "target": "USO1", "value": 0.2},
{"source": "GOLGB1", "target": "TGOLN2", "value": 0.2},
{"source": "GOLGB1", "target": "DYNC1I2", "value": 0.2},
{"source": "GOLGB1", "target": "COPG2", "value": 0.2},
{"source": "GOLGB1", "target": "COPZ1", "value": 0.2},
{"source": "GOLGB1", "target": "SPTBN2", "value": 0.2},
{"source": "GOLGB1", "target": "RAB1A", "value": 0.2},
{"source": "PTPRC", "target": "HLA-DRB1", "value": 0.2},
{"source": "PTPRC", "target": "SRC", "value": 0.2},
{"source": "PTPRC", "target": "ITGB1", "value": 0.2},
{"source": "PTPRC", "target": "ITGB2", "value": 0.2},
{"source": "PTPRC", "target": "LYN", "value": 0.2},
{"source": "TPM3", "target": "TNNT3", "value": 0.2},
{"source": "TPM3", "target": "ITGB5", "value": 0.2},
{"source": "TPM3", "target": "TMOD3", "value": 0.2},
{"source": "TPM3", "target": "TLN1", "value": 0.2},
{"source": "TPM3", "target": "MYLPF", "value": 0.2},
{"source": "TPM3", "target": "MYBPC2", "value": 0.2},
{"source": "TPM3", "target": "ACTA1", "value": 0.2},
{"source": "TPM3", "target": "TPR", "value": 0.2},
{"source": "TPM3", "target": "ACTN2", "value": 0.2},
{"source": "TPM3", "target": "DES", "value": 0.2},
{"source": "TPM3", "target": "MYL3", "value": 0.2},
{"source": "TPM3", "target": "TNNC2", "value": 0.2},
{"source": "TPM3", "target": "TPM2", "value": 0.2},
{"source": "TPM3", "target": "MYH11", "value": 0.2},
{"source": "TPM3", "target": "MYH8", "value": 0.2},
{"source": "TPM3", "target": "MYH3", "value": 0.2},
{"source": "TPM3", "target": "TTN", "value": 0.2},
{"source": "TPM3", "target": "TNNI2", "value": 0.2},
{"source": "TPM3", "target": "MYBPC1", "value": 0.2},
{"source": "NOTCH1", "target": "JAG1", "value": 0.2},
{"source": "NOTCH1", "target": "SNW1", "value": 0.2},
{"source": "NOTCH1", "target": "YY1", "value": 0.2},
{"source": "NOTCH1", "target": "FURIN", "value": 0.2},
{"source": "NOTCH1", "target": "HDAC1", "value": 0.2},
{"source": "NOTCH1", "target": "SRC", "value": 0.2},
{"source": "NOTCH1", "target": "ATM", "value": 0.2},
{"source": "NOTCH1", "target": "UBC", "value": 0.2},
{"source": "NOTCH1", "target": "RUNX3", "value": 0.2},
{"source": "NOTCH1", "target": "WDR5", "value": 0.2},
{"source": "NOTCH1", "target": "RBPJ", "value": 0.2},
{"source": "NOTCH1", "target": "ATP2A2", "value": 0.2},
{"source": "NOTCH1", "target": "ITCH", "value": 0.2},
{"source": "NOTCH1", "target": "SMAD3", "value": 0.2},
{"source": "HLA-E", "target": "CANX", "value": 0.2},
{"source": "HLA-E", "target": "SEC23A", "value": 0.2},
{"source": "HLA-E", "target": "HSPA5", "value": 0.2},
{"source": "HLA-E", "target": "SEC24C", "value": 0.2},
{"source": "HLA-E", "target": "HLA-DRB1", "value": 0.2},
{"source": "HLA-E", "target": "PSMB8", "value": 0.2},
{"source": "HLA-E", "target": "HLA-C", "value": 0.2},
{"source": "HLA-E", "target": "TAPBP", "value": 0.2},
{"source": "HLA-E", "target": "TRIM22", "value": 0.2},
{"source": "HLA-E", "target": "SEC24A", "value": 0.2},
{"source": "HLA-E", "target": "SEC13", "value": 0.2},
{"source": "HLA-E", "target": "HLA-DMB", "value": 0.2},
{"source": "HLA-E", "target": "PLCG2", "value": 0.2},
{"source": "HLA-E", "target": "HLA-A", "value": 0.2},
{"source": "HLA-E", "target": "B2M", "value": 0.2},
{"source": "HLA-E", "target": "HLA-B", "value": 0.2},
{"source": "SEC24A", "target": "BET1", "value": 0.2},
{"source": "SEC24A", "target": "CANX", "value": 0.2},
{"source": "SEC24A", "target": "COPB1", "value": 0.2},
{"source": "SEC24A", "target": "COPE", "value": 0.2},
{"source": "SEC24A", "target": "ARCN1", "value": 0.2},
{"source": "SEC24A", "target": "STX5", "value": 0.2},
{"source": "SEC24A", "target": "TMED10", "value": 0.2},
{"source": "SEC24A", "target": "SEC23A", "value": 0.2},
{"source": "SEC24A", "target": "RAB1B", "value": 0.2},
{"source": "SEC24A", "target": "COPG1", "value": 0.2},
{"source": "SEC24A", "target": "COPB2", "value": 0.2},
{"source": "SEC24A", "target": "AP1S1", "value": 0.2},
{"source": "SEC24A", "target": "SEC24C", "value": 0.2},
{"source": "SEC24A", "target": "HLA-DRB1", "value": 0.2},
{"source": "SEC24A", "target": "HLA-C", "value": 0.2},
{"source": "SEC24A", "target": "SEC13", "value": 0.2},
{"source": "SEC24A", "target": "HLA-A", "value": 0.2},
{"source": "SEC24A", "target": "TLE3", "value": 0.2},
{"source": "SEC24A", "target": "RAB1A", "value": 0.2},
{"source": "SEC24A", "target": "HLA-B", "value": 0.2},
{"source": "SEC24A", "target": "B2M", "value": 0.2},
{"source": "SEC24A", "target": "USO1", "value": 0.2},
{"source": "SEC24A", "target": "COPZ1", "value": 0.2},
{"source": "SEC24A", "target": "COPG2", "value": 0.2},
{"source": "RAB5C", "target": "APOB", "value": 0.2},
{"source": "RAB5C", "target": "VAMP4", "value": 0.2},
{"source": "RAB5C", "target": "RAB27B", "value": 0.2},
{"source": "RAB5C", "target": "ARPC1A", "value": 0.2},
{"source": "RAB5C", "target": "PACSIN2", "value": 0.2},
{"source": "RAB5C", "target": "NAPA", "value": 0.2},
{"source": "RAB5C", "target": "RAB10", "value": 0.2},
{"source": "RAB5C", "target": "RAB7A", "value": 0.2},
{"source": "RAB5C", "target": "ARPC2", "value": 0.2},
{"source": "RAB5C", "target": "RAB8A", "value": 0.2},
{"source": "RAB5C", "target": "CLTB", "value": 0.2},
{"source": "RAB5C", "target": "RAB1B", "value": 0.2},
{"source": "RAB5C", "target": "VAMP2", "value": 0.2},
{"source": "RAB5C", "target": "LAMP1", "value": 0.2},
{"source": "RAB5C", "target": "RAB11B", "value": 0.2},
{"source": "RAB5C", "target": "AP1S1", "value": 0.2},
{"source": "RAB5C", "target": "AP1B1", "value": 0.2},
{"source": "RAB5C", "target": "TFRC", "value": 0.2},
{"source": "RAB5C", "target": "RAB5B", "value": 0.2},
{"source": "RAB5C", "target": "RAB14", "value": 0.2},
{"source": "RAB5C", "target": "LDLRAP1", "value": 0.2},
{"source": "RAB5C", "target": "TGOLN2", "value": 0.2},
{"source": "RAB5C", "target": "RAB1A", "value": 0.2},
{"source": "RAB5C", "target": "EPN1", "value": 0.2},
{"source": "RAB5C", "target": "FNBP1", "value": 0.2},
{"source": "RAB5C", "target": "UBC", "value": 0.2},
{"source": "RAB5C", "target": "LDLR", "value": 0.2},
{"source": "RCC2", "target": "ZW10", "value": 0.2},
{"source": "RCC2", "target": "PPP2CB", "value": 0.2},
{"source": "RCC2", "target": "DYNC1LI2", "value": 0.2},
{"source": "RCC2", "target": "PPP2R5A", "value": 0.2},
{"source": "RCC2", "target": "SMC1A", "value": 0.2},
{"source": "RCC2", "target": "PPP2R1A", "value": 0.2},
{"source": "RCC2", "target": "PPP1CC", "value": 0.2},
{"source": "RCC2", "target": "DYNC1H1", "value": 0.2},
{"source": "RCC2", "target": "BUB3", "value": 0.2},
{"source": "RCC2", "target": "DYNC1I2", "value": 0.2},
{"source": "RCC2", "target": "PAFAH1B1", "value": 0.2},
{"source": "RCC2", "target": "RANGAP1", "value": 0.2},
{"source": "RCC2", "target": "MAD1L1", "value": 0.2},
{"source": "RCC2", "target": "CKAP5", "value": 0.2},
{"source": "RCC2", "target": "SEC13", "value": 0.2},
{"source": "RCC2", "target": "MAPRE1", "value": 0.2},
{"source": "PLXNA1", "target": "TLN1", "value": 0.2},
{"source": "PLXNA1", "target": "HSP90AA1", "value": 0.2},
{"source": "PLXNA1", "target": "LIMK1", "value": 0.2},
{"source": "PLXNA1", "target": "HSP90AB1", "value": 0.2},
{"source": "XPC", "target": "MSH6", "value": 0.2},
{"source": "XPC", "target": "DDB2", "value": 0.2},
{"source": "XPC", "target": "YY1", "value": 0.2},
{"source": "XPC", "target": "ATM", "value": 0.2},
{"source": "XPC", "target": "RPA2", "value": 0.2},
{"source": "XPC", "target": "PARP1", "value": 0.2},
{"source": "XPC", "target": "UBC", "value": 0.2},
{"source": "XPC", "target": "DDB1", "value": 0.2},
{"source": "PYGM", "target": "PFKM", "value": 0.2},
{"source": "PYGM", "target": "CALM1", "value": 0.2},
{"source": "PYGM", "target": "AHNAK", "value": 0.2},
{"source": "PYGM", "target": "SLC3A2", "value": 0.2},
{"source": "PYGM", "target": "GPI", "value": 0.2},
{"source": "PYGM", "target": "FAU", "value": 0.2},
{"source": "PYGM", "target": "TPI1", "value": 0.2},
{"source": "PYGM", "target": "SF1", "value": 0.2},
{"source": "EPN1", "target": "APOB", "value": 0.2},
{"source": "EPN1", "target": "VAMP4", "value": 0.2},
{"source": "EPN1", "target": "ARPC1A", "value": 0.2},
{"source": "EPN1", "target": "PACSIN2", "value": 0.2},
{"source": "EPN1", "target": "ARPC2", "value": 0.2},
{"source": "EPN1", "target": "CLTB", "value": 0.2},
{"source": "EPN1", "target": "VAMP2", "value": 0.2},
{"source": "EPN1", "target": "TFRC", "value": 0.2},
{"source": "EPN1", "target": "RAB5B", "value": 0.2},
{"source": "EPN1", "target": "LDLRAP1", "value": 0.2},
{"source": "EPN1", "target": "TGOLN2", "value": 0.2},
{"source": "EPN1", "target": "LDLR", "value": 0.2},
{"source": "EPN1", "target": "FNBP1", "value": 0.2},
{"source": "EPN1", "target": "UBC", "value": 0.2},
{"source": "SLC15A4", "target": "MLEC", "value": 0.2},
{"source": "SLC15A4", "target": "SNAP25", "value": 0.2},
{"source": "SLC15A4", "target": "CYBA", "value": 0.2},
{"source": "SLC15A4", "target": "DEGS1", "value": 0.2},
{"source": "SLC15A4", "target": "ITGB2", "value": 0.2},
{"source": "SLC15A4", "target": "HMOX2", "value": 0.2},
{"source": "SLC15A4", "target": "HVCN1", "value": 0.2},
{"source": "SLC15A4", "target": "TSPAN14", "value": 0.2},
{"source": "SLC15A4", "target": "MOSPD2", "value": 0.2},
{"source": "SLC15A4", "target": "PTPRJ", "value": 0.2},
{"source": "SLC15A4", "target": "ANO6", "value": 0.2},
{"source": "SLC15A4", "target": "KCNAB2", "value": 0.2},
{"source": "SLC15A4", "target": "CD47", "value": 0.2},
{"source": "SLC15A4", "target": "UBR4", "value": 0.2},
{"source": "RAB1B", "target": "ARF5", "value": 0.2},
{"source": "RAB1B", "target": "ZW10", "value": 0.2},
{"source": "RAB1B", "target": "BET1", "value": 0.2},
{"source": "RAB1B", "target": "GOSR1", "value": 0.2},
{"source": "RAB1B", "target": "COPB1", "value": 0.2},
{"source": "RAB1B", "target": "DYNC1LI2", "value": 0.2},
{"source": "RAB1B", "target": "COG3", "value": 0.2},
{"source": "RAB1B", "target": "KIF11", "value": 0.2},
{"source": "RAB1B", "target": "RAB27B", "value": 0.2},
{"source": "RAB1B", "target": "COPE", "value": 0.2},
{"source": "RAB1B", "target": "NAPA", "value": 0.2},
{"source": "RAB1B", "target": "ARCN1", "value": 0.2},
{"source": "RAB1B", "target": "RAB10", "value": 0.2},
{"source": "RAB1B", "target": "RAB7A", "value": 0.2},
{"source": "RAB1B", "target": "STX5", "value": 0.2},
{"source": "RAB1B", "target": "COG1", "value": 0.2},
{"source": "RAB1B", "target": "RAB8A", "value": 0.2},
{"source": "RAB1B", "target": "TMED10", "value": 0.2},
{"source": "RAB1B", "target": "ARF4", "value": 0.2},
{"source": "RAB1B", "target": "SEC23A", "value": 0.2},
{"source": "RAB1B", "target": "KIF5B", "value": 0.2},
{"source": "RAB1B", "target": "RAB14", "value": 0.2},
{"source": "RAB1B", "target": "RAB11B", "value": 0.2},
{"source": "RAB1B", "target": "BET1L", "value": 0.2},
{"source": "RAB1B", "target": "ACTR1A", "value": 0.2},
{"source": "RAB1B", "target": "SPTBN2", "value": 0.2},
{"source": "RAB1B", "target": "COG2", "value": 0.2},
{"source": "RAB1B", "target": "DCTN1", "value": 0.2},
{"source": "RAB1B", "target": "COPB2", "value": 0.2},
{"source": "RAB1B", "target": "SEC24C", "value": 0.2},
{"source": "RAB1B", "target": "RAB5B", "value": 0.2},
{"source": "RAB1B", "target": "RAB1A", "value": 0.2},
{"source": "RAB1B", "target": "COPG1", "value": 0.2},
{"source": "RAB1B", "target": "SEC13", "value": 0.2},
{"source": "RAB1B", "target": "USO1", "value": 0.2},
{"source": "RAB1B", "target": "TMED9", "value": 0.2},
{"source": "RAB1B", "target": "COPG2", "value": 0.2},
{"source": "RAB1B", "target": "COPZ1", "value": 0.2},
{"source": "RAB1B", "target": "DYNC1H1", "value": 0.2},
{"source": "RAB1B", "target": "DYNC1I2", "value": 0.2},
{"source": "WTAP", "target": "POLR2C", "value": 0.2},
{"source": "WTAP", "target": "WT1", "value": 0.2},
{"source": "WTAP", "target": "GTF2F2", "value": 0.2},
{"source": "WTAP", "target": "POLR2A", "value": 0.2},
{"source": "WTAP", "target": "POLR2B", "value": 0.2},
{"source": "BNIP3L", "target": "PKMYT1", "value": 0.2},
{"source": "BNIP3L", "target": "PARK2", "value": 0.2},
{"source": "LAMP1", "target": "CTSD", "value": 0.2},
{"source": "LAMP1", "target": "CANX", "value": 0.2},
{"source": "LAMP1", "target": "RAB7A", "value": 0.2},
{"source": "LAMP1", "target": "TGOLN2", "value": 0.2},
{"source": "LAMP1", "target": "TFRC", "value": 0.2},
{"source": "TLN1", "target": "ITGA3", "value": 0.2},
{"source": "TLN1", "target": "CAPNS1", "value": 0.2},
{"source": "TLN1", "target": "ITGA5", "value": 0.2},
{"source": "TLN1", "target": "CAPN2", "value": 0.2},
{"source": "TLN1", "target": "ITGB5", "value": 0.2},
{"source": "TLN1", "target": "ACTN2", "value": 0.2},
{"source": "TLN1", "target": "MYLPF", "value": 0.2},
{"source": "TLN1", "target": "TPM2", "value": 0.2},
{"source": "TLN1", "target": "SRC", "value": 0.2},
{"source": "TLN1", "target": "SHC1", "value": 0.2},
{"source": "TLN1", "target": "MYH11", "value": 0.2},
{"source": "TLN1", "target": "ACTA1", "value": 0.2},
{"source": "TLN1", "target": "ITGB2", "value": 0.2},
{"source": "TLN1", "target": "ITGB1", "value": 0.2},
{"source": "TLN1", "target": "CAPN1", "value": 0.2},
{"source": "TLN1", "target": "RHOA", "value": 0.2},
{"source": "RPL30", "target": "MRPS10", "value": 0.2},
{"source": "RPL30", "target": "EIF3E", "value": 0.2},
{"source": "RPL30", "target": "RPL18A", "value": 0.2},
{"source": "RPL30", "target": "RPS12", "value": 0.2},
{"source": "RPL30", "target": "RPS16", "value": 0.2},
{"source": "RPL30", "target": "EIF2S3", "value": 0.2},
{"source": "RPL30", "target": "NIP7", "value": 0.2},
{"source": "RPL30", "target": "EIF2S1", "value": 0.2},
{"source": "RPL30", "target": "NOP58", "value": 0.2},
{"source": "RPL30", "target": "EXOSC7", "value": 0.2},
{"source": "RPL30", "target": "RPS3", "value": 0.2},
{"source": "RPL30", "target": "EIF5B", "value": 0.2},
{"source": "RPL30", "target": "RPS23", "value": 0.2},
{"source": "RPL30", "target": "RPL10L", "value": 0.2},
{"source": "RPL30", "target": "HINT1", "value": 0.2},
{"source": "RPL30", "target": "EEF2", "value": 0.2},
{"source": "RPL30", "target": "MRPL11", "value": 0.2},
{"source": "RPL30", "target": "RPL38", "value": 0.2},
{"source": "RPL30", "target": "SRP68", "value": 0.2},
{"source": "RPL30", "target": "RPS15A", "value": 0.2},
{"source": "RPL30", "target": "RRS1", "value": 0.2},
{"source": "RPL30", "target": "RPLP2", "value": 0.2},
{"source": "RPL30", "target": "PLEC1", "value": 0.2},
{"source": "RPL30", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL30", "target": "RPS27L", "value": 0.2},
{"source": "RPL30", "target": "RPS7", "value": 0.2},
{"source": "RPL30", "target": "RPS21", "value": 0.2},
{"source": "RPL30", "target": "RPL3", "value": 0.2},
{"source": "RPL30", "target": "RPL21", "value": 0.2},
{"source": "RPL30", "target": "RPSA", "value": 0.2},
{"source": "RPL30", "target": "RPS26", "value": 0.2},
{"source": "RPL30", "target": "GTPBP4", "value": 0.2},
{"source": "RPL30", "target": "EIF3B", "value": 0.2},
{"source": "RPL30", "target": "RPL12", "value": 0.2},
{"source": "RPL30", "target": "RPS6", "value": 0.2},
{"source": "RPL30", "target": "EXOSC8", "value": 0.2},
{"source": "RPL30", "target": "CCT4", "value": 0.2},
{"source": "RPL30", "target": "RPS8", "value": 0.2},
{"source": "RPL30", "target": "RPL9", "value": 0.2},
{"source": "RPL30", "target": "RPF2", "value": 0.2},
{"source": "RPL30", "target": "RPL29", "value": 0.2},
{"source": "RPL30", "target": "RPL35A", "value": 0.2},
{"source": "RPL30", "target": "RPL23", "value": 0.2},
{"source": "RPL30", "target": "RPL28", "value": 0.2},
{"source": "RPL30", "target": "WDR18", "value": 0.2},
{"source": "RPL30", "target": "RPS15", "value": 0.2},
{"source": "RPL30", "target": "FAU", "value": 0.2},
{"source": "RPL30", "target": "RPL27", "value": 0.2},
{"source": "RPL30", "target": "BOP1", "value": 0.2},
{"source": "RPL30", "target": "EIF3M", "value": 0.2},
{"source": "MRPL11", "target": "MRPS10", "value": 0.2},
{"source": "MRPL11", "target": "RPL18A", "value": 0.2},
{"source": "MRPL11", "target": "RPS16", "value": 0.2},
{"source": "MRPL11", "target": "RPS3", "value": 0.2},
{"source": "MRPL11", "target": "RPS23", "value": 0.2},
{"source": "MRPL11", "target": "SRP68", "value": 0.2},
{"source": "MRPL11", "target": "RPL38", "value": 0.2},
{"source": "MRPL11", "target": "PDCD11", "value": 0.2},
{"source": "MRPL11", "target": "RPL9", "value": 0.2},
{"source": "MRPL11", "target": "RPS8", "value": 0.2},
{"source": "MRPL11", "target": "RPS26", "value": 0.2},
{"source": "MRPL11", "target": "RPL27", "value": 0.2},
{"source": "MRPL11", "target": "RPS15A", "value": 0.2},
{"source": "MRPL11", "target": "RPS15", "value": 0.2},
{"source": "MRPL11", "target": "RPL29", "value": 0.2},
{"source": "MRPL11", "target": "RPLP2", "value": 0.2},
{"source": "MRPL11", "target": "RPL21", "value": 0.2},
{"source": "MRPL11", "target": "HSP90AA1", "value": 0.2},
{"source": "MRPL11", "target": "RPS7", "value": 0.2},
{"source": "MRPL11", "target": "RPL35A", "value": 0.2},
{"source": "MRPL11", "target": "RPL3", "value": 0.2},
{"source": "MRPL11", "target": "PLEC1", "value": 0.2},
{"source": "MRPL11", "target": "HSPA1A", "value": 0.2},
{"source": "MRPL11", "target": "RPS6", "value": 0.2},
{"source": "MRPL11", "target": "RPS27L", "value": 0.2},
{"source": "MRPL11", "target": "RPS21", "value": 0.2},
{"source": "MRPL11", "target": "DUT", "value": 0.2},
{"source": "MRPL11", "target": "RPL23", "value": 0.2},
{"source": "MRPL11", "target": "FAU", "value": 0.2},
{"source": "MRPL11", "target": "RPL28", "value": 0.2},
{"source": "CAPN1", "target": "CAPNS1", "value": 0.2},
{"source": "CAPN1", "target": "CAPN2", "value": 0.2},
{"source": "CAPN1", "target": "ACTA1", "value": 0.2},
{"source": "CAPN1", "target": "SRC", "value": 0.2},
{"source": "CAPN1", "target": "ITGB1", "value": 0.2},
{"source": "CAPN1", "target": "RHOA", "value": 0.2},
{"source": "CAPN1", "target": "ACTN2", "value": 0.2},
{"source": "MYBBP1A", "target": "BYSL", "value": 0.2},
{"source": "MYBBP1A", "target": "RRP9", "value": 0.2},
{"source": "MYBBP1A", "target": "NAT10", "value": 0.2},
{"source": "MYBBP1A", "target": "DDX18", "value": 0.2},
{"source": "MYBBP1A", "target": "NOP58", "value": 0.2},
{"source": "MYBBP1A", "target": "TSR1", "value": 0.2},
{"source": "MYBBP1A", "target": "DDX10", "value": 0.2},
{"source": "MYBBP1A", "target": "KRI1", "value": 0.2},
{"source": "MYBBP1A", "target": "RRS1", "value": 0.2},
{"source": "MYBBP1A", "target": "GTPBP4", "value": 0.2},
{"source": "MYBBP1A", "target": "PDCD11", "value": 0.2},
{"source": "MYBBP1A", "target": "NOC3L", "value": 0.2},
{"source": "MYBBP1A", "target": "H2AFJ", "value": 0.2},
{"source": "MYBBP1A", "target": "POLR1B", "value": 0.2},
{"source": "MYBBP1A", "target": "RBM19", "value": 0.2},
{"source": "MYBBP1A", "target": "WDR36", "value": 0.2},
{"source": "MYBBP1A", "target": "PWP1", "value": 0.2},
{"source": "MYBBP1A", "target": "BOP1", "value": 0.2},
{"source": "EHD2", "target": "CCT7", "value": 0.2},
{"source": "EHD2", "target": "PACSIN2", "value": 0.2},
{"source": "EHD2", "target": "CCT4", "value": 0.2},
{"source": "EHD2", "target": "CCT3", "value": 0.2},
{"source": "EHD2", "target": "CLTB", "value": 0.2},
{"source": "BOP1", "target": "RPL18A", "value": 0.2},
{"source": "BOP1", "target": "DDX5", "value": 0.2},
{"source": "BOP1", "target": "BYSL", "value": 0.2},
{"source": "BOP1", "target": "RRP9", "value": 0.2},
{"source": "BOP1", "target": "RPS16", "value": 0.2},
{"source": "BOP1", "target": "NIP7", "value": 0.2},
{"source": "BOP1", "target": "NAT10", "value": 0.2},
{"source": "BOP1", "target": "DDX18", "value": 0.2},
{"source": "BOP1", "target": "NOP58", "value": 0.2},
{"source": "BOP1", "target": "RPS23", "value": 0.2},
{"source": "BOP1", "target": "RPL10L", "value": 0.2},
{"source": "BOP1", "target": "TSR1", "value": 0.2},
{"source": "BOP1", "target": "RPL38", "value": 0.2},
{"source": "BOP1", "target": "TTC27", "value": 0.2},
{"source": "BOP1", "target": "DDX10", "value": 0.2},
{"source": "BOP1", "target": "RPS15A", "value": 0.2},
{"source": "BOP1", "target": "KRI1", "value": 0.2},
{"source": "BOP1", "target": "RRS1", "value": 0.2},
{"source": "BOP1", "target": "RPLP2", "value": 0.2},
{"source": "BOP1", "target": "RPS27L", "value": 0.2},
{"source": "BOP1", "target": "DHX15", "value": 0.2},
{"source": "BOP1", "target": "RPS7", "value": 0.2},
{"source": "BOP1", "target": "RPL3", "value": 0.2},
{"source": "BOP1", "target": "RPL21", "value": 0.2},
{"source": "BOP1", "target": "GTPBP4", "value": 0.2},
{"source": "BOP1", "target": "EIF3B", "value": 0.2},
{"source": "BOP1", "target": "RPL12", "value": 0.2},
{"source": "BOP1", "target": "PDCD11", "value": 0.2},
{"source": "BOP1", "target": "NOC3L", "value": 0.2},
{"source": "BOP1", "target": "RPS6", "value": 0.2},
{"source": "BOP1", "target": "RPS8", "value": 0.2},
{"source": "BOP1", "target": "PWP1", "value": 0.2},
{"source": "BOP1", "target": "RPL9", "value": 0.2},
{"source": "BOP1", "target": "RPF2", "value": 0.2},
{"source": "BOP1", "target": "RPL29", "value": 0.2},
{"source": "BOP1", "target": "RPL35A", "value": 0.2},
{"source": "BOP1", "target": "RPL23", "value": 0.2},
{"source": "BOP1", "target": "WDR36", "value": 0.2},
{"source": "BOP1", "target": "RBM19", "value": 0.2},
{"source": "BOP1", "target": "POLR1B", "value": 0.2},
{"source": "BOP1", "target": "RPL28", "value": 0.2},
{"source": "BOP1", "target": "RPL27", "value": 0.2},
{"source": "BOP1", "target": "WDR18", "value": 0.2},
{"source": "BOP1", "target": "EMG1", "value": 0.2},
{"source": "PC", "target": "MTHFD1", "value": 0.2},
{"source": "PC", "target": "TPI1", "value": 0.2},
{"source": "PC", "target": "CANX", "value": 0.2},
{"source": "PC", "target": "COPB1", "value": 0.2},
{"source": "PC", "target": "CCT3", "value": 0.2},
{"source": "PC", "target": "PPP2R1A", "value": 0.2},
{"source": "PC", "target": "PFKM", "value": 0.2},
{"source": "PC", "target": "PPT2", "value": 0.2},
{"source": "PC", "target": "GPI", "value": 0.2},
{"source": "SNAP25", "target": "BET1", "value": 0.2},
{"source": "SNAP25", "target": "GOSR1", "value": 0.2},
{"source": "SNAP25", "target": "MLEC", "value": 0.2},
{"source": "SNAP25", "target": "VAMP4", "value": 0.2},
{"source": "SNAP25", "target": "COPB1", "value": 0.2},
{"source": "SNAP25", "target": "RAB14", "value": 0.2},
{"source": "SNAP25", "target": "EXOC3", "value": 0.2},
{"source": "SNAP25", "target": "SERPINB6", "value": 0.2},
{"source": "SNAP25", "target": "ATP6AP2", "value": 0.2},
{"source": "SNAP25", "target": "HMOX2", "value": 0.2},
{"source": "SNAP25", "target": "PTPRJ", "value": 0.2},
{"source": "SNAP25", "target": "STX4", "value": 0.2},
{"source": "SNAP25", "target": "CD47", "value": 0.2},
{"source": "SNAP25", "target": "VAMP2", "value": 0.2},
{"source": "SNAP25", "target": "GNAI2", "value": 0.2},
{"source": "SNAP25", "target": "UBR4", "value": 0.2},
{"source": "SNAP25", "target": "NAPA", "value": 0.2},
{"source": "SNAP25", "target": "MOSPD2", "value": 0.2},
{"source": "SNAP25", "target": "HVCN1", "value": 0.2},
{"source": "SNAP25", "target": "KCNAB2", "value": 0.2},
{"source": "SNAP25", "target": "STX5", "value": 0.2},
{"source": "SNAP25", "target": "CYBA", "value": 0.2},
{"source": "SNAP25", "target": "ANO6", "value": 0.2},
{"source": "SNAP25", "target": "BET1L", "value": 0.2},
{"source": "SNAP25", "target": "TSPAN14", "value": 0.2},
{"source": "SNAP25", "target": "DEGS1", "value": 0.2},
{"source": "SNAP25", "target": "STX6", "value": 0.2},
{"source": "SNAP25", "target": "ITGB2", "value": 0.2},
{"source": "DEGS1", "target": "MLEC", "value": 0.2},
{"source": "DEGS1", "target": "CYBA", "value": 0.2},
{"source": "DEGS1", "target": "GBA", "value": 0.2},
{"source": "DEGS1", "target": "MOSPD2", "value": 0.2},
{"source": "DEGS1", "target": "CD47", "value": 0.2},
{"source": "DEGS1", "target": "ITGB2", "value": 0.2},
{"source": "DEGS1", "target": "HVCN1", "value": 0.2},
{"source": "DEGS1", "target": "KCNAB2", "value": 0.2},
{"source": "DEGS1", "target": "PTPRJ", "value": 0.2},
{"source": "DEGS1", "target": "HMOX2", "value": 0.2},
{"source": "DEGS1", "target": "ANO6", "value": 0.2},
{"source": "DEGS1", "target": "TSPAN14", "value": 0.2},
{"source": "DEGS1", "target": "UBR4", "value": 0.2},
{"source": "BET1", "target": "ARF5", "value": 0.2},
{"source": "BET1", "target": "ARF4", "value": 0.2},
{"source": "BET1", "target": "RAB1A", "value": 0.2},
{"source": "BET1", "target": "BET1L", "value": 0.2},
{"source": "BET1", "target": "SEC24C", "value": 0.2},
{"source": "BET1", "target": "ACTR1A", "value": 0.2},
{"source": "BET1", "target": "COPG2", "value": 0.2},
{"source": "BET1", "target": "TMED10", "value": 0.2},
{"source": "BET1", "target": "COPG1", "value": 0.2},
{"source": "BET1", "target": "VAMP2", "value": 0.2},
{"source": "BET1", "target": "SEC23A", "value": 0.2},
{"source": "BET1", "target": "COG3", "value": 0.2},
{"source": "BET1", "target": "GOSR1", "value": 0.2},
{"source": "BET1", "target": "COPZ1", "value": 0.2},
{"source": "BET1", "target": "COG2", "value": 0.2},
{"source": "BET1", "target": "USO1", "value": 0.2},
{"source": "BET1", "target": "STX5", "value": 0.2},
{"source": "BET1", "target": "DYNC1I2", "value": 0.2},
{"source": "BET1", "target": "TMED9", "value": 0.2},
{"source": "BET1", "target": "STX4", "value": 0.2},
{"source": "BET1", "target": "STX6", "value": 0.2},
{"source": "BET1", "target": "DCTN1", "value": 0.2},
{"source": "BET1", "target": "COPB1", "value": 0.2},
{"source": "BET1", "target": "DYNC1H1", "value": 0.2},
{"source": "BET1", "target": "DYNC1LI2", "value": 0.2},
{"source": "BET1", "target": "COPB2", "value": 0.2},
{"source": "BET1", "target": "VAMP4", "value": 0.2},
{"source": "BET1", "target": "SEC13", "value": 0.2},
{"source": "BET1", "target": "COPE", "value": 0.2},
{"source": "BET1", "target": "NAPA", "value": 0.2},
{"source": "BET1", "target": "SPTBN2", "value": 0.2},
{"source": "BET1", "target": "COG1", "value": 0.2},
{"source": "BET1", "target": "ARCN1", "value": 0.2},
{"source": "LPAR1", "target": "NFKB1", "value": 0.2},
{"source": "LPAR1", "target": "ADCY9", "value": 0.2},
{"source": "LPAR1", "target": "ADCY6", "value": 0.2},
{"source": "LPAR1", "target": "GNAI2", "value": 0.2},
{"source": "LPAR1", "target": "GPR39", "value": 0.2},
{"source": "LPAR1", "target": "S1PR3", "value": 0.2},
{"source": "LPAR1", "target": "LYN", "value": 0.2},
{"source": "LPAR1", "target": "GNA13", "value": 0.2},
{"source": "LPAR1", "target": "PDYN", "value": 0.2},
{"source": "HSPA5", "target": "CANX", "value": 0.2},
{"source": "HSPA5", "target": "HSPB1", "value": 0.2},
{"source": "HSPA5", "target": "DNAJB1", "value": 0.2},
{"source": "HSPA5", "target": "HSPBP1", "value": 0.2},
{"source": "HSPA5", "target": "EIF2S1", "value": 0.2},
{"source": "HSPA5", "target": "DNAJA3", "value": 0.2},
{"source": "HSPA5", "target": "GRPEL1", "value": 0.2},
{"source": "HSPA5", "target": "HSPA9", "value": 0.2},
{"source": "HSPA5", "target": "HSP90B1", "value": 0.2},
{"source": "HSPA5", "target": "PPIB", "value": 0.2},
{"source": "HSPA5", "target": "HSPA4", "value": 0.2},
{"source": "HSPA5", "target": "SEC23A", "value": 0.2},
{"source": "HSPA5", "target": "DNAJA2", "value": 0.2},
{"source": "HSPA5", "target": "HSPH1", "value": 0.2},
{"source": "HSPA5", "target": "HLA-C", "value": 0.2},
{"source": "HSPA5", "target": "HSP90AB1", "value": 0.2},
{"source": "HSPA5", "target": "TAPBP", "value": 0.2},
{"source": "HSPA5", "target": "HLA-A", "value": 0.2},
{"source": "HSPA5", "target": "HSP90AA1", "value": 0.2},
{"source": "HSPA5", "target": "DNAJB4", "value": 0.2},
{"source": "HSPA5", "target": "DNAJA1", "value": 0.2},
{"source": "HSPA5", "target": "B2M", "value": 0.2},
{"source": "HSPA5", "target": "HSPD1", "value": 0.2},
{"source": "HSPA5", "target": "TPR", "value": 0.2},
{"source": "HSPA5", "target": "HSPA1A", "value": 0.2},
{"source": "HSPA5", "target": "NUP214", "value": 0.2},
{"source": "HSPA5", "target": "HLA-B", "value": 0.2},
{"source": "HSPA5", "target": "P4HB", "value": 0.2},
{"source": "HSPA5", "target": "STIP1", "value": 0.2},
{"source": "NOP58", "target": "RPL18A", "value": 0.2},
{"source": "NOP58", "target": "DDX5", "value": 0.2},
{"source": "NOP58", "target": "RPS12", "value": 0.2},
{"source": "NOP58", "target": "BYSL", "value": 0.2},
{"source": "NOP58", "target": "RRP9", "value": 0.2},
{"source": "NOP58", "target": "RPS16", "value": 0.2},
{"source": "NOP58", "target": "NIP7", "value": 0.2},
{"source": "NOP58", "target": "NAT10", "value": 0.2},
{"source": "NOP58", "target": "DDX18", "value": 0.2},
{"source": "NOP58", "target": "EMG1", "value": 0.2},
{"source": "NOP58", "target": "RPS26", "value": 0.2},
{"source": "NOP58", "target": "WDR18", "value": 0.2},
{"source": "NOP58", "target": "DDX10", "value": 0.2},
{"source": "NOP58", "target": "RPS21", "value": 0.2},
{"source": "NOP58", "target": "GTPBP4", "value": 0.2},
{"source": "NOP58", "target": "RPS7", "value": 0.2},
{"source": "NOP58", "target": "RPS27L", "value": 0.2},
{"source": "NOP58", "target": "EXOSC7", "value": 0.2},
{"source": "NOP58", "target": "POLR1B", "value": 0.2},
{"source": "NOP58", "target": "FAU", "value": 0.2},
{"source": "NOP58", "target": "RPF2", "value": 0.2},
{"source": "NOP58", "target": "RPS8", "value": 0.2},
{"source": "NOP58", "target": "RPSA", "value": 0.2},
{"source": "NOP58", "target": "RPS15A", "value": 0.2},
{"source": "NOP58", "target": "PWP1", "value": 0.2},
{"source": "NOP58", "target": "WDR36", "value": 0.2},
{"source": "NOP58", "target": "TSR1", "value": 0.2},
{"source": "NOP58", "target": "RPS23", "value": 0.2},
{"source": "NOP58", "target": "EIF3B", "value": 0.2},
{"source": "NOP58", "target": "DHX15", "value": 0.2},
{"source": "NOP58", "target": "TTC27", "value": 0.2},
{"source": "NOP58", "target": "RRS1", "value": 0.2},
{"source": "NOP58", "target": "RPS6", "value": 0.2},
{"source": "NOP58", "target": "PDCD11", "value": 0.2},
{"source": "NOP58", "target": "KRI1", "value": 0.2},
{"source": "NOP58", "target": "NOC3L", "value": 0.2},
{"source": "NOP58", "target": "RPS3", "value": 0.2},
{"source": "NOP58", "target": "RBM19", "value": 0.2},
{"source": "NOP58", "target": "RPS15", "value": 0.2},
{"source": "NOP58", "target": "EXOSC8", "value": 0.2},
{"source": "CUL3", "target": "PSMA4", "value": 0.2},
{"source": "CUL3", "target": "PSMC4", "value": 0.2},
{"source": "CUL3", "target": "PSMD8", "value": 0.2},
{"source": "CUL3", "target": "PSME2", "value": 0.2},
{"source": "CUL3", "target": "PSMD10", "value": 0.2},
{"source": "CUL3", "target": "PSMD7", "value": 0.2},
{"source": "CUL3", "target": "STUB1", "value": 0.2},
{"source": "CUL3", "target": "PSMA2", "value": 0.2},
{"source": "CUL3", "target": "UBE3A", "value": 0.2},
{"source": "CUL3", "target": "PSMC1", "value": 0.2},
{"source": "CUL3", "target": "PSMA6", "value": 0.2},
{"source": "CUL3", "target": "PSMD11", "value": 0.2},
{"source": "CUL3", "target": "PSMB1", "value": 0.2},
{"source": "CUL3", "target": "MGRN1", "value": 0.2},
{"source": "CUL3", "target": "UBR4", "value": 0.2},
{"source": "CUL3", "target": "HUWE1", "value": 0.2},
{"source": "CUL3", "target": "DDB1", "value": 0.2},
{"source": "CUL3", "target": "PSMB8", "value": 0.2},
{"source": "CUL3", "target": "PSMB3", "value": 0.2},
{"source": "CUL3", "target": "RNF220", "value": 0.2},
{"source": "CUL3", "target": "UBC", "value": 0.2},
{"source": "CUL3", "target": "HERC1", "value": 0.2},
{"source": "CUL3", "target": "PSMD12", "value": 0.2},
{"source": "CUL3", "target": "NF1", "value": 0.2},
{"source": "CUL3", "target": "PSMD1", "value": 0.2},
{"source": "CUL3", "target": "PARK2", "value": 0.2},
{"source": "CUL3", "target": "ITCH", "value": 0.2},
{"source": "CUL3", "target": "PSMB5", "value": 0.2},
{"source": "CUL3", "target": "UBR2", "value": 0.2},
{"source": "CUL3", "target": "PSMA7", "value": 0.2},
{"source": "CUL3", "target": "PSMD4", "value": 0.2},
{"source": "CUL3", "target": "PSMA8", "value": 0.2},
{"source": "CUL3", "target": "FBXL4", "value": 0.2},
{"source": "CUL3", "target": "UBE3C", "value": 0.2},
{"source": "CUL3", "target": "WWP1", "value": 0.2},
{"source": "CUL3", "target": "KBTBD7", "value": 0.2},
{"source": "CUL3", "target": "PSMC6", "value": 0.2},
{"source": "CUL3", "target": "NEDD4", "value": 0.2},
{"source": "CUL3", "target": "PSMB4", "value": 0.2},
{"source": "CUL3", "target": "UFL1", "value": 0.2},
{"source": "CUL3", "target": "PSME1", "value": 0.2},
{"source": "CUL3", "target": "RNF130", "value": 0.2},
{"source": "HSPD1", "target": "AHSA1", "value": 0.2},
{"source": "HSPD1", "target": "DNAJB1", "value": 0.2},
{"source": "HSPD1", "target": "DNAJA3", "value": 0.2},
{"source": "HSPD1", "target": "GRPEL1", "value": 0.2},
{"source": "HSPD1", "target": "VDAC1", "value": 0.2},
{"source": "HSPD1", "target": "HSPA9", "value": 0.2},
{"source": "HSPD1", "target": "HSP90B1", "value": 0.2},
{"source": "HSPD1", "target": "HSPA4", "value": 0.2},
{"source": "HSPD1", "target": "HSPH1", "value": 0.2},
{"source": "HSPD1", "target": "P4HB", "value": 0.2},
{"source": "HSPD1", "target": "HSP90AA1", "value": 0.2},
{"source": "HSPD1", "target": "STIP1", "value": 0.2},
{"source": "HSPD1", "target": "HSP90AB1", "value": 0.2},
{"source": "HSPD1", "target": "HSPA1A", "value": 0.2},
{"source": "HSPD1", "target": "CCT4", "value": 0.2},
{"source": "RRS1", "target": "RPL18A", "value": 0.2},
{"source": "RRS1", "target": "BYSL", "value": 0.2},
{"source": "RRS1", "target": "RRP9", "value": 0.2},
{"source": "RRS1", "target": "NIP7", "value": 0.2},
{"source": "RRS1", "target": "NAT10", "value": 0.2},
{"source": "RRS1", "target": "DDX18", "value": 0.2},
{"source": "RRS1", "target": "TSR1", "value": 0.2},
{"source": "RRS1", "target": "RPL38", "value": 0.2},
{"source": "RRS1", "target": "DDX10", "value": 0.2},
{"source": "RRS1", "target": "KRI1", "value": 0.2},
{"source": "RRS1", "target": "RPL35A", "value": 0.2},
{"source": "RRS1", "target": "WDR36", "value": 0.2},
{"source": "RRS1", "target": "GTPBP4", "value": 0.2},
{"source": "RRS1", "target": "RBM19", "value": 0.2},
{"source": "RRS1", "target": "PDCD11", "value": 0.2},
{"source": "RRS1", "target": "POLR1B", "value": 0.2},
{"source": "RRS1", "target": "RPL3", "value": 0.2},
{"source": "RRS1", "target": "RPF2", "value": 0.2},
{"source": "RRS1", "target": "PWP1", "value": 0.2},
{"source": "RRS1", "target": "NOC3L", "value": 0.2},
{"source": "RRS1", "target": "EMG1", "value": 0.2},
{"source": "RRS1", "target": "WDR18", "value": 0.2},
{"source": "SEC13", "target": "ZW10", "value": 0.2},
{"source": "SEC13", "target": "PPP2CB", "value": 0.2},
{"source": "SEC13", "target": "CANX", "value": 0.2},
{"source": "SEC13", "target": "COPB1", "value": 0.2},
{"source": "SEC13", "target": "DYNC1LI2", "value": 0.2},
{"source": "SEC13", "target": "COG3", "value": 0.2},
{"source": "SEC13", "target": "PPP2R5A", "value": 0.2},
{"source": "SEC13", "target": "COPE", "value": 0.2},
{"source": "SEC13", "target": "ARCN1", "value": 0.2},
{"source": "SEC13", "target": "STX5", "value": 0.2},
{"source": "SEC13", "target": "TMED10", "value": 0.2},
{"source": "SEC13", "target": "SEC23A", "value": 0.2},
{"source": "SEC13", "target": "CLTB", "value": 0.2},
{"source": "SEC13", "target": "SMC1A", "value": 0.2},
{"source": "SEC13", "target": "PPP2R1A", "value": 0.2},
{"source": "SEC13", "target": "COPG1", "value": 0.2},
{"source": "SEC13", "target": "COPB2", "value": 0.2},
{"source": "SEC13", "target": "AP1S1", "value": 0.2},
{"source": "SEC13", "target": "PPP1CC", "value": 0.2},
{"source": "SEC13", "target": "SEC24C", "value": 0.2},
{"source": "SEC13", "target": "DYNC1H1", "value": 0.2},
{"source": "SEC13", "target": "NUP214", "value": 0.2},
{"source": "SEC13", "target": "HLA-DRB1", "value": 0.2},
{"source": "SEC13", "target": "TPR", "value": 0.2},
{"source": "SEC13", "target": "BUB3", "value": 0.2},
{"source": "SEC13", "target": "MAPRE1", "value": 0.2},
{"source": "SEC13", "target": "HLA-C", "value": 0.2},
{"source": "SEC13", "target": "COPG2", "value": 0.2},
{"source": "SEC13", "target": "HLA-A", "value": 0.2},
{"source": "SEC13", "target": "DYNC1I2", "value": 0.2},
{"source": "SEC13", "target": "RAB1A", "value": 0.2},
{"source": "SEC13", "target": "CKAP5", "value": 0.2},
{"source": "SEC13", "target": "B2M", "value": 0.2},
{"source": "SEC13", "target": "COPZ1", "value": 0.2},
{"source": "SEC13", "target": "USO1", "value": 0.2},
{"source": "SEC13", "target": "RANGAP1", "value": 0.2},
{"source": "SEC13", "target": "PAFAH1B1", "value": 0.2},
{"source": "SEC13", "target": "HLA-B", "value": 0.2},
{"source": "SEC13", "target": "MAD1L1", "value": 0.2},
{"source": "SMN1", "target": "COIL", "value": 0.2},
{"source": "BASP1", "target": "WT1", "value": 0.2},
{"source": "MKI67", "target": "KIF11", "value": 0.2},
{"source": "MKI67", "target": "LMNB1", "value": 0.2},
{"source": "MKI67", "target": "SMC2", "value": 0.2},
{"source": "MKI67", "target": "POLE", "value": 0.2},
{"source": "MKI67", "target": "SMC4", "value": 0.2},
{"source": "MKI67", "target": "TOP2A", "value": 0.2},
{"source": "PACSIN2", "target": "APOB", "value": 0.2},
{"source": "PACSIN2", "target": "VAMP4", "value": 0.2},
{"source": "PACSIN2", "target": "ARPC1A", "value": 0.2},
{"source": "PACSIN2", "target": "LDLRAP1", "value": 0.2},
{"source": "PACSIN2", "target": "VAMP2", "value": 0.2},
{"source": "PACSIN2", "target": "FNBP1", "value": 0.2},
{"source": "PACSIN2", "target": "ARPC2", "value": 0.2},
{"source": "PACSIN2", "target": "TFRC", "value": 0.2},
{"source": "PACSIN2", "target": "TGOLN2", "value": 0.2},
{"source": "PACSIN2", "target": "CLTB", "value": 0.2},
{"source": "PACSIN2", "target": "UBC", "value": 0.2},
{"source": "PACSIN2", "target": "LDLR", "value": 0.2},
{"source": "PACSIN2", "target": "RAB5B", "value": 0.2},
{"source": "FAU", "target": "MRPS10", "value": 0.2},
{"source": "FAU", "target": "EEF1A2", "value": 0.2},
{"source": "FAU", "target": "EIF3E", "value": 0.2},
{"source": "FAU", "target": "RPL18A", "value": 0.2},
{"source": "FAU", "target": "RPS12", "value": 0.2},
{"source": "FAU", "target": "BYSL", "value": 0.2},
{"source": "FAU", "target": "RRP9", "value": 0.2},
{"source": "FAU", "target": "RPS16", "value": 0.2},
{"source": "FAU", "target": "EIF2S3", "value": 0.2},
{"source": "FAU", "target": "HSPBP1", "value": 0.2},
{"source": "FAU", "target": "EIF2S1", "value": 0.2},
{"source": "FAU", "target": "RPS3", "value": 0.2},
{"source": "FAU", "target": "EIF5B", "value": 0.2},
{"source": "FAU", "target": "RPS23", "value": 0.2},
{"source": "FAU", "target": "RPL10L", "value": 0.2},
{"source": "FAU", "target": "TSR1", "value": 0.2},
{"source": "FAU", "target": "HINT1", "value": 0.2},
{"source": "FAU", "target": "EEF2", "value": 0.2},
{"source": "FAU", "target": "PSMD1", "value": 0.2},
{"source": "FAU", "target": "RPL38", "value": 0.2},
{"source": "FAU", "target": "SRP68", "value": 0.2},
{"source": "FAU", "target": "RPS15A", "value": 0.2},
{"source": "FAU", "target": "RPLP2", "value": 0.2},
{"source": "FAU", "target": "PLEC1", "value": 0.2},
{"source": "FAU", "target": "PPP2R1A", "value": 0.2},
{"source": "FAU", "target": "RPS27L", "value": 0.2},
{"source": "FAU", "target": "RPS7", "value": 0.2},
{"source": "FAU", "target": "RPS21", "value": 0.2},
{"source": "FAU", "target": "RPL3", "value": 0.2},
{"source": "FAU", "target": "RPL21", "value": 0.2},
{"source": "FAU", "target": "RPSA", "value": 0.2},
{"source": "FAU", "target": "RPS26", "value": 0.2},
{"source": "FAU", "target": "EIF3B", "value": 0.2},
{"source": "FAU", "target": "RPL12", "value": 0.2},
{"source": "FAU", "target": "PDCD11", "value": 0.2},
{"source": "FAU", "target": "SF1", "value": 0.2},
{"source": "FAU", "target": "SLC3A2", "value": 0.2},
{"source": "FAU", "target": "AHNAK", "value": 0.2},
{"source": "FAU", "target": "RPS6", "value": 0.2},
{"source": "FAU", "target": "RPS8", "value": 0.2},
{"source": "FAU", "target": "RPL9", "value": 0.2},
{"source": "FAU", "target": "RPL29", "value": 0.2},
{"source": "FAU", "target": "RPL35A", "value": 0.2},
{"source": "FAU", "target": "RPL23", "value": 0.2},
{"source": "FAU", "target": "WDR36", "value": 0.2},
{"source": "FAU", "target": "RPS15", "value": 0.2},
{"source": "FAU", "target": "EMG1", "value": 0.2},
{"source": "FAU", "target": "RPL27", "value": 0.2},
{"source": "FAU", "target": "RPL28", "value": 0.2},
{"source": "FAU", "target": "EIF3M", "value": 0.2},
{"source": "LRP6", "target": "PPP2CB", "value": 0.2},
{"source": "LRP6", "target": "GSK3A", "value": 0.2},
{"source": "LRP6", "target": "BAMBI", "value": 0.2},
{"source": "LRP6", "target": "PPP2R5A", "value": 0.2},
{"source": "LRP6", "target": "UBC", "value": 0.2},
{"source": "LRP6", "target": "PPP2R1A", "value": 0.2},
{"source": "LRP6", "target": "FZD1", "value": 0.2},
{"source": "LRP6", "target": "ZNRF3", "value": 0.2},
{"source": "LRP6", "target": "ATP6AP2", "value": 0.2},
{"source": "LAMA3", "target": "ITGA3", "value": 0.2},
{"source": "LAMA3", "target": "ITGA5", "value": 0.2},
{"source": "LAMA3", "target": "ITGB5", "value": 0.2},
{"source": "LAMA3", "target": "PLEC1", "value": 0.2},
{"source": "LAMA3", "target": "SRC", "value": 0.2},
{"source": "LAMA3", "target": "ACTA1", "value": 0.2},
{"source": "LAMA3", "target": "RPSA", "value": 0.2},
{"source": "LAMA3", "target": "ITGB1", "value": 0.2},
{"source": "SUPT5H", "target": "POLR2C", "value": 0.2},
{"source": "SUPT5H", "target": "ATM", "value": 0.2},
{"source": "SUPT5H", "target": "CPSF2", "value": 0.2},
{"source": "SUPT5H", "target": "PRMT5", "value": 0.2},
{"source": "SUPT5H", "target": "GTF2F2", "value": 0.2},
{"source": "SUPT5H", "target": "POLR3H", "value": 0.2},
{"source": "SUPT5H", "target": "PPT2", "value": 0.2},
{"source": "SUPT5H", "target": "POLR2B", "value": 0.2},
{"source": "SUPT5H", "target": "CCNK", "value": 0.2},
{"source": "SUPT5H", "target": "INTS1", "value": 0.2},
{"source": "SUPT5H", "target": "INTS12", "value": 0.2},
{"source": "SUPT5H", "target": "POLR1B", "value": 0.2},
{"source": "SUPT5H", "target": "POLR2A", "value": 0.2},
{"source": "EIF2S3", "target": "PSMA4", "value": 0.2},
{"source": "EIF2S3", "target": "EIF3E", "value": 0.2},
{"source": "EIF2S3", "target": "RPL18A", "value": 0.2},
{"source": "EIF2S3", "target": "PSMA2", "value": 0.2},
{"source": "EIF2S3", "target": "RPS12", "value": 0.2},
{"source": "EIF2S3", "target": "RPS16", "value": 0.2},
{"source": "EIF2S3", "target": "RPL23", "value": 0.2},
{"source": "EIF2S3", "target": "RPS15A", "value": 0.2},
{"source": "EIF2S3", "target": "POLR1B", "value": 0.2},
{"source": "EIF2S3", "target": "RPSA", "value": 0.2},
{"source": "EIF2S3", "target": "RPLP2", "value": 0.2},
{"source": "EIF2S3", "target": "RPL9", "value": 0.2},
{"source": "EIF2S3", "target": "RPL28", "value": 0.2},
{"source": "EIF2S3", "target": "RPL12", "value": 0.2},
{"source": "EIF2S3", "target": "RPS3", "value": 0.2},
{"source": "EIF2S3", "target": "RPS21", "value": 0.2},
{"source": "EIF2S3", "target": "PLEC1", "value": 0.2},
{"source": "EIF2S3", "target": "RPL35A", "value": 0.2},
{"source": "EIF2S3", "target": "RPL38", "value": 0.2},
{"source": "EIF2S3", "target": "EIF2S1", "value": 0.2},
{"source": "EIF2S3", "target": "RPS23", "value": 0.2},
{"source": "EIF2S3", "target": "RPL10L", "value": 0.2},
{"source": "EIF2S3", "target": "CCT4", "value": 0.2},
{"source": "EIF2S3", "target": "PSMA6", "value": 0.2},
{"source": "EIF2S3", "target": "RPS15", "value": 0.2},
{"source": "EIF2S3", "target": "RPS26", "value": 0.2},
{"source": "EIF2S3", "target": "EIF3B", "value": 0.2},
{"source": "EIF2S3", "target": "EIF5B", "value": 0.2},
{"source": "EIF2S3", "target": "RPL27", "value": 0.2},
{"source": "EIF2S3", "target": "RPS27L", "value": 0.2},
{"source": "EIF2S3", "target": "EEF2", "value": 0.2},
{"source": "EIF2S3", "target": "RPL29", "value": 0.2},
{"source": "EIF2S3", "target": "RPS6", "value": 0.2},
{"source": "EIF2S3", "target": "RPS8", "value": 0.2},
{"source": "EIF2S3", "target": "PSMA7", "value": 0.2},
{"source": "EIF2S3", "target": "EIF3M", "value": 0.2},
{"source": "EIF2S3", "target": "RPL21", "value": 0.2},
{"source": "EIF2S3", "target": "RPS7", "value": 0.2},
{"source": "EIF2S3", "target": "RPL3", "value": 0.2},
{"source": "EIF2S3", "target": "CCT3", "value": 0.2},
{"source": "EIF2S3", "target": "CCT7", "value": 0.2},
{"source": "DYNC1I2", "target": "ARF5", "value": 0.2},
{"source": "DYNC1I2", "target": "ZW10", "value": 0.2},
{"source": "DYNC1I2", "target": "PPP2CB", "value": 0.2},
{"source": "DYNC1I2", "target": "GOSR1", "value": 0.2},
{"source": "DYNC1I2", "target": "COPB1", "value": 0.2},
{"source": "DYNC1I2", "target": "DYNC1LI2", "value": 0.2},
{"source": "DYNC1I2", "target": "COG3", "value": 0.2},
{"source": "DYNC1I2", "target": "KIF11", "value": 0.2},
{"source": "DYNC1I2", "target": "PPP2R5A", "value": 0.2},
{"source": "DYNC1I2", "target": "COPE", "value": 0.2},
{"source": "DYNC1I2", "target": "ARCN1", "value": 0.2},
{"source": "DYNC1I2", "target": "YWHAE", "value": 0.2},
{"source": "DYNC1I2", "target": "CEP72", "value": 0.2},
{"source": "DYNC1I2", "target": "RAB7A", "value": 0.2},
{"source": "DYNC1I2", "target": "STX5", "value": 0.2},
{"source": "DYNC1I2", "target": "COG1", "value": 0.2},
{"source": "DYNC1I2", "target": "RAB8A", "value": 0.2},
{"source": "DYNC1I2", "target": "TMED10", "value": 0.2},
{"source": "DYNC1I2", "target": "ARF4", "value": 0.2},
{"source": "DYNC1I2", "target": "KIF5B", "value": 0.2},
{"source": "DYNC1I2", "target": "SMC1A", "value": 0.2},
{"source": "DYNC1I2", "target": "PPP2R1A", "value": 0.2},
{"source": "DYNC1I2", "target": "COPG1", "value": 0.2},
{"source": "DYNC1I2", "target": "COPB2", "value": 0.2},
{"source": "DYNC1I2", "target": "TMED9", "value": 0.2},
{"source": "DYNC1I2", "target": "HSP90AA1", "value": 0.2},
{"source": "DYNC1I2", "target": "TUBB", "value": 0.2},
{"source": "DYNC1I2", "target": "TUBB4B", "value": 0.2},
{"source": "DYNC1I2", "target": "PPP1CC", "value": 0.2},
{"source": "DYNC1I2", "target": "CDK5RAP2", "value": 0.2},
{"source": "DYNC1I2", "target": "OFD1", "value": 0.2},
{"source": "DYNC1I2", "target": "DYNC1H1", "value": 0.2},
{"source": "DYNC1I2", "target": "HLA-DRB1", "value": 0.2},
{"source": "DYNC1I2", "target": "DCTN1", "value": 0.2},
{"source": "DYNC1I2", "target": "COG2", "value": 0.2},
{"source": "DYNC1I2", "target": "BUB3", "value": 0.2},
{"source": "DYNC1I2", "target": "ACTR1A", "value": 0.2},
{"source": "DYNC1I2", "target": "HSP90AB1", "value": 0.2},
{"source": "DYNC1I2", "target": "MAPRE1", "value": 0.2},
{"source": "DYNC1I2", "target": "KIF24", "value": 0.2},
{"source": "DYNC1I2", "target": "HAUS6", "value": 0.2},
{"source": "DYNC1I2", "target": "BET1L", "value": 0.2},
{"source": "DYNC1I2", "target": "MKS1", "value": 0.2},
{"source": "DYNC1I2", "target": "CKAP5", "value": 0.2},
{"source": "DYNC1I2", "target": "USO1", "value": 0.2},
{"source": "DYNC1I2", "target": "HLA-DMB", "value": 0.2},
{"source": "DYNC1I2", "target": "SPTBN2", "value": 0.2},
{"source": "DYNC1I2", "target": "COPG2", "value": 0.2},
{"source": "DYNC1I2", "target": "TCTN3", "value": 0.2},
{"source": "DYNC1I2", "target": "COPZ1", "value": 0.2},
{"source": "DYNC1I2", "target": "NEDD1", "value": 0.2},
{"source": "DYNC1I2", "target": "RANGAP1", "value": 0.2},
{"source": "DYNC1I2", "target": "RAB1A", "value": 0.2},
{"source": "DYNC1I2", "target": "MAD1L1", "value": 0.2},
{"source": "DYNC1I2", "target": "PAFAH1B1", "value": 0.2},
{"source": "RPL38", "target": "MRPS10", "value": 0.2},
{"source": "RPL38", "target": "EEF1A2", "value": 0.2},
{"source": "RPL38", "target": "EIF3E", "value": 0.2},
{"source": "RPL38", "target": "RPL18A", "value": 0.2},
{"source": "RPL38", "target": "RPS12", "value": 0.2},
{"source": "RPL38", "target": "RPS16", "value": 0.2},
{"source": "RPL38", "target": "EIF2S1", "value": 0.2},
{"source": "RPL38", "target": "DDX18", "value": 0.2},
{"source": "RPL38", "target": "EXOSC7", "value": 0.2},
{"source": "RPL38", "target": "RPS3", "value": 0.2},
{"source": "RPL38", "target": "EIF5B", "value": 0.2},
{"source": "RPL38", "target": "RPS23", "value": 0.2},
{"source": "RPL38", "target": "RPL10L", "value": 0.2},
{"source": "RPL38", "target": "EEF2", "value": 0.2},
{"source": "RPL38", "target": "RPF2", "value": 0.2},
{"source": "RPL38", "target": "RPL9", "value": 0.2},
{"source": "RPL38", "target": "RPL35A", "value": 0.2},
{"source": "RPL38", "target": "WDR18", "value": 0.2},
{"source": "RPL38", "target": "RPL29", "value": 0.2},
{"source": "RPL38", "target": "RPS8", "value": 0.2},
{"source": "RPL38", "target": "RPS26", "value": 0.2},
{"source": "RPL38", "target": "RPL21", "value": 0.2},
{"source": "RPL38", "target": "PLEC1", "value": 0.2},
{"source": "RPL38", "target": "EIF3B", "value": 0.2},
{"source": "RPL38", "target": "RPS15", "value": 0.2},
{"source": "RPL38", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL38", "target": "RPL23", "value": 0.2},
{"source": "RPL38", "target": "RPS15A", "value": 0.2},
{"source": "RPL38", "target": "RPL12", "value": 0.2},
{"source": "RPL38", "target": "RPSA", "value": 0.2},
{"source": "RPL38", "target": "EXOSC8", "value": 0.2},
{"source": "RPL38", "target": "RPS6", "value": 0.2},
{"source": "RPL38", "target": "RPL27", "value": 0.2},
{"source": "RPL38", "target": "RPS7", "value": 0.2},
{"source": "RPL38", "target": "RPS27L", "value": 0.2},
{"source": "RPL38", "target": "RPS21", "value": 0.2},
{"source": "RPL38", "target": "RPL3", "value": 0.2},
{"source": "RPL38", "target": "RPL28", "value": 0.2},
{"source": "RPL38", "target": "SRP68", "value": 0.2},
{"source": "RPL38", "target": "RPLP2", "value": 0.2},
{"source": "RPL38", "target": "EIF3M", "value": 0.2},
{"source": "AP1B1", "target": "ARF5", "value": 0.2},
{"source": "AP1B1", "target": "NAPA", "value": 0.2},
{"source": "AP1B1", "target": "CLTB", "value": 0.2},
{"source": "AP1B1", "target": "VAMP2", "value": 0.2},
{"source": "AP1B1", "target": "AP1S1", "value": 0.2},
{"source": "AP1B1", "target": "TGOLN2", "value": 0.2},
{"source": "AP1B1", "target": "TFRC", "value": 0.2},
{"source": "AP1B1", "target": "HLA-DRB1", "value": 0.2},
{"source": "AP1B1", "target": "LDLRAP1", "value": 0.2},
{"source": "RAB5B", "target": "APOB", "value": 0.2},
{"source": "RAB5B", "target": "VAMP4", "value": 0.2},
{"source": "RAB5B", "target": "RAB27B", "value": 0.2},
{"source": "RAB5B", "target": "ARPC1A", "value": 0.2},
{"source": "RAB5B", "target": "RAB10", "value": 0.2},
{"source": "RAB5B", "target": "RAB7A", "value": 0.2},
{"source": "RAB5B", "target": "ARPC2", "value": 0.2},
{"source": "RAB5B", "target": "RAB8A", "value": 0.2},
{"source": "RAB5B", "target": "CLTB", "value": 0.2},
{"source": "RAB5B", "target": "VAMP2", "value": 0.2},
{"source": "RAB5B", "target": "RAB11B", "value": 0.2},
{"source": "RAB5B", "target": "TFRC", "value": 0.2},
{"source": "RAB5B", "target": "LDLR", "value": 0.2},
{"source": "RAB5B", "target": "RAB1A", "value": 0.2},
{"source": "RAB5B", "target": "UBC", "value": 0.2},
{"source": "RAB5B", "target": "RAB14", "value": 0.2},
{"source": "RAB5B", "target": "FNBP1", "value": 0.2},
{"source": "RAB5B", "target": "TGOLN2", "value": 0.2},
{"source": "RAB5B", "target": "LDLRAP1", "value": 0.2},
{"source": "SMAD3", "target": "STUB1", "value": 0.2},
{"source": "SMAD3", "target": "DDX5", "value": 0.2},
{"source": "SMAD3", "target": "SNW1", "value": 0.2},
{"source": "SMAD3", "target": "YY1", "value": 0.2},
{"source": "SMAD3", "target": "ACVR1", "value": 0.2},
{"source": "SMAD3", "target": "USP15", "value": 0.2},
{"source": "SMAD3", "target": "KPNB1", "value": 0.2},
{"source": "SMAD3", "target": "INHBB", "value": 0.2},
{"source": "SMAD3", "target": "LEMD3", "value": 0.2},
{"source": "SMAD3", "target": "PTPN2", "value": 0.2},
{"source": "SMAD3", "target": "WWP1", "value": 0.2},
{"source": "SMAD3", "target": "PARP1", "value": 0.2},
{"source": "SMAD3", "target": "ACVR1B", "value": 0.2},
{"source": "SMAD3", "target": "HDAC1", "value": 0.2},
{"source": "SMAD3", "target": "RUNX3", "value": 0.2},
{"source": "SMAD3", "target": "CTDSP2", "value": 0.2},
{"source": "SMAD3", "target": "PMEPA1", "value": 0.2},
{"source": "SMAD3", "target": "WWP2", "value": 0.2},
{"source": "SMAD3", "target": "CCNK", "value": 0.2},
{"source": "SMAD3", "target": "RBBP7", "value": 0.2},
{"source": "SMAD3", "target": "BMPR1B", "value": 0.2},
{"source": "SMAD3", "target": "NEDD4", "value": 0.2},
{"source": "SMAD3", "target": "NUP214", "value": 0.2},
{"source": "SMAD3", "target": "UBC", "value": 0.2},
{"source": "SMAD3", "target": "SIN3A", "value": 0.2},
{"source": "SMAD3", "target": "TGFB2", "value": 0.2},
{"source": "NUP214", "target": "KPNB1", "value": 0.2},
{"source": "NUP214", "target": "HSPA9", "value": 0.2},
{"source": "NUP214", "target": "CPSF2", "value": 0.2},
{"source": "NUP214", "target": "HSPA4", "value": 0.2},
{"source": "NUP214", "target": "HDAC1", "value": 0.2},
{"source": "NUP214", "target": "TPR", "value": 0.2},
{"source": "NUP214", "target": "HSPA1A", "value": 0.2},
{"source": "NUP214", "target": "TOP2A", "value": 0.2},
{"source": "NUP214", "target": "RANGAP1", "value": 0.2},
{"source": "SMC4", "target": "MCM5", "value": 0.2},
{"source": "SMC4", "target": "MSH6", "value": 0.2},
{"source": "SMC4", "target": "KIF11", "value": 0.2},
{"source": "SMC4", "target": "MCM6", "value": 0.2},
{"source": "SMC4", "target": "SMC2", "value": 0.2},
{"source": "SMC4", "target": "MCM7", "value": 0.2},
{"source": "SMC4", "target": "POLE", "value": 0.2},
{"source": "SMC4", "target": "SMC1A", "value": 0.2},
{"source": "SMC4", "target": "POLA1", "value": 0.2},
{"source": "SMC4", "target": "H2AFJ", "value": 0.2},
{"source": "SMC4", "target": "DUT", "value": 0.2},
{"source": "SMC4", "target": "TOP2A", "value": 0.2},
{"source": "WDR5", "target": "POLR2C", "value": 0.2},
{"source": "WDR5", "target": "WDR77", "value": 0.2},
{"source": "WDR5", "target": "DDB2", "value": 0.2},
{"source": "WDR5", "target": "YY1", "value": 0.2},
{"source": "WDR5", "target": "DDB1", "value": 0.2},
{"source": "WDR5", "target": "PRMT5", "value": 0.2},
{"source": "WDR5", "target": "HOXA3", "value": 0.2},
{"source": "WDR5", "target": "NCOA3", "value": 0.2},
{"source": "WDR5", "target": "SIN3A", "value": 0.2},
{"source": "WDR5", "target": "POLR2A", "value": 0.2},
{"source": "WDR5", "target": "POLR2B", "value": 0.2},
{"source": "WDR5", "target": "HDAC1", "value": 0.2},
{"source": "WDR5", "target": "RBBP7", "value": 0.2},
{"source": "WDR5", "target": "H2AFJ", "value": 0.2},
{"source": "PPIB", "target": "HSP90B1", "value": 0.2},
{"source": "PPIB", "target": "BSG", "value": 0.2},
{"source": "PPIB", "target": "EMID2", "value": 0.2},
{"source": "PPIB", "target": "TMED10", "value": 0.2},
{"source": "PPIB", "target": "P4HB", "value": 0.2},
{"source": "PPIB", "target": "COL23A1", "value": 0.2},
{"source": "HLA-A", "target": "CANX", "value": 0.2},
{"source": "HLA-A", "target": "SEC23A", "value": 0.2},
{"source": "HLA-A", "target": "SEC24C", "value": 0.2},
{"source": "HLA-A", "target": "HLA-DRB1", "value": 0.2},
{"source": "HLA-A", "target": "PSMB8", "value": 0.2},
{"source": "HLA-A", "target": "HLA-C", "value": 0.2},
{"source": "HLA-A", "target": "TRIM22", "value": 0.2},
{"source": "HLA-A", "target": "B2M", "value": 0.2},
{"source": "HLA-A", "target": "TAPBP", "value": 0.2},
{"source": "HLA-A", "target": "SHC1", "value": 0.2},
{"source": "HLA-A", "target": "HLA-DMB", "value": 0.2},
{"source": "HLA-A", "target": "HLA-B", "value": 0.2},
{"source": "ACTA1", "target": "MYH1", "value": 0.2},
{"source": "ACTA1", "target": "CAPNS1", "value": 0.2},
{"source": "ACTA1", "target": "HSPB1", "value": 0.2},
{"source": "ACTA1", "target": "MYH4", "value": 0.2},
{"source": "ACTA1", "target": "TNNT3", "value": 0.2},
{"source": "ACTA1", "target": "MYLPF", "value": 0.2},
{"source": "ACTA1", "target": "LIMK1", "value": 0.2},
{"source": "ACTA1", "target": "PPP1CC", "value": 0.2},
{"source": "ACTA1", "target": "CALM1", "value": 0.2},
{"source": "ACTA1", "target": "ITGB1", "value": 0.2},
{"source": "ACTA1", "target": "MYH8", "value": 0.2},
{"source": "ACTA1", "target": "ACTN2", "value": 0.2},
{"source": "ACTA1", "target": "SRC", "value": 0.2},
{"source": "ACTA1", "target": "TNNC2", "value": 0.2},
{"source": "ACTA1", "target": "TPM2", "value": 0.2},
{"source": "ACTA1", "target": "RHOA", "value": 0.2},
{"source": "ACTA1", "target": "TTN", "value": 0.2},
{"source": "ACTA1", "target": "MYH11", "value": 0.2},
{"source": "ACTA1", "target": "TNNI2", "value": 0.2},
{"source": "ACTA1", "target": "WIPF1", "value": 0.2},
{"source": "GPI", "target": "PIGQ", "value": 0.2},
{"source": "GPI", "target": "TPI1", "value": 0.2},
{"source": "GPI", "target": "ENO1", "value": 0.2},
{"source": "GPI", "target": "PFKM", "value": 0.2},
{"source": "MSH6", "target": "RFC2", "value": 0.2},
{"source": "MSH6", "target": "MCM5", "value": 0.2},
{"source": "MSH6", "target": "SMC2", "value": 0.2},
{"source": "MSH6", "target": "RAD50", "value": 0.2},
{"source": "MSH6", "target": "ATM", "value": 0.2},
{"source": "MSH6", "target": "POLA1", "value": 0.2},
{"source": "MSH6", "target": "RPA2", "value": 0.2},
{"source": "MSH6", "target": "MCM7", "value": 0.2},
{"source": "MSH6", "target": "POLE", "value": 0.2},
{"source": "MSH6", "target": "SMC1A", "value": 0.2},
{"source": "MSH6", "target": "DUT", "value": 0.2},
{"source": "MSH6", "target": "MCM6", "value": 0.2},
{"source": "MSH6", "target": "TP53BP1", "value": 0.2},
{"source": "WT1", "target": "ALDH1A2", "value": 0.2},
{"source": "WT1", "target": "DNAJA3", "value": 0.2},
{"source": "WT1", "target": "PAX2", "value": 0.2},
{"source": "KIF11", "target": "ARF5", "value": 0.2},
{"source": "KIF11", "target": "ZW10", "value": 0.2},
{"source": "KIF11", "target": "MCM5", "value": 0.2},
{"source": "KIF11", "target": "COPB1", "value": 0.2},
{"source": "KIF11", "target": "DYNC1LI2", "value": 0.2},
{"source": "KIF11", "target": "SMC2", "value": 0.2},
{"source": "KIF11", "target": "TMED9", "value": 0.2},
{"source": "KIF11", "target": "MCM7", "value": 0.2},
{"source": "KIF11", "target": "POLE", "value": 0.2},
{"source": "KIF11", "target": "HLA-DMB", "value": 0.2},
{"source": "KIF11", "target": "DYNC1H1", "value": 0.2},
{"source": "KIF11", "target": "TMED10", "value": 0.2},
{"source": "KIF11", "target": "TOP2A", "value": 0.2},
{"source": "KIF11", "target": "COPG1", "value": 0.2},
{"source": "KIF11", "target": "BUB3", "value": 0.2},
{"source": "KIF11", "target": "HLA-DRB1", "value": 0.2},
{"source": "KIF11", "target": "RAB1A", "value": 0.2},
{"source": "KIF11", "target": "COPG2", "value": 0.2},
{"source": "KIF11", "target": "COPE", "value": 0.2},
{"source": "KIF11", "target": "DCTN1", "value": 0.2},
{"source": "KIF11", "target": "COPZ1", "value": 0.2},
{"source": "KIF11", "target": "ARF4", "value": 0.2},
{"source": "KIF11", "target": "COPB2", "value": 0.2},
{"source": "KIF11", "target": "AURKC", "value": 0.2},
{"source": "KIF11", "target": "HAUS6", "value": 0.2},
{"source": "KIF11", "target": "ARCN1", "value": 0.2},
{"source": "KIF11", "target": "KIF5B", "value": 0.2},
{"source": "KIF11", "target": "ACTR1A", "value": 0.2},
{"source": "KIF11", "target": "MCM6", "value": 0.2},
{"source": "KIF11", "target": "SPTBN2", "value": 0.2},
{"source": "KIF11", "target": "LMNB1", "value": 0.2},
{"source": "KIF11", "target": "CKAP5", "value": 0.2},
{"source": "KIF11", "target": "POLA1", "value": 0.2},
{"source": "KIF11", "target": "RAB7A", "value": 0.2},
{"source": "TUBB", "target": "YWHAE", "value": 0.2},
{"source": "TUBB", "target": "CEP72", "value": 0.2},
{"source": "TUBB", "target": "RAB8A", "value": 0.2},
{"source": "TUBB", "target": "TBCA", "value": 0.2},
{"source": "TUBB", "target": "PSMD1", "value": 0.2},
{"source": "TUBB", "target": "PPP2R1A", "value": 0.2},
{"source": "TUBB", "target": "HSP90AA1", "value": 0.2},
{"source": "TUBB", "target": "TUBA1B", "value": 0.2},
{"source": "TUBB", "target": "CKAP5", "value": 0.2},
{"source": "TUBB", "target": "ACTR1A", "value": 0.2},
{"source": "TUBB", "target": "TUBB4B", "value": 0.2},
{"source": "TUBB", "target": "OFD1", "value": 0.2},
{"source": "TUBB", "target": "MKS1", "value": 0.2},
{"source": "TUBB", "target": "HAUS6", "value": 0.2},
{"source": "TUBB", "target": "DYNC1H1", "value": 0.2},
{"source": "TUBB", "target": "TCTN3", "value": 0.2},
{"source": "TUBB", "target": "NEDD1", "value": 0.2},
{"source": "TUBB", "target": "TBCD", "value": 0.2},
{"source": "TUBB", "target": "CDK5RAP2", "value": 0.2},
{"source": "TUBB", "target": "KIF24", "value": 0.2},
{"source": "TUBB", "target": "PAFAH1B1", "value": 0.2},
{"source": "TUBB", "target": "MAPRE1", "value": 0.2},
{"source": "KIF24", "target": "YWHAE", "value": 0.2},
{"source": "KIF24", "target": "CEP72", "value": 0.2},
{"source": "KIF24", "target": "RAB8A", "value": 0.2},
{"source": "KIF24", "target": "PPP2R1A", "value": 0.2},
{"source": "KIF24", "target": "HSP90AA1", "value": 0.2},
{"source": "KIF24", "target": "TUBB4B", "value": 0.2},
{"source": "KIF24", "target": "CDK5RAP2", "value": 0.2},
{"source": "KIF24", "target": "OFD1", "value": 0.2},
{"source": "KIF24", "target": "DYNC1H1", "value": 0.2},
{"source": "KIF24", "target": "ACTR1A", "value": 0.2},
{"source": "KIF24", "target": "MAPRE1", "value": 0.2},
{"source": "KIF24", "target": "PAFAH1B1", "value": 0.2},
{"source": "KIF24", "target": "HAUS6", "value": 0.2},
{"source": "KIF24", "target": "NEDD1", "value": 0.2},
{"source": "KIF24", "target": "MKS1", "value": 0.2},
{"source": "KIF24", "target": "CKAP5", "value": 0.2},
{"source": "KIF24", "target": "TCTN3", "value": 0.2},
{"source": "WDR77", "target": "CPSF2", "value": 0.2},
{"source": "WDR77", "target": "RBBP7", "value": 0.2},
{"source": "WDR77", "target": "ARID1B", "value": 0.2},
{"source": "WDR77", "target": "PRMT5", "value": 0.2},
{"source": "WDR77", "target": "H2AFJ", "value": 0.2},
{"source": "WDR77", "target": "SMARCA2", "value": 0.2},
{"source": "WDR77", "target": "ARID1A", "value": 0.2},
{"source": "WDR77", "target": "SMARCA4", "value": 0.2},
{"source": "WDR77", "target": "HDAC1", "value": 0.2},
{"source": "ARID1A", "target": "SMARCA2", "value": 0.2},
{"source": "ARID1A", "target": "PRMT5", "value": 0.2},
{"source": "ARID1A", "target": "SMARCA4", "value": 0.2},
{"source": "ARID1A", "target": "ARID1B", "value": 0.2},
{"source": "ARID1A", "target": "BCL7A", "value": 0.2},
{"source": "ARID1A", "target": "PPP2R1A", "value": 0.2},
{"source": "ARID1A", "target": "POLR2A", "value": 0.2},
{"source": "ARID1A", "target": "NF1", "value": 0.2},
{"source": "NCOA3", "target": "POLR2C", "value": 0.2},
{"source": "NCOA3", "target": "DDX5", "value": 0.2},
{"source": "NCOA3", "target": "CTSD", "value": 0.2},
{"source": "NCOA3", "target": "YY1", "value": 0.2},
{"source": "NCOA3", "target": "SMC1A", "value": 0.2},
{"source": "NCOA3", "target": "SRC", "value": 0.2},
{"source": "NCOA3", "target": "FAM120B", "value": 0.2},
{"source": "NCOA3", "target": "POLR2B", "value": 0.2},
{"source": "NCOA3", "target": "H2AFJ", "value": 0.2},
{"source": "NCOA3", "target": "RBBP7", "value": 0.2},
{"source": "NCOA3", "target": "POLR2A", "value": 0.2},
{"source": "KBTBD7", "target": "STUB1", "value": 0.2},
{"source": "KBTBD7", "target": "UBE3A", "value": 0.2},
{"source": "KBTBD7", "target": "MGRN1", "value": 0.2},
{"source": "KBTBD7", "target": "UBE3C", "value": 0.2},
{"source": "KBTBD7", "target": "HUWE1", "value": 0.2},
{"source": "KBTBD7", "target": "RNF220", "value": 0.2},
{"source": "KBTBD7", "target": "NF1", "value": 0.2},
{"source": "KBTBD7", "target": "PARK2", "value": 0.2},
{"source": "KBTBD7", "target": "FBXL4", "value": 0.2},
{"source": "KBTBD7", "target": "UFL1", "value": 0.2},
{"source": "KBTBD7", "target": "UBR2", "value": 0.2},
{"source": "KBTBD7", "target": "UBR4", "value": 0.2},
{"source": "KBTBD7", "target": "UBC", "value": 0.2},
{"source": "KBTBD7", "target": "NEDD4", "value": 0.2},
{"source": "KBTBD7", "target": "HERC1", "value": 0.2},
{"source": "KBTBD7", "target": "ITCH", "value": 0.2},
{"source": "KBTBD7", "target": "WWP1", "value": 0.2},
{"source": "KBTBD7", "target": "RNF130", "value": 0.2},
{"source": "HNRNPUL1", "target": "POLR2C", "value": 0.2},
{"source": "HNRNPUL1", "target": "DDX5", "value": 0.2},
{"source": "HNRNPUL1", "target": "PRPF19", "value": 0.2},
{"source": "HNRNPUL1", "target": "SAFB2", "value": 0.2},
{"source": "HNRNPUL1", "target": "SNW1", "value": 0.2},
{"source": "HNRNPUL1", "target": "CPSF2", "value": 0.2},
{"source": "HNRNPUL1", "target": "RAB11B", "value": 0.2},
{"source": "HNRNPUL1", "target": "DHX15", "value": 0.2},
{"source": "HNRNPUL1", "target": "GTF2F2", "value": 0.2},
{"source": "HNRNPUL1", "target": "XAB2", "value": 0.2},
{"source": "HNRNPUL1", "target": "SF1", "value": 0.2},
{"source": "HNRNPUL1", "target": "POLR2B", "value": 0.2},
{"source": "HNRNPUL1", "target": "TP53BP1", "value": 0.2},
{"source": "HNRNPUL1", "target": "POLR2A", "value": 0.2},
{"source": "POLR2B", "target": "RFC2", "value": 0.2},
{"source": "POLR2B", "target": "EEF1A2", "value": 0.2},
{"source": "POLR2B", "target": "POLR2C", "value": 0.2},
{"source": "POLR2B", "target": "DDX5", "value": 0.2},
{"source": "POLR2B", "target": "PRPF19", "value": 0.2},
{"source": "POLR2B", "target": "SNW1", "value": 0.2},
{"source": "POLR2B", "target": "YY1", "value": 0.2},
{"source": "POLR2B", "target": "RPS3", "value": 0.2},
{"source": "POLR2B", "target": "ATM", "value": 0.2},
{"source": "POLR2B", "target": "CPSF2", "value": 0.2},
{"source": "POLR2B", "target": "TSR1", "value": 0.2},
{"source": "POLR2B", "target": "DDB1", "value": 0.2},
{"source": "POLR2B", "target": "MCM7", "value": 0.2},
{"source": "POLR2B", "target": "RPS15A", "value": 0.2},
{"source": "POLR2B", "target": "POLE", "value": 0.2},
{"source": "POLR2B", "target": "DHX15", "value": 0.2},
{"source": "POLR2B", "target": "GTF2F2", "value": 0.2},
{"source": "POLR2B", "target": "TUBB4B", "value": 0.2},
{"source": "POLR2B", "target": "USP7", "value": 0.2},
{"source": "POLR2B", "target": "XAB2", "value": 0.2},
{"source": "POLR2B", "target": "RPA2", "value": 0.2},
{"source": "POLR2B", "target": "SF1", "value": 0.2},
{"source": "POLR2B", "target": "RBBP7", "value": 0.2},
{"source": "POLR2B", "target": "CCNK", "value": 0.2},
{"source": "POLR2B", "target": "POLR2A", "value": 0.2},
{"source": "POLR2B", "target": "POLR1B", "value": 0.2},
{"source": "POLR2B", "target": "H2AFJ", "value": 0.2},
{"source": "POLR2B", "target": "RPL9", "value": 0.2},
{"source": "POLR2B", "target": "HOXA3", "value": 0.2},
{"source": "POLR2B", "target": "UBC", "value": 0.2},
{"source": "POLR2B", "target": "INTS1", "value": 0.2},
{"source": "POLR2B", "target": "RPS15", "value": 0.2},
{"source": "POLR2B", "target": "INTS12", "value": 0.2},
{"source": "POLR2B", "target": "RPL23", "value": 0.2},
{"source": "PARP1", "target": "RFC2", "value": 0.2},
{"source": "PARP1", "target": "AIMP2", "value": 0.2},
{"source": "PARP1", "target": "DDB2", "value": 0.2},
{"source": "PARP1", "target": "ATM", "value": 0.2},
{"source": "PARP1", "target": "DDB1", "value": 0.2},
{"source": "PARP1", "target": "POLE", "value": 0.2},
{"source": "PARP1", "target": "BUB3", "value": 0.2},
{"source": "PARP1", "target": "RPA2", "value": 0.2},
{"source": "PARP1", "target": "UBC", "value": 0.2},
{"source": "PARP1", "target": "SMARCA4", "value": 0.2},
{"source": "PARP1", "target": "RAD50", "value": 0.2},
{"source": "SNX1", "target": "VPS35", "value": 0.2},
{"source": "SNX1", "target": "RAB7A", "value": 0.2},
{"source": "PPP1CA", "target": "PPP2CB", "value": 0.2},
{"source": "PPP1CA", "target": "PPP2R5A", "value": 0.2},
{"source": "PPP1CA", "target": "CPSF2", "value": 0.2},
{"source": "PPP1CA", "target": "PPP2R1A", "value": 0.2},
{"source": "PPP1CA", "target": "POLR2A", "value": 0.2},
{"source": "PPP1CA", "target": "PPP4R2", "value": 0.2},
{"source": "PPP1CA", "target": "PPP1CC", "value": 0.2},
{"source": "PPP1CA", "target": "CALM1", "value": 0.2},
{"source": "PPP1CA", "target": "BMPR1B", "value": 0.2},
{"source": "EMG1", "target": "RPS12", "value": 0.2},
{"source": "EMG1", "target": "BYSL", "value": 0.2},
{"source": "EMG1", "target": "RRP9", "value": 0.2},
{"source": "EMG1", "target": "RPS16", "value": 0.2},
{"source": "EMG1", "target": "NIP7", "value": 0.2},
{"source": "EMG1", "target": "EIF2S1", "value": 0.2},
{"source": "EMG1", "target": "NAT10", "value": 0.2},
{"source": "EMG1", "target": "EXOSC7", "value": 0.2},
{"source": "EMG1", "target": "RPS3", "value": 0.2},
{"source": "EMG1", "target": "RPS23", "value": 0.2},
{"source": "EMG1", "target": "TSR1", "value": 0.2},
{"source": "EMG1", "target": "RPS15A", "value": 0.2},
{"source": "EMG1", "target": "RPS27L", "value": 0.2},
{"source": "EMG1", "target": "RPS7", "value": 0.2},
{"source": "EMG1", "target": "RPS21", "value": 0.2},
{"source": "EMG1", "target": "RPSA", "value": 0.2},
{"source": "EMG1", "target": "RPS26", "value": 0.2},
{"source": "EMG1", "target": "GTPBP4", "value": 0.2},
{"source": "EMG1", "target": "PDCD11", "value": 0.2},
{"source": "EMG1", "target": "RPS6", "value": 0.2},
{"source": "EMG1", "target": "EXOSC8", "value": 0.2},
{"source": "EMG1", "target": "RPS8", "value": 0.2},
{"source": "EMG1", "target": "PWP1", "value": 0.2},
{"source": "EMG1", "target": "RPF2", "value": 0.2},
{"source": "EMG1", "target": "WDR36", "value": 0.2},
{"source": "EMG1", "target": "RBM19", "value": 0.2},
{"source": "EMG1", "target": "RPS15", "value": 0.2},
{"source": "EMG1", "target": "WDR18", "value": 0.2},
{"source": "PMEPA1", "target": "NEDD4", "value": 0.2},
{"source": "NFIX", "target": "POLR3H", "value": 0.2},
{"source": "NFIX", "target": "NF1", "value": 0.2},
{"source": "EXOC3", "target": "RAB10", "value": 0.2},
{"source": "EXOC3", "target": "RAB8A", "value": 0.2},
{"source": "EXOC3", "target": "VAMP2", "value": 0.2},
{"source": "EXOC3", "target": "STX4", "value": 0.2},
{"source": "EXOC3", "target": "RAB14", "value": 0.2},
{"source": "EXOC3", "target": "MYO5A", "value": 0.2},
{"source": "COTL1", "target": "FSCN1", "value": 0.2},
{"source": "HLA-C", "target": "CANX", "value": 0.2},
{"source": "HLA-C", "target": "SEC23A", "value": 0.2},
{"source": "HLA-C", "target": "SEC24C", "value": 0.2},
{"source": "HLA-C", "target": "HLA-DRB1", "value": 0.2},
{"source": "HLA-C", "target": "PSMB8", "value": 0.2},
{"source": "HLA-C", "target": "TAPBP", "value": 0.2},
{"source": "HLA-C", "target": "B2M", "value": 0.2},
{"source": "HLA-C", "target": "HLA-DMB", "value": 0.2},
{"source": "HLA-C", "target": "HLA-B", "value": 0.2},
{"source": "HLA-C", "target": "TRIM22", "value": 0.2},
{"source": "SERPINC1", "target": "APOB", "value": 0.2},
{"source": "SERPINC1", "target": "HSP90B1", "value": 0.2},
{"source": "SERPINC1", "target": "KLK4", "value": 0.2},
{"source": "SERPINC1", "target": "P4HB", "value": 0.2},
{"source": "SERPINC1", "target": "TGOLN2", "value": 0.2},
{"source": "SEC23A", "target": "CANX", "value": 0.2},
{"source": "SEC23A", "target": "COPB1", "value": 0.2},
{"source": "SEC23A", "target": "COPE", "value": 0.2},
{"source": "SEC23A", "target": "NAPA", "value": 0.2},
{"source": "SEC23A", "target": "ARCN1", "value": 0.2},
{"source": "SEC23A", "target": "STX5", "value": 0.2},
{"source": "SEC23A", "target": "TMED10", "value": 0.2},
{"source": "SEC23A", "target": "COPB2", "value": 0.2},
{"source": "SEC23A", "target": "RAB1A", "value": 0.2},
{"source": "SEC23A", "target": "B2M", "value": 0.2},
{"source": "SEC23A", "target": "HLA-DRB1", "value": 0.2},
{"source": "SEC23A", "target": "USO1", "value": 0.2},
{"source": "SEC23A", "target": "COPZ1", "value": 0.2},
{"source": "SEC23A", "target": "SEC24C", "value": 0.2},
{"source": "SEC23A", "target": "COPG1", "value": 0.2},
{"source": "SEC23A", "target": "AP1S1", "value": 0.2},
{"source": "SEC23A", "target": "COPG2", "value": 0.2},
{"source": "SEC23A", "target": "HLA-B", "value": 0.2},
{"source": "RPL9", "target": "MRPS10", "value": 0.2},
{"source": "RPL9", "target": "PSMC4", "value": 0.2},
{"source": "RPL9", "target": "POLR2C", "value": 0.2},
{"source": "RPL9", "target": "EIF3E", "value": 0.2},
{"source": "RPL9", "target": "RPL18A", "value": 0.2},
{"source": "RPL9", "target": "PSMA2", "value": 0.2},
{"source": "RPL9", "target": "RPS12", "value": 0.2},
{"source": "RPL9", "target": "RPS16", "value": 0.2},
{"source": "RPL9", "target": "HSPBP1", "value": 0.2},
{"source": "RPL9", "target": "EIF2S1", "value": 0.2},
{"source": "RPL9", "target": "CCT7", "value": 0.2},
{"source": "RPL9", "target": "PSMC1", "value": 0.2},
{"source": "RPL9", "target": "PSMA6", "value": 0.2},
{"source": "RPL9", "target": "EXOSC7", "value": 0.2},
{"source": "RPL9", "target": "RPS3", "value": 0.2},
{"source": "RPL9", "target": "EIF5B", "value": 0.2},
{"source": "RPL9", "target": "KPNB1", "value": 0.2},
{"source": "RPL9", "target": "CCT3", "value": 0.2},
{"source": "RPL9", "target": "RPS23", "value": 0.2},
{"source": "RPL9", "target": "RPL10L", "value": 0.2},
{"source": "RPL9", "target": "HINT1", "value": 0.2},
{"source": "RPL9", "target": "EEF2", "value": 0.2},
{"source": "RPL9", "target": "SRP68", "value": 0.2},
{"source": "RPL9", "target": "RPS15A", "value": 0.2},
{"source": "RPL9", "target": "RPLP2", "value": 0.2},
{"source": "RPL9", "target": "PLEC1", "value": 0.2},
{"source": "RPL9", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL9", "target": "RPS27L", "value": 0.2},
{"source": "RPL9", "target": "RPS7", "value": 0.2},
{"source": "RPL9", "target": "RPS21", "value": 0.2},
{"source": "RPL9", "target": "RPL3", "value": 0.2},
{"source": "RPL9", "target": "RPL21", "value": 0.2},
{"source": "RPL9", "target": "RPSA", "value": 0.2},
{"source": "RPL9", "target": "RPS26", "value": 0.2},
{"source": "RPL9", "target": "EIF3B", "value": 0.2},
{"source": "RPL9", "target": "RPL12", "value": 0.2},
{"source": "RPL9", "target": "PSMD4", "value": 0.2},
{"source": "RPL9", "target": "PDCD11", "value": 0.2},
{"source": "RPL9", "target": "PSMA7", "value": 0.2},
{"source": "RPL9", "target": "RPS6", "value": 0.2},
{"source": "RPL9", "target": "EXOSC8", "value": 0.2},
{"source": "RPL9", "target": "CCT4", "value": 0.2},
{"source": "RPL9", "target": "RPS8", "value": 0.2},
{"source": "RPL9", "target": "RPL35A", "value": 0.2},
{"source": "RPL9", "target": "POLR1B", "value": 0.2},
{"source": "RPL9", "target": "RPL29", "value": 0.2},
{"source": "RPL9", "target": "WDR18", "value": 0.2},
{"source": "RPL9", "target": "RPL23", "value": 0.2},
{"source": "RPL9", "target": "RPL28", "value": 0.2},
{"source": "RPL9", "target": "RPF2", "value": 0.2},
{"source": "RPL9", "target": "RPS15", "value": 0.2},
{"source": "RPL9", "target": "EIF3M", "value": 0.2},
{"source": "RPL9", "target": "RPL27", "value": 0.2},
{"source": "MRPS10", "target": "RPS26", "value": 0.2},
{"source": "MRPS10", "target": "RPS3", "value": 0.2},
{"source": "MRPS10", "target": "RPL23", "value": 0.2},
{"source": "MRPS10", "target": "EIF5B", "value": 0.2},
{"source": "MRPS10", "target": "PDCD11", "value": 0.2},
{"source": "MRPS10", "target": "EIF3E", "value": 0.2},
{"source": "MRPS10", "target": "EIF3M", "value": 0.2},
{"source": "MRPS10", "target": "EIF2S1", "value": 0.2},
{"source": "MRPS10", "target": "RPLP2", "value": 0.2},
{"source": "MRPS10", "target": "RPS21", "value": 0.2},
{"source": "MRPS10", "target": "POLR2C", "value": 0.2},
{"source": "MRPS10", "target": "SRP68", "value": 0.2},
{"source": "MRPS10", "target": "RPL29", "value": 0.2},
{"source": "MRPS10", "target": "RPL18A", "value": 0.2},
{"source": "MRPS10", "target": "RPL27", "value": 0.2},
{"source": "MRPS10", "target": "RPS6", "value": 0.2},
{"source": "MRPS10", "target": "RPS15A", "value": 0.2},
{"source": "MRPS10", "target": "PLEC1", "value": 0.2},
{"source": "MRPS10", "target": "RPL3", "value": 0.2},
{"source": "MRPS10", "target": "RPSA", "value": 0.2},
{"source": "MRPS10", "target": "RPS7", "value": 0.2},
{"source": "MRPS10", "target": "RPS16", "value": 0.2},
{"source": "MRPS10", "target": "RPS23", "value": 0.2},
{"source": "MRPS10", "target": "RPS8", "value": 0.2},
{"source": "MRPS10", "target": "RPL12", "value": 0.2},
{"source": "MRPS10", "target": "RPL28", "value": 0.2},
{"source": "MRPS10", "target": "RPS15", "value": 0.2},
{"source": "MRPS10", "target": "RPL21", "value": 0.2},
{"source": "MRPS10", "target": "RPS27L", "value": 0.2},
{"source": "MRPS10", "target": "RPL35A", "value": 0.2},
{"source": "ACVR1", "target": "BAMBI", "value": 0.2},
{"source": "ACVR1", "target": "INHBB", "value": 0.2},
{"source": "ACVR1", "target": "ACVR1B", "value": 0.2},
{"source": "ACVR1", "target": "BMPR1B", "value": 0.2},
{"source": "MYBPC2", "target": "MYH1", "value": 0.2},
{"source": "MYBPC2", "target": "MYH2", "value": 0.2},
{"source": "MYBPC2", "target": "MYH4", "value": 0.2},
{"source": "MYBPC2", "target": "TNNT3", "value": 0.2},
{"source": "MYBPC2", "target": "TMOD3", "value": 0.2},
{"source": "MYBPC2", "target": "MYLPF", "value": 0.2},
{"source": "MYBPC2", "target": "TNNI2", "value": 0.2},
{"source": "MYBPC2", "target": "TPM2", "value": 0.2},
{"source": "MYBPC2", "target": "TTN", "value": 0.2},
{"source": "MYBPC2", "target": "MYL3", "value": 0.2},
{"source": "MYBPC2", "target": "MYH3", "value": 0.2},
{"source": "MYBPC2", "target": "DES", "value": 0.2},
{"source": "MYBPC2", "target": "MYOZ1", "value": 0.2},
{"source": "MYBPC2", "target": "TNNC2", "value": 0.2},
{"source": "MYBPC2", "target": "MYH8", "value": 0.2},
{"source": "MYBPC2", "target": "ACTN2", "value": 0.2},
{"source": "MYBPC2", "target": "MYBPC1", "value": 0.2},
{"source": "PNP", "target": "NT5C", "value": 0.2},
{"source": "ITCH", "target": "PSMA4", "value": 0.2},
{"source": "ITCH", "target": "PSMC4", "value": 0.2},
{"source": "ITCH", "target": "PSMD8", "value": 0.2},
{"source": "ITCH", "target": "PSME2", "value": 0.2},
{"source": "ITCH", "target": "PSMD10", "value": 0.2},
{"source": "ITCH", "target": "PSMD7", "value": 0.2},
{"source": "ITCH", "target": "STUB1", "value": 0.2},
{"source": "ITCH", "target": "PSMA2", "value": 0.2},
{"source": "ITCH", "target": "UBE3A", "value": 0.2},
{"source": "ITCH", "target": "PSMC1", "value": 0.2},
{"source": "ITCH", "target": "PSMA6", "value": 0.2},
{"source": "ITCH", "target": "PSMD11", "value": 0.2},
{"source": "ITCH", "target": "PSMB1", "value": 0.2},
{"source": "ITCH", "target": "MGRN1", "value": 0.2},
{"source": "ITCH", "target": "PSMB4", "value": 0.2},
{"source": "ITCH", "target": "UBE3C", "value": 0.2},
{"source": "ITCH", "target": "PSMD1", "value": 0.2},
{"source": "ITCH", "target": "PSMA8", "value": 0.2},
{"source": "ITCH", "target": "HUWE1", "value": 0.2},
{"source": "ITCH", "target": "RNF220", "value": 0.2},
{"source": "ITCH", "target": "PSMD12", "value": 0.2},
{"source": "ITCH", "target": "PSMB5", "value": 0.2},
{"source": "ITCH", "target": "PARK2", "value": 0.2},
{"source": "ITCH", "target": "PSMD4", "value": 0.2},
{"source": "ITCH", "target": "FBXL4", "value": 0.2},
{"source": "ITCH", "target": "UFL1", "value": 0.2},
{"source": "ITCH", "target": "PSMA7", "value": 0.2},
{"source": "ITCH", "target": "UBR2", "value": 0.2},
{"source": "ITCH", "target": "PSMB8", "value": 0.2},
{"source": "ITCH", "target": "UBR4", "value": 0.2},
{"source": "ITCH", "target": "PSME1", "value": 0.2},
{"source": "ITCH", "target": "HERC1", "value": 0.2},
{"source": "ITCH", "target": "PSMC6", "value": 0.2},
{"source": "ITCH", "target": "NEDD4", "value": 0.2},
{"source": "ITCH", "target": "WWP1", "value": 0.2},
{"source": "ITCH", "target": "RNF130", "value": 0.2},
{"source": "ITCH", "target": "UBC", "value": 0.2},
{"source": "ITCH", "target": "PSMB3", "value": 0.2},
{"source": "CCT4", "target": "PSMA4", "value": 0.2},
{"source": "CCT4", "target": "PPP2CB", "value": 0.2},
{"source": "CCT4", "target": "RPL18A", "value": 0.2},
{"source": "CCT4", "target": "PSMA2", "value": 0.2},
{"source": "CCT4", "target": "RPS12", "value": 0.2},
{"source": "CCT4", "target": "RPS16", "value": 0.2},
{"source": "CCT4", "target": "EIF2S1", "value": 0.2},
{"source": "CCT4", "target": "CCT7", "value": 0.2},
{"source": "CCT4", "target": "PSMC1", "value": 0.2},
{"source": "CCT4", "target": "PSMA6", "value": 0.2},
{"source": "CCT4", "target": "PSMD11", "value": 0.2},
{"source": "CCT4", "target": "RPS3", "value": 0.2},
{"source": "CCT4", "target": "KPNB1", "value": 0.2},
{"source": "CCT4", "target": "CCT3", "value": 0.2},
{"source": "CCT4", "target": "RPS23", "value": 0.2},
{"source": "CCT4", "target": "HSPA4", "value": 0.2},
{"source": "CCT4", "target": "EEF2", "value": 0.2},
{"source": "CCT4", "target": "PSMD1", "value": 0.2},
{"source": "CCT4", "target": "DNAJA2", "value": 0.2},
{"source": "CCT4", "target": "GBA", "value": 0.2},
{"source": "CCT4", "target": "RPS15A", "value": 0.2},
{"source": "CCT4", "target": "TUBB6", "value": 0.2},
{"source": "CCT4", "target": "P4HB", "value": 0.2},
{"source": "CCT4", "target": "HSP90AA1", "value": 0.2},
{"source": "CCT4", "target": "TUBA1B", "value": 0.2},
{"source": "CCT4", "target": "RPS7", "value": 0.2},
{"source": "CCT4", "target": "TUBB4B", "value": 0.2},
{"source": "CCT4", "target": "RPL3", "value": 0.2},
{"source": "CCT4", "target": "RPSA", "value": 0.2},
{"source": "CCT4", "target": "PSMD12", "value": 0.2},
{"source": "CCT4", "target": "RPS26", "value": 0.2},
{"source": "CCT4", "target": "STIP1", "value": 0.2},
{"source": "CCT4", "target": "EIF3B", "value": 0.2},
{"source": "CCT4", "target": "RPL12", "value": 0.2},
{"source": "CCT4", "target": "PSMD4", "value": 0.2},
{"source": "CCT4", "target": "PSMA7", "value": 0.2},
{"source": "CCT4", "target": "HSP90AB1", "value": 0.2},
{"source": "CCT4", "target": "RPS6", "value": 0.2},
{"source": "CCT4", "target": "PSMC6", "value": 0.2},
{"source": "CCT4", "target": "RPL23", "value": 0.2},
{"source": "CCT4", "target": "RPL35A", "value": 0.2},
{"source": "CCT4", "target": "RPS8", "value": 0.2},
{"source": "CCT4", "target": "RPL27", "value": 0.2},
{"source": "CCT4", "target": "EIF3M", "value": 0.2},
{"source": "CCT4", "target": "RPL28", "value": 0.2},
{"source": "RBBP7", "target": "POLR2C", "value": 0.2},
{"source": "RBBP7", "target": "UBE3A", "value": 0.2},
{"source": "RBBP7", "target": "DDB2", "value": 0.2},
{"source": "RBBP7", "target": "YY1", "value": 0.2},
{"source": "RBBP7", "target": "DDB1", "value": 0.2},
{"source": "RBBP7", "target": "HINT1", "value": 0.2},
{"source": "RBBP7", "target": "PRMT5", "value": 0.2},
{"source": "RBBP7", "target": "PCGF3", "value": 0.2},
{"source": "RBBP7", "target": "HDAC1", "value": 0.2},
{"source": "RBBP7", "target": "POLR2A", "value": 0.2},
{"source": "RBBP7", "target": "SIN3A", "value": 0.2},
{"source": "RBBP7", "target": "H2AFJ", "value": 0.2},
{"source": "CDIPT", "target": "PIGQ", "value": 0.2},
{"source": "CDIPT", "target": "CDS2", "value": 0.2},
{"source": "PPT2", "target": "MTHFD1", "value": 0.2},
{"source": "AGPAT5", "target": "CDS2", "value": 0.2},
{"source": "EIF3E", "target": "PSMD7", "value": 0.2},
{"source": "EIF3E", "target": "RPLP2", "value": 0.2},
{"source": "EIF3E", "target": "RPL28", "value": 0.2},
{"source": "EIF3E", "target": "RPS21", "value": 0.2},
{"source": "EIF3E", "target": "EIF5B", "value": 0.2},
{"source": "EIF3E", "target": "RPS6", "value": 0.2},
{"source": "EIF3E", "target": "RPS23", "value": 0.2},
{"source": "EIF3E", "target": "PLEC1", "value": 0.2},
{"source": "EIF3E", "target": "RPS27L", "value": 0.2},
{"source": "EIF3E", "target": "EEF2", "value": 0.2},
{"source": "EIF3E", "target": "RPS15", "value": 0.2},
{"source": "EIF3E", "target": "RPL23", "value": 0.2},
{"source": "EIF3E", "target": "RPS12", "value": 0.2},
{"source": "EIF3E", "target": "RPL35A", "value": 0.2},
{"source": "EIF3E", "target": "RPS3", "value": 0.2},
{"source": "EIF3E", "target": "RPS26", "value": 0.2},
{"source": "EIF3E", "target": "RPS16", "value": 0.2},
{"source": "EIF3E", "target": "EIF3B", "value": 0.2},
{"source": "EIF3E", "target": "RPL21", "value": 0.2},
{"source": "EIF3E", "target": "RPS15A", "value": 0.2},
{"source": "EIF3E", "target": "EIF3M", "value": 0.2},
{"source": "EIF3E", "target": "RPL10L", "value": 0.2},
{"source": "EIF3E", "target": "EIF2S1", "value": 0.2},
{"source": "EIF3E", "target": "RPL29", "value": 0.2},
{"source": "EIF3E", "target": "RPL12", "value": 0.2},
{"source": "EIF3E", "target": "RPL3", "value": 0.2},
{"source": "EIF3E", "target": "RPS7", "value": 0.2},
{"source": "EIF3E", "target": "RPL27", "value": 0.2},
{"source": "EIF3E", "target": "RPL18A", "value": 0.2},
{"source": "EIF3E", "target": "RPSA", "value": 0.2},
{"source": "EIF3E", "target": "PSMD12", "value": 0.2},
{"source": "EIF3E", "target": "RPS8", "value": 0.2},
{"source": "PPP2CB", "target": "PSMA4", "value": 0.2},
{"source": "PPP2CB", "target": "PSMC4", "value": 0.2},
{"source": "PPP2CB", "target": "ZW10", "value": 0.2},
{"source": "PPP2CB", "target": "PSMD8", "value": 0.2},
{"source": "PPP2CB", "target": "PSME2", "value": 0.2},
{"source": "PPP2CB", "target": "PSMD10", "value": 0.2},
{"source": "PPP2CB", "target": "PSMD7", "value": 0.2},
{"source": "PPP2CB", "target": "CKAP5", "value": 0.2},
{"source": "PPP2CB", "target": "PPP1CC", "value": 0.2},
{"source": "PPP2CB", "target": "PSMB4", "value": 0.2},
{"source": "PPP2CB", "target": "DYNC1LI2", "value": 0.2},
{"source": "PPP2CB", "target": "PSMA2", "value": 0.2},
{"source": "PPP2CB", "target": "PSMD12", "value": 0.2},
{"source": "PPP2CB", "target": "PSMB3", "value": 0.2},
{"source": "PPP2CB", "target": "PPP2R1A", "value": 0.2},
{"source": "PPP2CB", "target": "APOB", "value": 0.2},
{"source": "PPP2CB", "target": "PSMB8", "value": 0.2},
{"source": "PPP2CB", "target": "PSMB5", "value": 0.2},
{"source": "PPP2CB", "target": "YES1", "value": 0.2},
{"source": "PPP2CB", "target": "CCT3", "value": 0.2},
{"source": "PPP2CB", "target": "RANGAP1", "value": 0.2},
{"source": "PPP2CB", "target": "SMC1A", "value": 0.2},
{"source": "PPP2CB", "target": "LYN", "value": 0.2},
{"source": "PPP2CB", "target": "INTS1", "value": 0.2},
{"source": "PPP2CB", "target": "PSMD1", "value": 0.2},
{"source": "PPP2CB", "target": "PSMA6", "value": 0.2},
{"source": "PPP2CB", "target": "CCT7", "value": 0.2},
{"source": "PPP2CB", "target": "DYNC1H1", "value": 0.2},
{"source": "PPP2CB", "target": "UBC", "value": 0.2},
{"source": "PPP2CB", "target": "PSMC1", "value": 0.2},
{"source": "PPP2CB", "target": "MAD1L1", "value": 0.2},
{"source": "PPP2CB", "target": "PAFAH1B1", "value": 0.2},
{"source": "PPP2CB", "target": "PSMD4", "value": 0.2},
{"source": "PPP2CB", "target": "PSMD11", "value": 0.2},
{"source": "PPP2CB", "target": "BUB3", "value": 0.2},
{"source": "PPP2CB", "target": "PSMB1", "value": 0.2},
{"source": "PPP2CB", "target": "FZD1", "value": 0.2},
{"source": "PPP2CB", "target": "MAPRE1", "value": 0.2},
{"source": "PPP2CB", "target": "PSMA8", "value": 0.2},
{"source": "PPP2CB", "target": "PSMC6", "value": 0.2},
{"source": "PPP2CB", "target": "PPP2R5A", "value": 0.2},
{"source": "PPP2CB", "target": "PSMA7", "value": 0.2},
{"source": "PPP2CB", "target": "PPP4R2", "value": 0.2},
{"source": "PPP2CB", "target": "PSME1", "value": 0.2},
{"source": "USP7", "target": "RFC2", "value": 0.2},
{"source": "USP7", "target": "POLR2C", "value": 0.2},
{"source": "USP7", "target": "PRPF19", "value": 0.2},
{"source": "USP7", "target": "ATM", "value": 0.2},
{"source": "USP7", "target": "DDB1", "value": 0.2},
{"source": "USP7", "target": "POLE", "value": 0.2},
{"source": "USP7", "target": "DAXX", "value": 0.2},
{"source": "USP7", "target": "RNF220", "value": 0.2},
{"source": "USP7", "target": "XAB2", "value": 0.2},
{"source": "USP7", "target": "UBC", "value": 0.2},
{"source": "USP7", "target": "RPA2", "value": 0.2},
{"source": "USP7", "target": "POLR2A", "value": 0.2},
{"source": "DHX15", "target": "POLR2C", "value": 0.2},
{"source": "DHX15", "target": "DDX5", "value": 0.2},
{"source": "DHX15", "target": "PRPF19", "value": 0.2},
{"source": "DHX15", "target": "BYSL", "value": 0.2},
{"source": "DHX15", "target": "RRP9", "value": 0.2},
{"source": "DHX15", "target": "NIP7", "value": 0.2},
{"source": "DHX15", "target": "NAT10", "value": 0.2},
{"source": "DHX15", "target": "SNW1", "value": 0.2},
{"source": "DHX15", "target": "DDX18", "value": 0.2},
{"source": "DHX15", "target": "CPSF2", "value": 0.2},
{"source": "DHX15", "target": "TSR1", "value": 0.2},
{"source": "DHX15", "target": "TTC27", "value": 0.2},
{"source": "DHX15", "target": "DDX10", "value": 0.2},
{"source": "DHX15", "target": "NOC3L", "value": 0.2},
{"source": "DHX15", "target": "XAB2", "value": 0.2},
{"source": "DHX15", "target": "POLR2A", "value": 0.2},
{"source": "DHX15", "target": "GTPBP4", "value": 0.2},
{"source": "DHX15", "target": "GTF2F2", "value": 0.2},
{"source": "DHX15", "target": "PPP1CC", "value": 0.2},
{"source": "DHX15", "target": "PWP1", "value": 0.2},
{"source": "DHX15", "target": "RBM19", "value": 0.2},
{"source": "DHX15", "target": "PDCD11", "value": 0.2},
{"source": "DHX15", "target": "WDR18", "value": 0.2},
{"source": "DHX15", "target": "RPF2", "value": 0.2},
{"source": "DHX15", "target": "POLR1B", "value": 0.2},
{"source": "DHX15", "target": "WDR36", "value": 0.2},
{"source": "DHX15", "target": "SF1", "value": 0.2},
{"source": "VAMP2", "target": "GOSR1", "value": 0.2},
{"source": "VAMP2", "target": "APOB", "value": 0.2},
{"source": "VAMP2", "target": "VAMP4", "value": 0.2},
{"source": "VAMP2", "target": "STX6", "value": 0.2},
{"source": "VAMP2", "target": "ARPC1A", "value": 0.2},
{"source": "VAMP2", "target": "NAPA", "value": 0.2},
{"source": "VAMP2", "target": "YWHAE", "value": 0.2},
{"source": "VAMP2", "target": "RAB10", "value": 0.2},
{"source": "VAMP2", "target": "STX5", "value": 0.2},
{"source": "VAMP2", "target": "ARPC2", "value": 0.2},
{"source": "VAMP2", "target": "RAB8A", "value": 0.2},
{"source": "VAMP2", "target": "CLTB", "value": 0.2},
{"source": "VAMP2", "target": "GNAI2", "value": 0.2},
{"source": "VAMP2", "target": "MYO5A", "value": 0.2},
{"source": "VAMP2", "target": "BET1L", "value": 0.2},
{"source": "VAMP2", "target": "TGOLN2", "value": 0.2},
{"source": "VAMP2", "target": "TFRC", "value": 0.2},
{"source": "VAMP2", "target": "AP1S1", "value": 0.2},
{"source": "VAMP2", "target": "STX4", "value": 0.2},
{"source": "VAMP2", "target": "LDLR", "value": 0.2},
{"source": "VAMP2", "target": "LDLRAP1", "value": 0.2},
{"source": "VAMP2", "target": "FNBP1", "value": 0.2},
{"source": "VAMP2", "target": "UBC", "value": 0.2},
{"source": "VAMP2", "target": "RAB14", "value": 0.2},
{"source": "ATXN10", "target": "SPTBN2", "value": 0.2},
{"source": "RPS15", "target": "EEF1A2", "value": 0.2},
{"source": "RPS15", "target": "POLR2C", "value": 0.2},
{"source": "RPS15", "target": "RPL18A", "value": 0.2},
{"source": "RPS15", "target": "RPS12", "value": 0.2},
{"source": "RPS15", "target": "BYSL", "value": 0.2},
{"source": "RPS15", "target": "RRP9", "value": 0.2},
{"source": "RPS15", "target": "RPS16", "value": 0.2},
{"source": "RPS15", "target": "HSPBP1", "value": 0.2},
{"source": "RPS15", "target": "EIF2S1", "value": 0.2},
{"source": "RPS15", "target": "RPS3", "value": 0.2},
{"source": "RPS15", "target": "EIF5B", "value": 0.2},
{"source": "RPS15", "target": "RPS23", "value": 0.2},
{"source": "RPS15", "target": "RPL10L", "value": 0.2},
{"source": "RPS15", "target": "TSR1", "value": 0.2},
{"source": "RPS15", "target": "EEF2", "value": 0.2},
{"source": "RPS15", "target": "SRP68", "value": 0.2},
{"source": "RPS15", "target": "RPS15A", "value": 0.2},
{"source": "RPS15", "target": "RPLP2", "value": 0.2},
{"source": "RPS15", "target": "PLEC1", "value": 0.2},
{"source": "RPS15", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS15", "target": "RPS27L", "value": 0.2},
{"source": "RPS15", "target": "RPS7", "value": 0.2},
{"source": "RPS15", "target": "RPS21", "value": 0.2},
{"source": "RPS15", "target": "RPL3", "value": 0.2},
{"source": "RPS15", "target": "RPL21", "value": 0.2},
{"source": "RPS15", "target": "RPSA", "value": 0.2},
{"source": "RPS15", "target": "RPS26", "value": 0.2},
{"source": "RPS15", "target": "EIF3B", "value": 0.2},
{"source": "RPS15", "target": "RPL12", "value": 0.2},
{"source": "RPS15", "target": "PDCD11", "value": 0.2},
{"source": "RPS15", "target": "RPS6", "value": 0.2},
{"source": "RPS15", "target": "RPS8", "value": 0.2},
{"source": "RPS15", "target": "RPL29", "value": 0.2},
{"source": "RPS15", "target": "RPL35A", "value": 0.2},
{"source": "RPS15", "target": "RPL23", "value": 0.2},
{"source": "RPS15", "target": "WDR36", "value": 0.2},
{"source": "RPS15", "target": "EIF3M", "value": 0.2},
{"source": "RPS15", "target": "POLR1B", "value": 0.2},
{"source": "RPS15", "target": "RPL28", "value": 0.2},
{"source": "RPS15", "target": "RPL27", "value": 0.2},
{"source": "RPS15", "target": "POLR2A", "value": 0.2},
{"source": "CDK5RAP2", "target": "YWHAE", "value": 0.2},
{"source": "CDK5RAP2", "target": "CEP72", "value": 0.2},
{"source": "CDK5RAP2", "target": "RAB8A", "value": 0.2},
{"source": "CDK5RAP2", "target": "PPP2R1A", "value": 0.2},
{"source": "CDK5RAP2", "target": "HSP90AA1", "value": 0.2},
{"source": "CDK5RAP2", "target": "TUBB4B", "value": 0.2},
{"source": "CDK5RAP2", "target": "HAUS6", "value": 0.2},
{"source": "CDK5RAP2", "target": "OFD1", "value": 0.2},
{"source": "CDK5RAP2", "target": "MKS1", "value": 0.2},
{"source": "CDK5RAP2", "target": "NEDD1", "value": 0.2},
{"source": "CDK5RAP2", "target": "TCTN3", "value": 0.2},
{"source": "CDK5RAP2", "target": "MAPRE1", "value": 0.2},
{"source": "CDK5RAP2", "target": "PAFAH1B1", "value": 0.2},
{"source": "CDK5RAP2", "target": "ACTR1A", "value": 0.2},
{"source": "CDK5RAP2", "target": "CKAP5", "value": 0.2},
{"source": "CDK5RAP2", "target": "DYNC1H1", "value": 0.2},
{"source": "ARPC1A", "target": "APOB", "value": 0.2},
{"source": "ARPC1A", "target": "VAMP4", "value": 0.2},
{"source": "ARPC1A", "target": "MYH2", "value": 0.2},
{"source": "ARPC1A", "target": "TFRC", "value": 0.2},
{"source": "ARPC1A", "target": "ARPC2", "value": 0.2},
{"source": "ARPC1A", "target": "TGOLN2", "value": 0.2},
{"source": "ARPC1A", "target": "ARPC1B", "value": 0.2},
{"source": "ARPC1A", "target": "PSMA7", "value": 0.2},
{"source": "ARPC1A", "target": "WIPF1", "value": 0.2},
{"source": "ARPC1A", "target": "BAIAP2", "value": 0.2},
{"source": "ARPC1A", "target": "NCKAP1L", "value": 0.2},
{"source": "ARPC1A", "target": "LDLR", "value": 0.2},
{"source": "ARPC1A", "target": "LDLRAP1", "value": 0.2},
{"source": "ARPC1A", "target": "FNBP1", "value": 0.2},
{"source": "ARPC1A", "target": "CLTB", "value": 0.2},
{"source": "ARPC1A", "target": "MYO5A", "value": 0.2},
{"source": "ARPC1A", "target": "UBC", "value": 0.2},
{"source": "ADCY9", "target": "S1PR3", "value": 0.2},
{"source": "ADCY9", "target": "GNAI2", "value": 0.2},
{"source": "ADCY9", "target": "ADCY6", "value": 0.2},
{"source": "ADCY9", "target": "PDYN", "value": 0.2},
{"source": "ADCY9", "target": "CALM1", "value": 0.2},
{"source": "ADCY9", "target": "GPR39", "value": 0.2},
{"source": "SERPINB6", "target": "COPB1", "value": 0.2},
{"source": "SERPINB6", "target": "CYBA", "value": 0.2},
{"source": "SERPINB6", "target": "CD47", "value": 0.2},
{"source": "SERPINB6", "target": "RAB14", "value": 0.2},
{"source": "SERPINB6", "target": "UBR4", "value": 0.2},
{"source": "SERPINB6", "target": "KCNAB2", "value": 0.2},
{"source": "SERPINB6", "target": "ATP6AP2", "value": 0.2},
{"source": "SERPINB6", "target": "ITGB2", "value": 0.2},
{"source": "SERPINB6", "target": "TSPAN14", "value": 0.2},
{"source": "SERPINB6", "target": "ANO6", "value": 0.2},
{"source": "TGFB2", "target": "LTBP3", "value": 0.2},
{"source": "TGFB2", "target": "ACTN2", "value": 0.2},
{"source": "POLA1", "target": "RFC2", "value": 0.2},
{"source": "POLA1", "target": "MCM5", "value": 0.2},
{"source": "POLA1", "target": "MCM6", "value": 0.2},
{"source": "POLA1", "target": "SMC2", "value": 0.2},
{"source": "POLA1", "target": "MCM7", "value": 0.2},
{"source": "POLA1", "target": "POLE", "value": 0.2},
{"source": "POLA1", "target": "SMC1A", "value": 0.2},
{"source": "POLA1", "target": "RPA2", "value": 0.2},
{"source": "POLA1", "target": "ORC4", "value": 0.2},
{"source": "POLA1", "target": "TP53BP1", "value": 0.2},
{"source": "POLA1", "target": "DUT", "value": 0.2},
{"source": "POLA1", "target": "TOP2A", "value": 0.2},
{"source": "HSPA1A", "target": "STUB1", "value": 0.2},
{"source": "HSPA1A", "target": "HSPB1", "value": 0.2},
{"source": "HSPA1A", "target": "DNAJB1", "value": 0.2},
{"source": "HSPA1A", "target": "HSPBP1", "value": 0.2},
{"source": "HSPA1A", "target": "DNAJA3", "value": 0.2},
{"source": "HSPA1A", "target": "GRPEL1", "value": 0.2},
{"source": "HSPA1A", "target": "HSPA9", "value": 0.2},
{"source": "HSPA1A", "target": "HSP90B1", "value": 0.2},
{"source": "HSPA1A", "target": "HSPA4", "value": 0.2},
{"source": "HSPA1A", "target": "DNAJA2", "value": 0.2},
{"source": "HSPA1A", "target": "HSPH1", "value": 0.2},
{"source": "HSPA1A", "target": "HSP90AA1", "value": 0.2},
{"source": "HSPA1A", "target": "STIP1", "value": 0.2},
{"source": "HSPA1A", "target": "TPR", "value": 0.2},
{"source": "HSPA1A", "target": "DNAJB4", "value": 0.2},
{"source": "HSPA1A", "target": "HSP90AB1", "value": 0.2},
{"source": "HSPA1A", "target": "DNAJA1", "value": 0.2},
{"source": "HSPA1A", "target": "DUT", "value": 0.2},
{"source": "HSPA1A", "target": "UBC", "value": 0.2},
{"source": "PFKM", "target": "TPI1", "value": 0.2},
{"source": "PFKM", "target": "ENO1", "value": 0.2},
{"source": "USO1", "target": "ARF5", "value": 0.2},
{"source": "USO1", "target": "GOSR1", "value": 0.2},
{"source": "USO1", "target": "COPB1", "value": 0.2},
{"source": "USO1", "target": "DYNC1LI2", "value": 0.2},
{"source": "USO1", "target": "COG3", "value": 0.2},
{"source": "USO1", "target": "COPE", "value": 0.2},
{"source": "USO1", "target": "NAPA", "value": 0.2},
{"source": "USO1", "target": "ARCN1", "value": 0.2},
{"source": "USO1", "target": "STX5", "value": 0.2},
{"source": "USO1", "target": "COG1", "value": 0.2},
{"source": "USO1", "target": "TMED10", "value": 0.2},
{"source": "USO1", "target": "ARF4", "value": 0.2},
{"source": "USO1", "target": "CLTB", "value": 0.2},
{"source": "USO1", "target": "COPG1", "value": 0.2},
{"source": "USO1", "target": "COPB2", "value": 0.2},
{"source": "USO1", "target": "TMED9", "value": 0.2},
{"source": "USO1", "target": "SEC24C", "value": 0.2},
{"source": "USO1", "target": "DYNC1H1", "value": 0.2},
{"source": "USO1", "target": "DCTN1", "value": 0.2},
{"source": "USO1", "target": "COG2", "value": 0.2},
{"source": "USO1", "target": "ACTR1A", "value": 0.2},
{"source": "USO1", "target": "BET1L", "value": 0.2},
{"source": "USO1", "target": "RAB1A", "value": 0.2},
{"source": "USO1", "target": "COPG2", "value": 0.2},
{"source": "USO1", "target": "SPTBN2", "value": 0.2},
{"source": "USO1", "target": "COPZ1", "value": 0.2},
{"source": "CD81", "target": "SCARB1", "value": 0.2},
{"source": "CD81", "target": "ITGB1", "value": 0.2},
{"source": "CD81", "target": "CLDN1", "value": 0.2},
{"source": "CD81", "target": "OCLN", "value": 0.2},
{"source": "TRIM22", "target": "HLA-DRB1", "value": 0.2},
{"source": "TRIM22", "target": "B2M", "value": 0.2},
{"source": "TRIM22", "target": "HLA-B", "value": 0.2},
{"source": "ACTR1A", "target": "ARF5", "value": 0.2},
{"source": "ACTR1A", "target": "GOSR1", "value": 0.2},
{"source": "ACTR1A", "target": "COPB1", "value": 0.2},
{"source": "ACTR1A", "target": "DYNC1LI2", "value": 0.2},
{"source": "ACTR1A", "target": "COG3", "value": 0.2},
{"source": "ACTR1A", "target": "COPE", "value": 0.2},
{"source": "ACTR1A", "target": "ARCN1", "value": 0.2},
{"source": "ACTR1A", "target": "YWHAE", "value": 0.2},
{"source": "ACTR1A", "target": "CEP72", "value": 0.2},
{"source": "ACTR1A", "target": "RAB7A", "value": 0.2},
{"source": "ACTR1A", "target": "STX5", "value": 0.2},
{"source": "ACTR1A", "target": "COG1", "value": 0.2},
{"source": "ACTR1A", "target": "RAB8A", "value": 0.2},
{"source": "ACTR1A", "target": "TMED10", "value": 0.2},
{"source": "ACTR1A", "target": "ARF4", "value": 0.2},
{"source": "ACTR1A", "target": "KIF5B", "value": 0.2},
{"source": "ACTR1A", "target": "MCM7", "value": 0.2},
{"source": "ACTR1A", "target": "PPP2R1A", "value": 0.2},
{"source": "ACTR1A", "target": "COPG1", "value": 0.2},
{"source": "ACTR1A", "target": "COPB2", "value": 0.2},
{"source": "ACTR1A", "target": "TMED9", "value": 0.2},
{"source": "ACTR1A", "target": "HSP90AA1", "value": 0.2},
{"source": "ACTR1A", "target": "TUBB4B", "value": 0.2},
{"source": "ACTR1A", "target": "OFD1", "value": 0.2},
{"source": "ACTR1A", "target": "DYNC1H1", "value": 0.2},
{"source": "ACTR1A", "target": "HLA-DRB1", "value": 0.2},
{"source": "ACTR1A", "target": "DCTN1", "value": 0.2},
{"source": "ACTR1A", "target": "COG2", "value": 0.2},
{"source": "ACTR1A", "target": "MAPRE1", "value": 0.2},
{"source": "ACTR1A", "target": "COPG2", "value": 0.2},
{"source": "ACTR1A", "target": "HAUS6", "value": 0.2},
{"source": "ACTR1A", "target": "CKAP5", "value": 0.2},
{"source": "ACTR1A", "target": "COPZ1", "value": 0.2},
{"source": "ACTR1A", "target": "TCTN3", "value": 0.2},
{"source": "ACTR1A", "target": "HLA-DMB", "value": 0.2},
{"source": "ACTR1A", "target": "PAFAH1B1", "value": 0.2},
{"source": "ACTR1A", "target": "NEDD1", "value": 0.2},
{"source": "ACTR1A", "target": "SPTBN2", "value": 0.2},
{"source": "ACTR1A", "target": "HSP90AB1", "value": 0.2},
{"source": "ACTR1A", "target": "RAB1A", "value": 0.2},
{"source": "ACTR1A", "target": "MKS1", "value": 0.2},
{"source": "ACTR1A", "target": "BET1L", "value": 0.2},
{"source": "MAPRE1", "target": "ZW10", "value": 0.2},
{"source": "MAPRE1", "target": "DYNC1LI2", "value": 0.2},
{"source": "MAPRE1", "target": "PPP2R5A", "value": 0.2},
{"source": "MAPRE1", "target": "YWHAE", "value": 0.2},
{"source": "MAPRE1", "target": "CEP72", "value": 0.2},
{"source": "MAPRE1", "target": "RAB8A", "value": 0.2},
{"source": "MAPRE1", "target": "SMC1A", "value": 0.2},
{"source": "MAPRE1", "target": "PLEC1", "value": 0.2},
{"source": "MAPRE1", "target": "PPP2R1A", "value": 0.2},
{"source": "MAPRE1", "target": "HSP90AA1", "value": 0.2},
{"source": "MAPRE1", "target": "TUBB4B", "value": 0.2},
{"source": "MAPRE1", "target": "PPP1CC", "value": 0.2},
{"source": "MAPRE1", "target": "OFD1", "value": 0.2},
{"source": "MAPRE1", "target": "DYNC1H1", "value": 0.2},
{"source": "MAPRE1", "target": "DCTN1", "value": 0.2},
{"source": "MAPRE1", "target": "BUB3", "value": 0.2},
{"source": "MAPRE1", "target": "HAUS6", "value": 0.2},
{"source": "MAPRE1", "target": "MKS1", "value": 0.2},
{"source": "MAPRE1", "target": "CKAP5", "value": 0.2},
{"source": "MAPRE1", "target": "TCTN3", "value": 0.2},
{"source": "MAPRE1", "target": "NEDD1", "value": 0.2},
{"source": "MAPRE1", "target": "MAD1L1", "value": 0.2},
{"source": "MAPRE1", "target": "PAFAH1B1", "value": 0.2},
{"source": "MAPRE1", "target": "RANGAP1", "value": 0.2},
{"source": "MAD1L1", "target": "ZW10", "value": 0.2},
{"source": "MAD1L1", "target": "DYNC1LI2", "value": 0.2},
{"source": "MAD1L1", "target": "PPP2R5A", "value": 0.2},
{"source": "MAD1L1", "target": "SMC1A", "value": 0.2},
{"source": "MAD1L1", "target": "PPP2R1A", "value": 0.2},
{"source": "MAD1L1", "target": "PPP1CC", "value": 0.2},
{"source": "MAD1L1", "target": "DYNC1H1", "value": 0.2},
{"source": "MAD1L1", "target": "TPR", "value": 0.2},
{"source": "MAD1L1", "target": "BUB3", "value": 0.2},
{"source": "MAD1L1", "target": "PAFAH1B1", "value": 0.2},
{"source": "MAD1L1", "target": "CKAP5", "value": 0.2},
{"source": "MAD1L1", "target": "RANGAP1", "value": 0.2},
{"source": "TBCA", "target": "TUBB6", "value": 0.2},
{"source": "TBCA", "target": "TUBB4B", "value": 0.2},
{"source": "TBCA", "target": "TUBA1B", "value": 0.2},
{"source": "TBCA", "target": "TBCD", "value": 0.2},
{"source": "RPL23", "target": "PSMC4", "value": 0.2},
{"source": "RPL23", "target": "EEF1A2", "value": 0.2},
{"source": "RPL23", "target": "POLR2C", "value": 0.2},
{"source": "RPL23", "target": "RPL18A", "value": 0.2},
{"source": "RPL23", "target": "RPS12", "value": 0.2},
{"source": "RPL23", "target": "RPS16", "value": 0.2},
{"source": "RPL23", "target": "HSPBP1", "value": 0.2},
{"source": "RPL23", "target": "EIF2S1", "value": 0.2},
{"source": "RPL23", "target": "CCT7", "value": 0.2},
{"source": "RPL23", "target": "PSMC1", "value": 0.2},
{"source": "RPL23", "target": "EXOSC7", "value": 0.2},
{"source": "RPL23", "target": "RPS3", "value": 0.2},
{"source": "RPL23", "target": "EIF5B", "value": 0.2},
{"source": "RPL23", "target": "RPS23", "value": 0.2},
{"source": "RPL23", "target": "RPL10L", "value": 0.2},
{"source": "RPL23", "target": "EEF2", "value": 0.2},
{"source": "RPL23", "target": "SRP68", "value": 0.2},
{"source": "RPL23", "target": "RPS15A", "value": 0.2},
{"source": "RPL23", "target": "RPLP2", "value": 0.2},
{"source": "RPL23", "target": "PLEC1", "value": 0.2},
{"source": "RPL23", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL23", "target": "RPS27L", "value": 0.2},
{"source": "RPL23", "target": "RPS7", "value": 0.2},
{"source": "RPL23", "target": "RPS21", "value": 0.2},
{"source": "RPL23", "target": "RPL3", "value": 0.2},
{"source": "RPL23", "target": "RPL21", "value": 0.2},
{"source": "RPL23", "target": "RPSA", "value": 0.2},
{"source": "RPL23", "target": "RPS26", "value": 0.2},
{"source": "RPL23", "target": "EIF3B", "value": 0.2},
{"source": "RPL23", "target": "RPL12", "value": 0.2},
{"source": "RPL23", "target": "PDCD11", "value": 0.2},
{"source": "RPL23", "target": "RPS6", "value": 0.2},
{"source": "RPL23", "target": "EXOSC8", "value": 0.2},
{"source": "RPL23", "target": "RPS8", "value": 0.2},
{"source": "RPL23", "target": "RPL29", "value": 0.2},
{"source": "RPL23", "target": "RPL35A", "value": 0.2},
{"source": "RPL23", "target": "WDR18", "value": 0.2},
{"source": "RPL23", "target": "RPL27", "value": 0.2},
{"source": "RPL23", "target": "RPL28", "value": 0.2},
{"source": "RPL23", "target": "EIF3M", "value": 0.2},
{"source": "WDR72", "target": "KLK4", "value": 0.2},
{"source": "SNW1", "target": "POLR2C", "value": 0.2},
{"source": "SNW1", "target": "DDX5", "value": 0.2},
{"source": "SNW1", "target": "PRPF19", "value": 0.2},
{"source": "SNW1", "target": "RUNX3", "value": 0.2},
{"source": "SNW1", "target": "CPSF2", "value": 0.2},
{"source": "SNW1", "target": "POLR2A", "value": 0.2},
{"source": "SNW1", "target": "GTF2F2", "value": 0.2},
{"source": "SNW1", "target": "XAB2", "value": 0.2},
{"source": "SNW1", "target": "CKAP5", "value": 0.2},
{"source": "SNW1", "target": "RBPJ", "value": 0.2},
{"source": "SNW1", "target": "HDAC1", "value": 0.2},
{"source": "SNW1", "target": "SF1", "value": 0.2},
{"source": "DDB2", "target": "RFC2", "value": 0.2},
{"source": "DDB2", "target": "DDB1", "value": 0.2},
{"source": "DDB2", "target": "POLE", "value": 0.2},
{"source": "DDB2", "target": "RPA2", "value": 0.2},
{"source": "DDB2", "target": "UBC", "value": 0.2},
{"source": "DDB2", "target": "YY1", "value": 0.2},
{"source": "PTPRA", "target": "SRC", "value": 0.2},
{"source": "PTPRA", "target": "SPTBN2", "value": 0.2},
{"source": "TSPAN14", "target": "MLEC", "value": 0.2},
{"source": "TSPAN14", "target": "COPB1", "value": 0.2},
{"source": "TSPAN14", "target": "CYBA", "value": 0.2},
{"source": "TSPAN14", "target": "HVCN1", "value": 0.2},
{"source": "TSPAN14", "target": "CD47", "value": 0.2},
{"source": "TSPAN14", "target": "RAB14", "value": 0.2},
{"source": "TSPAN14", "target": "UBR4", "value": 0.2},
{"source": "TSPAN14", "target": "KCNAB2", "value": 0.2},
{"source": "TSPAN14", "target": "ATP6AP2", "value": 0.2},
{"source": "TSPAN14", "target": "MOSPD2", "value": 0.2},
{"source": "TSPAN14", "target": "ITGB2", "value": 0.2},
{"source": "TSPAN14", "target": "HMOX2", "value": 0.2},
{"source": "TSPAN14", "target": "PTPRJ", "value": 0.2},
{"source": "TSPAN14", "target": "ANO6", "value": 0.2},
{"source": "COG3", "target": "GOSR1", "value": 0.2},
{"source": "COG3", "target": "VAMP4", "value": 0.2},
{"source": "COG3", "target": "COPB1", "value": 0.2},
{"source": "COG3", "target": "DYNC1LI2", "value": 0.2},
{"source": "COG3", "target": "STX6", "value": 0.2},
{"source": "COG3", "target": "COG2", "value": 0.2},
{"source": "COG3", "target": "TGOLN2", "value": 0.2},
{"source": "COG3", "target": "NAPA", "value": 0.2},
{"source": "COG3", "target": "COPB2", "value": 0.2},
{"source": "COG3", "target": "COPZ1", "value": 0.2},
{"source": "COG3", "target": "ARCN1", "value": 0.2},
{"source": "COG3", "target": "COPG1", "value": 0.2},
{"source": "COG3", "target": "DCTN1", "value": 0.2},
{"source": "COG3", "target": "RAB1A", "value": 0.2},
{"source": "COG3", "target": "COG1", "value": 0.2},
{"source": "COG3", "target": "TMED9", "value": 0.2},
{"source": "COG3", "target": "SPTBN2", "value": 0.2},
{"source": "COG3", "target": "COPE", "value": 0.2},
{"source": "COG3", "target": "TMED10", "value": 0.2},
{"source": "COG3", "target": "DYNC1H1", "value": 0.2},
{"source": "COG3", "target": "STX5", "value": 0.2},
{"source": "COG3", "target": "COPG2", "value": 0.2},
{"source": "COG3", "target": "BET1L", "value": 0.2},
{"source": "PSMA4", "target": "PSMD11", "value": 0.2},
{"source": "PSMA4", "target": "PSMB3", "value": 0.2},
{"source": "PSMA4", "target": "PSMA8", "value": 0.2},
{"source": "PSMA4", "target": "PSMB4", "value": 0.2},
{"source": "PSMA4", "target": "NFKB1", "value": 0.2},
{"source": "PSMA4", "target": "RUNX3", "value": 0.2},
{"source": "PSMA4", "target": "NF1", "value": 0.2},
{"source": "PSMA4", "target": "BUB3", "value": 0.2},
{"source": "PSMA4", "target": "PSMD1", "value": 0.2},
{"source": "PSMA4", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMA4", "target": "PSMC1", "value": 0.2},
{"source": "PSMA4", "target": "PSMC4", "value": 0.2},
{"source": "PSMA4", "target": "PSMC6", "value": 0.2},
{"source": "PSMA4", "target": "CCT7", "value": 0.2},
{"source": "PSMA4", "target": "PSMA2", "value": 0.2},
{"source": "PSMA4", "target": "PSME1", "value": 0.2},
{"source": "PSMA4", "target": "WWP1", "value": 0.2},
{"source": "PSMA4", "target": "PSMB8", "value": 0.2},
{"source": "PSMA4", "target": "PSMA6", "value": 0.2},
{"source": "PSMA4", "target": "PSMB1", "value": 0.2},
{"source": "PSMA4", "target": "HIVEP3", "value": 0.2},
{"source": "PSMA4", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMA4", "target": "PSME2", "value": 0.2},
{"source": "PSMA4", "target": "PSMD4", "value": 0.2},
{"source": "PSMA4", "target": "PSMB5", "value": 0.2},
{"source": "PSMA4", "target": "PSMA7", "value": 0.2},
{"source": "PSMA4", "target": "PSMD8", "value": 0.2},
{"source": "PSMA4", "target": "PSMD7", "value": 0.2},
{"source": "PSMA4", "target": "UBC", "value": 0.2},
{"source": "PSMA4", "target": "PSMD10", "value": 0.2},
{"source": "PSMA4", "target": "PSMD12", "value": 0.2},
{"source": "CCT7", "target": "PSMC4", "value": 0.2},
{"source": "CCT7", "target": "STUB1", "value": 0.2},
{"source": "CCT7", "target": "RPL18A", "value": 0.2},
{"source": "CCT7", "target": "PSMA2", "value": 0.2},
{"source": "CCT7", "target": "RPS12", "value": 0.2},
{"source": "CCT7", "target": "RPS16", "value": 0.2},
{"source": "CCT7", "target": "EIF2S1", "value": 0.2},
{"source": "CCT7", "target": "RPS6", "value": 0.2},
{"source": "CCT7", "target": "PSMD1", "value": 0.2},
{"source": "CCT7", "target": "RPS26", "value": 0.2},
{"source": "CCT7", "target": "STIP1", "value": 0.2},
{"source": "CCT7", "target": "HSPA4", "value": 0.2},
{"source": "CCT7", "target": "RPL28", "value": 0.2},
{"source": "CCT7", "target": "CCT3", "value": 0.2},
{"source": "CCT7", "target": "HSP90AA1", "value": 0.2},
{"source": "CCT7", "target": "PSMD11", "value": 0.2},
{"source": "CCT7", "target": "HSPA9", "value": 0.2},
{"source": "CCT7", "target": "RPL12", "value": 0.2},
{"source": "CCT7", "target": "GBA", "value": 0.2},
{"source": "CCT7", "target": "RPL35A", "value": 0.2},
{"source": "CCT7", "target": "EEF2", "value": 0.2},
{"source": "CCT7", "target": "TUBA1B", "value": 0.2},
{"source": "CCT7", "target": "PSMC1", "value": 0.2},
{"source": "CCT7", "target": "RPS7", "value": 0.2},
{"source": "CCT7", "target": "TUBB6", "value": 0.2},
{"source": "CCT7", "target": "RPS3", "value": 0.2},
{"source": "CCT7", "target": "HSP90AB1", "value": 0.2},
{"source": "CCT7", "target": "EIF3B", "value": 0.2},
{"source": "CCT7", "target": "RPL3", "value": 0.2},
{"source": "CCT7", "target": "KPNB1", "value": 0.2},
{"source": "CCT7", "target": "TUBB4B", "value": 0.2},
{"source": "CCT7", "target": "RPSA", "value": 0.2},
{"source": "CCT7", "target": "HSPH1", "value": 0.2},
{"source": "CCT7", "target": "RPL27", "value": 0.2},
{"source": "CCT7", "target": "RPL21", "value": 0.2},
{"source": "CCT7", "target": "RPS23", "value": 0.2},
{"source": "CCT7", "target": "PSMA7", "value": 0.2},
{"source": "CCT7", "target": "RPS8", "value": 0.2},
{"source": "CCT7", "target": "PSMA6", "value": 0.2},
{"source": "CCT7", "target": "RPS15A", "value": 0.2},
{"source": "RPA2", "target": "RFC2", "value": 0.2},
{"source": "RPA2", "target": "MCM5", "value": 0.2},
{"source": "RPA2", "target": "POLR2C", "value": 0.2},
{"source": "RPA2", "target": "PRPF19", "value": 0.2},
{"source": "RPA2", "target": "MCM6", "value": 0.2},
{"source": "RPA2", "target": "ATM", "value": 0.2},
{"source": "RPA2", "target": "DDB1", "value": 0.2},
{"source": "RPA2", "target": "MCM7", "value": 0.2},
{"source": "RPA2", "target": "WDR48", "value": 0.2},
{"source": "RPA2", "target": "POLE", "value": 0.2},
{"source": "RPA2", "target": "PPP4R2", "value": 0.2},
{"source": "RPA2", "target": "XAB2", "value": 0.2},
{"source": "RPA2", "target": "ORC4", "value": 0.2},
{"source": "RPA2", "target": "RAD50", "value": 0.2},
{"source": "RPA2", "target": "UBC", "value": 0.2},
{"source": "RPA2", "target": "TP53BP1", "value": 0.2},
{"source": "RPA2", "target": "DUT", "value": 0.2},
{"source": "RPA2", "target": "POLR2A", "value": 0.2},
{"source": "ITGB2", "target": "ITGA3", "value": 0.2},
{"source": "ITGB2", "target": "NFKB1", "value": 0.2},
{"source": "ITGB2", "target": "MLEC", "value": 0.2},
{"source": "ITGB2", "target": "APOB", "value": 0.2},
{"source": "ITGB2", "target": "COPB1", "value": 0.2},
{"source": "ITGB2", "target": "CYBA", "value": 0.2},
{"source": "ITGB2", "target": "ITGA5", "value": 0.2},
{"source": "ITGB2", "target": "ITGB5", "value": 0.2},
{"source": "ITGB2", "target": "HVCN1", "value": 0.2},
{"source": "ITGB2", "target": "CD47", "value": 0.2},
{"source": "ITGB2", "target": "SRC", "value": 0.2},
{"source": "ITGB2", "target": "RAB14", "value": 0.2},
{"source": "ITGB2", "target": "UBR4", "value": 0.2},
{"source": "ITGB2", "target": "KCNAB2", "value": 0.2},
{"source": "ITGB2", "target": "ATP6AP2", "value": 0.2},
{"source": "ITGB2", "target": "MOSPD2", "value": 0.2},
{"source": "ITGB2", "target": "ITGB1", "value": 0.2},
{"source": "ITGB2", "target": "RHOA", "value": 0.2},
{"source": "ITGB2", "target": "HMOX2", "value": 0.2},
{"source": "ITGB2", "target": "ANO6", "value": 0.2},
{"source": "ITGB2", "target": "PTPRJ", "value": 0.2},
{"source": "ITGB2", "target": "LYN", "value": 0.2},
{"source": "COPE", "target": "ARF5", "value": 0.2},
{"source": "COPE", "target": "ZW10", "value": 0.2},
{"source": "COPE", "target": "GOSR1", "value": 0.2},
{"source": "COPE", "target": "COPB1", "value": 0.2},
{"source": "COPE", "target": "DYNC1LI2", "value": 0.2},
{"source": "COPE", "target": "SEC24C", "value": 0.2},
{"source": "COPE", "target": "COPB2", "value": 0.2},
{"source": "COPE", "target": "COPG1", "value": 0.2},
{"source": "COPE", "target": "SPTBN2", "value": 0.2},
{"source": "COPE", "target": "ARCN1", "value": 0.2},
{"source": "COPE", "target": "TMED10", "value": 0.2},
{"source": "COPE", "target": "DYNC1H1", "value": 0.2},
{"source": "COPE", "target": "PSMB3", "value": 0.2},
{"source": "COPE", "target": "KIF5B", "value": 0.2},
{"source": "COPE", "target": "DCTN1", "value": 0.2},
{"source": "COPE", "target": "STX5", "value": 0.2},
{"source": "COPE", "target": "AP1S1", "value": 0.2},
{"source": "COPE", "target": "BET1L", "value": 0.2},
{"source": "COPE", "target": "RAB1A", "value": 0.2},
{"source": "COPE", "target": "ARF4", "value": 0.2},
{"source": "COPE", "target": "COPG2", "value": 0.2},
{"source": "COPE", "target": "NAPA", "value": 0.2},
{"source": "COPE", "target": "COPZ1", "value": 0.2},
{"source": "COPE", "target": "COG2", "value": 0.2},
{"source": "COPE", "target": "TMED9", "value": 0.2},
{"source": "COPE", "target": "COG1", "value": 0.2},
{"source": "TNNC2", "target": "MYH1", "value": 0.2},
{"source": "TNNC2", "target": "MYH2", "value": 0.2},
{"source": "TNNC2", "target": "MYH4", "value": 0.2},
{"source": "TNNC2", "target": "TNNT3", "value": 0.2},
{"source": "TNNC2", "target": "TMOD3", "value": 0.2},
{"source": "TNNC2", "target": "MYLPF", "value": 0.2},
{"source": "TNNC2", "target": "TNNI2", "value": 0.2},
{"source": "TNNC2", "target": "ACTN2", "value": 0.2},
{"source": "TNNC2", "target": "MYH3", "value": 0.2},
{"source": "TNNC2", "target": "SRL", "value": 0.2},
{"source": "TNNC2", "target": "MYL3", "value": 0.2},
{"source": "TNNC2", "target": "MYBPC1", "value": 0.2},
{"source": "TNNC2", "target": "DES", "value": 0.2},
{"source": "TNNC2", "target": "TPM2", "value": 0.2},
{"source": "TNNC2", "target": "TTN", "value": 0.2},
{"source": "TNNC2", "target": "MYH8", "value": 0.2},
{"source": "ARPC2", "target": "APOB", "value": 0.2},
{"source": "ARPC2", "target": "VAMP4", "value": 0.2},
{"source": "ARPC2", "target": "MYH2", "value": 0.2},
{"source": "ARPC2", "target": "NCKAP1L", "value": 0.2},
{"source": "ARPC2", "target": "TGOLN2", "value": 0.2},
{"source": "ARPC2", "target": "TFRC", "value": 0.2},
{"source": "ARPC2", "target": "BAIAP2", "value": 0.2},
{"source": "ARPC2", "target": "DBNL", "value": 0.2},
{"source": "ARPC2", "target": "LDLRAP1", "value": 0.2},
{"source": "ARPC2", "target": "UBC", "value": 0.2},
{"source": "ARPC2", "target": "ARPC1B", "value": 0.2},
{"source": "ARPC2", "target": "WIPF1", "value": 0.2},
{"source": "ARPC2", "target": "LDLR", "value": 0.2},
{"source": "ARPC2", "target": "FNBP1", "value": 0.2},
{"source": "ARPC2", "target": "CLTB", "value": 0.2},
{"source": "ARPC2", "target": "PSMA7", "value": 0.2},
{"source": "ARPC2", "target": "MYO5A", "value": 0.2},
{"source": "TNNI2", "target": "CKM", "value": 0.2},
{"source": "TNNI2", "target": "MYH1", "value": 0.2},
{"source": "TNNI2", "target": "MYH4", "value": 0.2},
{"source": "TNNI2", "target": "TNNT3", "value": 0.2},
{"source": "TNNI2", "target": "TMOD3", "value": 0.2},
{"source": "TNNI2", "target": "MYLPF", "value": 0.2},
{"source": "TNNI2", "target": "MYOZ1", "value": 0.2},
{"source": "TNNI2", "target": "DES", "value": 0.2},
{"source": "TNNI2", "target": "TPM2", "value": 0.2},
{"source": "TNNI2", "target": "MYH3", "value": 0.2},
{"source": "TNNI2", "target": "MYL3", "value": 0.2},
{"source": "TNNI2", "target": "MYBPC1", "value": 0.2},
{"source": "TNNI2", "target": "MYH8", "value": 0.2},
{"source": "TNNI2", "target": "ACTN2", "value": 0.2},
{"source": "TNNI2", "target": "TTN", "value": 0.2},
{"source": "TFRC", "target": "APOB", "value": 0.2},
{"source": "TFRC", "target": "VAMP4", "value": 0.2},
{"source": "TFRC", "target": "NAPA", "value": 0.2},
{"source": "TFRC", "target": "CLTB", "value": 0.2},
{"source": "TFRC", "target": "AP1S1", "value": 0.2},
{"source": "TFRC", "target": "TGOLN2", "value": 0.2},
{"source": "TFRC", "target": "FNBP1", "value": 0.2},
{"source": "TFRC", "target": "LDLRAP1", "value": 0.2},
{"source": "TFRC", "target": "LDLR", "value": 0.2},
{"source": "TFRC", "target": "B2M", "value": 0.2},
{"source": "TFRC", "target": "UBC", "value": 0.2},
{"source": "CD47", "target": "MLEC", "value": 0.2},
{"source": "CD47", "target": "COPB1", "value": 0.2},
{"source": "CD47", "target": "CYBA", "value": 0.2},
{"source": "CD47", "target": "HVCN1", "value": 0.2},
{"source": "CD47", "target": "ATP6AP2", "value": 0.2},
{"source": "CD47", "target": "RAB14", "value": 0.2},
{"source": "CD47", "target": "UBR4", "value": 0.2},
{"source": "CD47", "target": "PTPRJ", "value": 0.2},
{"source": "CD47", "target": "KCNAB2", "value": 0.2},
{"source": "CD47", "target": "ANO6", "value": 0.2},
{"source": "CD47", "target": "HMOX2", "value": 0.2},
{"source": "CD47", "target": "MOSPD2", "value": 0.2},
{"source": "FBXL4", "target": "STUB1", "value": 0.2},
{"source": "FBXL4", "target": "UBE3A", "value": 0.2},
{"source": "FBXL4", "target": "MGRN1", "value": 0.2},
{"source": "FBXL4", "target": "UBE3C", "value": 0.2},
{"source": "FBXL4", "target": "HUWE1", "value": 0.2},
{"source": "FBXL4", "target": "RNF220", "value": 0.2},
{"source": "FBXL4", "target": "PARK2", "value": 0.2},
{"source": "FBXL4", "target": "UBR2", "value": 0.2},
{"source": "FBXL4", "target": "HERC1", "value": 0.2},
{"source": "FBXL4", "target": "UBC", "value": 0.2},
{"source": "FBXL4", "target": "UFL1", "value": 0.2},
{"source": "FBXL4", "target": "NEDD4", "value": 0.2},
{"source": "FBXL4", "target": "RNF130", "value": 0.2},
{"source": "FBXL4", "target": "WWP1", "value": 0.2},
{"source": "FBXL4", "target": "UBR4", "value": 0.2},
{"source": "PIGQ", "target": "PIGO", "value": 0.2},
{"source": "PIGQ", "target": "MPDU1", "value": 0.2},
{"source": "SRL", "target": "TNNT3", "value": 0.2},
{"source": "SRL", "target": "ATP2A2", "value": 0.2},
{"source": "BYSL", "target": "DDX5", "value": 0.2},
{"source": "BYSL", "target": "RPS12", "value": 0.2},
{"source": "BYSL", "target": "NIP7", "value": 0.2},
{"source": "BYSL", "target": "RRP9", "value": 0.2},
{"source": "BYSL", "target": "RPS8", "value": 0.2},
{"source": "BYSL", "target": "WDR18", "value": 0.2},
{"source": "BYSL", "target": "RPS15A", "value": 0.2},
{"source": "BYSL", "target": "RPS6", "value": 0.2},
{"source": "BYSL", "target": "TSR1", "value": 0.2},
{"source": "BYSL", "target": "PWP1", "value": 0.2},
{"source": "BYSL", "target": "KRI1", "value": 0.2},
{"source": "BYSL", "target": "RPS27L", "value": 0.2},
{"source": "BYSL", "target": "RBM19", "value": 0.2},
{"source": "BYSL", "target": "DDX10", "value": 0.2},
{"source": "BYSL", "target": "RPF2", "value": 0.2},
{"source": "BYSL", "target": "POLR1B", "value": 0.2},
{"source": "BYSL", "target": "NOC3L", "value": 0.2},
{"source": "BYSL", "target": "GTPBP4", "value": 0.2},
{"source": "BYSL", "target": "PDCD11", "value": 0.2},
{"source": "BYSL", "target": "DDX18", "value": 0.2},
{"source": "BYSL", "target": "RPSA", "value": 0.2},
{"source": "BYSL", "target": "RPS3", "value": 0.2},
{"source": "BYSL", "target": "RPS21", "value": 0.2},
{"source": "BYSL", "target": "RPS23", "value": 0.2},
{"source": "BYSL", "target": "RPS26", "value": 0.2},
{"source": "BYSL", "target": "RPS16", "value": 0.2},
{"source": "BYSL", "target": "RPS7", "value": 0.2},
{"source": "BYSL", "target": "TTC27", "value": 0.2},
{"source": "BYSL", "target": "WDR36", "value": 0.2},
{"source": "BYSL", "target": "NAT10", "value": 0.2},
{"source": "BYSL", "target": "EIF3B", "value": 0.2},
{"source": "PSMD8", "target": "PSMC4", "value": 0.2},
{"source": "PSMD8", "target": "PSMA2", "value": 0.2},
{"source": "PSMD8", "target": "WWP1", "value": 0.2},
{"source": "PSMD8", "target": "HAUS6", "value": 0.2},
{"source": "PSMD8", "target": "PSME1", "value": 0.2},
{"source": "PSMD8", "target": "PSMB8", "value": 0.2},
{"source": "PSMD8", "target": "PSMB3", "value": 0.2},
{"source": "PSMD8", "target": "PSMD4", "value": 0.2},
{"source": "PSMD8", "target": "PSMB1", "value": 0.2},
{"source": "PSMD8", "target": "PSMD12", "value": 0.2},
{"source": "PSMD8", "target": "PSMA7", "value": 0.2},
{"source": "PSMD8", "target": "PSMB4", "value": 0.2},
{"source": "PSMD8", "target": "PSME2", "value": 0.2},
{"source": "PSMD8", "target": "RUNX3", "value": 0.2},
{"source": "PSMD8", "target": "PSMD10", "value": 0.2},
{"source": "PSMD8", "target": "NF1", "value": 0.2},
{"source": "PSMD8", "target": "PSMC1", "value": 0.2},
{"source": "PSMD8", "target": "UBC", "value": 0.2},
{"source": "PSMD8", "target": "PSMD7", "value": 0.2},
{"source": "PSMD8", "target": "PSMB5", "value": 0.2},
{"source": "PSMD8", "target": "BUB3", "value": 0.2},
{"source": "PSMD8", "target": "NFKB1", "value": 0.2},
{"source": "PSMD8", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD8", "target": "HIVEP3", "value": 0.2},
{"source": "PSMD8", "target": "PSMC6", "value": 0.2},
{"source": "PSMD8", "target": "PSMA8", "value": 0.2},
{"source": "PSMD8", "target": "PSMD11", "value": 0.2},
{"source": "PSMD8", "target": "PSMA6", "value": 0.2},
{"source": "PSMD8", "target": "PSMD1", "value": 0.2},
{"source": "PSMD8", "target": "PPP2R5A", "value": 0.2},
{"source": "TAPBP", "target": "CANX", "value": 0.2},
{"source": "TAPBP", "target": "STX4", "value": 0.2},
{"source": "TAPBP", "target": "PSMB8", "value": 0.2},
{"source": "TAPBP", "target": "HLA-B", "value": 0.2},
{"source": "TAPBP", "target": "B2M", "value": 0.2},
{"source": "EXOSC8", "target": "RPL18A", "value": 0.2},
{"source": "EXOSC8", "target": "RRP9", "value": 0.2},
{"source": "EXOSC8", "target": "NIP7", "value": 0.2},
{"source": "EXOSC8", "target": "EXOSC7", "value": 0.2},
{"source": "EXOSC8", "target": "RPL10L", "value": 0.2},
{"source": "EXOSC8", "target": "RPLP2", "value": 0.2},
{"source": "EXOSC8", "target": "RPS7", "value": 0.2},
{"source": "EXOSC8", "target": "RPL3", "value": 0.2},
{"source": "EXOSC8", "target": "RPL21", "value": 0.2},
{"source": "EXOSC8", "target": "RPL12", "value": 0.2},
{"source": "EXOSC8", "target": "PDCD11", "value": 0.2},
{"source": "EXOSC8", "target": "RPS6", "value": 0.2},
{"source": "EXOSC8", "target": "RPL29", "value": 0.2},
{"source": "EXOSC8", "target": "WDR36", "value": 0.2},
{"source": "EXOSC8", "target": "WDR18", "value": 0.2},
{"source": "EXOSC8", "target": "RPL35A", "value": 0.2},
{"source": "EXOSC8", "target": "ZFP36L1", "value": 0.2},
{"source": "EXOSC8", "target": "RPL27", "value": 0.2},
{"source": "EXOSC8", "target": "RPL28", "value": 0.2},
{"source": "STX4", "target": "GOSR1", "value": 0.2},
{"source": "STX4", "target": "VAMP4", "value": 0.2},
{"source": "STX4", "target": "STX6", "value": 0.2},
{"source": "STX4", "target": "NAPA", "value": 0.2},
{"source": "STX4", "target": "RAB10", "value": 0.2},
{"source": "STX4", "target": "STX5", "value": 0.2},
{"source": "STX4", "target": "RAB8A", "value": 0.2},
{"source": "STX4", "target": "RAB14", "value": 0.2},
{"source": "STX4", "target": "BET1L", "value": 0.2},
{"source": "STX4", "target": "MYO5A", "value": 0.2},
{"source": "PRMT5", "target": "PKMYT1", "value": 0.2},
{"source": "PRMT5", "target": "SMARCA2", "value": 0.2},
{"source": "PRMT5", "target": "SMARCA4", "value": 0.2},
{"source": "PRMT5", "target": "ARID1B", "value": 0.2},
{"source": "PRMT5", "target": "HDAC1", "value": 0.2},
{"source": "PRMT5", "target": "H2AFJ", "value": 0.2},
{"source": "NF1", "target": "PSMC4", "value": 0.2},
{"source": "NF1", "target": "PSME2", "value": 0.2},
{"source": "NF1", "target": "PSMD10", "value": 0.2},
{"source": "NF1", "target": "PSMD7", "value": 0.2},
{"source": "NF1", "target": "PSMA2", "value": 0.2},
{"source": "NF1", "target": "PSMC1", "value": 0.2},
{"source": "NF1", "target": "PSMA6", "value": 0.2},
{"source": "NF1", "target": "PSMD11", "value": 0.2},
{"source": "NF1", "target": "PSMB1", "value": 0.2},
{"source": "NF1", "target": "PSMB4", "value": 0.2},
{"source": "NF1", "target": "PSMD1", "value": 0.2},
{"source": "NF1", "target": "PSMA8", "value": 0.2},
{"source": "NF1", "target": "PSMD12", "value": 0.2},
{"source": "NF1", "target": "PSMA7", "value": 0.2},
{"source": "NF1", "target": "POLR2A", "value": 0.2},
{"source": "NF1", "target": "PSMC6", "value": 0.2},
{"source": "NF1", "target": "PSMB5", "value": 0.2},
{"source": "NF1", "target": "PSMB3", "value": 0.2},
{"source": "NF1", "target": "PSME1", "value": 0.2},
{"source": "NF1", "target": "UBC", "value": 0.2},
{"source": "NF1", "target": "PSMD4", "value": 0.2},
{"source": "NF1", "target": "SMARCA4", "value": 0.2},
{"source": "NF1", "target": "PSMB8", "value": 0.2},
{"source": "GTF2F2", "target": "POLR2C", "value": 0.2},
{"source": "GTF2F2", "target": "DDX5", "value": 0.2},
{"source": "GTF2F2", "target": "PRPF19", "value": 0.2},
{"source": "GTF2F2", "target": "ATM", "value": 0.2},
{"source": "GTF2F2", "target": "CPSF2", "value": 0.2},
{"source": "GTF2F2", "target": "CCNK", "value": 0.2},
{"source": "GTF2F2", "target": "POLR2A", "value": 0.2},
{"source": "GTF2F2", "target": "INTS1", "value": 0.2},
{"source": "GTF2F2", "target": "XAB2", "value": 0.2},
{"source": "GTF2F2", "target": "INTS12", "value": 0.2},
{"source": "GTF2F2", "target": "SF1", "value": 0.2},
{"source": "LEMD3", "target": "PRPF19", "value": 0.2},
{"source": "LEMD3", "target": "LMNB1", "value": 0.2},
{"source": "HIVEP3", "target": "PSMC4", "value": 0.2},
{"source": "HIVEP3", "target": "PSME2", "value": 0.2},
{"source": "HIVEP3", "target": "PSMD10", "value": 0.2},
{"source": "HIVEP3", "target": "PSMD7", "value": 0.2},
{"source": "HIVEP3", "target": "PSMA2", "value": 0.2},
{"source": "HIVEP3", "target": "PSMC1", "value": 0.2},
{"source": "HIVEP3", "target": "PSMA6", "value": 0.2},
{"source": "HIVEP3", "target": "PSMD11", "value": 0.2},
{"source": "HIVEP3", "target": "PSMB1", "value": 0.2},
{"source": "HIVEP3", "target": "PSMB4", "value": 0.2},
{"source": "HIVEP3", "target": "PSMD1", "value": 0.2},
{"source": "HIVEP3", "target": "PSMA8", "value": 0.2},
{"source": "HIVEP3", "target": "PSMD12", "value": 0.2},
{"source": "HIVEP3", "target": "PSMB5", "value": 0.2},
{"source": "HIVEP3", "target": "PSMD4", "value": 0.2},
{"source": "HIVEP3", "target": "PSMA7", "value": 0.2},
{"source": "HIVEP3", "target": "WWP1", "value": 0.2},
{"source": "HIVEP3", "target": "UBC", "value": 0.2},
{"source": "HIVEP3", "target": "PSMC6", "value": 0.2},
{"source": "HIVEP3", "target": "PSME1", "value": 0.2},
{"source": "HIVEP3", "target": "PSMB3", "value": 0.2},
{"source": "HIVEP3", "target": "PSMB8", "value": 0.2},
{"source": "LIMK1", "target": "RFC2", "value": 0.2},
{"source": "LIMK1", "target": "HSP90AA1", "value": 0.2},
{"source": "LIMK1", "target": "HSP90AB1", "value": 0.2},
{"source": "LIMK1", "target": "BMPR1B", "value": 0.2},
{"source": "LIMK1", "target": "RHOA", "value": 0.2},
{"source": "LIMK1", "target": "PAK6", "value": 0.2},
{"source": "RAB27B", "target": "RAB10", "value": 0.2},
{"source": "RAB27B", "target": "MYO5A", "value": 0.2},
{"source": "RAB27B", "target": "RAB8A", "value": 0.2},
{"source": "RAB27B", "target": "RAB1A", "value": 0.2},
{"source": "RAB27B", "target": "RAB11B", "value": 0.2},
{"source": "RAB27B", "target": "RAB7A", "value": 0.2},
{"source": "RAB27B", "target": "RAB14", "value": 0.2},
{"source": "HINT1", "target": "SIN3A", "value": 0.2},
{"source": "HINT1", "target": "RPL27", "value": 0.2},
{"source": "HINT1", "target": "HDAC1", "value": 0.2},
{"source": "HINT1", "target": "RPS15A", "value": 0.2},
{"source": "PSMB1", "target": "PSMC4", "value": 0.2},
{"source": "PSMB1", "target": "PSME2", "value": 0.2},
{"source": "PSMB1", "target": "PSMD10", "value": 0.2},
{"source": "PSMB1", "target": "PSMD7", "value": 0.2},
{"source": "PSMB1", "target": "PSMA2", "value": 0.2},
{"source": "PSMB1", "target": "NFKB1", "value": 0.2},
{"source": "PSMB1", "target": "PSMC1", "value": 0.2},
{"source": "PSMB1", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMB1", "target": "PSMA6", "value": 0.2},
{"source": "PSMB1", "target": "PSMD11", "value": 0.2},
{"source": "PSMB1", "target": "UBC", "value": 0.2},
{"source": "PSMB1", "target": "PSMD12", "value": 0.2},
{"source": "PSMB1", "target": "PSMA8", "value": 0.2},
{"source": "PSMB1", "target": "PSMB5", "value": 0.2},
{"source": "PSMB1", "target": "PSMB3", "value": 0.2},
{"source": "PSMB1", "target": "SOD1", "value": 0.2},
{"source": "PSMB1", "target": "PSMC6", "value": 0.2},
{"source": "PSMB1", "target": "PSMB8", "value": 0.2},
{"source": "PSMB1", "target": "PSMD4", "value": 0.2},
{"source": "PSMB1", "target": "PSMB4", "value": 0.2},
{"source": "PSMB1", "target": "PSMD1", "value": 0.2},
{"source": "PSMB1", "target": "RUNX3", "value": 0.2},
{"source": "PSMB1", "target": "PSMA7", "value": 0.2},
{"source": "PSMB1", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMB1", "target": "BUB3", "value": 0.2},
{"source": "PSMB1", "target": "WWP1", "value": 0.2},
{"source": "PSMB1", "target": "PSME1", "value": 0.2},
{"source": "MYO5A", "target": "MYH2", "value": 0.2},
{"source": "MYO5A", "target": "RAB10", "value": 0.2},
{"source": "MYO5A", "target": "RAB8A", "value": 0.2},
{"source": "MYO5A", "target": "RAB11B", "value": 0.2},
{"source": "MYO5A", "target": "CALM1", "value": 0.2},
{"source": "MYO5A", "target": "RAB14", "value": 0.2},
{"source": "MYO5A", "target": "ARPC1B", "value": 0.2},
{"source": "PSMB4", "target": "PSMC4", "value": 0.2},
{"source": "PSMB4", "target": "PSME2", "value": 0.2},
{"source": "PSMB4", "target": "PSMD10", "value": 0.2},
{"source": "PSMB4", "target": "PSMD7", "value": 0.2},
{"source": "PSMB4", "target": "PSMA2", "value": 0.2},
{"source": "PSMB4", "target": "NFKB1", "value": 0.2},
{"source": "PSMB4", "target": "PRPF19", "value": 0.2},
{"source": "PSMB4", "target": "PSMC1", "value": 0.2},
{"source": "PSMB4", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMB4", "target": "PSMA6", "value": 0.2},
{"source": "PSMB4", "target": "PSMD11", "value": 0.2},
{"source": "PSMB4", "target": "SOD1", "value": 0.2},
{"source": "PSMB4", "target": "PSMB3", "value": 0.2},
{"source": "PSMB4", "target": "PSMB8", "value": 0.2},
{"source": "PSMB4", "target": "PSME1", "value": 0.2},
{"source": "PSMB4", "target": "RUNX3", "value": 0.2},
{"source": "PSMB4", "target": "PSMB5", "value": 0.2},
{"source": "PSMB4", "target": "PSMD12", "value": 0.2},
{"source": "PSMB4", "target": "PSMC6", "value": 0.2},
{"source": "PSMB4", "target": "UBC", "value": 0.2},
{"source": "PSMB4", "target": "BUB3", "value": 0.2},
{"source": "PSMB4", "target": "PSMD1", "value": 0.2},
{"source": "PSMB4", "target": "PSMA7", "value": 0.2},
{"source": "PSMB4", "target": "PSMD4", "value": 0.2},
{"source": "PSMB4", "target": "WWP1", "value": 0.2},
{"source": "PSMB4", "target": "PSMA8", "value": 0.2},
{"source": "PSMB4", "target": "PPP2R1A", "value": 0.2},
{"source": "MCM5", "target": "RFC2", "value": 0.2},
{"source": "MCM5", "target": "UBC", "value": 0.2},
{"source": "MCM5", "target": "TOP2A", "value": 0.2},
{"source": "MCM5", "target": "MCM6", "value": 0.2},
{"source": "MCM5", "target": "POLE", "value": 0.2},
{"source": "MCM5", "target": "SMC2", "value": 0.2},
{"source": "MCM5", "target": "MCM7", "value": 0.2},
{"source": "MCM5", "target": "ORC4", "value": 0.2},
{"source": "MCM5", "target": "DUT", "value": 0.2},
{"source": "LRP8", "target": "ITGA3", "value": 0.2},
{"source": "LRP8", "target": "APOB", "value": 0.2},
{"source": "LRP8", "target": "ITGB1", "value": 0.2},
{"source": "SCARB1", "target": "APOB", "value": 0.2},
{"source": "SCARB1", "target": "OCLN", "value": 0.2},
{"source": "SCARB1", "target": "CLDN1", "value": 0.2},
{"source": "SCARB1", "target": "LDLR", "value": 0.2},
{"source": "VAMP4", "target": "GOSR1", "value": 0.2},
{"source": "VAMP4", "target": "APOB", "value": 0.2},
{"source": "VAMP4", "target": "COG1", "value": 0.2},
{"source": "VAMP4", "target": "TGOLN2", "value": 0.2},
{"source": "VAMP4", "target": "STX6", "value": 0.2},
{"source": "VAMP4", "target": "NAPA", "value": 0.2},
{"source": "VAMP4", "target": "COG2", "value": 0.2},
{"source": "VAMP4", "target": "LDLRAP1", "value": 0.2},
{"source": "VAMP4", "target": "BET1L", "value": 0.2},
{"source": "VAMP4", "target": "STX5", "value": 0.2},
{"source": "VAMP4", "target": "CLTB", "value": 0.2},
{"source": "VAMP4", "target": "LDLR", "value": 0.2},
{"source": "VAMP4", "target": "FNBP1", "value": 0.2},
{"source": "VAMP4", "target": "UBC", "value": 0.2},
{"source": "YWHAE", "target": "NFKB1", "value": 0.2},
{"source": "YWHAE", "target": "NEDD1", "value": 0.2},
{"source": "YWHAE", "target": "CKAP5", "value": 0.2},
{"source": "YWHAE", "target": "PAFAH1B1", "value": 0.2},
{"source": "YWHAE", "target": "HAUS6", "value": 0.2},
{"source": "YWHAE", "target": "RAB10", "value": 0.2},
{"source": "YWHAE", "target": "MKS1", "value": 0.2},
{"source": "YWHAE", "target": "TCTN3", "value": 0.2},
{"source": "YWHAE", "target": "HSP90AA1", "value": 0.2},
{"source": "YWHAE", "target": "TUBB4B", "value": 0.2},
{"source": "YWHAE", "target": "DYNC1H1", "value": 0.2},
{"source": "YWHAE", "target": "PPP2R1A", "value": 0.2},
{"source": "YWHAE", "target": "RAB14", "value": 0.2},
{"source": "YWHAE", "target": "RAB8A", "value": 0.2},
{"source": "YWHAE", "target": "CEP72", "value": 0.2},
{"source": "YWHAE", "target": "OFD1", "value": 0.2},
{"source": "GBA", "target": "CCT3", "value": 0.2},
{"source": "GBA", "target": "PARK2", "value": 0.2},
{"source": "RPL21", "target": "PSMC4", "value": 0.2},
{"source": "RPL21", "target": "EEF1A2", "value": 0.2},
{"source": "RPL21", "target": "RPL18A", "value": 0.2},
{"source": "RPL21", "target": "RPS12", "value": 0.2},
{"source": "RPL21", "target": "RPS16", "value": 0.2},
{"source": "RPL21", "target": "EIF2S1", "value": 0.2},
{"source": "RPL21", "target": "PSMC1", "value": 0.2},
{"source": "RPL21", "target": "EXOSC7", "value": 0.2},
{"source": "RPL21", "target": "RPS3", "value": 0.2},
{"source": "RPL21", "target": "EIF5B", "value": 0.2},
{"source": "RPL21", "target": "RPS23", "value": 0.2},
{"source": "RPL21", "target": "RPL10L", "value": 0.2},
{"source": "RPL21", "target": "EEF2", "value": 0.2},
{"source": "RPL21", "target": "SRP68", "value": 0.2},
{"source": "RPL21", "target": "RPS15A", "value": 0.2},
{"source": "RPL21", "target": "RPLP2", "value": 0.2},
{"source": "RPL21", "target": "PLEC1", "value": 0.2},
{"source": "RPL21", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL21", "target": "RPS27L", "value": 0.2},
{"source": "RPL21", "target": "RPS7", "value": 0.2},
{"source": "RPL21", "target": "RPS21", "value": 0.2},
{"source": "RPL21", "target": "RPL3", "value": 0.2},
{"source": "RPL21", "target": "EIF3B", "value": 0.2},
{"source": "RPL21", "target": "WDR18", "value": 0.2},
{"source": "RPL21", "target": "RPSA", "value": 0.2},
{"source": "RPL21", "target": "RPL27", "value": 0.2},
{"source": "RPL21", "target": "RPF2", "value": 0.2},
{"source": "RPL21", "target": "RPL35A", "value": 0.2},
{"source": "RPL21", "target": "RPL29", "value": 0.2},
{"source": "RPL21", "target": "RPL28", "value": 0.2},
{"source": "RPL21", "target": "RPS6", "value": 0.2},
{"source": "RPL21", "target": "EIF3M", "value": 0.2},
{"source": "RPL21", "target": "RPL12", "value": 0.2},
{"source": "RPL21", "target": "RPS26", "value": 0.2},
{"source": "RPL21", "target": "RPS8", "value": 0.2},
{"source": "RPS16", "target": "EEF1A2", "value": 0.2},
{"source": "RPS16", "target": "RPL18A", "value": 0.2},
{"source": "RPS16", "target": "RPS12", "value": 0.2},
{"source": "RPS16", "target": "RRP9", "value": 0.2},
{"source": "RPS16", "target": "SRP68", "value": 0.2},
{"source": "RPS16", "target": "RPS26", "value": 0.2},
{"source": "RPS16", "target": "EIF3B", "value": 0.2},
{"source": "RPS16", "target": "EIF3M", "value": 0.2},
{"source": "RPS16", "target": "RPL10L", "value": 0.2},
{"source": "RPS16", "target": "RPL12", "value": 0.2},
{"source": "RPS16", "target": "RPS3", "value": 0.2},
{"source": "RPS16", "target": "RPS15A", "value": 0.2},
{"source": "RPS16", "target": "RPL35A", "value": 0.2},
{"source": "RPS16", "target": "WDR36", "value": 0.2},
{"source": "RPS16", "target": "RPS6", "value": 0.2},
{"source": "RPS16", "target": "EIF5B", "value": 0.2},
{"source": "RPS16", "target": "PSMD11", "value": 0.2},
{"source": "RPS16", "target": "RPS23", "value": 0.2},
{"source": "RPS16", "target": "RPSA", "value": 0.2},
{"source": "RPS16", "target": "RPS21", "value": 0.2},
{"source": "RPS16", "target": "PSMA7", "value": 0.2},
{"source": "RPS16", "target": "RPL3", "value": 0.2},
{"source": "RPS16", "target": "PLEC1", "value": 0.2},
{"source": "RPS16", "target": "RPL28", "value": 0.2},
{"source": "RPS16", "target": "RPS27L", "value": 0.2},
{"source": "RPS16", "target": "NAT10", "value": 0.2},
{"source": "RPS16", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS16", "target": "PDCD11", "value": 0.2},
{"source": "RPS16", "target": "RPS7", "value": 0.2},
{"source": "RPS16", "target": "EIF2S1", "value": 0.2},
{"source": "RPS16", "target": "EEF2", "value": 0.2},
{"source": "RPS16", "target": "RPL27", "value": 0.2},
{"source": "RPS16", "target": "KPNB1", "value": 0.2},
{"source": "RPS16", "target": "PSMD1", "value": 0.2},
{"source": "RPS16", "target": "TSR1", "value": 0.2},
{"source": "RPS16", "target": "RPLP2", "value": 0.2},
{"source": "RPS16", "target": "RPL29", "value": 0.2},
{"source": "RPS16", "target": "RPS8", "value": 0.2},
{"source": "RNF220", "target": "STUB1", "value": 0.2},
{"source": "RNF220", "target": "UBE3A", "value": 0.2},
{"source": "RNF220", "target": "MGRN1", "value": 0.2},
{"source": "RNF220", "target": "UBE3C", "value": 0.2},
{"source": "RNF220", "target": "HUWE1", "value": 0.2},
{"source": "RNF220", "target": "NEDD4", "value": 0.2},
{"source": "RNF220", "target": "HERC1", "value": 0.2},
{"source": "RNF220", "target": "ERI3", "value": 0.2},
{"source": "RNF220", "target": "WWP1", "value": 0.2},
{"source": "RNF220", "target": "UFL1", "value": 0.2},
{"source": "RNF220", "target": "UBC", "value": 0.2},
{"source": "RNF220", "target": "UBR4", "value": 0.2},
{"source": "RNF220", "target": "PARK2", "value": 0.2},
{"source": "RNF220", "target": "UBR2", "value": 0.2},
{"source": "RNF220", "target": "RNF130", "value": 0.2},
{"source": "BNIP3", "target": "PKMYT1", "value": 0.2},
{"source": "BNIP3", "target": "PARK2", "value": 0.2},
{"source": "MKS1", "target": "CEP72", "value": 0.2},
{"source": "MKS1", "target": "RAB8A", "value": 0.2},
{"source": "MKS1", "target": "PPP2R1A", "value": 0.2},
{"source": "MKS1", "target": "HSP90AA1", "value": 0.2},
{"source": "MKS1", "target": "TUBB4B", "value": 0.2},
{"source": "MKS1", "target": "OFD1", "value": 0.2},
{"source": "MKS1", "target": "DYNC1H1", "value": 0.2},
{"source": "MKS1", "target": "HAUS6", "value": 0.2},
{"source": "MKS1", "target": "TCTN3", "value": 0.2},
{"source": "MKS1", "target": "CKAP5", "value": 0.2},
{"source": "MKS1", "target": "NEDD1", "value": 0.2},
{"source": "MKS1", "target": "PAFAH1B1", "value": 0.2},
{"source": "ATP6AP2", "target": "CTSD", "value": 0.2},
{"source": "ATP6AP2", "target": "COPB1", "value": 0.2},
{"source": "ATP6AP2", "target": "CYBA", "value": 0.2},
{"source": "ATP6AP2", "target": "RAB14", "value": 0.2},
{"source": "ATP6AP2", "target": "UBR4", "value": 0.2},
{"source": "ATP6AP2", "target": "KCNAB2", "value": 0.2},
{"source": "ATP6AP2", "target": "ANO6", "value": 0.2},
{"source": "MYOZ1", "target": "CKM", "value": 0.2},
{"source": "MYOZ1", "target": "TNNT3", "value": 0.2},
{"source": "MYOZ1", "target": "MYLPF", "value": 0.2},
{"source": "MYOZ1", "target": "ACTN2", "value": 0.2},
{"source": "HSPA4", "target": "AHSA1", "value": 0.2},
{"source": "HSPA4", "target": "STUB1", "value": 0.2},
{"source": "HSPA4", "target": "ENO1", "value": 0.2},
{"source": "HSPA4", "target": "CANX", "value": 0.2},
{"source": "HSPA4", "target": "HSPB1", "value": 0.2},
{"source": "HSPA4", "target": "DNAJB1", "value": 0.2},
{"source": "HSPA4", "target": "HSPBP1", "value": 0.2},
{"source": "HSPA4", "target": "DNAJA3", "value": 0.2},
{"source": "HSPA4", "target": "GRPEL1", "value": 0.2},
{"source": "HSPA4", "target": "SOD1", "value": 0.2},
{"source": "HSPA4", "target": "CCT3", "value": 0.2},
{"source": "HSPA4", "target": "HSPA9", "value": 0.2},
{"source": "HSPA4", "target": "HSP90B1", "value": 0.2},
{"source": "HSPA4", "target": "DNAJA1", "value": 0.2},
{"source": "HSPA4", "target": "PSMD4", "value": 0.2},
{"source": "HSPA4", "target": "RPSA", "value": 0.2},
{"source": "HSPA4", "target": "STIP1", "value": 0.2},
{"source": "HSPA4", "target": "EEF2", "value": 0.2},
{"source": "HSPA4", "target": "DNAJA2", "value": 0.2},
{"source": "HSPA4", "target": "HSPH1", "value": 0.2},
{"source": "HSPA4", "target": "HSP90AA1", "value": 0.2},
{"source": "HSPA4", "target": "TPR", "value": 0.2},
{"source": "HSPA4", "target": "PSMA7", "value": 0.2},
{"source": "HSPA4", "target": "DNAJB4", "value": 0.2},
{"source": "HSPA4", "target": "PARK2", "value": 0.2},
{"source": "HSPA4", "target": "HSP90AB1", "value": 0.2},
{"source": "SRP68", "target": "RPL18A", "value": 0.2},
{"source": "SRP68", "target": "RPS12", "value": 0.2},
{"source": "SRP68", "target": "RPS3", "value": 0.2},
{"source": "SRP68", "target": "RPS23", "value": 0.2},
{"source": "SRP68", "target": "RPL10L", "value": 0.2},
{"source": "SRP68", "target": "RPSA", "value": 0.2},
{"source": "SRP68", "target": "RPL27", "value": 0.2},
{"source": "SRP68", "target": "RPL28", "value": 0.2},
{"source": "SRP68", "target": "RPS27L", "value": 0.2},
{"source": "SRP68", "target": "RPS8", "value": 0.2},
{"source": "SRP68", "target": "RPS21", "value": 0.2},
{"source": "SRP68", "target": "RPLP2", "value": 0.2},
{"source": "SRP68", "target": "PLEC1", "value": 0.2},
{"source": "SRP68", "target": "RPS7", "value": 0.2},
{"source": "SRP68", "target": "RPL3", "value": 0.2},
{"source": "SRP68", "target": "RPS26", "value": 0.2},
{"source": "SRP68", "target": "RPS6", "value": 0.2},
{"source": "SRP68", "target": "RPL35A", "value": 0.2},
{"source": "SRP68", "target": "RPL12", "value": 0.2},
{"source": "SRP68", "target": "RPS15A", "value": 0.2},
{"source": "SRP68", "target": "RPL29", "value": 0.2},
{"source": "PTPRJ", "target": "MLEC", "value": 0.2},
{"source": "PTPRJ", "target": "CYBA", "value": 0.2},
{"source": "PTPRJ", "target": "HVCN1", "value": 0.2},
{"source": "PTPRJ", "target": "HLA-DRB1", "value": 0.2},
{"source": "PTPRJ", "target": "SRC", "value": 0.2},
{"source": "PTPRJ", "target": "UBR4", "value": 0.2},
{"source": "PTPRJ", "target": "KCNAB2", "value": 0.2},
{"source": "PTPRJ", "target": "MOSPD2", "value": 0.2},
{"source": "PTPRJ", "target": "ANO6", "value": 0.2},
{"source": "PTPRJ", "target": "HMOX2", "value": 0.2},
{"source": "EEF1A2", "target": "TTLL12", "value": 0.2},
{"source": "EEF1A2", "target": "RPS27L", "value": 0.2},
{"source": "EEF1A2", "target": "RPSA", "value": 0.2},
{"source": "EEF1A2", "target": "RPL18A", "value": 0.2},
{"source": "EEF1A2", "target": "RPS15A", "value": 0.2},
{"source": "EEF1A2", "target": "RPS12", "value": 0.2},
{"source": "EEF1A2", "target": "RPS6", "value": 0.2},
{"source": "EEF1A2", "target": "RPS23", "value": 0.2},
{"source": "EEF1A2", "target": "RPL12", "value": 0.2},
{"source": "EEF1A2", "target": "RPS21", "value": 0.2},
{"source": "EEF1A2", "target": "RPS26", "value": 0.2},
{"source": "EEF1A2", "target": "RPS3", "value": 0.2},
{"source": "EEF1A2", "target": "RPS8", "value": 0.2},
{"source": "EEF1A2", "target": "RPL27", "value": 0.2},
{"source": "EEF1A2", "target": "EEF2", "value": 0.2},
{"source": "EEF1A2", "target": "POLR2A", "value": 0.2},
{"source": "EEF1A2", "target": "RPS7", "value": 0.2},
{"source": "EEF1A2", "target": "RPL3", "value": 0.2},
{"source": "EEF1A2", "target": "PLEC1", "value": 0.2},
{"source": "PSMB3", "target": "PSMC4", "value": 0.2},
{"source": "PSMB3", "target": "PSME2", "value": 0.2},
{"source": "PSMB3", "target": "PSMD10", "value": 0.2},
{"source": "PSMB3", "target": "PSMD7", "value": 0.2},
{"source": "PSMB3", "target": "PSMA2", "value": 0.2},
{"source": "PSMB3", "target": "NFKB1", "value": 0.2},
{"source": "PSMB3", "target": "PSMC1", "value": 0.2},
{"source": "PSMB3", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMB3", "target": "PSMA6", "value": 0.2},
{"source": "PSMB3", "target": "PSMD11", "value": 0.2},
{"source": "PSMB3", "target": "SOD1", "value": 0.2},
{"source": "PSMB3", "target": "PSMD1", "value": 0.2},
{"source": "PSMB3", "target": "PSMA8", "value": 0.2},
{"source": "PSMB3", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMB3", "target": "PSMD12", "value": 0.2},
{"source": "PSMB3", "target": "PSMB5", "value": 0.2},
{"source": "PSMB3", "target": "BUB3", "value": 0.2},
{"source": "PSMB3", "target": "PSMD4", "value": 0.2},
{"source": "PSMB3", "target": "PSMA7", "value": 0.2},
{"source": "PSMB3", "target": "PSMB8", "value": 0.2},
{"source": "PSMB3", "target": "PSME1", "value": 0.2},
{"source": "PSMB3", "target": "RUNX3", "value": 0.2},
{"source": "PSMB3", "target": "PSMC6", "value": 0.2},
{"source": "PSMB3", "target": "WWP1", "value": 0.2},
{"source": "PSMB3", "target": "UBC", "value": 0.2},
{"source": "PSMB3", "target": "COPZ1", "value": 0.2},
{"source": "CKM", "target": "TNNT3", "value": 0.2},
{"source": "MCM6", "target": "RFC2", "value": 0.2},
{"source": "MCM6", "target": "MCM7", "value": 0.2},
{"source": "MCM6", "target": "TOP2A", "value": 0.2},
{"source": "MCM6", "target": "DUT", "value": 0.2},
{"source": "MCM6", "target": "SMC2", "value": 0.2},
{"source": "MCM6", "target": "NOC3L", "value": 0.2},
{"source": "MCM6", "target": "ORC4", "value": 0.2},
{"source": "MCM6", "target": "CKAP5", "value": 0.2},
{"source": "MCM6", "target": "POLE", "value": 0.2},
{"source": "MCM6", "target": "UBC", "value": 0.2},
{"source": "CAPN2", "target": "CAPNS1", "value": 0.2},
{"source": "CAPN2", "target": "YES1", "value": 0.2},
{"source": "CAPN2", "target": "ITGB1", "value": 0.2},
{"source": "CAPN2", "target": "SRC", "value": 0.2},
{"source": "EMID2", "target": "P4HA1", "value": 0.2},
{"source": "EMID2", "target": "P4HB", "value": 0.2},
{"source": "EMID2", "target": "FURIN", "value": 0.2},
{"source": "EMID2", "target": "COL23A1", "value": 0.2},
{"source": "HSPH1", "target": "AHSA1", "value": 0.2},
{"source": "HSPH1", "target": "DNAJB1", "value": 0.2},
{"source": "HSPH1", "target": "HSPBP1", "value": 0.2},
{"source": "HSPH1", "target": "DNAJA3", "value": 0.2},
{"source": "HSPH1", "target": "GRPEL1", "value": 0.2},
{"source": "HSPH1", "target": "CCT3", "value": 0.2},
{"source": "HSPH1", "target": "HSPA9", "value": 0.2},
{"source": "HSPH1", "target": "HSP90B1", "value": 0.2},
{"source": "HSPH1", "target": "DNAJA2", "value": 0.2},
{"source": "HSPH1", "target": "DNAJA1", "value": 0.2},
{"source": "HSPH1", "target": "HSP90AB1", "value": 0.2},
{"source": "HSPH1", "target": "DNAJB4", "value": 0.2},
{"source": "HSPH1", "target": "STIP1", "value": 0.2},
{"source": "HSPH1", "target": "HSP90AA1", "value": 0.2},
{"source": "UBR4", "target": "STUB1", "value": 0.2},
{"source": "UBR4", "target": "MLEC", "value": 0.2},
{"source": "UBR4", "target": "UBE3A", "value": 0.2},
{"source": "UBR4", "target": "COPB1", "value": 0.2},
{"source": "UBR4", "target": "CYBA", "value": 0.2},
{"source": "UBR4", "target": "MGRN1", "value": 0.2},
{"source": "UBR4", "target": "UBE3C", "value": 0.2},
{"source": "UBR4", "target": "HUWE1", "value": 0.2},
{"source": "UBR4", "target": "DYNC1H1", "value": 0.2},
{"source": "UBR4", "target": "HVCN1", "value": 0.2},
{"source": "UBR4", "target": "PARK2", "value": 0.2},
{"source": "UBR4", "target": "UFL1", "value": 0.2},
{"source": "UBR4", "target": "UBR2", "value": 0.2},
{"source": "UBR4", "target": "RAB14", "value": 0.2},
{"source": "UBR4", "target": "WWP1", "value": 0.2},
{"source": "UBR4", "target": "HMOX2", "value": 0.2},
{"source": "UBR4", "target": "NEDD4", "value": 0.2},
{"source": "UBR4", "target": "MOSPD2", "value": 0.2},
{"source": "UBR4", "target": "ANO6", "value": 0.2},
{"source": "UBR4", "target": "KCNAB2", "value": 0.2},
{"source": "UBR4", "target": "HERC1", "value": 0.2},
{"source": "UBR4", "target": "UBC", "value": 0.2},
{"source": "UBR4", "target": "RNF130", "value": 0.2},
{"source": "AHNAK", "target": "SF1", "value": 0.2},
{"source": "AHNAK", "target": "SLC3A2", "value": 0.2},
{"source": "EIF3M", "target": "PSMD7", "value": 0.2},
{"source": "EIF3M", "target": "RPL18A", "value": 0.2},
{"source": "EIF3M", "target": "RPS12", "value": 0.2},
{"source": "EIF3M", "target": "EIF2S1", "value": 0.2},
{"source": "EIF3M", "target": "PSMD11", "value": 0.2},
{"source": "EIF3M", "target": "RPS3", "value": 0.2},
{"source": "EIF3M", "target": "EIF5B", "value": 0.2},
{"source": "EIF3M", "target": "RPS23", "value": 0.2},
{"source": "EIF3M", "target": "RPL10L", "value": 0.2},
{"source": "EIF3M", "target": "EEF2", "value": 0.2},
{"source": "EIF3M", "target": "PSMD1", "value": 0.2},
{"source": "EIF3M", "target": "RPS15A", "value": 0.2},
{"source": "EIF3M", "target": "RPLP2", "value": 0.2},
{"source": "EIF3M", "target": "PLEC1", "value": 0.2},
{"source": "EIF3M", "target": "RPS27L", "value": 0.2},
{"source": "EIF3M", "target": "RPS7", "value": 0.2},
{"source": "EIF3M", "target": "RPS21", "value": 0.2},
{"source": "EIF3M", "target": "RPL3", "value": 0.2},
{"source": "EIF3M", "target": "RPSA", "value": 0.2},
{"source": "EIF3M", "target": "PSMD12", "value": 0.2},
{"source": "EIF3M", "target": "RPS26", "value": 0.2},
{"source": "EIF3M", "target": "GTPBP4", "value": 0.2},
{"source": "EIF3M", "target": "EIF3B", "value": 0.2},
{"source": "EIF3M", "target": "RPL12", "value": 0.2},
{"source": "EIF3M", "target": "PSMA7", "value": 0.2},
{"source": "EIF3M", "target": "RPS6", "value": 0.2},
{"source": "EIF3M", "target": "RPS8", "value": 0.2},
{"source": "EIF3M", "target": "RPL29", "value": 0.2},
{"source": "EIF3M", "target": "RPL35A", "value": 0.2},
{"source": "EIF3M", "target": "RPL27", "value": 0.2},
{"source": "EIF3M", "target": "RPL28", "value": 0.2},
{"source": "TP53BP1", "target": "PSMC4", "value": 0.2},
{"source": "TP53BP1", "target": "PSMC1", "value": 0.2},
{"source": "TP53BP1", "target": "ATM", "value": 0.2},
{"source": "TP53BP1", "target": "SMC1A", "value": 0.2},
{"source": "TP53BP1", "target": "BUB3", "value": 0.2},
{"source": "TP53BP1", "target": "PSMD4", "value": 0.2},
{"source": "TP53BP1", "target": "RAD50", "value": 0.2},
{"source": "TP53BP1", "target": "UBC", "value": 0.2},
{"source": "HSPA9", "target": "TPI1", "value": 0.2},
{"source": "HSPA9", "target": "CANX", "value": 0.2},
{"source": "HSPA9", "target": "HSPB1", "value": 0.2},
{"source": "HSPA9", "target": "DNAJB1", "value": 0.2},
{"source": "HSPA9", "target": "HSPBP1", "value": 0.2},
{"source": "HSPA9", "target": "DNAJA3", "value": 0.2},
{"source": "HSPA9", "target": "GRPEL1", "value": 0.2},
{"source": "HSPA9", "target": "VDAC1", "value": 0.2},
{"source": "HSPA9", "target": "SOD1", "value": 0.2},
{"source": "HSPA9", "target": "HSP90AB1", "value": 0.2},
{"source": "HSPA9", "target": "TPR", "value": 0.2},
{"source": "HSPA9", "target": "DNAJA2", "value": 0.2},
{"source": "HSPA9", "target": "DNAJA1", "value": 0.2},
{"source": "HSPA9", "target": "HSP90B1", "value": 0.2},
{"source": "HSPA9", "target": "STIP1", "value": 0.2},
{"source": "HSPA9", "target": "HSP90AA1", "value": 0.2},
{"source": "HSPA9", "target": "DNAJB4", "value": 0.2},
{"source": "AP1S1", "target": "COPB1", "value": 0.2},
{"source": "AP1S1", "target": "NAPA", "value": 0.2},
{"source": "AP1S1", "target": "ARCN1", "value": 0.2},
{"source": "AP1S1", "target": "CLTB", "value": 0.2},
{"source": "AP1S1", "target": "COPG1", "value": 0.2},
{"source": "AP1S1", "target": "COPB2", "value": 0.2},
{"source": "AP1S1", "target": "SEC24C", "value": 0.2},
{"source": "AP1S1", "target": "HLA-DRB1", "value": 0.2},
{"source": "AP1S1", "target": "TGOLN2", "value": 0.2},
{"source": "AP1S1", "target": "COPZ1", "value": 0.2},
{"source": "AP1S1", "target": "COPG2", "value": 0.2},
{"source": "PSMD12", "target": "PSMC4", "value": 0.2},
{"source": "PSMD12", "target": "PSME2", "value": 0.2},
{"source": "PSMD12", "target": "PSMD10", "value": 0.2},
{"source": "PSMD12", "target": "PSMD7", "value": 0.2},
{"source": "PSMD12", "target": "PSMA2", "value": 0.2},
{"source": "PSMD12", "target": "NFKB1", "value": 0.2},
{"source": "PSMD12", "target": "PSMC1", "value": 0.2},
{"source": "PSMD12", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMD12", "target": "PSMA6", "value": 0.2},
{"source": "PSMD12", "target": "PSMD11", "value": 0.2},
{"source": "PSMD12", "target": "KPNB1", "value": 0.2},
{"source": "PSMD12", "target": "PSMD1", "value": 0.2},
{"source": "PSMD12", "target": "PSMA8", "value": 0.2},
{"source": "PSMD12", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD12", "target": "PSMC6", "value": 0.2},
{"source": "PSMD12", "target": "BUB3", "value": 0.2},
{"source": "PSMD12", "target": "WWP1", "value": 0.2},
{"source": "PSMD12", "target": "UBC", "value": 0.2},
{"source": "PSMD12", "target": "PSMD4", "value": 0.2},
{"source": "PSMD12", "target": "PSMB8", "value": 0.2},
{"source": "PSMD12", "target": "RUNX3", "value": 0.2},
{"source": "PSMD12", "target": "PSME1", "value": 0.2},
{"source": "PSMD12", "target": "PSMA7", "value": 0.2},
{"source": "PSMD12", "target": "PSMB5", "value": 0.2},
{"source": "GTF2I", "target": "YY1", "value": 0.2},
{"source": "ARPC1B", "target": "MYH2", "value": 0.2},
{"source": "ARPC1B", "target": "NCKAP1L", "value": 0.2},
{"source": "ARPC1B", "target": "BAIAP2", "value": 0.2},
{"source": "ARPC1B", "target": "PSMA7", "value": 0.2},
{"source": "ARPC1B", "target": "WIPF1", "value": 0.2},
{"source": "AIMP2", "target": "PARK2", "value": 0.2},
{"source": "RPS27L", "target": "RPL18A", "value": 0.2},
{"source": "RPS27L", "target": "RPS12", "value": 0.2},
{"source": "RPS27L", "target": "RRP9", "value": 0.2},
{"source": "RPS27L", "target": "EIF2S1", "value": 0.2},
{"source": "RPS27L", "target": "RPS3", "value": 0.2},
{"source": "RPS27L", "target": "EIF5B", "value": 0.2},
{"source": "RPS27L", "target": "RPS23", "value": 0.2},
{"source": "RPS27L", "target": "RPL10L", "value": 0.2},
{"source": "RPS27L", "target": "TSR1", "value": 0.2},
{"source": "RPS27L", "target": "EEF2", "value": 0.2},
{"source": "RPS27L", "target": "RPS15A", "value": 0.2},
{"source": "RPS27L", "target": "RPLP2", "value": 0.2},
{"source": "RPS27L", "target": "PLEC1", "value": 0.2},
{"source": "RPS27L", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS27L", "target": "RPS8", "value": 0.2},
{"source": "RPS27L", "target": "RPS21", "value": 0.2},
{"source": "RPS27L", "target": "PDCD11", "value": 0.2},
{"source": "RPS27L", "target": "RPL12", "value": 0.2},
{"source": "RPS27L", "target": "WDR36", "value": 0.2},
{"source": "RPS27L", "target": "RPL35A", "value": 0.2},
{"source": "RPS27L", "target": "RPL28", "value": 0.2},
{"source": "RPS27L", "target": "RPL29", "value": 0.2},
{"source": "RPS27L", "target": "RPL3", "value": 0.2},
{"source": "RPS27L", "target": "RPSA", "value": 0.2},
{"source": "RPS27L", "target": "EIF3B", "value": 0.2},
{"source": "RPS27L", "target": "RPS7", "value": 0.2},
{"source": "RPS27L", "target": "RPS6", "value": 0.2},
{"source": "RPS27L", "target": "RPS26", "value": 0.2},
{"source": "RPS27L", "target": "RPL27", "value": 0.2},
{"source": "ZFP36L1", "target": "EXOSC7", "value": 0.2},
{"source": "FNBP1", "target": "APOB", "value": 0.2},
{"source": "FNBP1", "target": "CLTB", "value": 0.2},
{"source": "FNBP1", "target": "LDLRAP1", "value": 0.2},
{"source": "FNBP1", "target": "TGOLN2", "value": 0.2},
{"source": "FNBP1", "target": "UBC", "value": 0.2},
{"source": "FNBP1", "target": "LDLR", "value": 0.2},
{"source": "PSMD4", "target": "PSMC4", "value": 0.2},
{"source": "PSMD4", "target": "PSME2", "value": 0.2},
{"source": "PSMD4", "target": "PSMD10", "value": 0.2},
{"source": "PSMD4", "target": "PSMD7", "value": 0.2},
{"source": "PSMD4", "target": "PSMA2", "value": 0.2},
{"source": "PSMD4", "target": "NFKB1", "value": 0.2},
{"source": "PSMD4", "target": "PSMC1", "value": 0.2},
{"source": "PSMD4", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMD4", "target": "PSMA6", "value": 0.2},
{"source": "PSMD4", "target": "PSMD11", "value": 0.2},
{"source": "PSMD4", "target": "UBE3C", "value": 0.2},
{"source": "PSMD4", "target": "PSMD1", "value": 0.2},
{"source": "PSMD4", "target": "PSMA8", "value": 0.2},
{"source": "PSMD4", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD4", "target": "HSP90AA1", "value": 0.2},
{"source": "PSMD4", "target": "PSMB5", "value": 0.2},
{"source": "PSMD4", "target": "BUB3", "value": 0.2},
{"source": "PSMD4", "target": "WWP1", "value": 0.2},
{"source": "PSMD4", "target": "PSMC6", "value": 0.2},
{"source": "PSMD4", "target": "UBC", "value": 0.2},
{"source": "PSMD4", "target": "PSMB8", "value": 0.2},
{"source": "PSMD4", "target": "PSMA7", "value": 0.2},
{"source": "PSMD4", "target": "RUNX3", "value": 0.2},
{"source": "PSMD4", "target": "PSME1", "value": 0.2},
{"source": "CEP72", "target": "NEDD1", "value": 0.2},
{"source": "CEP72", "target": "HAUS6", "value": 0.2},
{"source": "CEP72", "target": "RAB8A", "value": 0.2},
{"source": "CEP72", "target": "CKAP5", "value": 0.2},
{"source": "CEP72", "target": "PPP2R1A", "value": 0.2},
{"source": "CEP72", "target": "TCTN3", "value": 0.2},
{"source": "CEP72", "target": "DYNC1H1", "value": 0.2},
{"source": "CEP72", "target": "TUBB4B", "value": 0.2},
{"source": "CEP72", "target": "OFD1", "value": 0.2},
{"source": "CEP72", "target": "HSP90AA1", "value": 0.2},
{"source": "CEP72", "target": "PAFAH1B1", "value": 0.2},
{"source": "ITGA5", "target": "ITGA3", "value": 0.2},
{"source": "ITGA5", "target": "ITGB1", "value": 0.2},
{"source": "ITGA5", "target": "SRC", "value": 0.2},
{"source": "ITGA5", "target": "ITGB5", "value": 0.2},
{"source": "PSMB5", "target": "PSMC4", "value": 0.2},
{"source": "PSMB5", "target": "PSME2", "value": 0.2},
{"source": "PSMB5", "target": "PSMD10", "value": 0.2},
{"source": "PSMB5", "target": "PSMD7", "value": 0.2},
{"source": "PSMB5", "target": "PSMA2", "value": 0.2},
{"source": "PSMB5", "target": "NFKB1", "value": 0.2},
{"source": "PSMB5", "target": "PSMC1", "value": 0.2},
{"source": "PSMB5", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMB5", "target": "PSMA6", "value": 0.2},
{"source": "PSMB5", "target": "PSMD11", "value": 0.2},
{"source": "PSMB5", "target": "PSMD1", "value": 0.2},
{"source": "PSMB5", "target": "PSMA8", "value": 0.2},
{"source": "PSMB5", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMB5", "target": "PSMA7", "value": 0.2},
{"source": "PSMB5", "target": "PSMC6", "value": 0.2},
{"source": "PSMB5", "target": "PSMB8", "value": 0.2},
{"source": "PSMB5", "target": "RUNX3", "value": 0.2},
{"source": "PSMB5", "target": "UBC", "value": 0.2},
{"source": "PSMB5", "target": "PSME1", "value": 0.2},
{"source": "PSMB5", "target": "BUB3", "value": 0.2},
{"source": "PSMB5", "target": "WWP1", "value": 0.2},
{"source": "STX5", "target": "GOSR1", "value": 0.2},
{"source": "STX5", "target": "COPB1", "value": 0.2},
{"source": "STX5", "target": "DYNC1LI2", "value": 0.2},
{"source": "STX5", "target": "STX6", "value": 0.2},
{"source": "STX5", "target": "NAPA", "value": 0.2},
{"source": "STX5", "target": "ARCN1", "value": 0.2},
{"source": "STX5", "target": "DCTN1", "value": 0.2},
{"source": "STX5", "target": "SPTBN2", "value": 0.2},
{"source": "STX5", "target": "COPZ1", "value": 0.2},
{"source": "STX5", "target": "BET1L", "value": 0.2},
{"source": "STX5", "target": "COPG2", "value": 0.2},
{"source": "STX5", "target": "TMED9", "value": 0.2},
{"source": "STX5", "target": "COG1", "value": 0.2},
{"source": "STX5", "target": "RAB1A", "value": 0.2},
{"source": "STX5", "target": "COPG1", "value": 0.2},
{"source": "STX5", "target": "COG2", "value": 0.2},
{"source": "STX5", "target": "COPB2", "value": 0.2},
{"source": "STX5", "target": "TMED10", "value": 0.2},
{"source": "STX5", "target": "DYNC1H1", "value": 0.2},
{"source": "STX5", "target": "SEC24C", "value": 0.2},
{"source": "ACTN2", "target": "MYH1", "value": 0.2},
{"source": "ACTN2", "target": "MYH2", "value": 0.2},
{"source": "ACTN2", "target": "MYH4", "value": 0.2},
{"source": "ACTN2", "target": "TNNT3", "value": 0.2},
{"source": "ACTN2", "target": "TMOD3", "value": 0.2},
{"source": "ACTN2", "target": "SRC", "value": 0.2},
{"source": "ACTN2", "target": "DES", "value": 0.2},
{"source": "ACTN2", "target": "TPM2", "value": 0.2},
{"source": "ACTN2", "target": "MYL3", "value": 0.2},
{"source": "ACTN2", "target": "ITGB1", "value": 0.2},
{"source": "ACTN2", "target": "MYH8", "value": 0.2},
{"source": "ACTN2", "target": "RHOA", "value": 0.2},
{"source": "ACTN2", "target": "MYBPC1", "value": 0.2},
{"source": "ACTN2", "target": "TTN", "value": 0.2},
{"source": "ACTN2", "target": "MYH3", "value": 0.2},
{"source": "HSPB1", "target": "HSP90AB1", "value": 0.2},
{"source": "HSPB1", "target": "DNAJB1", "value": 0.2},
{"source": "HSPB1", "target": "UBC", "value": 0.2},
{"source": "HSPB1", "target": "DAXX", "value": 0.2},
{"source": "HSPB1", "target": "HSP90AA1", "value": 0.2},
{"source": "DAXX", "target": "ATM", "value": 0.2},
{"source": "DAXX", "target": "UBC", "value": 0.2},
{"source": "SF1", "target": "POLR2C", "value": 0.2},
{"source": "SF1", "target": "DDX5", "value": 0.2},
{"source": "SF1", "target": "PRPF19", "value": 0.2},
{"source": "SF1", "target": "XAB2", "value": 0.2},
{"source": "SF1", "target": "POLR2A", "value": 0.2},
{"source": "SF1", "target": "SLC3A2", "value": 0.2},
{"source": "TTC27", "target": "RRP9", "value": 0.2},
{"source": "TTC27", "target": "NAT10", "value": 0.2},
{"source": "TTC27", "target": "TSR1", "value": 0.2},
{"source": "TTC27", "target": "RBM19", "value": 0.2},
{"source": "TTC27", "target": "KRI1", "value": 0.2},
{"source": "TTC27", "target": "GTPBP4", "value": 0.2},
{"source": "TTC27", "target": "POLR1B", "value": 0.2},
{"source": "TTC27", "target": "DDX10", "value": 0.2},
{"source": "TTC27", "target": "PWP1", "value": 0.2},
{"source": "TTC27", "target": "WDR36", "value": 0.2},
{"source": "DNAJA2", "target": "DNAJB1", "value": 0.2},
{"source": "DNAJA2", "target": "HSP90AB1", "value": 0.2},
{"source": "DNAJA2", "target": "HSP90AA1", "value": 0.2},
{"source": "DNAJA2", "target": "DNAJA1", "value": 0.2},
{"source": "DNAJA2", "target": "STIP1", "value": 0.2},
{"source": "RPSA", "target": "RPL18A", "value": 0.2},
{"source": "RPSA", "target": "PSMA2", "value": 0.2},
{"source": "RPSA", "target": "RPS12", "value": 0.2},
{"source": "RPSA", "target": "RRP9", "value": 0.2},
{"source": "RPSA", "target": "EIF2S1", "value": 0.2},
{"source": "RPSA", "target": "PSMD11", "value": 0.2},
{"source": "RPSA", "target": "RPS3", "value": 0.2},
{"source": "RPSA", "target": "EIF5B", "value": 0.2},
{"source": "RPSA", "target": "KPNB1", "value": 0.2},
{"source": "RPSA", "target": "CCT3", "value": 0.2},
{"source": "RPSA", "target": "RPS23", "value": 0.2},
{"source": "RPSA", "target": "RPL10L", "value": 0.2},
{"source": "RPSA", "target": "TSR1", "value": 0.2},
{"source": "RPSA", "target": "EEF2", "value": 0.2},
{"source": "RPSA", "target": "PSMD1", "value": 0.2},
{"source": "RPSA", "target": "RPS15A", "value": 0.2},
{"source": "RPSA", "target": "KRI1", "value": 0.2},
{"source": "RPSA", "target": "RPLP2", "value": 0.2},
{"source": "RPSA", "target": "PLEC1", "value": 0.2},
{"source": "RPSA", "target": "PPP2R1A", "value": 0.2},
{"source": "RPSA", "target": "RPS7", "value": 0.2},
{"source": "RPSA", "target": "PPP1CC", "value": 0.2},
{"source": "RPSA", "target": "RPS21", "value": 0.2},
{"source": "RPSA", "target": "RPL3", "value": 0.2},
{"source": "RPSA", "target": "EIF3B", "value": 0.2},
{"source": "RPSA", "target": "RPS26", "value": 0.2},
{"source": "RPSA", "target": "PDCD11", "value": 0.2},
{"source": "RPSA", "target": "PSMA7", "value": 0.2},
{"source": "RPSA", "target": "RPS6", "value": 0.2},
{"source": "RPSA", "target": "RPL29", "value": 0.2},
{"source": "RPSA", "target": "RPL35A", "value": 0.2},
{"source": "RPSA", "target": "RPL12", "value": 0.2},
{"source": "RPSA", "target": "RPL28", "value": 0.2},
{"source": "RPSA", "target": "RPS8", "value": 0.2},
{"source": "RPSA", "target": "WDR36", "value": 0.2},
{"source": "RPSA", "target": "RPL27", "value": 0.2},
{"source": "RPS12", "target": "PSMC4", "value": 0.2},
{"source": "RPS12", "target": "RPL18A", "value": 0.2},
{"source": "RPS12", "target": "RPL3", "value": 0.2},
{"source": "RPS12", "target": "PDCD11", "value": 0.2},
{"source": "RPS12", "target": "RPL27", "value": 0.2},
{"source": "RPS12", "target": "RPL28", "value": 0.2},
{"source": "RPS12", "target": "RPS3", "value": 0.2},
{"source": "RPS12", "target": "RPS8", "value": 0.2},
{"source": "RPS12", "target": "RPLP2", "value": 0.2},
{"source": "RPS12", "target": "RPL12", "value": 0.2},
{"source": "RPS12", "target": "RPS7", "value": 0.2},
{"source": "RPS12", "target": "RRP9", "value": 0.2},
{"source": "RPS12", "target": "EIF3B", "value": 0.2},
{"source": "RPS12", "target": "RPS23", "value": 0.2},
{"source": "RPS12", "target": "RPS21", "value": 0.2},
{"source": "RPS12", "target": "EIF2S1", "value": 0.2},
{"source": "RPS12", "target": "RPS26", "value": 0.2},
{"source": "RPS12", "target": "RPS6", "value": 0.2},
{"source": "RPS12", "target": "PLEC1", "value": 0.2},
{"source": "RPS12", "target": "RPL10L", "value": 0.2},
{"source": "RPS12", "target": "RPS15A", "value": 0.2},
{"source": "RPS12", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS12", "target": "PSMC1", "value": 0.2},
{"source": "RPS12", "target": "RPL35A", "value": 0.2},
{"source": "RPS12", "target": "EIF5B", "value": 0.2},
{"source": "RPS12", "target": "WDR36", "value": 0.2},
{"source": "RPS12", "target": "RPL29", "value": 0.2},
{"source": "RPS12", "target": "EEF2", "value": 0.2},
{"source": "RPS12", "target": "TSR1", "value": 0.2},
{"source": "SHC1", "target": "PTPN2", "value": 0.2},
{"source": "SHC1", "target": "HSP90AA1", "value": 0.2},
{"source": "SHC1", "target": "HLA-DRB1", "value": 0.2},
{"source": "SHC1", "target": "SRC", "value": 0.2},
{"source": "SHC1", "target": "ITGB1", "value": 0.2},
{"source": "SHC1", "target": "RHOA", "value": 0.2},
{"source": "SHC1", "target": "LYN", "value": 0.2},
{"source": "SHC1", "target": "B2M", "value": 0.2},
{"source": "MCM7", "target": "RFC2", "value": 0.2},
{"source": "MCM7", "target": "SMC2", "value": 0.2},
{"source": "MCM7", "target": "CCT3", "value": 0.2},
{"source": "MCM7", "target": "VPS35", "value": 0.2},
{"source": "MCM7", "target": "TSR1", "value": 0.2},
{"source": "MCM7", "target": "ORC4", "value": 0.2},
{"source": "MCM7", "target": "UBC", "value": 0.2},
{"source": "MCM7", "target": "POLR2A", "value": 0.2},
{"source": "MCM7", "target": "POLE", "value": 0.2},
{"source": "MCM7", "target": "SMC1A", "value": 0.2},
{"source": "MCM7", "target": "TOP2A", "value": 0.2},
{"source": "MCM7", "target": "DUT", "value": 0.2},
{"source": "PSMC4", "target": "PSMA8", "value": 0.2},
{"source": "PSMC4", "target": "RPS6", "value": 0.2},
{"source": "PSMC4", "target": "PSMD1", "value": 0.2},
{"source": "PSMC4", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMC4", "target": "PSMC1", "value": 0.2},
{"source": "PSMC4", "target": "WWP1", "value": 0.2},
{"source": "PSMC4", "target": "NFKB1", "value": 0.2},
{"source": "PSMC4", "target": "PSMD10", "value": 0.2},
{"source": "PSMC4", "target": "RUNX3", "value": 0.2},
{"source": "PSMC4", "target": "RPS26", "value": 0.2},
{"source": "PSMC4", "target": "PSMA7", "value": 0.2},
{"source": "PSMC4", "target": "RPS7", "value": 0.2},
{"source": "PSMC4", "target": "UBC", "value": 0.2},
{"source": "PSMC4", "target": "PSMD11", "value": 0.2},
{"source": "PSMC4", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMC4", "target": "PSMA2", "value": 0.2},
{"source": "PSMC4", "target": "RPL18A", "value": 0.2},
{"source": "PSMC4", "target": "BUB3", "value": 0.2},
{"source": "PSMC4", "target": "PSMA6", "value": 0.2},
{"source": "PSMC4", "target": "EEF2", "value": 0.2},
{"source": "PSMC4", "target": "RPL3", "value": 0.2},
{"source": "PSMC4", "target": "PSME1", "value": 0.2},
{"source": "PSMC4", "target": "PSME2", "value": 0.2},
{"source": "PSMC4", "target": "RPS15A", "value": 0.2},
{"source": "PSMC4", "target": "PSMD7", "value": 0.2},
{"source": "PSMC4", "target": "RPS3", "value": 0.2},
{"source": "PSMC4", "target": "PSMB8", "value": 0.2},
{"source": "PSMC4", "target": "PSMC6", "value": 0.2},
{"source": "ARCN1", "target": "ARF5", "value": 0.2},
{"source": "ARCN1", "target": "ZW10", "value": 0.2},
{"source": "ARCN1", "target": "GOSR1", "value": 0.2},
{"source": "ARCN1", "target": "COPB1", "value": 0.2},
{"source": "ARCN1", "target": "DYNC1LI2", "value": 0.2},
{"source": "ARCN1", "target": "NAPA", "value": 0.2},
{"source": "ARCN1", "target": "COPZ1", "value": 0.2},
{"source": "ARCN1", "target": "ARF4", "value": 0.2},
{"source": "ARCN1", "target": "COPB2", "value": 0.2},
{"source": "ARCN1", "target": "BET1L", "value": 0.2},
{"source": "ARCN1", "target": "COPG2", "value": 0.2},
{"source": "ARCN1", "target": "SPTBN2", "value": 0.2},
{"source": "ARCN1", "target": "COG2", "value": 0.2},
{"source": "ARCN1", "target": "DYNC1H1", "value": 0.2},
{"source": "ARCN1", "target": "DCTN1", "value": 0.2},
{"source": "ARCN1", "target": "COG1", "value": 0.2},
{"source": "ARCN1", "target": "RAB1A", "value": 0.2},
{"source": "ARCN1", "target": "SEC24C", "value": 0.2},
{"source": "ARCN1", "target": "TMED9", "value": 0.2},
{"source": "ARCN1", "target": "COPG1", "value": 0.2},
{"source": "ARCN1", "target": "KIF5B", "value": 0.2},
{"source": "ARCN1", "target": "TMED10", "value": 0.2},
{"source": "ARID1B", "target": "SMARCA2", "value": 0.2},
{"source": "ARID1B", "target": "SMARCA4", "value": 0.2},
{"source": "ARID1B", "target": "BCL7A", "value": 0.2},
{"source": "TUBB6", "target": "CCT3", "value": 0.2},
{"source": "TUBB6", "target": "TUBA1B", "value": 0.2},
{"source": "TUBB6", "target": "TUBB4B", "value": 0.2},
{"source": "TUBB6", "target": "DYNC1H1", "value": 0.2},
{"source": "TUBB6", "target": "TBCD", "value": 0.2},
{"source": "TRIM13", "target": "UBC", "value": 0.2},
{"source": "TRIM13", "target": "PDYN", "value": 0.2},
{"source": "SMC1A", "target": "ZW10", "value": 0.2},
{"source": "SMC1A", "target": "DYNC1LI2", "value": 0.2},
{"source": "SMC1A", "target": "LMNB1", "value": 0.2},
{"source": "SMC1A", "target": "PPP2R5A", "value": 0.2},
{"source": "SMC1A", "target": "ATM", "value": 0.2},
{"source": "SMC1A", "target": "SMC2", "value": 0.2},
{"source": "SMC1A", "target": "POLE", "value": 0.2},
{"source": "SMC1A", "target": "PPP1CC", "value": 0.2},
{"source": "SMC1A", "target": "CKAP5", "value": 0.2},
{"source": "SMC1A", "target": "PPP2R1A", "value": 0.2},
{"source": "SMC1A", "target": "RANGAP1", "value": 0.2},
{"source": "SMC1A", "target": "BUB3", "value": 0.2},
{"source": "SMC1A", "target": "H2AFJ", "value": 0.2},
{"source": "SMC1A", "target": "DYNC1H1", "value": 0.2},
{"source": "SMC1A", "target": "PAFAH1B1", "value": 0.2},
{"source": "SMC1A", "target": "RAD50", "value": 0.2},
{"source": "PDYN", "target": "ADCY6", "value": 0.2},
{"source": "PDYN", "target": "GNAI2", "value": 0.2},
{"source": "PDYN", "target": "S1PR3", "value": 0.2},
{"source": "PAFAH1B1", "target": "ZW10", "value": 0.2},
{"source": "PAFAH1B1", "target": "DYNC1LI2", "value": 0.2},
{"source": "PAFAH1B1", "target": "PPP2R5A", "value": 0.2},
{"source": "PAFAH1B1", "target": "RAB8A", "value": 0.2},
{"source": "PAFAH1B1", "target": "PPP2R1A", "value": 0.2},
{"source": "PAFAH1B1", "target": "HSP90AA1", "value": 0.2},
{"source": "PAFAH1B1", "target": "TUBB4B", "value": 0.2},
{"source": "PAFAH1B1", "target": "PPP1CC", "value": 0.2},
{"source": "PAFAH1B1", "target": "OFD1", "value": 0.2},
{"source": "PAFAH1B1", "target": "DYNC1H1", "value": 0.2},
{"source": "PAFAH1B1", "target": "DCTN1", "value": 0.2},
{"source": "PAFAH1B1", "target": "BUB3", "value": 0.2},
{"source": "PAFAH1B1", "target": "HAUS6", "value": 0.2},
{"source": "PAFAH1B1", "target": "NEDD1", "value": 0.2},
{"source": "PAFAH1B1", "target": "RANGAP1", "value": 0.2},
{"source": "PAFAH1B1", "target": "TCTN3", "value": 0.2},
{"source": "PAFAH1B1", "target": "RHOA", "value": 0.2},
{"source": "PAFAH1B1", "target": "CKAP5", "value": 0.2},
{"source": "SEC24C", "target": "CANX", "value": 0.2},
{"source": "SEC24C", "target": "COPB1", "value": 0.2},
{"source": "SEC24C", "target": "NAPA", "value": 0.2},
{"source": "SEC24C", "target": "TMED10", "value": 0.2},
{"source": "SEC24C", "target": "COPG1", "value": 0.2},
{"source": "SEC24C", "target": "COPB2", "value": 0.2},
{"source": "SEC24C", "target": "RAB1A", "value": 0.2},
{"source": "SEC24C", "target": "HLA-B", "value": 0.2},
{"source": "SEC24C", "target": "COPZ1", "value": 0.2},
{"source": "SEC24C", "target": "HLA-DRB1", "value": 0.2},
{"source": "SEC24C", "target": "COPG2", "value": 0.2},
{"source": "SEC24C", "target": "B2M", "value": 0.2},
{"source": "RPL10L", "target": "RPL18A", "value": 0.2},
{"source": "RPL10L", "target": "EIF2S1", "value": 0.2},
{"source": "RPL10L", "target": "EXOSC7", "value": 0.2},
{"source": "RPL10L", "target": "RPS3", "value": 0.2},
{"source": "RPL10L", "target": "EIF5B", "value": 0.2},
{"source": "RPL10L", "target": "RPS23", "value": 0.2},
{"source": "RPL10L", "target": "RPL35A", "value": 0.2},
{"source": "RPL10L", "target": "EEF2", "value": 0.2},
{"source": "RPL10L", "target": "RPS15A", "value": 0.2},
{"source": "RPL10L", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL10L", "target": "RPS26", "value": 0.2},
{"source": "RPL10L", "target": "EIF3B", "value": 0.2},
{"source": "RPL10L", "target": "RPS21", "value": 0.2},
{"source": "RPL10L", "target": "RPL27", "value": 0.2},
{"source": "RPL10L", "target": "RPS6", "value": 0.2},
{"source": "RPL10L", "target": "RPLP2", "value": 0.2},
{"source": "RPL10L", "target": "WDR18", "value": 0.2},
{"source": "RPL10L", "target": "RPS8", "value": 0.2},
{"source": "RPL10L", "target": "RPL12", "value": 0.2},
{"source": "RPL10L", "target": "RPS7", "value": 0.2},
{"source": "RPL10L", "target": "PLEC1", "value": 0.2},
{"source": "RPL10L", "target": "RPL3", "value": 0.2},
{"source": "RPL10L", "target": "RPL29", "value": 0.2},
{"source": "RPL10L", "target": "RPL28", "value": 0.2},
{"source": "ABCB6", "target": "ABCA7", "value": 0.2},
{"source": "ABCB6", "target": "SLC9A1", "value": 0.2},
{"source": "ABCB6", "target": "ATP2A2", "value": 0.2},
{"source": "ABCB6", "target": "ATP1A1", "value": 0.2},
{"source": "ABCB6", "target": "ATP1A4", "value": 0.2},
{"source": "EEF2", "target": "RPL18A", "value": 0.2},
{"source": "EEF2", "target": "PRPF19", "value": 0.2},
{"source": "EEF2", "target": "TPI1", "value": 0.2},
{"source": "EEF2", "target": "ENO1", "value": 0.2},
{"source": "EEF2", "target": "EIF2S1", "value": 0.2},
{"source": "EEF2", "target": "PSMA6", "value": 0.2},
{"source": "EEF2", "target": "RPS3", "value": 0.2},
{"source": "EEF2", "target": "EIF5B", "value": 0.2},
{"source": "EEF2", "target": "CCT3", "value": 0.2},
{"source": "EEF2", "target": "RPS23", "value": 0.2},
{"source": "EEF2", "target": "RPS26", "value": 0.2},
{"source": "EEF2", "target": "RPL29", "value": 0.2},
{"source": "EEF2", "target": "HSP90AA1", "value": 0.2},
{"source": "EEF2", "target": "RPL12", "value": 0.2},
{"source": "EEF2", "target": "RPS8", "value": 0.2},
{"source": "EEF2", "target": "RPLP2", "value": 0.2},
{"source": "EEF2", "target": "HSP90AB1", "value": 0.2},
{"source": "EEF2", "target": "RPS15A", "value": 0.2},
{"source": "EEF2", "target": "RPL27", "value": 0.2},
{"source": "EEF2", "target": "RPL3", "value": 0.2},
{"source": "EEF2", "target": "RPS7", "value": 0.2},
{"source": "EEF2", "target": "RPS6", "value": 0.2},
{"source": "EEF2", "target": "PPP2R1A", "value": 0.2},
{"source": "EEF2", "target": "RPL28", "value": 0.2},
{"source": "EEF2", "target": "RPL35A", "value": 0.2},
{"source": "EEF2", "target": "PLEC1", "value": 0.2},
{"source": "EEF2", "target": "RPS21", "value": 0.2},
{"source": "EEF2", "target": "EIF3B", "value": 0.2},
{"source": "MYL3", "target": "MYH1", "value": 0.2},
{"source": "MYL3", "target": "MYH2", "value": 0.2},
{"source": "MYL3", "target": "MYH4", "value": 0.2},
{"source": "MYL3", "target": "TNNT3", "value": 0.2},
{"source": "MYL3", "target": "TMOD3", "value": 0.2},
{"source": "MYL3", "target": "MYLPF", "value": 0.2},
{"source": "MYL3", "target": "DES", "value": 0.2},
{"source": "MYL3", "target": "TPM2", "value": 0.2},
{"source": "MYL3", "target": "TTN", "value": 0.2},
{"source": "MYL3", "target": "MYH3", "value": 0.2},
{"source": "MYL3", "target": "MYH14", "value": 0.2},
{"source": "MYL3", "target": "MYBPC1", "value": 0.2},
{"source": "MYL3", "target": "MYH8", "value": 0.2},
{"source": "MYL3", "target": "MYH11", "value": 0.2},
{"source": "RPS7", "target": "RPL18A", "value": 0.2},
{"source": "RPS7", "target": "RRP9", "value": 0.2},
{"source": "RPS7", "target": "NIP7", "value": 0.2},
{"source": "RPS7", "target": "EIF2S1", "value": 0.2},
{"source": "RPS7", "target": "NAT10", "value": 0.2},
{"source": "RPS7", "target": "PSMC1", "value": 0.2},
{"source": "RPS7", "target": "EXOSC7", "value": 0.2},
{"source": "RPS7", "target": "RPS3", "value": 0.2},
{"source": "RPS7", "target": "EIF5B", "value": 0.2},
{"source": "RPS7", "target": "RPS23", "value": 0.2},
{"source": "RPS7", "target": "TSR1", "value": 0.2},
{"source": "RPS7", "target": "RPS15A", "value": 0.2},
{"source": "RPS7", "target": "RPLP2", "value": 0.2},
{"source": "RPS7", "target": "PLEC1", "value": 0.2},
{"source": "RPS7", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS7", "target": "RPL29", "value": 0.2},
{"source": "RPS7", "target": "RPS8", "value": 0.2},
{"source": "RPS7", "target": "RPL3", "value": 0.2},
{"source": "RPS7", "target": "RPL27", "value": 0.2},
{"source": "RPS7", "target": "WDR36", "value": 0.2},
{"source": "RPS7", "target": "RPL35A", "value": 0.2},
{"source": "RPS7", "target": "WDR18", "value": 0.2},
{"source": "RPS7", "target": "EIF3B", "value": 0.2},
{"source": "RPS7", "target": "PDCD11", "value": 0.2},
{"source": "RPS7", "target": "RPL28", "value": 0.2},
{"source": "RPS7", "target": "RPS26", "value": 0.2},
{"source": "RPS7", "target": "RPL12", "value": 0.2},
{"source": "RPS7", "target": "RPS6", "value": 0.2},
{"source": "RPS7", "target": "RPS21", "value": 0.2},
{"source": "DNAJA1", "target": "AHSA1", "value": 0.2},
{"source": "DNAJA1", "target": "DNAJB1", "value": 0.2},
{"source": "DNAJA1", "target": "GRPEL1", "value": 0.2},
{"source": "DNAJA1", "target": "HSP90AA1", "value": 0.2},
{"source": "DNAJA1", "target": "STIP1", "value": 0.2},
{"source": "DNAJA1", "target": "HSP90AB1", "value": 0.2},
{"source": "BUB3", "target": "ZW10", "value": 0.2},
{"source": "BUB3", "target": "PSME2", "value": 0.2},
{"source": "BUB3", "target": "PSMD10", "value": 0.2},
{"source": "BUB3", "target": "PSMD7", "value": 0.2},
{"source": "BUB3", "target": "PSMA2", "value": 0.2},
{"source": "BUB3", "target": "DYNC1LI2", "value": 0.2},
{"source": "BUB3", "target": "PSMC1", "value": 0.2},
{"source": "BUB3", "target": "PPP2R5A", "value": 0.2},
{"source": "BUB3", "target": "PSMA6", "value": 0.2},
{"source": "BUB3", "target": "PSMD11", "value": 0.2},
{"source": "BUB3", "target": "AURKC", "value": 0.2},
{"source": "BUB3", "target": "PSMD1", "value": 0.2},
{"source": "BUB3", "target": "PSMA8", "value": 0.2},
{"source": "BUB3", "target": "PPP2R1A", "value": 0.2},
{"source": "BUB3", "target": "PPP1CC", "value": 0.2},
{"source": "BUB3", "target": "DYNC1H1", "value": 0.2},
{"source": "BUB3", "target": "PSMA7", "value": 0.2},
{"source": "BUB3", "target": "UBC", "value": 0.2},
{"source": "BUB3", "target": "DUT", "value": 0.2},
{"source": "BUB3", "target": "PSMB8", "value": 0.2},
{"source": "BUB3", "target": "CKAP5", "value": 0.2},
{"source": "BUB3", "target": "PSMC6", "value": 0.2},
{"source": "BUB3", "target": "PSME1", "value": 0.2},
{"source": "BUB3", "target": "RANGAP1", "value": 0.2},
{"source": "GTPBP4", "target": "DDX5", "value": 0.2},
{"source": "GTPBP4", "target": "RRP9", "value": 0.2},
{"source": "GTPBP4", "target": "NIP7", "value": 0.2},
{"source": "GTPBP4", "target": "NAT10", "value": 0.2},
{"source": "GTPBP4", "target": "DDX18", "value": 0.2},
{"source": "GTPBP4", "target": "TSR1", "value": 0.2},
{"source": "GTPBP4", "target": "DDX10", "value": 0.2},
{"source": "GTPBP4", "target": "KRI1", "value": 0.2},
{"source": "GTPBP4", "target": "RPL3", "value": 0.2},
{"source": "GTPBP4", "target": "EIF3B", "value": 0.2},
{"source": "GTPBP4", "target": "RPF2", "value": 0.2},
{"source": "GTPBP4", "target": "WDR36", "value": 0.2},
{"source": "GTPBP4", "target": "NOC3L", "value": 0.2},
{"source": "GTPBP4", "target": "POLR1B", "value": 0.2},
{"source": "GTPBP4", "target": "PDCD11", "value": 0.2},
{"source": "GTPBP4", "target": "PWP1", "value": 0.2},
{"source": "GTPBP4", "target": "RPS8", "value": 0.2},
{"source": "GTPBP4", "target": "WDR18", "value": 0.2},
{"source": "GTPBP4", "target": "RBM19", "value": 0.2},
{"source": "SIN3A", "target": "UBE3A", "value": 0.2},
{"source": "SIN3A", "target": "YY1", "value": 0.2},
{"source": "SIN3A", "target": "SMARCA2", "value": 0.2},
{"source": "SIN3A", "target": "HDAC1", "value": 0.2},
{"source": "SIN3A", "target": "SMARCA4", "value": 0.2},
{"source": "SIN3A", "target": "H2AFJ", "value": 0.2},
{"source": "RPF2", "target": "DDX5", "value": 0.2},
{"source": "RPF2", "target": "RRP9", "value": 0.2},
{"source": "RPF2", "target": "NIP7", "value": 0.2},
{"source": "RPF2", "target": "EIF2S1", "value": 0.2},
{"source": "RPF2", "target": "NAT10", "value": 0.2},
{"source": "RPF2", "target": "DDX18", "value": 0.2},
{"source": "RPF2", "target": "TSR1", "value": 0.2},
{"source": "RPF2", "target": "DDX10", "value": 0.2},
{"source": "RPF2", "target": "KRI1", "value": 0.2},
{"source": "RPF2", "target": "RPL3", "value": 0.2},
{"source": "RPF2", "target": "PDCD11", "value": 0.2},
{"source": "RPF2", "target": "NOC3L", "value": 0.2},
{"source": "RPF2", "target": "RPS8", "value": 0.2},
{"source": "RPF2", "target": "PWP1", "value": 0.2},
{"source": "RPF2", "target": "RPL35A", "value": 0.2},
{"source": "RPF2", "target": "RBM19", "value": 0.2},
{"source": "RPF2", "target": "POLR1B", "value": 0.2},
{"source": "RPF2", "target": "WDR18", "value": 0.2},
{"source": "RPF2", "target": "WDR36", "value": 0.2},
{"source": "PSME1", "target": "PSME2", "value": 0.2},
{"source": "PSME1", "target": "PSMD10", "value": 0.2},
{"source": "PSME1", "target": "PSMD7", "value": 0.2},
{"source": "PSME1", "target": "PSMA2", "value": 0.2},
{"source": "PSME1", "target": "NFKB1", "value": 0.2},
{"source": "PSME1", "target": "PSMC1", "value": 0.2},
{"source": "PSME1", "target": "PPP2R5A", "value": 0.2},
{"source": "PSME1", "target": "PSMA6", "value": 0.2},
{"source": "PSME1", "target": "PSMD11", "value": 0.2},
{"source": "PSME1", "target": "PSMD1", "value": 0.2},
{"source": "PSME1", "target": "PSMA8", "value": 0.2},
{"source": "PSME1", "target": "PPP2R1A", "value": 0.2},
{"source": "PSME1", "target": "PSMA7", "value": 0.2},
{"source": "PSME1", "target": "PSMB8", "value": 0.2},
{"source": "PSME1", "target": "UBC", "value": 0.2},
{"source": "PSME1", "target": "WWP1", "value": 0.2},
{"source": "PSME1", "target": "RUNX3", "value": 0.2},
{"source": "PSME1", "target": "PSMC6", "value": 0.2},
{"source": "PSME2", "target": "UBC", "value": 0.2},
{"source": "PSME2", "target": "NFKB1", "value": 0.2},
{"source": "PSME2", "target": "PPP2R5A", "value": 0.2},
{"source": "PSME2", "target": "PSMC6", "value": 0.2},
{"source": "PSME2", "target": "PSMB8", "value": 0.2},
{"source": "PSME2", "target": "PSMD1", "value": 0.2},
{"source": "PSME2", "target": "PSMA8", "value": 0.2},
{"source": "PSME2", "target": "PSMD7", "value": 0.2},
{"source": "PSME2", "target": "PSMC1", "value": 0.2},
{"source": "PSME2", "target": "PSMA2", "value": 0.2},
{"source": "PSME2", "target": "WWP1", "value": 0.2},
{"source": "PSME2", "target": "PSMD10", "value": 0.2},
{"source": "PSME2", "target": "RUNX3", "value": 0.2},
{"source": "PSME2", "target": "PSMD11", "value": 0.2},
{"source": "PSME2", "target": "PSMA6", "value": 0.2},
{"source": "PSME2", "target": "PSMA7", "value": 0.2},
{"source": "PSME2", "target": "PPP2R1A", "value": 0.2},
{"source": "ARHGEF1", "target": "RHOA", "value": 0.2},
{"source": "ARHGEF1", "target": "GNA13", "value": 0.2},
{"source": "ATM", "target": "RFC2", "value": 0.2},
{"source": "ATM", "target": "POLR2C", "value": 0.2},
{"source": "ATM", "target": "POLR2A", "value": 0.2},
{"source": "ATM", "target": "RAD50", "value": 0.2},
{"source": "ATM", "target": "HDAC1", "value": 0.2},
{"source": "ATM", "target": "CCNK", "value": 0.2},
{"source": "ATM", "target": "POLE", "value": 0.2},
{"source": "ATM", "target": "UBC", "value": 0.2},
{"source": "ATM", "target": "SMARCA4", "value": 0.2},
{"source": "COG2", "target": "GOSR1", "value": 0.2},
{"source": "COG2", "target": "APOB", "value": 0.2},
{"source": "COG2", "target": "COPB1", "value": 0.2},
{"source": "COG2", "target": "DYNC1LI2", "value": 0.2},
{"source": "COG2", "target": "STX6", "value": 0.2},
{"source": "COG2", "target": "NAPA", "value": 0.2},
{"source": "COG2", "target": "COG1", "value": 0.2},
{"source": "COG2", "target": "TMED10", "value": 0.2},
{"source": "COG2", "target": "COPG1", "value": 0.2},
{"source": "COG2", "target": "COPB2", "value": 0.2},
{"source": "COG2", "target": "TMED9", "value": 0.2},
{"source": "COG2", "target": "DYNC1H1", "value": 0.2},
{"source": "COG2", "target": "DCTN1", "value": 0.2},
{"source": "COG2", "target": "BET1L", "value": 0.2},
{"source": "COG2", "target": "RAB1A", "value": 0.2},
{"source": "COG2", "target": "COPZ1", "value": 0.2},
{"source": "COG2", "target": "TGOLN2", "value": 0.2},
{"source": "COG2", "target": "LDLR", "value": 0.2},
{"source": "COG2", "target": "SPTBN2", "value": 0.2},
{"source": "COG2", "target": "COPG2", "value": 0.2},
{"source": "CLDN1", "target": "OCLN", "value": 0.2},
{"source": "HOXA3", "target": "POLR2C", "value": 0.2},
{"source": "HOXA3", "target": "H2AFJ", "value": 0.2},
{"source": "HOXA3", "target": "POLR2A", "value": 0.2},
{"source": "MOSPD2", "target": "MLEC", "value": 0.2},
{"source": "MOSPD2", "target": "CYBA", "value": 0.2},
{"source": "MOSPD2", "target": "HVCN1", "value": 0.2},
{"source": "MOSPD2", "target": "KCNAB2", "value": 0.2},
{"source": "MOSPD2", "target": "HMOX2", "value": 0.2},
{"source": "MOSPD2", "target": "ANO6", "value": 0.2},
{"source": "KCNAB2", "target": "MLEC", "value": 0.2},
{"source": "KCNAB2", "target": "COPB1", "value": 0.2},
{"source": "KCNAB2", "target": "CYBA", "value": 0.2},
{"source": "KCNAB2", "target": "HVCN1", "value": 0.2},
{"source": "KCNAB2", "target": "RAB14", "value": 0.2},
{"source": "KCNAB2", "target": "ANO6", "value": 0.2},
{"source": "KCNAB2", "target": "HMOX2", "value": 0.2},
{"source": "CCNK", "target": "POLR2C", "value": 0.2},
{"source": "CCNK", "target": "INTS12", "value": 0.2},
{"source": "CCNK", "target": "POLR2A", "value": 0.2},
{"source": "CCNK", "target": "INTS1", "value": 0.2},
{"source": "DDB1", "target": "RFC2", "value": 0.2},
{"source": "DDB1", "target": "POLR2C", "value": 0.2},
{"source": "DDB1", "target": "PRPF19", "value": 0.2},
{"source": "DDB1", "target": "YY1", "value": 0.2},
{"source": "DDB1", "target": "POLE", "value": 0.2},
{"source": "DDB1", "target": "POLR2A", "value": 0.2},
{"source": "DDB1", "target": "WDR48", "value": 0.2},
{"source": "DDB1", "target": "XAB2", "value": 0.2},
{"source": "DDB1", "target": "UBC", "value": 0.2},
{"source": "RANGAP1", "target": "ZW10", "value": 0.2},
{"source": "RANGAP1", "target": "DYNC1LI2", "value": 0.2},
{"source": "RANGAP1", "target": "PPP2R5A", "value": 0.2},
{"source": "RANGAP1", "target": "KPNB1", "value": 0.2},
{"source": "RANGAP1", "target": "PPP2R1A", "value": 0.2},
{"source": "RANGAP1", "target": "HUWE1", "value": 0.2},
{"source": "RANGAP1", "target": "PPP1CC", "value": 0.2},
{"source": "RANGAP1", "target": "DYNC1H1", "value": 0.2},
{"source": "RANGAP1", "target": "TPR", "value": 0.2},
{"source": "RANGAP1", "target": "HDAC1", "value": 0.2},
{"source": "RANGAP1", "target": "B2M", "value": 0.2},
{"source": "RANGAP1", "target": "CKAP5", "value": 0.2},
{"source": "PDCD11", "target": "DDX5", "value": 0.2},
{"source": "PDCD11", "target": "RRP9", "value": 0.2},
{"source": "PDCD11", "target": "NIP7", "value": 0.2},
{"source": "PDCD11", "target": "NAT10", "value": 0.2},
{"source": "PDCD11", "target": "DDX18", "value": 0.2},
{"source": "PDCD11", "target": "EXOSC7", "value": 0.2},
{"source": "PDCD11", "target": "RPS3", "value": 0.2},
{"source": "PDCD11", "target": "RPS23", "value": 0.2},
{"source": "PDCD11", "target": "TSR1", "value": 0.2},
{"source": "PDCD11", "target": "DDX10", "value": 0.2},
{"source": "PDCD11", "target": "RPS15A", "value": 0.2},
{"source": "PDCD11", "target": "KRI1", "value": 0.2},
{"source": "PDCD11", "target": "RPS21", "value": 0.2},
{"source": "PDCD11", "target": "RPL3", "value": 0.2},
{"source": "PDCD11", "target": "RPS26", "value": 0.2},
{"source": "PDCD11", "target": "EIF3B", "value": 0.2},
{"source": "PDCD11", "target": "RPL12", "value": 0.2},
{"source": "PDCD11", "target": "PWP1", "value": 0.2},
{"source": "PDCD11", "target": "NOC3L", "value": 0.2},
{"source": "PDCD11", "target": "POLR1B", "value": 0.2},
{"source": "PDCD11", "target": "WDR18", "value": 0.2},
{"source": "PDCD11", "target": "RPS6", "value": 0.2},
{"source": "PDCD11", "target": "RPS8", "value": 0.2},
{"source": "PDCD11", "target": "RBM19", "value": 0.2},
{"source": "PDCD11", "target": "WDR36", "value": 0.2},
{"source": "CANX", "target": "RAB10", "value": 0.2},
{"source": "CANX", "target": "B2M", "value": 0.2},
{"source": "CANX", "target": "HLA-B", "value": 0.2},
{"source": "CANX", "target": "VDAC1", "value": 0.2},
{"source": "CANX", "target": "TGOLN2", "value": 0.2},
{"source": "CANX", "target": "HLA-DRB1", "value": 0.2},
{"source": "CANX", "target": "P4HB", "value": 0.2},
{"source": "CANX", "target": "HSP90B1", "value": 0.2},
{"source": "CANX", "target": "HSP90AA1", "value": 0.2},
{"source": "PWP1", "target": "DDX5", "value": 0.2},
{"source": "PWP1", "target": "RRP9", "value": 0.2},
{"source": "PWP1", "target": "NIP7", "value": 0.2},
{"source": "PWP1", "target": "NAT10", "value": 0.2},
{"source": "PWP1", "target": "DDX18", "value": 0.2},
{"source": "PWP1", "target": "TSR1", "value": 0.2},
{"source": "PWP1", "target": "DDX10", "value": 0.2},
{"source": "PWP1", "target": "KRI1", "value": 0.2},
{"source": "PWP1", "target": "NOC3L", "value": 0.2},
{"source": "PWP1", "target": "WDR18", "value": 0.2},
{"source": "PWP1", "target": "RBM19", "value": 0.2},
{"source": "PWP1", "target": "POLR1B", "value": 0.2},
{"source": "PWP1", "target": "WDR36", "value": 0.2},
{"source": "TMOD3", "target": "TNNT3", "value": 0.2},
{"source": "TMOD3", "target": "MYBPC1", "value": 0.2},
{"source": "TMOD3", "target": "MYH8", "value": 0.2},
{"source": "TMOD3", "target": "MYH3", "value": 0.2},
{"source": "TMOD3", "target": "TPM2", "value": 0.2},
{"source": "TMOD3", "target": "TTN", "value": 0.2},
{"source": "TMOD3", "target": "DES", "value": 0.2},
{"source": "BET1L", "target": "GOSR1", "value": 0.2},
{"source": "BET1L", "target": "COPB1", "value": 0.2},
{"source": "BET1L", "target": "DYNC1LI2", "value": 0.2},
{"source": "BET1L", "target": "STX6", "value": 0.2},
{"source": "BET1L", "target": "NAPA", "value": 0.2},
{"source": "BET1L", "target": "COG1", "value": 0.2},
{"source": "BET1L", "target": "TMED10", "value": 0.2},
{"source": "BET1L", "target": "COPG1", "value": 0.2},
{"source": "BET1L", "target": "COPB2", "value": 0.2},
{"source": "BET1L", "target": "TMED9", "value": 0.2},
{"source": "BET1L", "target": "DYNC1H1", "value": 0.2},
{"source": "BET1L", "target": "DCTN1", "value": 0.2},
{"source": "BET1L", "target": "COPG2", "value": 0.2},
{"source": "BET1L", "target": "RAB1A", "value": 0.2},
{"source": "BET1L", "target": "COPZ1", "value": 0.2},
{"source": "BET1L", "target": "SPTBN2", "value": 0.2},
{"source": "FSCN1", "target": "DBNL", "value": 0.2},
{"source": "USP15", "target": "UBC", "value": 0.2},
{"source": "XAB2", "target": "RFC2", "value": 0.2},
{"source": "XAB2", "target": "POLR2C", "value": 0.2},
{"source": "XAB2", "target": "DDX5", "value": 0.2},
{"source": "XAB2", "target": "PRPF19", "value": 0.2},
{"source": "XAB2", "target": "CPSF2", "value": 0.2},
{"source": "XAB2", "target": "POLE", "value": 0.2},
{"source": "XAB2", "target": "UBC", "value": 0.2},
{"source": "XAB2", "target": "POLR2A", "value": 0.2},
{"source": "ZNRF3", "target": "PCGF3", "value": 0.2},
{"source": "ZNRF3", "target": "UBC", "value": 0.2},
{"source": "CCT3", "target": "AHSA1", "value": 0.2},
{"source": "CCT3", "target": "EIF2S1", "value": 0.2},
{"source": "CCT3", "target": "PSMA6", "value": 0.2},
{"source": "CCT3", "target": "RPS3", "value": 0.2},
{"source": "CCT3", "target": "KPNB1", "value": 0.2},
{"source": "CCT3", "target": "TUBA1B", "value": 0.2},
{"source": "CCT3", "target": "TUBB4B", "value": 0.2},
{"source": "CCT3", "target": "STIP1", "value": 0.2},
{"source": "CCT3", "target": "RPL3", "value": 0.2},
{"source": "CCT3", "target": "HSP90AB1", "value": 0.2},
{"source": "CCT3", "target": "PSMA8", "value": 0.2},
{"source": "CCT3", "target": "PSMA7", "value": 0.2},
{"source": "ATP1A4", "target": "ABCA7", "value": 0.2},
{"source": "ATP1A4", "target": "SLC9A1", "value": 0.2},
{"source": "ATP1A4", "target": "ATP1A1", "value": 0.2},
{"source": "ATP1A4", "target": "ATP2A2", "value": 0.2},
{"source": "RBPJ", "target": "JAG1", "value": 0.2},
{"source": "RBPJ", "target": "HDAC1", "value": 0.2},
{"source": "RBPJ", "target": "RUNX3", "value": 0.2},
{"source": "WWP2", "target": "JAG1", "value": 0.2},
{"source": "WWP2", "target": "UBC", "value": 0.2},
{"source": "CYBA", "target": "MLEC", "value": 0.2},
{"source": "CYBA", "target": "COPB1", "value": 0.2},
{"source": "CYBA", "target": "HMOX2", "value": 0.2},
{"source": "CYBA", "target": "RAB14", "value": 0.2},
{"source": "CYBA", "target": "HVCN1", "value": 0.2},
{"source": "CYBA", "target": "ANO6", "value": 0.2},
{"source": "PSMD11", "target": "PSMD10", "value": 0.2},
{"source": "PSMD11", "target": "PSMD7", "value": 0.2},
{"source": "PSMD11", "target": "PSMA2", "value": 0.2},
{"source": "PSMD11", "target": "NFKB1", "value": 0.2},
{"source": "PSMD11", "target": "PSMC1", "value": 0.2},
{"source": "PSMD11", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMD11", "target": "PSMA6", "value": 0.2},
{"source": "PSMD11", "target": "RPL35A", "value": 0.2},
{"source": "PSMD11", "target": "PSMB8", "value": 0.2},
{"source": "PSMD11", "target": "PSMA8", "value": 0.2},
{"source": "PSMD11", "target": "RPS8", "value": 0.2},
{"source": "PSMD11", "target": "PSMD1", "value": 0.2},
{"source": "PSMD11", "target": "RUNX3", "value": 0.2},
{"source": "PSMD11", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD11", "target": "WWP1", "value": 0.2},
{"source": "PSMD11", "target": "PSMC6", "value": 0.2},
{"source": "PSMD11", "target": "KPNB1", "value": 0.2},
{"source": "PSMD11", "target": "PSMA7", "value": 0.2},
{"source": "PSMD11", "target": "RPL27", "value": 0.2},
{"source": "PSMD11", "target": "UBC", "value": 0.2},
{"source": "SLC3A2", "target": "BSG", "value": 0.2},
{"source": "DCTN1", "target": "ARF5", "value": 0.2},
{"source": "DCTN1", "target": "GOSR1", "value": 0.2},
{"source": "DCTN1", "target": "COPB1", "value": 0.2},
{"source": "DCTN1", "target": "DYNC1LI2", "value": 0.2},
{"source": "DCTN1", "target": "RAB7A", "value": 0.2},
{"source": "DCTN1", "target": "COG1", "value": 0.2},
{"source": "DCTN1", "target": "TMED10", "value": 0.2},
{"source": "DCTN1", "target": "ARF4", "value": 0.2},
{"source": "DCTN1", "target": "KIF5B", "value": 0.2},
{"source": "DCTN1", "target": "COPG1", "value": 0.2},
{"source": "DCTN1", "target": "COPB2", "value": 0.2},
{"source": "DCTN1", "target": "TMED9", "value": 0.2},
{"source": "DCTN1", "target": "HSP90AA1", "value": 0.2},
{"source": "DCTN1", "target": "DYNC1H1", "value": 0.2},
{"source": "DCTN1", "target": "HLA-DRB1", "value": 0.2},
{"source": "DCTN1", "target": "HSP90AB1", "value": 0.2},
{"source": "DCTN1", "target": "COPZ1", "value": 0.2},
{"source": "DCTN1", "target": "HLA-DMB", "value": 0.2},
{"source": "DCTN1", "target": "SPTBN2", "value": 0.2},
{"source": "DCTN1", "target": "RAB1A", "value": 0.2},
{"source": "DCTN1", "target": "COPG2", "value": 0.2},
{"source": "TSR1", "target": "RRP9", "value": 0.2},
{"source": "TSR1", "target": "NIP7", "value": 0.2},
{"source": "TSR1", "target": "NAT10", "value": 0.2},
{"source": "TSR1", "target": "DDX18", "value": 0.2},
{"source": "TSR1", "target": "RPS3", "value": 0.2},
{"source": "TSR1", "target": "RPS23", "value": 0.2},
{"source": "TSR1", "target": "POLR2A", "value": 0.2},
{"source": "TSR1", "target": "NOC3L", "value": 0.2},
{"source": "TSR1", "target": "WDR18", "value": 0.2},
{"source": "TSR1", "target": "KRI1", "value": 0.2},
{"source": "TSR1", "target": "WDR36", "value": 0.2},
{"source": "TSR1", "target": "POLR1B", "value": 0.2},
{"source": "TSR1", "target": "RBM19", "value": 0.2},
{"source": "TSR1", "target": "RPS26", "value": 0.2},
{"source": "TSR1", "target": "RPS15A", "value": 0.2},
{"source": "TSR1", "target": "RPS6", "value": 0.2},
{"source": "TSR1", "target": "RPS8", "value": 0.2},
{"source": "TSR1", "target": "RPS21", "value": 0.2},
{"source": "TSR1", "target": "DDX10", "value": 0.2},
{"source": "P4HB", "target": "APOB", "value": 0.2},
{"source": "P4HB", "target": "ENO1", "value": 0.2},
{"source": "P4HB", "target": "EIF2S1", "value": 0.2},
{"source": "P4HB", "target": "P4HA1", "value": 0.2},
{"source": "P4HB", "target": "HSP90B1", "value": 0.2},
{"source": "P4HB", "target": "COL23A1", "value": 0.2},
{"source": "P4HB", "target": "TGOLN2", "value": 0.2},
{"source": "P4HB", "target": "HSP90AA1", "value": 0.2},
{"source": "P4HB", "target": "HSP90AB1", "value": 0.2},
{"source": "NFKB1", "target": "PSMD10", "value": 0.2},
{"source": "NFKB1", "target": "PSMD7", "value": 0.2},
{"source": "NFKB1", "target": "PSMA2", "value": 0.2},
{"source": "NFKB1", "target": "PSMC6", "value": 0.2},
{"source": "NFKB1", "target": "PSMC1", "value": 0.2},
{"source": "NFKB1", "target": "SRC", "value": 0.2},
{"source": "NFKB1", "target": "CTSD", "value": 0.2},
{"source": "NFKB1", "target": "UBC", "value": 0.2},
{"source": "NFKB1", "target": "HSP90AB1", "value": 0.2},
{"source": "NFKB1", "target": "PSMB8", "value": 0.2},
{"source": "NFKB1", "target": "KPNB1", "value": 0.2},
{"source": "NFKB1", "target": "PSMD1", "value": 0.2},
{"source": "NFKB1", "target": "PSMA8", "value": 0.2},
{"source": "NFKB1", "target": "HDAC1", "value": 0.2},
{"source": "NFKB1", "target": "LYN", "value": 0.2},
{"source": "NFKB1", "target": "PSMA6", "value": 0.2},
{"source": "NFKB1", "target": "B2M", "value": 0.2},
{"source": "NFKB1", "target": "PSMA7", "value": 0.2},
{"source": "MYH2", "target": "MYH1", "value": 0.2},
{"source": "MYH2", "target": "MYH3", "value": 0.2},
{"source": "MYH2", "target": "MYH11", "value": 0.2},
{"source": "MYH2", "target": "MYH8", "value": 0.2},
{"source": "MYH2", "target": "RHOA", "value": 0.2},
{"source": "MYH2", "target": "MYH4", "value": 0.2},
{"source": "MYH2", "target": "TTN", "value": 0.2},
{"source": "MYH2", "target": "MYBPC1", "value": 0.2},
{"source": "MYH2", "target": "MYH14", "value": 0.2},
{"source": "MYH2", "target": "TNNT3", "value": 0.2},
{"source": "MYH2", "target": "ITGB1", "value": 0.2},
{"source": "MYH2", "target": "MYLPF", "value": 0.2},
{"source": "HSP90AB1", "target": "AHSA1", "value": 0.2},
{"source": "HSP90AB1", "target": "STUB1", "value": 0.2},
{"source": "HSP90AB1", "target": "DNAJB1", "value": 0.2},
{"source": "HSP90AB1", "target": "DYNC1LI2", "value": 0.2},
{"source": "HSP90AB1", "target": "HSP90B1", "value": 0.2},
{"source": "HSP90AB1", "target": "HSP90AA1", "value": 0.2},
{"source": "HSP90AB1", "target": "RPL3", "value": 0.2},
{"source": "HSP90AB1", "target": "DYNC1H1", "value": 0.2},
{"source": "HSP90AB1", "target": "CALM1", "value": 0.2},
{"source": "HSP90AB1", "target": "STIP1", "value": 0.2},
{"source": "HSP90AB1", "target": "DNAJB4", "value": 0.2},
{"source": "HSP90AB1", "target": "TLE3", "value": 0.2},
{"source": "HSP90AB1", "target": "SRC", "value": 0.2},
{"source": "POLE", "target": "RFC2", "value": 0.2},
{"source": "POLE", "target": "POLR2C", "value": 0.2},
{"source": "POLE", "target": "PRPF19", "value": 0.2},
{"source": "POLE", "target": "SMC2", "value": 0.2},
{"source": "POLE", "target": "WDR48", "value": 0.2},
{"source": "POLE", "target": "DUT", "value": 0.2},
{"source": "POLE", "target": "POLR2A", "value": 0.2},
{"source": "POLE", "target": "TOP2A", "value": 0.2},
{"source": "POLE", "target": "UBC", "value": 0.2},
{"source": "POLE", "target": "RAD50", "value": 0.2},
{"source": "POLE", "target": "ORC4", "value": 0.2},
{"source": "OCLN", "target": "YES1", "value": 0.2},
{"source": "OCLN", "target": "SRC", "value": 0.2},
{"source": "OCLN", "target": "RHOA", "value": 0.2},
{"source": "TNNT3", "target": "MYH1", "value": 0.2},
{"source": "TNNT3", "target": "MYH4", "value": 0.2},
{"source": "TNNT3", "target": "MYH8", "value": 0.2},
{"source": "TNNT3", "target": "MYH3", "value": 0.2},
{"source": "TNNT3", "target": "TPM2", "value": 0.2},
{"source": "TNNT3", "target": "DES", "value": 0.2},
{"source": "TNNT3", "target": "MYBPC1", "value": 0.2},
{"source": "TNNT3", "target": "MYLPF", "value": 0.2},
{"source": "TNNT3", "target": "TTN", "value": 0.2},
{"source": "CPSF2", "target": "POLR2C", "value": 0.2},
{"source": "CPSF2", "target": "DDX5", "value": 0.2},
{"source": "CPSF2", "target": "PRPF19", "value": 0.2},
{"source": "CPSF2", "target": "ZC3H3", "value": 0.2},
{"source": "CPSF2", "target": "PPP1CC", "value": 0.2},
{"source": "CPSF2", "target": "POLR2A", "value": 0.2},
{"source": "CPSF2", "target": "TPR", "value": 0.2},
{"source": "PSMD10", "target": "PSMA2", "value": 0.2},
{"source": "PSMD10", "target": "PSMC6", "value": 0.2},
{"source": "PSMD10", "target": "PSMD7", "value": 0.2},
{"source": "PSMD10", "target": "UBC", "value": 0.2},
{"source": "PSMD10", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD10", "target": "WWP1", "value": 0.2},
{"source": "PSMD10", "target": "PSMA6", "value": 0.2},
{"source": "PSMD10", "target": "PSMB8", "value": 0.2},
{"source": "PSMD10", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMD10", "target": "PSMA7", "value": 0.2},
{"source": "PSMD10", "target": "PSMD1", "value": 0.2},
{"source": "PSMD10", "target": "PSMA8", "value": 0.2},
{"source": "PSMD10", "target": "PSMC1", "value": 0.2},
{"source": "PSMD10", "target": "RUNX3", "value": 0.2},
{"source": "OPA1", "target": "MFN2", "value": 0.2},
{"source": "OPA1", "target": "PARK2", "value": 0.2},
{"source": "LMNB1", "target": "H2AFJ", "value": 0.2},
{"source": "LMNB1", "target": "TOP2A", "value": 0.2},
{"source": "LMNB1", "target": "PLEC1", "value": 0.2},
{"source": "CAPNS1", "target": "ITGB1", "value": 0.2},
{"source": "CAPNS1", "target": "RHOA", "value": 0.2},
{"source": "CAPNS1", "target": "SRC", "value": 0.2},
{"source": "DES", "target": "MYBPC1", "value": 0.2},
{"source": "DES", "target": "TTN", "value": 0.2},
{"source": "DES", "target": "TPM2", "value": 0.2},
{"source": "DES", "target": "MYH3", "value": 0.2},
{"source": "DES", "target": "MYH8", "value": 0.2},
{"source": "MYH11", "target": "MYH1", "value": 0.2},
{"source": "MYH11", "target": "MYH4", "value": 0.2},
{"source": "MYH11", "target": "ITGB5", "value": 0.2},
{"source": "MYH11", "target": "MYLPF", "value": 0.2},
{"source": "MYH11", "target": "TPM2", "value": 0.2},
{"source": "MYH11", "target": "MYH8", "value": 0.2},
{"source": "MYH11", "target": "MYH3", "value": 0.2},
{"source": "MYH11", "target": "RHOA", "value": 0.2},
{"source": "MYH11", "target": "TTN", "value": 0.2},
{"source": "MYH11", "target": "MYH14", "value": 0.2},
{"source": "NEDD4", "target": "STUB1", "value": 0.2},
{"source": "NEDD4", "target": "UBE3A", "value": 0.2},
{"source": "NEDD4", "target": "MGRN1", "value": 0.2},
{"source": "NEDD4", "target": "UBE3C", "value": 0.2},
{"source": "NEDD4", "target": "HUWE1", "value": 0.2},
{"source": "NEDD4", "target": "PARK2", "value": 0.2},
{"source": "NEDD4", "target": "UFL1", "value": 0.2},
{"source": "NEDD4", "target": "UBR2", "value": 0.2},
{"source": "NEDD4", "target": "HERC1", "value": 0.2},
{"source": "NEDD4", "target": "WWP1", "value": 0.2},
{"source": "NEDD4", "target": "UBC", "value": 0.2},
{"source": "NEDD4", "target": "RNF130", "value": 0.2},
{"source": "NEDD4", "target": "LYN", "value": 0.2},
{"source": "MGRN1", "target": "STUB1", "value": 0.2},
{"source": "MGRN1", "target": "UBE3A", "value": 0.2},
{"source": "MGRN1", "target": "UFL1", "value": 0.2},
{"source": "MGRN1", "target": "UBR2", "value": 0.2},
{"source": "MGRN1", "target": "UBC", "value": 0.2},
{"source": "MGRN1", "target": "HERC1", "value": 0.2},
{"source": "MGRN1", "target": "HUWE1", "value": 0.2},
{"source": "MGRN1", "target": "RNF130", "value": 0.2},
{"source": "MGRN1", "target": "WWP1", "value": 0.2},
{"source": "MGRN1", "target": "UBE3C", "value": 0.2},
{"source": "MGRN1", "target": "PARK2", "value": 0.2},
{"source": "RAD50", "target": "RFC2", "value": 0.2},
{"source": "RAD50", "target": "H2AFJ", "value": 0.2},
{"source": "RAD50", "target": "UBC", "value": 0.2},
{"source": "RPS23", "target": "POLR2C", "value": 0.2},
{"source": "RPS23", "target": "RPL18A", "value": 0.2},
{"source": "RPS23", "target": "RRP9", "value": 0.2},
{"source": "RPS23", "target": "EIF2S1", "value": 0.2},
{"source": "RPS23", "target": "NAT10", "value": 0.2},
{"source": "RPS23", "target": "RPS3", "value": 0.2},
{"source": "RPS23", "target": "EIF5B", "value": 0.2},
{"source": "RPS23", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS23", "target": "RPS6", "value": 0.2},
{"source": "RPS23", "target": "EIF3B", "value": 0.2},
{"source": "RPS23", "target": "RPS15A", "value": 0.2},
{"source": "RPS23", "target": "RPL27", "value": 0.2},
{"source": "RPS23", "target": "RPS26", "value": 0.2},
{"source": "RPS23", "target": "RPS8", "value": 0.2},
{"source": "RPS23", "target": "RPL12", "value": 0.2},
{"source": "RPS23", "target": "PLEC1", "value": 0.2},
{"source": "RPS23", "target": "RPLP2", "value": 0.2},
{"source": "RPS23", "target": "RPL29", "value": 0.2},
{"source": "RPS23", "target": "RPL35A", "value": 0.2},
{"source": "RPS23", "target": "RPL3", "value": 0.2},
{"source": "RPS23", "target": "RPS21", "value": 0.2},
{"source": "RPS23", "target": "RPL28", "value": 0.2},
{"source": "RPS23", "target": "WDR36", "value": 0.2},
{"source": "PRPF19", "target": "RFC2", "value": 0.2},
{"source": "PRPF19", "target": "POLR2C", "value": 0.2},
{"source": "PRPF19", "target": "DDX5", "value": 0.2},
{"source": "PRPF19", "target": "UBC", "value": 0.2},
{"source": "PRPF19", "target": "POLR2A", "value": 0.2},
{"source": "RPS21", "target": "RPL18A", "value": 0.2},
{"source": "RPS21", "target": "RRP9", "value": 0.2},
{"source": "RPS21", "target": "EIF2S1", "value": 0.2},
{"source": "RPS21", "target": "RPS3", "value": 0.2},
{"source": "RPS21", "target": "EIF5B", "value": 0.2},
{"source": "RPS21", "target": "RPS15A", "value": 0.2},
{"source": "RPS21", "target": "RPLP2", "value": 0.2},
{"source": "RPS21", "target": "PLEC1", "value": 0.2},
{"source": "RPS21", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS21", "target": "RPS26", "value": 0.2},
{"source": "RPS21", "target": "RPL12", "value": 0.2},
{"source": "RPS21", "target": "RPL35A", "value": 0.2},
{"source": "RPS21", "target": "EIF3B", "value": 0.2},
{"source": "RPS21", "target": "RPS8", "value": 0.2},
{"source": "RPS21", "target": "RPS6", "value": 0.2},
{"source": "RPS21", "target": "RPL3", "value": 0.2},
{"source": "RPS21", "target": "RPL28", "value": 0.2},
{"source": "RPS21", "target": "RPL27", "value": 0.2},
{"source": "RPS21", "target": "RPL29", "value": 0.2},
{"source": "RPS21", "target": "WDR36", "value": 0.2},
{"source": "P4HA1", "target": "COL23A1", "value": 0.2},
{"source": "CTSD", "target": "B2M", "value": 0.2},
{"source": "CTSD", "target": "KPNB1", "value": 0.2},
{"source": "CTSD", "target": "HLA-DRB1", "value": 0.2},
{"source": "CTSD", "target": "DBNL", "value": 0.2},
{"source": "CTSD", "target": "RAB7A", "value": 0.2},
{"source": "PLCG2", "target": "SRC", "value": 0.2},
{"source": "PLCG2", "target": "LYN", "value": 0.2},
{"source": "PLCG2", "target": "B2M", "value": 0.2},
{"source": "PLCG2", "target": "YES1", "value": 0.2},
{"source": "WDR36", "target": "RRP9", "value": 0.2},
{"source": "WDR36", "target": "NIP7", "value": 0.2},
{"source": "WDR36", "target": "NAT10", "value": 0.2},
{"source": "WDR36", "target": "DDX18", "value": 0.2},
{"source": "WDR36", "target": "EXOSC7", "value": 0.2},
{"source": "WDR36", "target": "RPS3", "value": 0.2},
{"source": "WDR36", "target": "DDX10", "value": 0.2},
{"source": "WDR36", "target": "RPS15A", "value": 0.2},
{"source": "WDR36", "target": "KRI1", "value": 0.2},
{"source": "WDR36", "target": "RPS26", "value": 0.2},
{"source": "WDR36", "target": "STIP1", "value": 0.2},
{"source": "WDR36", "target": "NOC3L", "value": 0.2},
{"source": "WDR36", "target": "RPS6", "value": 0.2},
{"source": "WDR36", "target": "RPS8", "value": 0.2},
{"source": "WDR36", "target": "RBM19", "value": 0.2},
{"source": "WDR36", "target": "WDR18", "value": 0.2},
{"source": "WDR36", "target": "POLR1B", "value": 0.2},
{"source": "DNAJA3", "target": "DNAJB1", "value": 0.2},
{"source": "DNAJA3", "target": "GRPEL1", "value": 0.2},
{"source": "DNAJA3", "target": "DNAJB4", "value": 0.2},
{"source": "DNAJA3", "target": "HSP90AA1", "value": 0.2},
{"source": "EIF3B", "target": "PSMD7", "value": 0.2},
{"source": "EIF3B", "target": "RPL18A", "value": 0.2},
{"source": "EIF3B", "target": "EIF2S1", "value": 0.2},
{"source": "EIF3B", "target": "RPS3", "value": 0.2},
{"source": "EIF3B", "target": "EIF5B", "value": 0.2},
{"source": "EIF3B", "target": "KPNB1", "value": 0.2},
{"source": "EIF3B", "target": "RPS15A", "value": 0.2},
{"source": "EIF3B", "target": "RPLP2", "value": 0.2},
{"source": "EIF3B", "target": "PLEC1", "value": 0.2},
{"source": "EIF3B", "target": "RPL3", "value": 0.2},
{"source": "EIF3B", "target": "RPS26", "value": 0.2},
{"source": "EIF3B", "target": "RPS8", "value": 0.2},
{"source": "EIF3B", "target": "POLR1B", "value": 0.2},
{"source": "EIF3B", "target": "RPS6", "value": 0.2},
{"source": "EIF3B", "target": "RPL12", "value": 0.2},
{"source": "EIF3B", "target": "RPL35A", "value": 0.2},
{"source": "EIF3B", "target": "RPL28", "value": 0.2},
{"source": "EIF3B", "target": "RPL27", "value": 0.2},
{"source": "EIF3B", "target": "RPL29", "value": 0.2},
{"source": "TTLL12", "target": "DNAJB1", "value": 0.2},
{"source": "UBR2", "target": "STUB1", "value": 0.2},
{"source": "UBR2", "target": "UBE3A", "value": 0.2},
{"source": "UBR2", "target": "UBE3C", "value": 0.2},
{"source": "UBR2", "target": "HUWE1", "value": 0.2},
{"source": "UBR2", "target": "PARK2", "value": 0.2},
{"source": "UBR2", "target": "UFL1", "value": 0.2},
{"source": "UBR2", "target": "HERC1", "value": 0.2},
{"source": "UBR2", "target": "UBC", "value": 0.2},
{"source": "UBR2", "target": "RNF130", "value": 0.2},
{"source": "UBR2", "target": "WWP1", "value": 0.2},
{"source": "TMED10", "target": "ARF5", "value": 0.2},
{"source": "TMED10", "target": "ZW10", "value": 0.2},
{"source": "TMED10", "target": "GOSR1", "value": 0.2},
{"source": "TMED10", "target": "COPB1", "value": 0.2},
{"source": "TMED10", "target": "DYNC1LI2", "value": 0.2},
{"source": "TMED10", "target": "NAPA", "value": 0.2},
{"source": "TMED10", "target": "COG1", "value": 0.2},
{"source": "TMED10", "target": "TMED9", "value": 0.2},
{"source": "TMED10", "target": "DYNC1H1", "value": 0.2},
{"source": "TMED10", "target": "COPB2", "value": 0.2},
{"source": "TMED10", "target": "ARF4", "value": 0.2},
{"source": "TMED10", "target": "COPG2", "value": 0.2},
{"source": "TMED10", "target": "COPZ1", "value": 0.2},
{"source": "TMED10", "target": "SPTBN2", "value": 0.2},
{"source": "TMED10", "target": "RAB1A", "value": 0.2},
{"source": "TMED10", "target": "KIF5B", "value": 0.2},
{"source": "TMED10", "target": "COPG1", "value": 0.2},
{"source": "PSMB8", "target": "PSMD7", "value": 0.2},
{"source": "PSMB8", "target": "PSMA2", "value": 0.2},
{"source": "PSMB8", "target": "PSMC1", "value": 0.2},
{"source": "PSMB8", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMB8", "target": "PSMA6", "value": 0.2},
{"source": "PSMB8", "target": "PSMD1", "value": 0.2},
{"source": "PSMB8", "target": "PSMA8", "value": 0.2},
{"source": "PSMB8", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMB8", "target": "PSMA7", "value": 0.2},
{"source": "PSMB8", "target": "HLA-B", "value": 0.2},
{"source": "PSMB8", "target": "UBC", "value": 0.2},
{"source": "PSMB8", "target": "WWP1", "value": 0.2},
{"source": "PSMB8", "target": "PSMC6", "value": 0.2},
{"source": "PSMB8", "target": "RUNX3", "value": 0.2},
{"source": "HDAC1", "target": "UBE3A", "value": 0.2},
{"source": "HDAC1", "target": "YY1", "value": 0.2},
{"source": "HDAC1", "target": "SMARCA2", "value": 0.2},
{"source": "HDAC1", "target": "H2AFJ", "value": 0.2},
{"source": "HDAC1", "target": "TLE3", "value": 0.2},
{"source": "HDAC1", "target": "SMARCA4", "value": 0.2},
{"source": "TPI1", "target": "HLA-DRB1", "value": 0.2},
{"source": "TPI1", "target": "ENO1", "value": 0.2},
{"source": "SRC", "target": "ITGA3", "value": 0.2},
{"source": "SRC", "target": "ITGB5", "value": 0.2},
{"source": "SRC", "target": "PTPN2", "value": 0.2},
{"source": "SRC", "target": "GNAI2", "value": 0.2},
{"source": "SRC", "target": "HSP90AA1", "value": 0.2},
{"source": "SRC", "target": "CALM1", "value": 0.2},
{"source": "SRC", "target": "ITGB1", "value": 0.2},
{"source": "SRC", "target": "LYN", "value": 0.2},
{"source": "SRC", "target": "RUNX3", "value": 0.2},
{"source": "SRC", "target": "RHOA", "value": 0.2},
{"source": "SRC", "target": "S1PR3", "value": 0.2},
{"source": "SRC", "target": "GNA13", "value": 0.2},
{"source": "SRC", "target": "YES1", "value": 0.2},
{"source": "SRC", "target": "UBC", "value": 0.2},
{"source": "RAB7A", "target": "DYNC1LI2", "value": 0.2},
{"source": "RAB7A", "target": "RAB10", "value": 0.2},
{"source": "RAB7A", "target": "HLA-DMB", "value": 0.2},
{"source": "RAB7A", "target": "RAB8A", "value": 0.2},
{"source": "RAB7A", "target": "RAB11B", "value": 0.2},
{"source": "RAB7A", "target": "HLA-DRB1", "value": 0.2},
{"source": "RAB7A", "target": "KIF5B", "value": 0.2},
{"source": "RAB7A", "target": "DYNC1H1", "value": 0.2},
{"source": "RAB7A", "target": "RAB1A", "value": 0.2},
{"source": "RAB7A", "target": "RAB14", "value": 0.2},
{"source": "RAB7A", "target": "SPTBN2", "value": 0.2},
{"source": "RAB7A", "target": "VPS35", "value": 0.2},
{"source": "MYH3", "target": "MYH1", "value": 0.2},
{"source": "MYH3", "target": "MYH4", "value": 0.2},
{"source": "MYH3", "target": "MYLPF", "value": 0.2},
{"source": "MYH3", "target": "TPM2", "value": 0.2},
{"source": "MYH3", "target": "MYH8", "value": 0.2},
{"source": "MYH3", "target": "MYBPC1", "value": 0.2},
{"source": "MYH3", "target": "MYH14", "value": 0.2},
{"source": "MYH3", "target": "TTN", "value": 0.2},
{"source": "RAB1A", "target": "ARF5", "value": 0.2},
{"source": "RAB1A", "target": "ZW10", "value": 0.2},
{"source": "RAB1A", "target": "GOSR1", "value": 0.2},
{"source": "RAB1A", "target": "COPB1", "value": 0.2},
{"source": "RAB1A", "target": "DYNC1LI2", "value": 0.2},
{"source": "RAB1A", "target": "NAPA", "value": 0.2},
{"source": "RAB1A", "target": "RAB10", "value": 0.2},
{"source": "RAB1A", "target": "COG1", "value": 0.2},
{"source": "RAB1A", "target": "RAB8A", "value": 0.2},
{"source": "RAB1A", "target": "ARF4", "value": 0.2},
{"source": "RAB1A", "target": "KIF5B", "value": 0.2},
{"source": "RAB1A", "target": "COPG1", "value": 0.2},
{"source": "RAB1A", "target": "COPB2", "value": 0.2},
{"source": "RAB1A", "target": "TMED9", "value": 0.2},
{"source": "RAB1A", "target": "RAB11B", "value": 0.2},
{"source": "RAB1A", "target": "DYNC1H1", "value": 0.2},
{"source": "RAB1A", "target": "RAB14", "value": 0.2},
{"source": "RAB1A", "target": "COPZ1", "value": 0.2},
{"source": "RAB1A", "target": "COPG2", "value": 0.2},
{"source": "RAB1A", "target": "SPTBN2", "value": 0.2},
{"source": "SMARCA2", "target": "BCL7A", "value": 0.2},
{"source": "SMARCA2", "target": "SMARCA4", "value": 0.2},
{"source": "DYNC1H1", "target": "ARF5", "value": 0.2},
{"source": "DYNC1H1", "target": "ZW10", "value": 0.2},
{"source": "DYNC1H1", "target": "GOSR1", "value": 0.2},
{"source": "DYNC1H1", "target": "COPB1", "value": 0.2},
{"source": "DYNC1H1", "target": "DYNC1LI2", "value": 0.2},
{"source": "DYNC1H1", "target": "PPP2R5A", "value": 0.2},
{"source": "DYNC1H1", "target": "COG1", "value": 0.2},
{"source": "DYNC1H1", "target": "RAB8A", "value": 0.2},
{"source": "DYNC1H1", "target": "ARF4", "value": 0.2},
{"source": "DYNC1H1", "target": "KIF5B", "value": 0.2},
{"source": "DYNC1H1", "target": "PSMD1", "value": 0.2},
{"source": "DYNC1H1", "target": "PPP2R1A", "value": 0.2},
{"source": "DYNC1H1", "target": "COPG1", "value": 0.2},
{"source": "DYNC1H1", "target": "COPB2", "value": 0.2},
{"source": "DYNC1H1", "target": "TMED9", "value": 0.2},
{"source": "DYNC1H1", "target": "HSP90AA1", "value": 0.2},
{"source": "DYNC1H1", "target": "TUBA1B", "value": 0.2},
{"source": "DYNC1H1", "target": "TUBB4B", "value": 0.2},
{"source": "DYNC1H1", "target": "PPP1CC", "value": 0.2},
{"source": "DYNC1H1", "target": "OFD1", "value": 0.2},
{"source": "DYNC1H1", "target": "COPG2", "value": 0.2},
{"source": "DYNC1H1", "target": "NEDD1", "value": 0.2},
{"source": "DYNC1H1", "target": "HLA-DRB1", "value": 0.2},
{"source": "DYNC1H1", "target": "HAUS6", "value": 0.2},
{"source": "DYNC1H1", "target": "TCTN3", "value": 0.2},
{"source": "DYNC1H1", "target": "SPTBN2", "value": 0.2},
{"source": "DYNC1H1", "target": "TPR", "value": 0.2},
{"source": "DYNC1H1", "target": "CKAP5", "value": 0.2},
{"source": "DYNC1H1", "target": "COPZ1", "value": 0.2},
{"source": "DYNC1H1", "target": "HLA-DMB", "value": 0.2},
{"source": "ARF4", "target": "ARF5", "value": 0.2},
{"source": "ARF4", "target": "COPB1", "value": 0.2},
{"source": "ARF4", "target": "DYNC1LI2", "value": 0.2},
{"source": "ARF4", "target": "RAB8A", "value": 0.2},
{"source": "ARF4", "target": "COPB2", "value": 0.2},
{"source": "ARF4", "target": "COPG2", "value": 0.2},
{"source": "ARF4", "target": "COPG1", "value": 0.2},
{"source": "ARF4", "target": "COPZ1", "value": 0.2},
{"source": "ARF4", "target": "SPTBN2", "value": 0.2},
{"source": "ARF4", "target": "KIF5B", "value": 0.2},
{"source": "ARF4", "target": "TMED9", "value": 0.2},
{"source": "RPS6", "target": "RPL18A", "value": 0.2},
{"source": "RPS6", "target": "RRP9", "value": 0.2},
{"source": "RPS6", "target": "NIP7", "value": 0.2},
{"source": "RPS6", "target": "HSPBP1", "value": 0.2},
{"source": "RPS6", "target": "EIF2S1", "value": 0.2},
{"source": "RPS6", "target": "NAT10", "value": 0.2},
{"source": "RPS6", "target": "PSMC1", "value": 0.2},
{"source": "RPS6", "target": "EXOSC7", "value": 0.2},
{"source": "RPS6", "target": "RPS3", "value": 0.2},
{"source": "RPS6", "target": "EIF5B", "value": 0.2},
{"source": "RPS6", "target": "RPS15A", "value": 0.2},
{"source": "RPS6", "target": "RPLP2", "value": 0.2},
{"source": "RPS6", "target": "PLEC1", "value": 0.2},
{"source": "RPS6", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS6", "target": "RPL3", "value": 0.2},
{"source": "RPS6", "target": "RPS26", "value": 0.2},
{"source": "RPS6", "target": "RPL12", "value": 0.2},
{"source": "RPS6", "target": "RPL35A", "value": 0.2},
{"source": "RPS6", "target": "RPS8", "value": 0.2},
{"source": "RPS6", "target": "RPL28", "value": 0.2},
{"source": "RPS6", "target": "RPL27", "value": 0.2},
{"source": "RPS6", "target": "RPL29", "value": 0.2},
{"source": "RPS6", "target": "WDR18", "value": 0.2},
{"source": "HVCN1", "target": "MLEC", "value": 0.2},
{"source": "HVCN1", "target": "ANO6", "value": 0.2},
{"source": "HVCN1", "target": "HMOX2", "value": 0.2},
{"source": "MYLPF", "target": "MYH1", "value": 0.2},
{"source": "MYLPF", "target": "MYH4", "value": 0.2},
{"source": "MYLPF", "target": "ITGB5", "value": 0.2},
{"source": "MYLPF", "target": "TPM2", "value": 0.2},
{"source": "MYLPF", "target": "MYH8", "value": 0.2},
{"source": "MYLPF", "target": "MYH14", "value": 0.2},
{"source": "MYLPF", "target": "TTN", "value": 0.2},
{"source": "MYLPF", "target": "MYBPC1", "value": 0.2},
{"source": "ENO1", "target": "HLA-DRB1", "value": 0.2},
{"source": "CNTFR", "target": "IL6ST", "value": 0.2},
{"source": "CLTB", "target": "APOB", "value": 0.2},
{"source": "CLTB", "target": "TGOLN2", "value": 0.2},
{"source": "CLTB", "target": "LDLRAP1", "value": 0.2},
{"source": "CLTB", "target": "UBC", "value": 0.2},
{"source": "CLTB", "target": "LDLR", "value": 0.2},
{"source": "HSPBP1", "target": "AHSA1", "value": 0.2},
{"source": "HSPBP1", "target": "STUB1", "value": 0.2},
{"source": "HSPBP1", "target": "RPL18A", "value": 0.2},
{"source": "HSPBP1", "target": "DNAJB1", "value": 0.2},
{"source": "HSPBP1", "target": "RPS3", "value": 0.2},
{"source": "HSPBP1", "target": "HSP90AA1", "value": 0.2},
{"source": "HSPBP1", "target": "STIP1", "value": 0.2},
{"source": "PRDM16", "target": "TLE3", "value": 0.2},
{"source": "SMC2", "target": "H2AFJ", "value": 0.2},
{"source": "SMC2", "target": "TOP2A", "value": 0.2},
{"source": "MLEC", "target": "HMOX2", "value": 0.2},
{"source": "MLEC", "target": "ANO6", "value": 0.2},
{"source": "ITGA3", "target": "ITGB5", "value": 0.2},
{"source": "ITGA3", "target": "BSG", "value": 0.2},
{"source": "ITGA3", "target": "ITGB1", "value": 0.2},
{"source": "EXOSC7", "target": "RPL18A", "value": 0.2},
{"source": "EXOSC7", "target": "RRP9", "value": 0.2},
{"source": "EXOSC7", "target": "NIP7", "value": 0.2},
{"source": "EXOSC7", "target": "RPLP2", "value": 0.2},
{"source": "EXOSC7", "target": "RPL28", "value": 0.2},
{"source": "EXOSC7", "target": "RPL35A", "value": 0.2},
{"source": "EXOSC7", "target": "WDR18", "value": 0.2},
{"source": "EXOSC7", "target": "RPL3", "value": 0.2},
{"source": "EXOSC7", "target": "RPL12", "value": 0.2},
{"source": "EXOSC7", "target": "RPL27", "value": 0.2},
{"source": "EXOSC7", "target": "RPL29", "value": 0.2},
{"source": "RFC2", "target": "DUT", "value": 0.2},
{"source": "RFC2", "target": "WDR48", "value": 0.2},
{"source": "RFC2", "target": "POLR2A", "value": 0.2},
{"source": "RFC2", "target": "UBC", "value": 0.2},
{"source": "RFC2", "target": "POLR2C", "value": 0.2},
{"source": "DDX10", "target": "DDX5", "value": 0.2},
{"source": "DDX10", "target": "RRP9", "value": 0.2},
{"source": "DDX10", "target": "NIP7", "value": 0.2},
{"source": "DDX10", "target": "NAT10", "value": 0.2},
{"source": "DDX10", "target": "DDX18", "value": 0.2},
{"source": "DDX10", "target": "RBM19", "value": 0.2},
{"source": "DDX10", "target": "POLR1B", "value": 0.2},
{"source": "DDX10", "target": "KRI1", "value": 0.2},
{"source": "DDX10", "target": "WDR18", "value": 0.2},
{"source": "DDX10", "target": "NOC3L", "value": 0.2},
{"source": "INTS12", "target": "POLR2C", "value": 0.2},
{"source": "INTS12", "target": "INTS1", "value": 0.2},
{"source": "INTS12", "target": "POLR2A", "value": 0.2},
{"source": "BCL7A", "target": "SMARCA4", "value": 0.2},
{"source": "TTN", "target": "MYH1", "value": 0.2},
{"source": "TTN", "target": "MYH4", "value": 0.2},
{"source": "TTN", "target": "CALM1", "value": 0.2},
{"source": "TTN", "target": "TPM2", "value": 0.2},
{"source": "TTN", "target": "MYH8", "value": 0.2},
{"source": "TTN", "target": "MYBPC1", "value": 0.2},
{"source": "TTN", "target": "MYH14", "value": 0.2},
{"source": "RAB10", "target": "RAB8A", "value": 0.2},
{"source": "RAB10", "target": "RAB11B", "value": 0.2},
{"source": "RAB10", "target": "RAB14", "value": 0.2},
{"source": "HLA-DMB", "target": "DYNC1LI2", "value": 0.2},
{"source": "HLA-DMB", "target": "KIF5B", "value": 0.2},
{"source": "HLA-DMB", "target": "HLA-DRB1", "value": 0.2},
{"source": "HLA-DMB", "target": "SPTBN2", "value": 0.2},
{"source": "HLA-DMB", "target": "HLA-B", "value": 0.2},
{"source": "NOC3L", "target": "RRP9", "value": 0.2},
{"source": "NOC3L", "target": "NIP7", "value": 0.2},
{"source": "NOC3L", "target": "NAT10", "value": 0.2},
{"source": "NOC3L", "target": "DDX18", "value": 0.2},
{"source": "NOC3L", "target": "KRI1", "value": 0.2},
{"source": "NOC3L", "target": "WDR18", "value": 0.2},
{"source": "NOC3L", "target": "POLR1B", "value": 0.2},
{"source": "NOC3L", "target": "RBM19", "value": 0.2},
{"source": "MYH14", "target": "MYH1", "value": 0.2},
{"source": "MYH14", "target": "MYH4", "value": 0.2},
{"source": "MYH14", "target": "MYH8", "value": 0.2},
{"source": "MYH14", "target": "RHOA", "value": 0.2},
{"source": "GSK3A", "target": "PPP2R5A", "value": 0.2},
{"source": "DNAJB1", "target": "AHSA1", "value": 0.2},
{"source": "DNAJB1", "target": "STUB1", "value": 0.2},
{"source": "DNAJB1", "target": "STIP1", "value": 0.2},
{"source": "DNAJB1", "target": "HSP90AA1", "value": 0.2},
{"source": "DNAJB1", "target": "HSP90B1", "value": 0.2},
{"source": "DNAJB1", "target": "DNAJB4", "value": 0.2},
{"source": "DNAJB1", "target": "GRPEL1", "value": 0.2},
{"source": "LDLRAP1", "target": "APOB", "value": 0.2},
{"source": "LDLRAP1", "target": "UBC", "value": 0.2},
{"source": "LDLRAP1", "target": "LDLR", "value": 0.2},
{"source": "LDLRAP1", "target": "TGOLN2", "value": 0.2},
{"source": "HERC1", "target": "STUB1", "value": 0.2},
{"source": "HERC1", "target": "UBE3A", "value": 0.2},
{"source": "HERC1", "target": "UBE3C", "value": 0.2},
{"source": "HERC1", "target": "HUWE1", "value": 0.2},
{"source": "HERC1", "target": "PARK2", "value": 0.2},
{"source": "HERC1", "target": "UFL1", "value": 0.2},
{"source": "HERC1", "target": "WWP1", "value": 0.2},
{"source": "HERC1", "target": "UBC", "value": 0.2},
{"source": "HERC1", "target": "RNF130", "value": 0.2},
{"source": "BSG", "target": "ITGB1", "value": 0.2},
{"source": "BSG", "target": "MAG", "value": 0.2},
{"source": "RHOA", "target": "ARHGDIA", "value": 0.2},
{"source": "RHOA", "target": "KIF5B", "value": 0.2},
{"source": "RHOA", "target": "GNAI2", "value": 0.2},
{"source": "RHOA", "target": "BAIAP2", "value": 0.2},
{"source": "RHOA", "target": "HSP90AA1", "value": 0.2},
{"source": "RHOA", "target": "S1PR3", "value": 0.2},
{"source": "RHOA", "target": "MAG", "value": 0.2},
{"source": "RHOA", "target": "ITGB1", "value": 0.2},
{"source": "RHOA", "target": "YES1", "value": 0.2},
{"source": "RHOA", "target": "LYN", "value": 0.2},
{"source": "RHOA", "target": "UBC", "value": 0.2},
{"source": "RHOA", "target": "GNA13", "value": 0.2},
{"source": "BAIAP2", "target": "NCKAP1L", "value": 0.2},
{"source": "BAIAP2", "target": "C19orf25", "value": 0.2},
{"source": "BAIAP2", "target": "WIPF1", "value": 0.2},
{"source": "BAIAP2", "target": "HSP90AA1", "value": 0.2},
{"source": "FZD1", "target": "PPP2R5A", "value": 0.2},
{"source": "FZD1", "target": "PPP2R1A", "value": 0.2},
{"source": "FZD1", "target": "BAMBI", "value": 0.2},
{"source": "FURIN", "target": "COL23A1", "value": 0.2},
{"source": "FURIN", "target": "TGOLN2", "value": 0.2},
{"source": "ATP1A1", "target": "ABCA7", "value": 0.2},
{"source": "ATP1A1", "target": "SLC9A1", "value": 0.2},
{"source": "ATP1A1", "target": "ATP2A2", "value": 0.2},
{"source": "NAT10", "target": "DDX5", "value": 0.2},
{"source": "NAT10", "target": "RRP9", "value": 0.2},
{"source": "NAT10", "target": "NIP7", "value": 0.2},
{"source": "NAT10", "target": "RPS15A", "value": 0.2},
{"source": "NAT10", "target": "RBM19", "value": 0.2},
{"source": "NAT10", "target": "POLR1B", "value": 0.2},
{"source": "NAT10", "target": "DDX18", "value": 0.2},
{"source": "NAT10", "target": "WDR18", "value": 0.2},
{"source": "NAT10", "target": "RPS8", "value": 0.2},
{"source": "NAT10", "target": "KRI1", "value": 0.2},
{"source": "APOB", "target": "TGOLN2", "value": 0.2},
{"source": "APOB", "target": "LDLR", "value": 0.2},
{"source": "APOB", "target": "PPP2R5A", "value": 0.2},
{"source": "APOB", "target": "PPP2R1A", "value": 0.2},
{"source": "APOB", "target": "HSP90B1", "value": 0.2},
{"source": "APOB", "target": "UBC", "value": 0.2},
{"source": "PARK2", "target": "STUB1", "value": 0.2},
{"source": "PARK2", "target": "UBE3A", "value": 0.2},
{"source": "PARK2", "target": "MFN2", "value": 0.2},
{"source": "PARK2", "target": "VDAC1", "value": 0.2},
{"source": "PARK2", "target": "SOD1", "value": 0.2},
{"source": "PARK2", "target": "VPS35", "value": 0.2},
{"source": "PARK2", "target": "UBE3C", "value": 0.2},
{"source": "PARK2", "target": "HUWE1", "value": 0.2},
{"source": "PARK2", "target": "UFL1", "value": 0.2},
{"source": "PARK2", "target": "WWP1", "value": 0.2},
{"source": "PARK2", "target": "RNF130", "value": 0.2},
{"source": "PARK2", "target": "UBC", "value": 0.2},
{"source": "HAUS6", "target": "RAB8A", "value": 0.2},
{"source": "HAUS6", "target": "PPP2R1A", "value": 0.2},
{"source": "HAUS6", "target": "HSP90AA1", "value": 0.2},
{"source": "HAUS6", "target": "TUBB4B", "value": 0.2},
{"source": "HAUS6", "target": "OFD1", "value": 0.2},
{"source": "HAUS6", "target": "CKAP5", "value": 0.2},
{"source": "HAUS6", "target": "TCTN3", "value": 0.2},
{"source": "HAUS6", "target": "NEDD1", "value": 0.2},
{"source": "RPS15A", "target": "POLR2C", "value": 0.2},
{"source": "RPS15A", "target": "RPL18A", "value": 0.2},
{"source": "RPS15A", "target": "RRP9", "value": 0.2},
{"source": "RPS15A", "target": "EIF2S1", "value": 0.2},
{"source": "RPS15A", "target": "PSMC1", "value": 0.2},
{"source": "RPS15A", "target": "RPS3", "value": 0.2},
{"source": "RPS15A", "target": "EIF5B", "value": 0.2},
{"source": "RPS15A", "target": "RPL29", "value": 0.2},
{"source": "RPS15A", "target": "RPLP2", "value": 0.2},
{"source": "RPS15A", "target": "RPL12", "value": 0.2},
{"source": "RPS15A", "target": "RPS26", "value": 0.2},
{"source": "RPS15A", "target": "RPS8", "value": 0.2},
{"source": "RPS15A", "target": "RPL3", "value": 0.2},
{"source": "RPS15A", "target": "RPL28", "value": 0.2},
{"source": "RPS15A", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS15A", "target": "POLR1B", "value": 0.2},
{"source": "RPS15A", "target": "PLEC1", "value": 0.2},
{"source": "RPS15A", "target": "RPL35A", "value": 0.2},
{"source": "RPS15A", "target": "RPL27", "value": 0.2},
{"source": "COG1", "target": "GOSR1", "value": 0.2},
{"source": "COG1", "target": "COPB1", "value": 0.2},
{"source": "COG1", "target": "DYNC1LI2", "value": 0.2},
{"source": "COG1", "target": "STX6", "value": 0.2},
{"source": "COG1", "target": "NAPA", "value": 0.2},
{"source": "COG1", "target": "SPTBN2", "value": 0.2},
{"source": "COG1", "target": "COPG2", "value": 0.2},
{"source": "COG1", "target": "COPZ1", "value": 0.2},
{"source": "COG1", "target": "TGOLN2", "value": 0.2},
{"source": "COG1", "target": "COPB2", "value": 0.2},
{"source": "COG1", "target": "TMED9", "value": 0.2},
{"source": "COG1", "target": "COPG1", "value": 0.2},
{"source": "TMED9", "target": "ARF5", "value": 0.2},
{"source": "TMED9", "target": "ZW10", "value": 0.2},
{"source": "TMED9", "target": "GOSR1", "value": 0.2},
{"source": "TMED9", "target": "COPB1", "value": 0.2},
{"source": "TMED9", "target": "DYNC1LI2", "value": 0.2},
{"source": "TMED9", "target": "NAPA", "value": 0.2},
{"source": "TMED9", "target": "KIF5B", "value": 0.2},
{"source": "TMED9", "target": "COPG1", "value": 0.2},
{"source": "TMED9", "target": "COPB2", "value": 0.2},
{"source": "TMED9", "target": "COPZ1", "value": 0.2},
{"source": "TMED9", "target": "COPG2", "value": 0.2},
{"source": "TMED9", "target": "SPTBN2", "value": 0.2},
{"source": "EIF2S1", "target": "RPL18A", "value": 0.2},
{"source": "EIF2S1", "target": "NIP7", "value": 0.2},
{"source": "EIF2S1", "target": "RPL35A", "value": 0.2},
{"source": "EIF2S1", "target": "RPS8", "value": 0.2},
{"source": "EIF2S1", "target": "RPL27", "value": 0.2},
{"source": "EIF2S1", "target": "RPLP2", "value": 0.2},
{"source": "EIF2S1", "target": "KPNB1", "value": 0.2},
{"source": "EIF2S1", "target": "RPS26", "value": 0.2},
{"source": "EIF2S1", "target": "RPL3", "value": 0.2},
{"source": "EIF2S1", "target": "PLEC1", "value": 0.2},
{"source": "EIF2S1", "target": "EIF5B", "value": 0.2},
{"source": "EIF2S1", "target": "RPL28", "value": 0.2},
{"source": "EIF2S1", "target": "RPL29", "value": 0.2},
{"source": "EIF2S1", "target": "RPS3", "value": 0.2},
{"source": "EIF2S1", "target": "HSP90AA1", "value": 0.2},
{"source": "EIF2S1", "target": "RPL12", "value": 0.2},
{"source": "RAB14", "target": "COPB1", "value": 0.2},
{"source": "RAB14", "target": "RAB8A", "value": 0.2},
{"source": "RAB14", "target": "RAB11B", "value": 0.2},
{"source": "RAB14", "target": "ANO6", "value": 0.2},
{"source": "SPTBN2", "target": "ARF5", "value": 0.2},
{"source": "SPTBN2", "target": "GOSR1", "value": 0.2},
{"source": "SPTBN2", "target": "COPB1", "value": 0.2},
{"source": "SPTBN2", "target": "DYNC1LI2", "value": 0.2},
{"source": "SPTBN2", "target": "NAPA", "value": 0.2},
{"source": "SPTBN2", "target": "KIF5B", "value": 0.2},
{"source": "SPTBN2", "target": "COPG1", "value": 0.2},
{"source": "SPTBN2", "target": "COPB2", "value": 0.2},
{"source": "SPTBN2", "target": "HLA-DRB1", "value": 0.2},
{"source": "SPTBN2", "target": "COPG2", "value": 0.2},
{"source": "SPTBN2", "target": "COPZ1", "value": 0.2},
{"source": "MYH8", "target": "MYH1", "value": 0.2},
{"source": "MYH8", "target": "MYH4", "value": 0.2},
{"source": "MYH8", "target": "TPM2", "value": 0.2},
{"source": "MYH8", "target": "MYBPC1", "value": 0.2},
{"source": "NT5C", "target": "DUT", "value": 0.2},
{"source": "ANO6", "target": "COPB1", "value": 0.2},
{"source": "ANO6", "target": "HMOX2", "value": 0.2},
{"source": "PIGO", "target": "MPDU1", "value": 0.2},
{"source": "NAPA", "target": "ZW10", "value": 0.2},
{"source": "NAPA", "target": "GOSR1", "value": 0.2},
{"source": "NAPA", "target": "COPB1", "value": 0.2},
{"source": "NAPA", "target": "STX6", "value": 0.2},
{"source": "NAPA", "target": "COPG2", "value": 0.2},
{"source": "NAPA", "target": "COPG1", "value": 0.2},
{"source": "NAPA", "target": "TGOLN2", "value": 0.2},
{"source": "NAPA", "target": "COPZ1", "value": 0.2},
{"source": "NAPA", "target": "COPB2", "value": 0.2},
{"source": "HSP90AA1", "target": "AHSA1", "value": 0.2},
{"source": "HSP90AA1", "target": "STUB1", "value": 0.2},
{"source": "HSP90AA1", "target": "UBE3A", "value": 0.2},
{"source": "HSP90AA1", "target": "DYNC1LI2", "value": 0.2},
{"source": "HSP90AA1", "target": "GRPEL1", "value": 0.2},
{"source": "HSP90AA1", "target": "SOD1", "value": 0.2},
{"source": "HSP90AA1", "target": "NCKAP1L", "value": 0.2},
{"source": "HSP90AA1", "target": "HSP90B1", "value": 0.2},
{"source": "HSP90AA1", "target": "RAB8A", "value": 0.2},
{"source": "HSP90AA1", "target": "PPP2R1A", "value": 0.2},
{"source": "HSP90AA1", "target": "CKAP5", "value": 0.2},
{"source": "HSP90AA1", "target": "TCTN3", "value": 0.2},
{"source": "HSP90AA1", "target": "UBC", "value": 0.2},
{"source": "HSP90AA1", "target": "RPL3", "value": 0.2},
{"source": "HSP90AA1", "target": "DNAJB4", "value": 0.2},
{"source": "HSP90AA1", "target": "TUBB4B", "value": 0.2},
{"source": "HSP90AA1", "target": "TLE3", "value": 0.2},
{"source": "HSP90AA1", "target": "STIP1", "value": 0.2},
{"source": "HSP90AA1", "target": "RPL29", "value": 0.2},
{"source": "HSP90AA1", "target": "CALM1", "value": 0.2},
{"source": "HSP90AA1", "target": "PSMA7", "value": 0.2},
{"source": "HSP90AA1", "target": "OFD1", "value": 0.2},
{"source": "HSP90AA1", "target": "DUT", "value": 0.2},
{"source": "HSP90AA1", "target": "NEDD1", "value": 0.2},
{"source": "TGOLN2", "target": "STX6", "value": 0.2},
{"source": "TGOLN2", "target": "HSP90B1", "value": 0.2},
{"source": "TGOLN2", "target": "LDLR", "value": 0.2},
{"source": "TGOLN2", "target": "UBC", "value": 0.2},
{"source": "WDR48", "target": "UBC", "value": 0.2},
{"source": "STUB1", "target": "UBE3A", "value": 0.2},
{"source": "STUB1", "target": "UBC", "value": 0.2},
{"source": "STUB1", "target": "HUWE1", "value": 0.2},
{"source": "STUB1", "target": "UFL1", "value": 0.2},
{"source": "STUB1", "target": "WWP1", "value": 0.2},
{"source": "STUB1", "target": "RNF130", "value": 0.2},
{"source": "STUB1", "target": "UBE3C", "value": 0.2},
{"source": "ABCA7", "target": "ATP2A2", "value": 0.2},
{"source": "ABCA7", "target": "SLC9A1", "value": 0.2},
{"source": "UFL1", "target": "UBE3A", "value": 0.2},
{"source": "UFL1", "target": "UBE3C", "value": 0.2},
{"source": "UFL1", "target": "HUWE1", "value": 0.2},
{"source": "UFL1", "target": "RNF130", "value": 0.2},
{"source": "UFL1", "target": "WWP1", "value": 0.2},
{"source": "UFL1", "target": "UBC", "value": 0.2},
{"source": "GABRA5", "target": "OPCML", "value": 0.2},
{"source": "OFD1", "target": "RAB8A", "value": 0.2},
{"source": "OFD1", "target": "PPP2R1A", "value": 0.2},
{"source": "OFD1", "target": "TUBB4B", "value": 0.2},
{"source": "OFD1", "target": "TCTN3", "value": 0.2},
{"source": "OFD1", "target": "CKAP5", "value": 0.2},
{"source": "OFD1", "target": "NEDD1", "value": 0.2},
{"source": "HUWE1", "target": "UBE3A", "value": 0.2},
{"source": "HUWE1", "target": "UBE3C", "value": 0.2},
{"source": "HUWE1", "target": "WWP1", "value": 0.2},
{"source": "HUWE1", "target": "UBC", "value": 0.2},
{"source": "HUWE1", "target": "RNF130", "value": 0.2},
{"source": "KRI1", "target": "RRP9", "value": 0.2},
{"source": "KRI1", "target": "NIP7", "value": 0.2},
{"source": "KRI1", "target": "DDX18", "value": 0.2},
{"source": "KRI1", "target": "RBM19", "value": 0.2},
{"source": "KRI1", "target": "POLR1B", "value": 0.2},
{"source": "WDR18", "target": "RPL18A", "value": 0.2},
{"source": "WDR18", "target": "RRP9", "value": 0.2},
{"source": "WDR18", "target": "NIP7", "value": 0.2},
{"source": "WDR18", "target": "DDX18", "value": 0.2},
{"source": "WDR18", "target": "RPLP2", "value": 0.2},
{"source": "WDR18", "target": "RPL3", "value": 0.2},
{"source": "WDR18", "target": "RPL12", "value": 0.2},
{"source": "WDR18", "target": "RPL29", "value": 0.2},
{"source": "WDR18", "target": "RPL35A", "value": 0.2},
{"source": "WDR18", "target": "RBM19", "value": 0.2},
{"source": "WDR18", "target": "POLR1B", "value": 0.2},
{"source": "WDR18", "target": "RPL28", "value": 0.2},
{"source": "WDR18", "target": "RPL27", "value": 0.2},
{"source": "PSMA6", "target": "PSMD7", "value": 0.2},
{"source": "PSMA6", "target": "PSMA2", "value": 0.2},
{"source": "PSMA6", "target": "PSMC1", "value": 0.2},
{"source": "PSMA6", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMA6", "target": "PSMC6", "value": 0.2},
{"source": "PSMA6", "target": "PSMD1", "value": 0.2},
{"source": "PSMA6", "target": "RUNX3", "value": 0.2},
{"source": "PSMA6", "target": "PSMA7", "value": 0.2},
{"source": "PSMA6", "target": "WWP1", "value": 0.2},
{"source": "PSMA6", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMA6", "target": "PSMA8", "value": 0.2},
{"source": "PSMA6", "target": "UBC", "value": 0.2},
{"source": "UBE3C", "target": "UBE3A", "value": 0.2},
{"source": "UBE3C", "target": "WWP1", "value": 0.2},
{"source": "UBE3C", "target": "RNF130", "value": 0.2},
{"source": "UBE3C", "target": "UBC", "value": 0.2},
{"source": "PSMA7", "target": "PSMD7", "value": 0.2},
{"source": "PSMA7", "target": "PSMA2", "value": 0.2},
{"source": "PSMA7", "target": "PSMC1", "value": 0.2},
{"source": "PSMA7", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMA7", "target": "RPS3", "value": 0.2},
{"source": "PSMA7", "target": "KPNB1", "value": 0.2},
{"source": "PSMA7", "target": "PSMD1", "value": 0.2},
{"source": "PSMA7", "target": "PSMA8", "value": 0.2},
{"source": "PSMA7", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMA7", "target": "PSMC6", "value": 0.2},
{"source": "PSMA7", "target": "WWP1", "value": 0.2},
{"source": "PSMA7", "target": "RPS8", "value": 0.2},
{"source": "PSMA7", "target": "UBC", "value": 0.2},
{"source": "PSMA7", "target": "RUNX3", "value": 0.2},
{"source": "TBCD", "target": "TUBA1B", "value": 0.2},
{"source": "TBCD", "target": "TUBB4B", "value": 0.2},
{"source": "YY1", "target": "POLR2C", "value": 0.2},
{"source": "YY1", "target": "POLR2A", "value": 0.2},
{"source": "YY1", "target": "H2AFJ", "value": 0.2},
{"source": "TPR", "target": "KPNB1", "value": 0.2},
{"source": "TPR", "target": "TOP2A", "value": 0.2},
{"source": "INTS1", "target": "POLR2C", "value": 0.2},
{"source": "INTS1", "target": "PPP2R1A", "value": 0.2},
{"source": "INTS1", "target": "POLR2A", "value": 0.2},
{"source": "LDLR", "target": "UBC", "value": 0.2},
{"source": "RRP9", "target": "RBM19", "value": 0.2},
{"source": "RRP9", "target": "RPS26", "value": 0.2},
{"source": "RRP9", "target": "RPS3", "value": 0.2},
{"source": "RRP9", "target": "DDX18", "value": 0.2},
{"source": "RRP9", "target": "NIP7", "value": 0.2},
{"source": "RRP9", "target": "POLR1B", "value": 0.2},
{"source": "RRP9", "target": "RPS8", "value": 0.2},
{"source": "ATP2A2", "target": "SLC9A1", "value": 0.2},
{"source": "MYH1", "target": "MYBPC1", "value": 0.2},
{"source": "MYH1", "target": "MYH4", "value": 0.2},
{"source": "BAMBI", "target": "BMPR1B", "value": 0.2},
{"source": "BAMBI", "target": "ACVR1B", "value": 0.2},
{"source": "LYN", "target": "PPP2R5A", "value": 0.2},
{"source": "LYN", "target": "GNAI2", "value": 0.2},
{"source": "LYN", "target": "PPP2R1A", "value": 0.2},
{"source": "LYN", "target": "WIPF1", "value": 0.2},
{"source": "LYN", "target": "YES1", "value": 0.2},
{"source": "PPP1CC", "target": "ZW10", "value": 0.2},
{"source": "PPP1CC", "target": "DYNC1LI2", "value": 0.2},
{"source": "PPP1CC", "target": "PPP2R5A", "value": 0.2},
{"source": "PPP1CC", "target": "PPP2R1A", "value": 0.2},
{"source": "PPP1CC", "target": "CKAP5", "value": 0.2},
{"source": "PPP1CC", "target": "CALM1", "value": 0.2},
{"source": "PPP1CC", "target": "POLR2A", "value": 0.2},
{"source": "PPP1CC", "target": "PPP4R2", "value": 0.2},
{"source": "ZW10", "target": "COPB2", "value": 0.2},
{"source": "ZW10", "target": "PPP2R1A", "value": 0.2},
{"source": "ZW10", "target": "DYNC1LI2", "value": 0.2},
{"source": "ZW10", "target": "KIF5B", "value": 0.2},
{"source": "ZW10", "target": "COPZ1", "value": 0.2},
{"source": "ZW10", "target": "COPG2", "value": 0.2},
{"source": "ZW10", "target": "PPP2R5A", "value": 0.2},
{"source": "ZW10", "target": "COPB1", "value": 0.2},
{"source": "ZW10", "target": "CKAP5", "value": 0.2},
{"source": "ZW10", "target": "COPG1", "value": 0.2},
{"source": "RNF130", "target": "UBE3A", "value": 0.2},
{"source": "RNF130", "target": "WWP1", "value": 0.2},
{"source": "RNF130", "target": "UBC", "value": 0.2},
{"source": "RBM19", "target": "NIP7", "value": 0.2},
{"source": "RBM19", "target": "DDX18", "value": 0.2},
{"source": "RBM19", "target": "POLR1B", "value": 0.2},
{"source": "CALM1", "target": "SLC9A1", "value": 0.2},
{"source": "CALM1", "target": "HSP90B1", "value": 0.2},
{"source": "CALM1", "target": "ADCY6", "value": 0.2},
{"source": "PTPN2", "target": "KPNB1", "value": 0.2},
{"source": "PTPN2", "target": "ITGB1", "value": 0.2},
{"source": "B2M", "target": "KPNB1", "value": 0.2},
{"source": "B2M", "target": "HLA-DRB1", "value": 0.2},
{"source": "B2M", "target": "HLA-B", "value": 0.2},
{"source": "B2M", "target": "DBNL", "value": 0.2},
{"source": "POLR2C", "target": "UBC", "value": 0.2},
{"source": "POLR2C", "target": "POLR3H", "value": 0.2},
{"source": "POLR2C", "target": "POLR1B", "value": 0.2},
{"source": "POLR2C", "target": "DDX5", "value": 0.2},
{"source": "POLR2C", "target": "RPS3", "value": 0.2},
{"source": "POLR2C", "target": "POLR2A", "value": 0.2},
{"source": "POLR2C", "target": "H2AFJ", "value": 0.2},
{"source": "PSMD7", "target": "WWP1", "value": 0.2},
{"source": "PSMD7", "target": "UBC", "value": 0.2},
{"source": "PSMD7", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD7", "target": "PSMA2", "value": 0.2},
{"source": "PSMD7", "target": "PSMC6", "value": 0.2},
{"source": "PSMD7", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMD7", "target": "PSMD1", "value": 0.2},
{"source": "PSMD7", "target": "PSMA8", "value": 0.2},
{"source": "PSMD7", "target": "PSMC1", "value": 0.2},
{"source": "PSMD7", "target": "RUNX3", "value": 0.2},
{"source": "STIP1", "target": "AHSA1", "value": 0.2},
{"source": "STIP1", "target": "HSP90B1", "value": 0.2},
{"source": "STIP1", "target": "DNAJB4", "value": 0.2},
{"source": "PSMD1", "target": "PSMA2", "value": 0.2},
{"source": "PSMD1", "target": "PSMC1", "value": 0.2},
{"source": "PSMD1", "target": "PPP2R5A", "value": 0.2},
{"source": "PSMD1", "target": "KPNB1", "value": 0.2},
{"source": "PSMD1", "target": "RUNX3", "value": 0.2},
{"source": "PSMD1", "target": "TUBB4B", "value": 0.2},
{"source": "PSMD1", "target": "PSMC6", "value": 0.2},
{"source": "PSMD1", "target": "RPS8", "value": 0.2},
{"source": "PSMD1", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMD1", "target": "PSMA8", "value": 0.2},
{"source": "PSMD1", "target": "UBC", "value": 0.2},
{"source": "PSMD1", "target": "RPL35A", "value": 0.2},
{"source": "PSMD1", "target": "RPL27", "value": 0.2},
{"source": "PSMD1", "target": "WWP1", "value": 0.2},
{"source": "POLR2A", "target": "DDX5", "value": 0.2},
{"source": "POLR2A", "target": "RPS3", "value": 0.2},
{"source": "POLR2A", "target": "SMARCA4", "value": 0.2},
{"source": "POLR2A", "target": "H2AFJ", "value": 0.2},
{"source": "POLR2A", "target": "UBC", "value": 0.2},
{"source": "POLR2A", "target": "POLR1B", "value": 0.2},
{"source": "RAB11B", "target": "RAB8A", "value": 0.2},
{"source": "DBNL", "target": "HLA-DRB1", "value": 0.2},
{"source": "DYNC1LI2", "target": "ARF5", "value": 0.2},
{"source": "DYNC1LI2", "target": "GOSR1", "value": 0.2},
{"source": "DYNC1LI2", "target": "COPB1", "value": 0.2},
{"source": "DYNC1LI2", "target": "PPP2R5A", "value": 0.2},
{"source": "DYNC1LI2", "target": "COPG1", "value": 0.2},
{"source": "DYNC1LI2", "target": "COPG2", "value": 0.2},
{"source": "DYNC1LI2", "target": "CKAP5", "value": 0.2},
{"source": "DYNC1LI2", "target": "KIF5B", "value": 0.2},
{"source": "DYNC1LI2", "target": "COPZ1", "value": 0.2},
{"source": "DYNC1LI2", "target": "COPB2", "value": 0.2},
{"source": "DYNC1LI2", "target": "HLA-DRB1", "value": 0.2},
{"source": "DYNC1LI2", "target": "PPP2R1A", "value": 0.2},
{"source": "DNAJB4", "target": "AHSA1", "value": 0.2},
{"source": "DNAJB4", "target": "GRPEL1", "value": 0.2},
{"source": "DDX18", "target": "DDX5", "value": 0.2},
{"source": "DDX18", "target": "NIP7", "value": 0.2},
{"source": "DDX18", "target": "POLR1B", "value": 0.2},
{"source": "TUBB4B", "target": "RAB8A", "value": 0.2},
{"source": "TUBB4B", "target": "PPP2R1A", "value": 0.2},
{"source": "TUBB4B", "target": "TUBA1B", "value": 0.2},
{"source": "TUBB4B", "target": "NEDD1", "value": 0.2},
{"source": "TUBB4B", "target": "TCTN3", "value": 0.2},
{"source": "TUBB4B", "target": "CKAP5", "value": 0.2},
{"source": "RPL27", "target": "RPL18A", "value": 0.2},
{"source": "RPL27", "target": "NIP7", "value": 0.2},
{"source": "RPL27", "target": "RPS3", "value": 0.2},
{"source": "RPL27", "target": "EIF5B", "value": 0.2},
{"source": "RPL27", "target": "KPNB1", "value": 0.2},
{"source": "RPL27", "target": "RPLP2", "value": 0.2},
{"source": "RPL27", "target": "PLEC1", "value": 0.2},
{"source": "RPL27", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL27", "target": "RPL3", "value": 0.2},
{"source": "RPL27", "target": "RPS26", "value": 0.2},
{"source": "RPL27", "target": "RPL12", "value": 0.2},
{"source": "RPL27", "target": "RPS8", "value": 0.2},
{"source": "RPL27", "target": "RPL29", "value": 0.2},
{"source": "RPL27", "target": "RPL35A", "value": 0.2},
{"source": "RPL27", "target": "RPL28", "value": 0.2},
{"source": "ITGB1", "target": "ITGB5", "value": 0.2},
{"source": "ITGB1", "target": "COL23A1", "value": 0.2},
{"source": "CNP", "target": "MAG", "value": 0.2},
{"source": "PPP2R5A", "target": "PSMA2", "value": 0.2},
{"source": "PPP2R5A", "target": "PSMC1", "value": 0.2},
{"source": "PPP2R5A", "target": "PSMA8", "value": 0.2},
{"source": "PPP2R5A", "target": "UBC", "value": 0.2},
{"source": "PPP2R5A", "target": "PPP2R1A", "value": 0.2},
{"source": "PPP2R5A", "target": "YES1", "value": 0.2},
{"source": "PPP2R5A", "target": "CKAP5", "value": 0.2},
{"source": "PPP2R5A", "target": "PPP4R2", "value": 0.2},
{"source": "PPP2R5A", "target": "PSMC6", "value": 0.2},
{"source": "COPG1", "target": "ARF5", "value": 0.2},
{"source": "COPG1", "target": "GOSR1", "value": 0.2},
{"source": "COPG1", "target": "COPB1", "value": 0.2},
{"source": "COPG1", "target": "KIF5B", "value": 0.2},
{"source": "COPG1", "target": "COPB2", "value": 0.2},
{"source": "COPG1", "target": "COPZ1", "value": 0.2},
{"source": "COPG1", "target": "COPG2", "value": 0.2},
{"source": "RPS3", "target": "RPL18A", "value": 0.2},
{"source": "RPS3", "target": "RPL12", "value": 0.2},
{"source": "RPS3", "target": "RPL29", "value": 0.2},
{"source": "RPS3", "target": "RPS26", "value": 0.2},
{"source": "RPS3", "target": "RPLP2", "value": 0.2},
{"source": "RPS3", "target": "POLR1B", "value": 0.2},
{"source": "RPS3", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS3", "target": "RPS8", "value": 0.2},
{"source": "RPS3", "target": "EIF5B", "value": 0.2},
{"source": "RPS3", "target": "PLEC1", "value": 0.2},
{"source": "RPS3", "target": "KPNB1", "value": 0.2},
{"source": "RPS3", "target": "RPL35A", "value": 0.2},
{"source": "RPS3", "target": "RPL28", "value": 0.2},
{"source": "RPS3", "target": "RPL3", "value": 0.2},
{"source": "AHSA1", "target": "HSP90B1", "value": 0.2},
{"source": "DDX5", "target": "POLR1B", "value": 0.2},
{"source": "DDX5", "target": "NIP7", "value": 0.2},
{"source": "PSMC6", "target": "PSMA2", "value": 0.2},
{"source": "PSMC6", "target": "PSMC1", "value": 0.2},
{"source": "PSMC6", "target": "PSMA8", "value": 0.2},
{"source": "PSMC6", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMC6", "target": "RUNX3", "value": 0.2},
{"source": "PSMC6", "target": "UBC", "value": 0.2},
{"source": "PSMC6", "target": "WWP1", "value": 0.2},
{"source": "COPZ1", "target": "ARF5", "value": 0.2},
{"source": "COPZ1", "target": "GOSR1", "value": 0.2},
{"source": "COPZ1", "target": "COPB1", "value": 0.2},
{"source": "COPZ1", "target": "KIF5B", "value": 0.2},
{"source": "COPZ1", "target": "COPB2", "value": 0.2},
{"source": "COPZ1", "target": "COPG2", "value": 0.2},
{"source": "PLEC1", "target": "RPL18A", "value": 0.2},
{"source": "PLEC1", "target": "EIF5B", "value": 0.2},
{"source": "PLEC1", "target": "RPLP2", "value": 0.2},
{"source": "PLEC1", "target": "RPS26", "value": 0.2},
{"source": "PLEC1", "target": "RPS8", "value": 0.2},
{"source": "PLEC1", "target": "RPL35A", "value": 0.2},
{"source": "PLEC1", "target": "RPL3", "value": 0.2},
{"source": "PLEC1", "target": "RPL28", "value": 0.2},
{"source": "PLEC1", "target": "RPL12", "value": 0.2},
{"source": "PLEC1", "target": "RPL29", "value": 0.2},
{"source": "PSMC1", "target": "PSMA2", "value": 0.2},
{"source": "PSMC1", "target": "RPS8", "value": 0.2},
{"source": "PSMC1", "target": "WWP1", "value": 0.2},
{"source": "PSMC1", "target": "PSMA8", "value": 0.2},
{"source": "PSMC1", "target": "RPL3", "value": 0.2},
{"source": "PSMC1", "target": "PPP2R1A", "value": 0.2},
{"source": "PSMC1", "target": "UBC", "value": 0.2},
{"source": "PSMC1", "target": "RUNX3", "value": 0.2},
{"source": "WWP1", "target": "PSMA2", "value": 0.2},
{"source": "WWP1", "target": "UBE3A", "value": 0.2},
{"source": "WWP1", "target": "PSMA8", "value": 0.2},
{"source": "WWP1", "target": "UBC", "value": 0.2},
{"source": "MFN2", "target": "UBC", "value": 0.2},
{"source": "MFN2", "target": "VDAC1", "value": 0.2},
{"source": "GNAI2", "target": "ADCY6", "value": 0.2},
{"source": "GNAI2", "target": "HLA-DRB1", "value": 0.2},
{"source": "GNAI2", "target": "YES1", "value": 0.2},
{"source": "GNAI2", "target": "S1PR3", "value": 0.2},
{"source": "COPB2", "target": "ARF5", "value": 0.2},
{"source": "COPB2", "target": "GOSR1", "value": 0.2},
{"source": "COPB2", "target": "COPB1", "value": 0.2},
{"source": "COPB2", "target": "KIF5B", "value": 0.2},
{"source": "COPB2", "target": "COPG2", "value": 0.2},
{"source": "RPL29", "target": "RPL18A", "value": 0.2},
{"source": "RPL29", "target": "EIF5B", "value": 0.2},
{"source": "RPL29", "target": "RPLP2", "value": 0.2},
{"source": "RPL29", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL29", "target": "RPL3", "value": 0.2},
{"source": "RPL29", "target": "RPS26", "value": 0.2},
{"source": "RPL29", "target": "RPL12", "value": 0.2},
{"source": "RPL29", "target": "RPS8", "value": 0.2},
{"source": "RPL29", "target": "RPL28", "value": 0.2},
{"source": "RPL29", "target": "RPL35A", "value": 0.2},
{"source": "RPS8", "target": "RPL18A", "value": 0.2},
{"source": "RPS8", "target": "NIP7", "value": 0.2},
{"source": "RPS8", "target": "EIF5B", "value": 0.2},
{"source": "RPS8", "target": "KPNB1", "value": 0.2},
{"source": "RPS8", "target": "RPLP2", "value": 0.2},
{"source": "RPS8", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS8", "target": "RPL3", "value": 0.2},
{"source": "RPS8", "target": "RPS26", "value": 0.2},
{"source": "RPS8", "target": "RPL12", "value": 0.2},
{"source": "RPS8", "target": "RPL35A", "value": 0.2},
{"source": "RPS8", "target": "RPL28", "value": 0.2},
{"source": "TLE3", "target": "SMARCA4", "value": 0.2},
{"source": "TLE3", "target": "UBC", "value": 0.2},
{"source": "RPS26", "target": "RPL18A", "value": 0.2},
{"source": "RPS26", "target": "EIF5B", "value": 0.2},
{"source": "RPS26", "target": "RPLP2", "value": 0.2},
{"source": "RPS26", "target": "PPP2R1A", "value": 0.2},
{"source": "RPS26", "target": "RPL3", "value": 0.2},
{"source": "RPS26", "target": "RPL12", "value": 0.2},
{"source": "RPS26", "target": "RPL35A", "value": 0.2},
{"source": "RPS26", "target": "RPL28", "value": 0.2},
{"source": "POLR1B", "target": "NIP7", "value": 0.2},
{"source": "POLR1B", "target": "POLR3H", "value": 0.2},
{"source": "POLR1B", "target": "H2AFJ", "value": 0.2},
{"source": "WIPF1", "target": "NCKAP1L", "value": 0.2},
{"source": "TPM2", "target": "ITGB5", "value": 0.2},
{"source": "TPM2", "target": "MYBPC1", "value": 0.2},
{"source": "HLA-B", "target": "HLA-DRB1", "value": 0.2},
{"source": "GNA13", "target": "S1PR3", "value": 0.2},
{"source": "HLA-DRB1", "target": "KIF5B", "value": 0.2},
{"source": "CKAP5", "target": "PKMYT1", "value": 0.2},
{"source": "CKAP5", "target": "RAB8A", "value": 0.2},
{"source": "CKAP5", "target": "PPP2R1A", "value": 0.2},
{"source": "CKAP5", "target": "NEDD1", "value": 0.2},
{"source": "CKAP5", "target": "TCTN3", "value": 0.2},
{"source": "RPLP2", "target": "RPL18A", "value": 0.2},
{"source": "RPLP2", "target": "EIF5B", "value": 0.2},
{"source": "RPLP2", "target": "RPL35A", "value": 0.2},
{"source": "RPLP2", "target": "RPL28", "value": 0.2},
{"source": "RPLP2", "target": "RPL3", "value": 0.2},
{"source": "RPLP2", "target": "RPL12", "value": 0.2},
{"source": "RPLP2", "target": "PPP2R1A", "value": 0.2},
{"source": "EIF5B", "target": "RPL18A", "value": 0.2},
{"source": "EIF5B", "target": "RPL28", "value": 0.2},
{"source": "EIF5B", "target": "RPL35A", "value": 0.2},
{"source": "EIF5B", "target": "RPL12", "value": 0.2},
{"source": "EIF5B", "target": "RPL3", "value": 0.2},
{"source": "NIP7", "target": "RPL3", "value": 0.2},
{"source": "NIP7", "target": "RPL35A", "value": 0.2},
{"source": "RUNX3", "target": "PSMA2", "value": 0.2},
{"source": "RUNX3", "target": "JAG1", "value": 0.2},
{"source": "RUNX3", "target": "UBC", "value": 0.2},
{"source": "PPP4R2", "target": "PPP2R1A", "value": 0.2},
{"source": "ORC4", "target": "UBC", "value": 0.2},
{"source": "JAG1", "target": "UBC", "value": 0.2},
{"source": "VDAC1", "target": "SOD1", "value": 0.2},
{"source": "VDAC1", "target": "UBC", "value": 0.2},
{"source": "TCTN3", "target": "RAB8A", "value": 0.2},
{"source": "TCTN3", "target": "PPP2R1A", "value": 0.2},
{"source": "TCTN3", "target": "NEDD1", "value": 0.2},
{"source": "STX6", "target": "GOSR1", "value": 0.2},
{"source": "ADCY6", "target": "GPR39", "value": 0.2},
{"source": "ADCY6", "target": "S1PR3", "value": 0.2},
{"source": "UBC", "target": "PSMA2", "value": 0.2},
{"source": "UBC", "target": "UBE3A", "value": 0.2},
{"source": "UBC", "target": "PSMA8", "value": 0.2},
{"source": "UBC", "target": "PPP2R1A", "value": 0.2},
{"source": "UBC", "target": "RPL35A", "value": 0.2},
{"source": "RPL35A", "target": "RPL18A", "value": 0.2},
{"source": "RPL35A", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL35A", "target": "RPL3", "value": 0.2},
{"source": "RPL35A", "target": "RPL12", "value": 0.2},
{"source": "RPL35A", "target": "RPL28", "value": 0.2},
{"source": "KIF5B", "target": "ARF5", "value": 0.2},
{"source": "KIF5B", "target": "COPB1", "value": 0.2},
{"source": "KIF5B", "target": "TUBA1B", "value": 0.2},
{"source": "KIF5B", "target": "COPG2", "value": 0.2},
{"source": "COPB1", "target": "ARF5", "value": 0.2},
{"source": "COPB1", "target": "GOSR1", "value": 0.2},
{"source": "COPB1", "target": "COPG2", "value": 0.2},
{"source": "INHBB", "target": "ACVR1B", "value": 0.2},
{"source": "RPL3", "target": "RPL18A", "value": 0.2},
{"source": "RPL3", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL3", "target": "RPL12", "value": 0.2},
{"source": "RPL3", "target": "RPL28", "value": 0.2},
{"source": "NEDD1", "target": "RAB8A", "value": 0.2},
{"source": "NEDD1", "target": "PPP2R1A", "value": 0.2},
{"source": "ITGB5", "target": "YES1", "value": 0.2},
{"source": "RPL18A", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL18A", "target": "RPL12", "value": 0.2},
{"source": "RPL18A", "target": "RPL28", "value": 0.2},
{"source": "PSMA2", "target": "PSMA8", "value": 0.2},
{"source": "PSMA2", "target": "KPNB1", "value": 0.2},
{"source": "PSMA2", "target": "PPP2R1A", "value": 0.2},
{"source": "RAB8A", "target": "PPP2R1A", "value": 0.2},
{"source": "YES1", "target": "PPP2R1A", "value": 0.2},
{"source": "KPNB1", "target": "RPL12", "value": 0.2},
{"source": "COPG2", "target": "ARF5", "value": 0.2},
{"source": "COPG2", "target": "GOSR1", "value": 0.2},
{"source": "ARHGDIA", "target": "MAG", "value": 0.2},
{"source": "RPL28", "target": "PPP2R1A", "value": 0.2},
{"source": "RPL28", "target": "RPL12", "value": 0.2},
{"source": "PPP2R1A", "target": "PSMA8", "value": 0.2},
{"source": "PPP2R1A", "target": "RPL12", "value": 0.2},
]
};

plotNetwork();

function plotNetwork() {

    d3.selectAll("g > *").remove();

    var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(data.links)
            .enter().append("line")
            .attr("stroke-width", function (d) {
                return Math.sqrt(d.value);
            });

    var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(data.nodes)
            .enter()
            .append("g")
            .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended));

    /* Draw the respective pie chart for each node */
    node.each(function (d) {
        NodePieBuilder.drawNodePie(d3.select(this), d.pieChart, {
            parentNodeColor: colorMethylation(d.group),
//             outerStrokeWidth: 8,
            outerStrokeWidth: BorderDMG[d.group],
            showLabelText: true,
            labelText: d.label,
            labelColor: colorMethylation(d.group)
        });
    });  

    simulation.nodes(data.nodes)
            .on("tick", ticked);

    simulation.force("link")
            .links(data.links);

    function ticked() {
        link
                .attr("x1", function (d) {
                    return d.source.x;
                })
                .attr("y1", function (d) {
                    return d.source.y;
                })
                .attr("x2", function (d) {
                    return d.target.x;
                })
                .attr("y2", function (d) {
                    return d.target.y;
                });

        d3.selectAll("circle").attr("cx", function (d) {
                    return d.x;
                })
                .attr("cy", function (d) {
                    return d.y;
                });

        d3.selectAll("text").attr("x", function (d) {
                    return d.x;
                })
                .attr("y", function (d) {
                    return d.y;
                });
    };

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
//         d.fx = null;
//         d.fy = null;
        d.fx = d3.event.x;
        d.fy = d3.event.y;        
    }
};

function toggleModules() {
    d3.selectAll("circle")
    .attr("fill", d => colorModule(d.module))    
};
  
  


</script>
</body>

