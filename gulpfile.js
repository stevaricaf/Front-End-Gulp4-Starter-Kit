// ---------- Gulp includes ---------- //

const {
    series
}               = require('gulp'),
    _server     = require('./gulp/_server'),
    _html       = require('./gulp/_html'),
    _style      = require('./gulp/_style'),
    _lint       = require('./gulp/_lint');

// ---------- Gulp exports ---------- //

const   styleBuild  = series(_style.style, _lint.styleLint),
        dev         = series(_html.html, styleBuild, _server.server);

// HTML exports
exports.html        = _html.html;

// Style exports
exports.style       = _style.style;
exports.styleLint   = _lint.styleLint;

exports.styleBuild  = styleBuild;
exports.default = dev;
