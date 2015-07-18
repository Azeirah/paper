let React           = require('react');
let subscriptions   = require('./build/subscriptions.js');
let {Navigation}    = require('./build/navigation.js');
let {ChannelView}   = require('./build/myChannels.js');

let navigationLinks = ["My channels", "browse channels"];
React.render(<ChannelView></ChannelView>, document.querySelector(".main-window"));
React.render(<Navigation tabs={navigationLinks}></Navigation>, document.querySelector(".navigation"))