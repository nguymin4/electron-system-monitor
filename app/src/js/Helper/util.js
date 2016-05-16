export function keyMirror(obj) {
	if (typeof obj !== "object" || Array.isArray(obj))
		throw new Error("argument must be an object");

	for (var k in obj) {
		if (obj.hasOwnProperty(k))
			obj[k] = k;
	}

	return obj;
}