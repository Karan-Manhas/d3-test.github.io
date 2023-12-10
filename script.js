// script.js
const svgWidth = 800;
const svgHeight = 500;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const projection = d3.geoNaturalEarth1()
    .scale(150)
    .translate([svgWidth / 2, svgHeight / 2]);

const path = d3.geoPath().projection(projection);

// Load the GeoJSON data
d3.json("map.geojson").then(function (data) {
    svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke", "black")
        .attr("fill", "lightgray"); // Customize fill color if needed
});
