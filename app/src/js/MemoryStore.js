import {Emitter} from "./util";

var os = require("os");
var exec = require("child_process").exec;

var freeMemory = 0;
var totalMemory = (os.totalmem() / (1024 * 1024));
var cmd = `free | grep Mem | xargs | cut -d " " -f7`;

class MemoryStore extends Emitter {
	constructor() {
		super();
		setInterval(this.getFreeMemory.bind(this), 1000);
	}

	getState() {
		return {
			totalMemory: totalMemory,
			freeMemory: freeMemory
		};
	}

	getFreeMemory() {
		exec(cmd, (err, stdout, stdin) => {
			freeMemory = stdout.toString(10) / 1024;
			this.emit("change", this.getState());
		});
	}
}


export default new MemoryStore();