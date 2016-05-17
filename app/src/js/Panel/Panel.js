import React, {Component, PropTypes} from "react";
import AreaChart from "./AreaChart";

class Panel extends Component {
	renderHeader() {
		var title = this.props.title;
		return (
			<div className="panel-header">
				<div className="pull-left">
					{title} {title === "CPU" ? " - " + this.props.data.model : ""}
				</div>
				<div className="pull-right">
					{this.renderUptime() }
				</div>
			</div>);
	}
	renderBody() {
		return (
			<div className="panel-body">
				<AreaChart type={this.props.title}
					field={this.props.field}
					data={this.props.data}
					fill={this.props.fill} />
			</div>
		);
	}
	renderUptime() {
		var upTime = this.props.data.upTime;
		if (!upTime) return "";
		return (
			<span>
				Uptime: {upTime.map(n => n < 10 ? `0${n}` : n).join(":") }
			</span>
		);
	}
	render() {
		return (
			<div className="col-lg-6">
				<div className="chart-panel">
					{this.renderHeader() }
					{this.renderBody() }
				</div>
			</div>
		);
	}
}

Panel.propTypes = {
	title: PropTypes.string,
	field: PropTypes.string,
	data: PropTypes.object,
	fill: PropTypes.string
};

export default Panel;