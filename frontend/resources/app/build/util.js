"use strict";

function joinUrl() {
    return Array.prototype.slice.call(arguments).join("/");
}

JSON.prettify = function (json) {
    return JSON.stringify(json, null, 4);
};

module.exports = {
    joinUrl: joinUrl
};