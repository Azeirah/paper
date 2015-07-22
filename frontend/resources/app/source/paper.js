// React.. duh!
let React            = require('react');

// user-data
let subscriptions    = require('./build/subscriptions.js');

// components
let {Navigation}     = require('./build/navigation.js');
let {ChannelBrowser} = require('./build/browseChannels.js');
let {ChannelView}    = require('./build/myChannels.js');

// routes
let Router           = require('react-router');
let RouteHandler     = Router.RouteHandler;
let Route            = Router.Route;
let DefaultRoute     = Router.DefaultRoute;

let App = React.createClass({
    render () {
        return (
            <div>
                <Navigation/>
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route handler={App}>
        <DefaultRoute handler={ChannelView}></DefaultRoute>
        <Route path="My channels" handler={ChannelView}></Route>
        <Route path="Browse channels" handler={ChannelBrowser}></Route>
    </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {React.render(<Root/>, document.querySelector('.main-window'))});