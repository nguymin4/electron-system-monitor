import React, {Component} from "react";

class ResizableComponent extends Component {
	constructor(props) {
		super(props);
		this.timeout = 0;
	}
	componentDidMount() {
		window.addEventListener("resize", () => {
			if (this.timeout) 
				clearTimeout(this.timeout);
			this.timeout = setTimeout(this.recalibrate.bind(this), 100);
		});
		this.recalibrate();
	}
}

export default ResizableComponent;