'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilJs = require('./util.js');

var _utilJs2 = _interopRequireDefault(_utilJs);

var _configJs = require('./config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var Channel = _react2['default'].createClass({
    displayName: 'Channel',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'channel-box-container' },
            _react2['default'].createElement(
                'h4',
                null,
                this.props.channel.name
            ),
            _react2['default'].createElement('div', { className: 'channel-box' })
        );
    }
});

var Search = _react2['default'].createClass({
    displayName: 'Search',

    render: function render() {
        return _react2['default'].createElement('input', { className: 'search-channels', placeholder: 'Search for channels', type: 'text' });
    }
});

var ChannelBrowser = _react2['default'].createClass({
    displayName: 'ChannelBrowser',

    getInitialState: function getInitialState() {
        return {
            channels: [],
            failure: false
        };
    },
    componentWillMount: function componentWillMount() {
        var _this = this;

        (0, _nodeFetch2['default'])(_utilJs2['default'].joinUrl(_configJs2['default'].rootUrl, 'channels.php')).then(function (result) {
            return result.json().then(function (channels) {
                return _this.setState({ 'channels': channels });
            });
        })['catch'](function () {
            return _this.setState({ 'failure': true });
        });
    },
    render: function render() {
        console.log('rendering channels!');
        console.log(this.state.channels);
        var channels = this.state.channels.map(function (channel) {
            return _react2['default'].createElement(Channel, { channel: channel });
        });

        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(Search, null),
            channels
        );
    }
});
exports.ChannelBrowser = ChannelBrowser;