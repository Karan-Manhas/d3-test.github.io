// script.js
const svgWidth = 800;
const svgHeight = 500;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const projection = d3.geoNaturalEarth1() // Use the Natural Earth projection
    .scale(150)
    .translate([svgWidth / 2, svgHeight / 2]);

const path = d3.geoPath().projection(projection);

// Load the world map GeoJSON data
d3.json("https://raw.githubusercontent.com/d3/d3-geo/master/world-110m.json").then(function (data) {
    svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path);
});
