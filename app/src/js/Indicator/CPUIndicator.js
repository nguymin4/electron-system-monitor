import Indicator from "./Indicator";
import DonutChart from "./DonutChart";

class CPUIndicator extends Indicator {
	constructor(props) {
		super(props);
		this.bgColor = "#64b0cc";
	}

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
		return (
			<div className="card-body">
				<DonutChart height={130}
					outerRadius={60} innerRadius={30}
					data={[model.avg, 100 - model.avg]}
					text={model.avg.toFixed(0) }
					textStyle={this.textStyle}
					color={this.color} />
			</div>
		);
	}
}

export default CPUIndicator;