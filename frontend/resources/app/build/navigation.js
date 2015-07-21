'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var Navigation = _react2['default'].createClass({
    displayName: 'Navigation',

    render: function render() {
        return _react2['default'].createElement(
            'nav',
            { className: 'navigation' },
            _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/My channels' },
                'My channels'
            ),
            _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/Browse channels' },
                'Browse'
            )
        );
    }
});

module.exports = {
    Navigation: Navigation
};