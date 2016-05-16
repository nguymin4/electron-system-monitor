import React, {Component, PropTypes} from "react";
import DonutChart from "../Chart/DonutChart";

var color = function (i) {
	return ["#e58c72", "#ffffff"][i];
};

class MemoryIndicator extends Component {
	renderHeader(usedMemory) {
		var model = this.props.model;
		return (
			<div className="card-header">
				<div className="pull-left">Memory</div>
				<div className="pull-right">
					{ (usedMemory / 1024).toFixed(1) } GB /
					{ " " + (model.totalMemory / 1024).toFixed(1) } GB
				</div>
			</div>
		);
	}
	renderBody(usedMemory) {
		var model = this.props.model;
		var textStyle = {
			fill: "#ffffff",
			fontSize: "1.2em"
		};
		return (
			<div className="card-body">
				<DonutChart width={200} height={130}
					outerRadius={60} innerRadius={30}
					data={[usedMemory, model.freeMemory]}
					text={(usedMemory * 100 / model.totalMemory).toFixed(0) }
					textStyle={textStyle}
					color={color} />
			</div>
		);
	}
	render() {
		var model = this.props.model;
		var usedMemory = model.totalMemory - model.freeMemory;

		return (
			<div className="memory col-xs-6">
				<div className="card" style={{ backgroundColor: "#53c79f" }}>
					{this.renderHeader(usedMemory) }
					<hr />
					{this.renderBody(usedMemory) }
				</div>
			</div>
		);
	}
}

MemoryIndicator.propTypes = {
	model: PropTypes.object.isRequired
};

export default MemoryIndicator;