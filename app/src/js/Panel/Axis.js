import React, {Component, PropTypes} from "react";
import {findDOMNode} from "react-dom";
import d3 from "d3";

class Axis extends Component {
	componentDidUpdate(prevProps, prevState) {
		this.renderAxis();
	}
	componentDidMount() {
		this.renderAxis();
	}
	renderAxis() {
		this.axis = d3.svg.axis()
            .scale(this.props.scale)
            .orient(this.props.orient)
            .ticks(this.props.ticks);
		if (this.props.tickFormat)
			this.axis.tickFormat(d => d + this.props.tickFormat);
			
		d3.select(findDOMNode(this)).call(this.axis);
	}
	render() {
		var translate = `translate(35, ${
			this.props.axisType == "x" ? this.props.height + 20 : 20
		})`;
		return (
			<g className={this.props.uiClass}
				transform={translate}>
			</g>
		);
	}
}

Axis.propTypes = {
	height: PropTypes.number,
	scale: PropTypes.func,
	axisType: PropTypes.oneOf(["x", "y"]),
	orient: PropTypes.oneOf(["left", "right", "top", "bottom"]),
	uiClass: PropTypes.string,
	tickFormat: PropTypes.string,
	ticks: PropTypes.number
};

export default Axis;