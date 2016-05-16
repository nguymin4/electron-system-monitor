export default class History {
	constructor(limit, initValue = 0) {
		this.data = [];
		for (var i = 0; i < limit + 1; i++) this.data[i] = initValue;
		this.limit = limit;
	}
	push(data) {
		this.data.push(data);
		this.data.shift();
		return this;
	}
	get() {
		return this.data;
	}
}