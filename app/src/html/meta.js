var exec = require("child_process").execSync;

var bsHost = "http://localhost:3001";
var bsVersion = exec("browser-sync --version").toString().trim();

module.exports = {
	"app.js": {
		"dev": `${bsHost}/dist/js/app.js`,
		"build": "dist/js/app.min.js"
	},
	"vendor.js": {
		"dev": "dist/js/vendor.js",
		"build": "dist/js/vendor.min.js"
	},
	"app.css": {
		"dev": "dist/css/app.css",
		"build": "dist/css/app.min.css"
	},
	"browser-sync": {
		"dev": `<script async src="${bsHost}/browser-sync/browser-sync-client.${bsVersion}.js"></script>`,
		"build": ""
	}
};