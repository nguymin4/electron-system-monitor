import React, {Component, PropTypes} from "react";
import DonutChart from "../Chart/DonutChart";

var color = function (i) {
	return ["#e58c72", "#ffffff"][i];
};

class CPUIndicator extends Component {
	renderHeader() {
		var model = this.props.model;
		return (
			<div className="card-header">
				<div className="pull-left">CPU</div>
				<div className="pull-right">
					Speed: {model.clockSpeed} Mhz 
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
					data={[model.loadAvg, 100 - model.loadAvg]}
					text={model.loadAvg.toFixed(0)}
					textStyle={textStyle}
					color={color} />
			</div>
		);
	}
	render() {
		var model = this.props.model;

		return (
			<div className="col-xs-4">
				<div className="card" style={{ backgroundColor: "#64b0cc" }}>
					{this.renderHeader() }
					<hr />
					{this.renderBody() }
				</div>
			</div>
		);
	}
}

CPUIndicator.propTypes = {
	model: PropTypes.object.isRequired
};

export default CPUIndicator;