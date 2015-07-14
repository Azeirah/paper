var setBackground = require('./background.js').setBackground;
var fetch = require('node-fetch');

var element = document.createElement.bind(document);

var Channels = React.createClass({displayName: 'Channels',
    getInitialState: function () {
        return {
            channels: []
        };
    },
    componentWillMount: function () {
        fetch("http://localhost:8000/channels.php").then(
            (result) => result.json().then(
                (channels) => this.setState(channels, channels)));
    },
    render: function () {
        var channels = this.state.channels.forEach(function (channel) {
            return (React.createElement("div", null, channel.name));
        });
    }
});

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

Channels(document.body);
