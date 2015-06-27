var app            = require('app');
var BrowserWindow  = require('browser-window');
var paper          = require('./paper.js').onLoad;

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    paper(mainWindow);

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
