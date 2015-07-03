var setBackground = require('./background.js').setBackground;
var fetch = require('node-fetch');

var element = document.createElement.bind(document);

function Channels(container) {
    var source = Object.create(null);

    fetch("http://localhost:8000/channels.php").then(function (result) {
        result.json().then(function (channels) {
            source.channels = channels;

            source.render(container);
        });
    });

    source.render = function (container) {
        source.channels.forEach(function (channel) {
            var ch = element("div");
            ch.innerHTML = channel.name;
            container.appendChild(ch);
        });
    };

    return source;
}

JSON.prettify = function (json) {
    return JSON.stringify(json, null, 4);
};

function loadChannels() {
    return fetch("http://localhost:8000/channels.php");
}

setBackground("/home/combomintopter/Pictures/1435358938356.jpg");

Channels(document.body);
