// ---------- Gulp includes ---------- //

const {
    watch,
    series
}               = require('gulp'),
    _paths      = require('./_config'),
    _html       = require('./_html'),
    browserSync = require('browser-sync').create();

// ---------- Browser sync (local server) ---------- //

function localServer(done) {
    browserSync.init({
        port: 8080,
        open: true,
        notify: false,
        server: {
            baseDir: _paths.template.dest,
            index: 'index.html'
        }
    });

    done();
}

// ---------- Browser sync reload ---------- //

function reloadServer(done) {
    browserSync.reload();
    done();
}

// ---------- Watcher ---------- //

function watcher(done) {
    // Watch HTML files
    watch(_paths.template.watch, series(_html.html, reloadServer));

    done();
}

// ---------- Gulp exports ---------- //

const   server      = series(localServer, watcher);

exports.server = server;
