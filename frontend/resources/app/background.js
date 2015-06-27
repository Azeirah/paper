var exec          = require('child_process').exec;

function setBackground(path) {
    var command = `gsettings set org.gnome.desktop.background picture-uri 'file://${path}'`;
    exec(command);
}

module.exports = {
    setBackground: setBackground
};
