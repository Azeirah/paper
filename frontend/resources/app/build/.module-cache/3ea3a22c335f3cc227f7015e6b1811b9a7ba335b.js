'use strict';

var React = require('react');
var subscriptions = require('./build/subscriptions.js');

var _require = require('./build/navigation.js');

var Navigation = _require.Navigation;

var _require2 = require('./build/myChannels.js');

var ChannelView = _require2.ChannelView;

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
// import { history } from 'react-router/lib/BrowserHistory';

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

var Thingy = React.createClass({
    displayName: 'Thingy',

    render: function render() {
        return React.createElement(
            'div',
            null,
            'BLABLABLA'
        );
    }
});

var routes = React.createElement(
    Route,
    { handler: App },
    React.createElement(DefaultRoute, { handler: ChannelView }),
    React.createElement(Route, { path: 'My channels', handler: ChannelView }),
    React.createElement(Route, { path: 'Browse channels', handler: Thingy })
);

Router.run(routes, Router.HashLocation, function (Root) {
    React.render(React.createElement(Root, null), document.querySelector('.main-window'));
});