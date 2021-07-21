// ---------- Gulp includes ---------- //

const {
    series
}               = require('gulp'),
    _server     = require('./gulp/_server'),
    _html       = require('./gulp/_html');

// ---------- Gulp exports ---------- //

const dev = series(_html.html, _server.server);

// HTML exports
exports.html        = _html.html;

exports.default = dev;
