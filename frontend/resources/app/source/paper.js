let React           = require('react');
let subscriptions   = require('./build/subscriptions.js');
let {Navigation}    = require('./build/navigation.js');
let {ChannelView}   = require('./build/myChannels.js');
let Router          = require('react-router');
let RouteHandler    = Router.RouteHandler;
let Route           = Router.Route;
let DefaultRoute    = Router.DefaultRoute;
// import { history } from 'react-router/lib/BrowserHistory';

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

let Thingy = React.createClass({
    render () {
        return (<div>BLABLABLA</div>);
    }
});

let routes = (
    <Route handler={App}>
        <DefaultRoute handler={ChannelView}></DefaultRoute>
        <Route path="My channels" handler={ChannelView}></Route>
        <Route path="Browse channels" handler={Thingy}></Route>
    </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {React.render(<Root/>, document.querySelector('.main-window'))});