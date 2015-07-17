"use strict";

var React = require("react");

var NavigationTab = React.createClass({
    displayName: "NavigationTab",

    render: function render() {
        // take a prop called name
        return React.createElement(
            "span",
            { className: "navigation-tab" },
            this.props.name
        );
    }
});

var Navigation = React.createClass({
    displayName: "Navigation",

    render: function render() {
        console.log(this.props.tabs);
        var tabs = this.props.tabs.map(function (tab) {
            console.log(tab);
            return React.createElement(NavigationTab, { name: tab });
        });

        return React.createElement(
            "div",
            null,
            tabs
        );
    }
});

module.exports = {
    Navigation: Navigation
};