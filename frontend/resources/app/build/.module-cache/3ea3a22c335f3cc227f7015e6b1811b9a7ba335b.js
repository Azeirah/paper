'use strict';

var React = require('react');
var setBackground = require('./build/background.js').setBackground;
var fetch = require('node-fetch');

var element = document.createElement.bind(document);

var rootUrl = 'http://localhost:8000/';

function undef(value) {
    return value === undefined ? 'is undefined' : 'is defined';
}

function prettyPrint(object) {
    console.log(JSON.stringify(object, null, 4));
}

// ChannelContainer will request the data from the server
// and will distribute it over the channel navigation
// and the wallpaper view
var ChannelView = React.createClass({
    displayName: 'ChannelView',

    getInitialState: function getInitialState() {
        return {
            channels: [],
            failure: false,
            selectedChannel: ''
        };
    },
    componentWillMount: function componentWillMount() {
        var _this2 = this;

        fetch(rootUrl + 'channels.php').then(function (result) {
            return result.json().then(function (channels) {
                return _this2.setState({ 'channels': channels });
            });
        })['catch'](function () {
            return _this2.setState({ 'failure': true });
        });
    },
    selectChannel: function selectChannel(channelName) {
        this.setState({ 'selectedChannel': channelName });
    },
    render: function render() {
        var _this = this;

        var currentChannel = this.state.channels.filter(function (channel) {
            return channel.name === _this.state.selectedChannel;
        })[0];

        var wallpapers = currentChannel ? currentChannel.papers : [];

        return React.createElement(
            'div',
            null,
            React.createElement(ChannelContainer, { selectedChannel: this.state.selectedChannel, channelSelector: this.selectChannel, channels: this.state.channels }),
            React.createElement(WallpaperContainer, { selectedChannel: this.state.selectedChannel, wallpapers: wallpapers })
        );
    }
});

var ChannelContainer = React.createClass({
    displayName: 'ChannelContainer',

    getInitialState: function getInitialState() {
        return {
            channels: []
        };
    },
    render: function render() {
        var _this = this;
        var channels = this.props.channels.map(function (channel) {
            return React.createElement(Channel, { selectedChannel: _this.props.selectedChannel, channelSelector: _this.props.channelSelector, channel: channel });
        });

        return React.createElement(
            'div',
            { className: 'channel-container' },
            channels
        );
    }
});

var Channel = React.createClass({
    displayName: 'Channel',

    handleSelection: function handleSelection(e) {
        this.props.channelSelector(this.props.channel.name);
    },
    render: function render() {
        var isSelected = this.props.channel.name === this.props.selectedChannel;
        var className = 'channel ';
        className += isSelected ? 'selected' : '';

        return React.createElement(
            'div',
            { className: className, onClick: this.handleSelection },
            this.props.channel.name
        );
    }
});

var WallpaperContainer = React.createClass({
    displayName: 'WallpaperContainer',

    render: function render() {
        var _this = this;
        var wallpapers = this.props.wallpapers.map(function (wallpaper) {
            var source = [rootUrl, 'channels', _this.props.selectedChannel, wallpaper].join('/');
            return React.createElement('img', { width: '240', height: '180', src: source, alt: 'Failed to load wallpaper :(' });
        });

        return React.createElement(
            'div',
            { className: 'wallpaper-container' },
            wallpapers
        );
    }
});

JSON.prettify = function (json) {
    return JSON.stringify(json, null, 4);
};

function loadChannelContainer() {
    return fetch('http://localhost:8000/channels.php');
}

React.render(React.createElement(ChannelView, null), document.querySelector('.main-window'));