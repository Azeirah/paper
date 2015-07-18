"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var NavigationTab = _react2["default"].createClass({
    displayName: "NavigationTab",

    render: function render() {
        // take a prop called name
        return _react2["default"].createElement(
            "span",
            { className: "navigation-tab" },
            this.props.name
        );
    }
});

var Navigation = _react2["default"].createClass({
    displayName: "Navigation",

    render: function render() {
        var tabs = this.props.tabs.map(function (tab) {
            return _react2["default"].createElement(NavigationTab, { name: tab });
        });

        return _react2["default"].createElement(
            "div",
            { className: "navigation" },
            tabs
        );
    }
});

module.exports = {
    Navigation: Navigation
};