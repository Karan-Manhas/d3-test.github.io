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
d3.json("https://raw.githubusercontent.com/Karan-Manhas/d3-test.github.io/main/map.geojson").then(function (data) {
    svg.selectAll("path")
    svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("class", "map-path") // Use the map-path class
        .attr("d", path);
});


d3.json("https://raw.githubusercontent.com/Karan-Manhas/d3-test.github.io/main/map.geojson").then(function (data) {
    // Append paths for country boundaries
    svg.selectAll(".boundary")
        .data(data.features)
        .enter()
        .append("path")
        .attr("class", "boundary")
        .attr("d", path);

    // Append labels for countries
    svg.selectAll(".country-label")
        .data(data.features)
        .enter()
        .append("text")
        .attr("class", "country-label")
        .attr("transform", function(d) {
            return "translate(" + path.centroid(d) + ")";
        })
        .attr("dy", ".35em")
        .text(function(d) {
            return d.properties.name; // Display the country name as label
        });
});

d3.json("https://raw.githubusercontent.com/Karan-Manhas/d3-test.github.io/main/topography.geojson").then(function (topographyData) {
    // Append topography lines
    svg.selectAll(".topography-line")
        .data(topographyData.features)
        .enter()
        .append("path")
        .attr("class", "topography-line")
        .attr("d", path);
});

// ... (Your existing code)

// Load the GeoJSON data
d3.json("https://raw.githubusercontent.com/Karan-Manhas/d3-test.github.io/main/map.geojson").then(function (data) {
    // Append paths for country boundaries
    svg.selectAll(".boundary")
        .data(data.features)
        .enter()
        .append("path")
        .attr("class", "boundary")
        .attr("d", path)
        .on("mouseover", function(d) {
            d3.select(this).classed("highlight", true); // Apply highlight on mouseover
            // Display country name as tooltip
            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html(d.properties.name)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            d3.select(this).classed("highlight", false); // Remove highlight on mouseout
            // Hide tooltip on mouseout
            tooltip.transition().duration(500).style("opacity", 0);
        });
});

// Append a tooltip element
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

    // Your existing code for setting up SVG, projection, and path remains unchanged

// Load the GeoJSON data containing boundaries
d3.json("https://raw.githubusercontent.com/Karan-Manhas/d3-test.github.io/main/map_with_boundaries.geojson").then(function (data) {
    // Append paths for country boundaries
    svg.selectAll(".boundary")
        .data(data.features)
        .enter()
        .append("path")
        .attr("class", "boundary")
        .attr("d", path)
        .on("mouseover", function(d) {
            d3.select(this).classed("highlight", true); // Apply highlight on mouseover
            // Display country name as tooltip
            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html(d.properties.name)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            d3.select(this).classed("highlight", false); // Remove highlight on mouseout
            // Hide tooltip on mouseout
            tooltip.transition().duration(500).style("opacity", 0);
        });

    // Append labels for countries
    svg.selectAll(".country-label")
        .data(data.features)
        .enter()
        .append("text")
        .attr("class", "country-label")
        .attr("transform", function(d) {
            return "translate(" + path.centroid(d) + ")";
        })
        .attr("dy", ".35em")
        .text(function(d) {
            return d.properties.name; // Display the country name as label
        });
});

// ... (Your existing code for topography and interactivity)

