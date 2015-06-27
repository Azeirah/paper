var setBackground = require('./background.js').setBackground;

function onLoad(mainWindow) {
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    setBackground("/home/combomintopter/Pictures/1435358938356.jpg");
}

module.exports = {
    onLoad: onLoad
};
