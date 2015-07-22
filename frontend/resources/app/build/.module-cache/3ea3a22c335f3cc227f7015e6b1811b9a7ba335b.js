// React.. duh!
'use strict';

var React = require('react');

// user-data
var subscriptions = require('./build/subscriptions.js');

// components

var _require = require('./build/navigation.js');

var Navigation = _require.Navigation;

var _require2 = require('./build/browseChannels.js');

var ChannelBrowser = _require2.ChannelBrowser;

var _require3 = require('./build/myChannels.js');

var ChannelView = _require3.ChannelView;

// routes
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = React.createClass({
    displayName: 'App',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Navigation, null),
            React.createElement(RouteHandler, null)
        );
    }
});

var routes = React.createElement(
    Route,
    { handler: App },
    React.createElement(DefaultRoute, { handler: ChannelView }),
    React.createElement(Route, { path: 'My channels', handler: ChannelView }),
    React.createElement(Route, { path: 'Browse channels', handler: ChannelBrowser })
);

Router.run(routes, Router.HashLocation, function (Root) {
    React.render(React.createElement(Root, null), document.querySelector('.main-window'));
});