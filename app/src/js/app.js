import React, {Component} from "react";
import {render} from "react-dom";
import MemoryIndicator from "./Indicator/MemoryIndicator";
import CPUIndicator from "./Indicator/CPUIndicator";
import MemoryStore from "./Store/MemoryStore";
import CPUStore from "./Store/CPUStore";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			memory: MemoryStore.getState(),
			cpu: CPUStore.getState()
		};
	}
	componentDidMount() {
		MemoryStore.on("change", memoryState => {
			this.setState({
				memory: memoryState
			});
		});
		
		CPUStore.on("change", cpuState => {
			this.setState({
				cpu: cpuState
			});
		});
	}
	render() {
		return (
			<div className="container">
				<div className="cards row">
					<MemoryIndicator model={this.state.memory} />
					<CPUIndicator model={this.state.cpu} />
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));