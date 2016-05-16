import React, {Component, PropTypes} from "react";
import d3 from "d3";

var pie = d3.layout.pie().sort(null);
class DonutChart extends Component {
	constructor(props) {
		super(props);

		this.arc = d3.svg.arc()
			.innerRadius(this.props.innerRadius)
			.outerRadius(this.props.outerRadius);
		this.transform = `translate(${this.props.width / 2}, ${this.props.height / 2})`;
	}
	renderPaths() {
		return pie(this.props.data).map((d, i) =>
			<path key={i}
				fill={this.props.color(i) }
				d={this.arc(d) }
				stroke="#ffffff"
				strokeWidth="2" />
		);
	}
	renderText() {
		var text = this.props.text ? this.props.text + "%" : "";
		var x = text.length > 2 ? "-15" : "-10";
		return (
			<text x={x} y="5" text-anchor="middle" style={this.props.textStyle}>
				{this.props.text ? this.props.text + "%" : ""}
			</text>
		);
	}
	render() {
		return (
			<svg>
				<g transform={this.transform}>
					{this.renderPaths() }
					{this.renderText() }
				</g>
			</svg>
		);
	}
}

DonutChart.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	innerRadius: PropTypes.number,
	outerRadius: PropTypes.number,
	data: PropTypes.array,
	text: PropTypes.string,
	textStyle: PropTypes.object,
	color: PropTypes.func
};

export default DonutChart;