import React, {Component} from "react";
import {render} from "react-dom";
import MemoryIndicator from "./Indicator/MemoryIndicator";
import MemoryStore from "./Store/MemoryStore";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			memory: MemoryStore.getState()
		};
	}
	componentDidMount() {
		MemoryStore.on("change", memoryState => {
			this.setState({
				memory: memoryState
			});
		});
	}
	render() {
		return (
			<div className="container">
				<div className="cards row">
					<MemoryIndicator model={this.state.memory} />
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));