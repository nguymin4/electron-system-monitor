import React, {Component} from "react";
import {render} from "react-dom";
import Memory from "./Memory";
import MemoryStore from "./MemoryStore";

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
					<Memory model={this.state.memory} />
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));