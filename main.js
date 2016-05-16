var {app, BrowserWindow} = require("electron");

var mainWindow;
app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 660,
		icon: "app/dist/img/presentation-icon.png"
	}).on("closed", () => mainWindow = null);

	mainWindow.loadURL(`file://${__dirname}/app/index.html`);
}).on("window-all-closed", app.quit);