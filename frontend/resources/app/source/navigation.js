import React from 'react';

let NavigationTab = React.createClass({
    render() {
        // take a prop called name
        return (
            <span className="navigation-tab">{this.props.name}</span>
        );
    }
});

let Navigation = React.createClass({
    render() {
        let tabs = this.props.tabs.map((tab) =>
            <NavigationTab name={tab}></NavigationTab>);

        return (
            <div className="navigation">{tabs}</div>
        );
    }
});

module.exports = {
    Navigation,
};