'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _configJs = require('./config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _utilJs = require('./util.js');

var _utilJs2 = _interopRequireDefault(_utilJs);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var ChannelContainer = _react2['default'].createClass({
    displayName: 'ChannelContainer',

    getInitialState: function getInitialState() {
        return {
            channels: []
        };
    },
    render: function render() {
        var _this = this;

        var channels = this.props.channels.map(function (channel) {
            return _react2['default'].createElement(Channel, { selectedChannel: _this.props.selectedChannel, channelSelector: _this.props.channelSelector, channel: channel });
        });

        return _react2['default'].createElement(
            'div',
            { className: 'channel-container' },
            channels
        );
    }
});

var Channel = _react2['default'].createClass({
    displayName: 'Channel',

    handleSelection: function handleSelection(e) {
        this.props.channelSelector(this.props.channel.name);
    },
    render: function render() {
        var isSelected = this.props.channel.name === this.props.selectedChannel;
        var className = 'channel ';
        className += isSelected ? 'selected' : '';

        return _react2['default'].createElement(
            'div',
            { className: className, onClick: this.handleSelection },
            this.props.channel.name
        );
    }
});

var WallpaperContainer = _react2['default'].createClass({
    displayName: 'WallpaperContainer',

    render: function render() {
        var _this2 = this;

        var wallpapers = this.props.wallpapers.map(function (wallpaper) {
            var source = _utilJs2['default'].joinUrl(_configJs2['default'].rootUrl, 'channels', _this2.props.selectedChannel, wallpaper);
            return _react2['default'].createElement('img', { width: '240', height: '180', src: source, alt: 'Failed to load wallpaper :(' });
        });

        return _react2['default'].createElement(
            'div',
            { className: 'wallpaper-container' },
            wallpapers
        );
    }
});

var ChannelView = _react2['default'].createClass({
    displayName: 'ChannelView',

    getInitialState: function getInitialState() {
        return {
            channels: [],
            failure: false,
            selectedChannel: ''
        };
    },
    componentWillMount: function componentWillMount() {
        var _this3 = this;

        (0, _nodeFetch2['default'])(_utilJs2['default'].joinUrl(_configJs2['default'].rootUrl, 'channels.php')).then(function (result) {
            return result.json().then(function (channels) {
                return _this3.setState({ 'channels': channels });
            });
        })['catch'](function () {
            return _this3.setState({ 'failure': true });
        });
    },
    selectChannel: function selectChannel(channelName) {
        this.setState({ 'selectedChannel': channelName });
    },
    render: function render() {
        var _this4 = this;

        var currentChannel = this.state.channels.filter(function (channel) {
            return channel.name === _this4.state.selectedChannel;
        })[0];
        var wallpapers = currentChannel ? currentChannel.papers : [];

        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(ChannelContainer, { selectedChannel: this.state.selectedChannel, channelSelector: this.selectChannel, channels: this.state.channels }),
            _react2['default'].createElement(WallpaperContainer, { selectedChannel: this.state.selectedChannel, wallpapers: wallpapers })
        );
    }
});
exports.ChannelView = ChannelView;