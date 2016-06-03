import Indicator from "./Indicator";
import DonutChart from "./DonutChart";

class MemoryIndicator extends Indicator {
	constructor(props) {
		super(props);
		this.bgColor = "#53c79f";
	}

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
		return (
			<div className="card-body">
				<DonutChart height={130}
					outerRadius={60} innerRadius={30}
					data={[model.usedMemory, model.totalMemory - model.usedMemory]}
					text={model.avg.toFixed(0) }
					textStyle={this.textStyle}
					color={this.color} />
			</div>
		);
	}
}

export default MemoryIndicator;