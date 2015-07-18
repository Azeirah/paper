'use strict';

var React = require('react');

var _require = require('react-router');

var Router = _require.Router;
var route = _require.route;

var config = require('./config.js');
var util = require('./util.js');
var fetch = require('node-fetch');

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
        var _this = this;

        fetch(util.joinUrl(config.rootUrl, 'channels.php')).then(function (result) {
            return result.json().then(function (channels) {
                return _this.setState({ 'channels': channels });
            });
        })['catch'](function () {
            return _this.setState({ 'failure': true });
        });
    },
    selectChannel: function selectChannel(channelName) {
        this.setState({ 'selectedChannel': channelName });
    },
    render: function render() {
        var _this2 = this;

        var currentChannel = this.state.channels.filter(function (channel) {
            return channel.name === _this2.state.selectedChannel;
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
        var _this3 = this;

        var channels = this.props.channels.map(function (channel) {
            return React.createElement(Channel, { selectedChannel: _this3.props.selectedChannel, channelSelector: _this3.props.channelSelector, channel: channel });
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
        var _this4 = this;

        var wallpapers = this.props.wallpapers.map(function (wallpaper) {
            var source = [config.rootUrl, 'channels', _this4.props.selectedChannel, wallpaper].join('/');
            return React.createElement('img', { width: '240', height: '180', src: source, alt: 'Failed to load wallpaper :(' });
        });

        return React.createElement(
            'div',
            { className: 'wallpaper-container' },
            wallpapers
        );
    }
});

module.exports = {
    ChannelView: ChannelView
};