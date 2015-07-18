let React = require('react');

let NavigationTab = React.createClass({
    render: function () {
        // take a prop called name
        return (
            <span className="navigation-tab">{this.props.name}</span>
        );
    }
});

let Navigation = React.createClass({
    render: function () {
        let tabs = this.props.tabs.map(function (tab) {
            return (
                <NavigationTab name={tab}></NavigationTab>
            );
        });

        return (
            <div className="navigation">{tabs}</div>
        );
    }
});

module.exports = {
    Navigation,
};