import React, {Component, PropTypes} from "react";

class Indicator extends Component {
	constructor(props) {
		super(props);
		
		this.color = idx => ["#e58c72", "#ffffff"][idx];
		this.textStyle = {
			fill: "#ffffff",
			fontSize: "1.2em"
		};
	}
	
	render() {
		return (
			<div className="col-xs-4">
				<div className="card" style={{ backgroundColor: this.bgColor }}>
					{this.renderHeader() }
					<hr />
					{this.renderBody() }
				</div>
			</div>
		);
	}
}

Indicator.propTypes = {
	model: PropTypes.object.isRequired
};

export default Indicator;