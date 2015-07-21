import React  from 'react';
import config from './config.js';
import util   from './util.js';
import fetch  from 'node-fetch';

let ChannelContainer = React.createClass({
    getInitialState() {
        return {
            channels: []
        };
    },
    render() {
        let channels = this.props.channels.map((channel) =>
            <Channel selectedChannel={this.props.selectedChannel} channelSelector={this.props.channelSelector} channel={channel}></Channel>
        );

        return (
            <div className="channel-container">{channels}</div>
        );
    }
});

let Channel = React.createClass({
    handleSelection(e) {
        this.props.channelSelector(this.props.channel.name);
    },
    render() {
        let isSelected = this.props.channel.name === this.props.selectedChannel;
        let className  = "channel ";
        className      += isSelected? "selected" : "";

        return (
            <div className={className} onClick={this.handleSelection}>{this.props.channel.name}</div>
        );
    }
});

let WallpaperContainer = React.createClass({
    render() {
        let wallpapers = this.props.wallpapers.map((wallpaper) => {
            let source = [config.rootUrl, "channels", this.props.selectedChannel, wallpaper].join("/");
            return (<img width="240" height="180" src={source} alt="Failed to load wallpaper :("></img>)
        });

        return (
            <div className="wallpaper-container">
                {wallpapers}
            </div>
        );
    }
});

export let ChannelView = React.createClass({
    getInitialState() {
        return {
            channels: [],
            failure: false,
            selectedChannel: ""
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
    selectChannel(channelName) {
        this.setState({"selectedChannel": channelName});
    },
    render() {
        let currentChannel = this.state.channels.filter(
            (channel) => channel.name === this.state.selectedChannel)[0];
        let wallpapers = currentChannel? currentChannel.papers : [];

        return (
            <div>
                <ChannelContainer selectedChannel={this.state.selectedChannel} channelSelector={this.selectChannel} channels={this.state.channels}></ChannelContainer>
                <WallpaperContainer selectedChannel={this.state.selectedChannel} wallpapers={wallpapers}></WallpaperContainer>
            </div>
        );
    }
});
