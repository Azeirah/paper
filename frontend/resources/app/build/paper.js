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
// import { history } from 'react-router/lib/BrowserHistory';

var navigationLinks = ['My channels', 'browse channels'];

var App = React.createClass({
    displayName: 'App',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Navigation, { tabs: navigationLinks }),
            React.createElement(RouteHandler, null)
        );
    }
});

var routes = React.createElement(
    Route,
    { handler: App },
    React.createElement(Route, { path: '/', handler: ChannelView })
);

Router.run(routes, Router.HashLocation, function (Root) {
    React.render(React.createElement(Root, null), document.querySelector('.main-window'));
});

// React.render(<ChannelView></ChannelView>, document.querySelector(".main-window"));
// React.render(<Navigation tabs={navigationLinks}></Navigation>, document.querySelector(".navigation"))