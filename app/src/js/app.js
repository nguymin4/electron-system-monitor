import React, {Component} from "react";
import {render} from "react-dom";

import MemoryIndicator from "./Indicator/MemoryIndicator";
import CPUIndicator from "./Indicator/CPUIndicator";
import Panel from "./Panel/Panel";

import MemoryStore from "./Store/MemoryStore";
import CPUStore from "./Store/CPUStore";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			memory: MemoryStore.getState(),
			cpu: CPUStore.getState()
		};
		setInterval(function () {
			CPUStore.getData();
			MemoryStore.getUsedMemory();
		}, 1000);
	}
	componentDidMount() {
		MemoryStore.on("change", value => {
			updateState.call(this, "memory", value);
		});

		CPUStore.on("change", value => {
			updateState.call(this, "cpu", value);
		});
		
		var newState = {};
		function updateState(type, value) {
			newState[type] = value;
			if (Object.getOwnPropertyNames(newState).length === 2) {
				this.setState(newState);
				newState = {};
			}
		}
	}
	renderPanel() {
		return [
			{ title: "CPU", state: "cpu", field: "avg", fill: "#e5c072" },
			{ title: "Memory", state: "memory", field: "avg", fill: "#53c79f" }
		].map(model => <Panel key={model.title}
			title={model.title}
			field={model.field}
			fill={model.fill}
			data={this.state[model.state]} />);
	}
	render() {
		return (
			<div className="container">
				<div className="cards row">
					<CPUIndicator model={this.state.cpu} />
					<MemoryIndicator model={this.state.memory} />
				</div>
				<div className="panels row">
					{this.renderPanel() }
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));