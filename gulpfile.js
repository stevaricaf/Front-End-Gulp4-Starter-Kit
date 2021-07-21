// ---------- Gulp includes ---------- //

const {
    series
}               = require('gulp'),
    _server     = require('./gulp/_server'),
    _html       = require('./gulp/_html'),
    _style      = require('./gulp/_style'),
    _lint       = require('./gulp/_lint'),
    _js         = require('./gulp/_javascript');

// ---------- Gulp exports ---------- //

const   styleBuild  = series(_style.style, _lint.styleLint),
        jsBuild     = series(_js.main, _js.addons, _js.merge, _js.remove),
        dev         = series(_html.html, styleBuild, jsBuild, _server.server);

// HTML exports
exports.html        = _html.html;

// Style exports
exports.style       = _style.style;
exports.styleLint   = _lint.styleLint;

// JS exports
exports.jsMain      = _js.main;
exports.jsAddons    = _js.addons;
exports.jsMerge     = _js.merge;
exports.jsRemove    = _js.remove;

exports.styleBuild  = styleBuild;
exports.jsBuild     = jsBuild;
exports.default     = dev;
