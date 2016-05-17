import Emitter from "../Helper/Emitter";

var os = require("os");

var info = {
	model: "",
	upTime: [0, 0, 0],
	clockSpeed: 0,
	avg: 0
};

class CPUStore extends Emitter {
	constructor() {
		super();
		this.getData(true);
		setInterval(this.getData.bind(this), 1000);
	}

	getState() {
		return info;
	}

	getData(init) {
		info.upTime = this.calculateUptime();
		var cpus = os.cpus();

		// If running the first time get all data
		if (init) info.model = cpus[0].model;
		info.clockSpeed = cpus[0].speed;
		
		var startMeasure = cpuAverage(cpus);
		setTimeout(() => {
			var endMeasure = cpuAverage();
			var idleDiff = endMeasure.idle - startMeasure.idle;
			var totalDiff = endMeasure.total - startMeasure.total;
			info.avg = 100 - (idleDiff * 100 / totalDiff); 
			this.emit("change", info);
		}, 100);
	}
	calculateUptime() {
		var result = [];
		var upTime = os.uptime();
		result.push(Math.floor(upTime / 3600));
		upTime %= 3600;
		result.push(Math.floor(upTime / 60));
		result.push(upTime % 60);
		return result;
	}
}

function cpuAverage(cpus) {
	var total = 0;
	var idle = 0;
	cpus = cpus || os.cpus();
	cpus.forEach(cpu => {
		for (var type in cpu.times)
			total += cpu.times[type];
		idle += cpu.times.idle;
	});

	return {
		idle: idle / cpus.length,
		total: total / cpus.length
	};
}


export default new CPUStore();