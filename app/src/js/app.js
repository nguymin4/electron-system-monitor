import React, {Component} from "react";
import {render} from "react-dom";

class App extends Component {
	render() {
		return (
			<div>
				Electron-React for System Monitor
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));