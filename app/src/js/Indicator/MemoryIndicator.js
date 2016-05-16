import React, {Component, PropTypes} from "react";
import DonutChart from "./DonutChart";

var color = function (i) {
	return ["#e58c72", "#ffffff"][i];
};

class MemoryIndicator extends Component {
	renderHeader() {
		var model = this.props.model;
		return (
			<div className="card-header">
				<div className="pull-left">Memory</div>
				<div className="pull-right">
					{ (model.usedMemory / 1024).toFixed(1) } GB /
					{ " " + (model.totalMemory / 1024).toFixed(1) } GB
				</div>
			</div>
		);
	}
	renderBody() {
		var model = this.props.model;
		var textStyle = {
			fill: "#ffffff",
			fontSize: "1.2em"
		};
		return (
			<div className="card-body">
				<DonutChart width={200} height={130}
					outerRadius={60} innerRadius={30}
					data={[model.usedMemory, model.totalMemory - model.usedMemory]}
					text={model.avg.toFixed(0) }
					textStyle={textStyle}
					color={color} />
			</div>
		);
	}
	render() {
		return (
			<div className="col-xs-4">
				<div className="card" style={{ backgroundColor: "#53c79f" }}>
					{this.renderHeader() }
					<hr />
					{this.renderBody() }
				</div>
			</div>
		);
	}
}

MemoryIndicator.propTypes = {
	model: PropTypes.object.isRequired
};

export default MemoryIndicator;