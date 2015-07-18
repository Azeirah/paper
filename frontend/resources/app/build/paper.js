'use strict';

var React = require('react');
var subscriptions = require('./build/subscriptions.js');

var _require = require('./build/navigation.js');

var Navigation = _require.Navigation;

var _require2 = require('./build/myChannels.js');

var ChannelView = _require2.ChannelView;

var navigationLinks = ['My channels', 'browse channels'];
React.render(React.createElement(ChannelView, null), document.querySelector('.main-window'));
React.render(React.createElement(Navigation, { tabs: navigationLinks }), document.querySelector('.navigation'));