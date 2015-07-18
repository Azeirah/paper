let React           = require('react');
let subscriptions   = require('./build/subscriptions.js');
let {Navigation}    = require('./build/navigation.js');
let {ChannelView}   = require('./build/myChannels.js');
let Router          = require('react-router');
let RouteHandler    = Router.RouteHandler;
let Route           = Router.Route;
// import { history } from 'react-router/lib/BrowserHistory';

let navigationLinks = ["My channels", "browse channels"];

let App = React.createClass({
    render () {
        return (
            <div>
                <Navigation tabs={navigationLinks}/>
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route handler={App}>
        <Route path="/" handler={ChannelView}></Route>
    </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {React.render(<Root/>, document.querySelector('.main-window'))});

// React.render(<ChannelView></ChannelView>, document.querySelector(".main-window"));
// React.render(<Navigation tabs={navigationLinks}></Navigation>, document.querySelector(".navigation"))