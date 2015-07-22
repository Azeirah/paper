import React  from 'react';
import util   from './util.js';
import config from './config.js';
import fetch  from 'node-fetch';

let Channel = React.createClass({
    render() {
        return (
            <div className="channel-box-container">
                <h4>{this.props.channel.name}</h4>
                <div className="channel-box"></div>
            </div>);
    }
});

let Search = React.createClass({
    render() {
        return <input className="search-channels" placeholder="Search for channels" type="text"/>
    }
});

export let ChannelBrowser = React.createClass({
    getInitialState() {
        return {
            channels: [],
            failure: false
        };
    },
    componentWillMount() {
        fetch(util.joinUrl(config.rootUrl, "channels.php"))
            .then(
                (result) => result.json().then(
                    (channels) => this.setState({"channels": channels})))
            .catch(
                () => this.setState({"failure": true}));
    },
    render () {
        console.log("rendering channels!");
        console.log(this.state.channels);
        let channels = this.state.channels.map(function (channel) {
            return <Channel channel={channel}></Channel>;
        });

        return (
            <div>
                <Search></Search>
                {channels}
            </div>);
    }
});

