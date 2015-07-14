var React = require('react');
var setBackground = require('./build/background.js').setBackground;
var fetch = require('node-fetch');

var element = document.createElement.bind(document);

var rootUrl = "http://localhost:8000/";

function undef(value) {
    return (value === undefined)? "is undefined" : "is defined";
}

function prettyPrint(object) {
    console.log(JSON.stringify(object, null, 4));
}

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
        fetch(rootUrl + "channels.php")
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
        var _this = this;

        var currentChannel = this.state.channels.filter(function (channel) {
            return channel.name === _this.state.selectedChannel;
        })[0];

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
        let _this = this;
        let channels = this.props.channels.map(function (channel) {
            return (<Channel selectedChannel={_this.props.selectedChannel} channelSelector={_this.props.channelSelector} channel={channel}></Channel>);
        });

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
        let className = "channel ";
        className += isSelected? "selected" : "";

        return (
            <div className={className} onClick={this.handleSelection}>{this.props.channel.name}</div>
        );
    }
});


var WallpaperContainer = React.createClass({
    render: function () {
        let _this = this;
        let wallpapers = this.props.wallpapers.map(function (wallpaper) {
            let source = [rootUrl, "channels", _this.props.selectedChannel, wallpaper].join("/");
            return (<img width="240" height="180" src={source} alt="Failed to load wallpaper :("></img>)
        });

        return (
            <div className="wallpaper-container">
                {wallpapers}
            </div>
        );
    }
});

JSON.prettify = function (json) {
    return JSON.stringify(json, null, 4);
};

function loadChannelContainer() {
    return fetch("http://localhost:8000/channels.php");
}

React.render(<ChannelView></ChannelView>, document.querySelector(".main-window"));
