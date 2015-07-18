let React           = require('react');
let {Router, route} = require('react-router');
let config          = require('./config.js');
let util            = require('./util.js');
let fetch           = require('node-fetch');

// ChannelContainer will request the data from the server
// and will distribute it over the channel navigation
// and the wallpaper view
var ChannelView = React.createClass({
    getInitialState: function () {
        return {
            channels: [],
            failure: false,
            selectedChannel: ""
        };
    },
    componentWillMount: function () {
        fetch(util.joinUrl(config.rootUrl, "channels.php"))
            .then(
                (result) => result.json().then(
                    (channels) => this.setState({"channels": channels})))
            .catch(
                () => this.setState({"failure": true}));
    },
    selectChannel: function (channelName) {
        this.setState({"selectedChannel": channelName});
    },
    render: function () {
        var currentChannel = this.state.channels.filter((channel) => channel.name === this.state.selectedChannel)[0];

        var wallpapers = currentChannel? currentChannel.papers : [];

        return (
            <div>
                <ChannelContainer selectedChannel={this.state.selectedChannel} channelSelector={this.selectChannel} channels={this.state.channels}></ChannelContainer>
                <WallpaperContainer selectedChannel={this.state.selectedChannel} wallpapers={wallpapers}></WallpaperContainer>
            </div>
        );
    }
});

var ChannelContainer = React.createClass({
    getInitialState: function () {
        return {
            channels: []
        };
    },
    render: function () {
        let channels = this.props.channels.map((channel) =>
            <Channel selectedChannel={this.props.selectedChannel} channelSelector={this.props.channelSelector} channel={channel}></Channel>
        );

        return (
            <div className="channel-container">{channels}</div>
        );
    }
});

var Channel = React.createClass({
    handleSelection: function (e) {
        this.props.channelSelector(this.props.channel.name);
    },
    render: function () {
        let isSelected = this.props.channel.name === this.props.selectedChannel;
        let className  = "channel ";
        className      += isSelected? "selected" : "";

        return (
            <div className={className} onClick={this.handleSelection}>{this.props.channel.name}</div>
        );
    }
});

var WallpaperContainer = React.createClass({
    render: function () {
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

module.exports = {
    ChannelView
};