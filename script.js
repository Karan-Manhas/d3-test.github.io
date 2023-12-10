const data = [100, 20, 30, 40, 50]; // Example data for the bars

const svgWidth = 500;
const svgHeight = 300;
const barPadding = 5;

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const barWidth = svgWidth / data.length;

const barChart = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("y", d => svgHeight - d * 5) // Height of the bars
    .attr("height", d => d * 5) // Height of the bars
    .attr("width", barWidth - barPadding)
    .attr("transform", (d, i) => `translate(${i * barWidth}, 0)`);
