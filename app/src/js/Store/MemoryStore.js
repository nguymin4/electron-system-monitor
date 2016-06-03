import Emitter from "../Helper/Emitter";

var os = require("os");
var exec = require("child_process").exec;

var usedMemory = 0;
var totalMemory = (os.totalmem() / (1024 * 1024));
var cmd = `free | grep Mem | xargs | cut -d " " -f7`;

class MemoryStore extends Emitter {
	getState() {
		return {
			totalMemory: totalMemory,
			usedMemory: usedMemory,
			avg: usedMemory * 100 / totalMemory
		};
	}

	getUsedMemory() {
		exec(cmd, (err, stdout, stdin) => {
			usedMemory = totalMemory - stdout.toString(10) / 1024;
			this.emit("change", this.getState());
		});
	}
}


export default new MemoryStore();