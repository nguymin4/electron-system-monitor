import React, {Component, PropTypes} from "react";
import {findDOMNode} from "react-dom";
import d3 from "d3";

class Grid extends Component {
	componentDidUpdate(prevProps, prevState) {
		this.renderGrid();
	}
	componentDidMount() {
		this.renderGrid();
	}
	renderGrid() {
		this.Grid = d3.svg.axis()
            .scale(this.props.scale)
            .orient(this.props.orient)
            .ticks(this.props.ticks)
			.tickSize(-this.props.len, 0, 0)
			.tickFormat("");
			
			
		d3.select(findDOMNode(this)).call(this.Grid);
	}
	render() {
		var translate = `translate(35, ${
			this.props.GridType == "x" ? this.props.height + 20 : 20
		})`;
		return (
			<g className={this.props.uiClass}
				transform={translate}>
			</g>
		);
	}
}

Grid.propTypes = {
	height: PropTypes.number,
	len: PropTypes.number,
	scale: PropTypes.func,
	GridType: PropTypes.oneOf(["x", "y"]),
	orient: PropTypes.oneOf(["left", "right", "top", "bottom"]),
	uiClass: PropTypes.string,
	tickFormat: PropTypes.string,
	ticks: PropTypes.number
};

export default Grid;