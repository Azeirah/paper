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
        console.log(this.props.tabs);
        let tabs = this.props.tabs.map(function (tab) {
            console.log(tab);
            return (
                <NavigationTab name={tab}></NavigationTab>
            );
        });

        return (
            <div>{tabs}</div>
        );
    }
});

module.exports = {
    Navigation: Navigation
};