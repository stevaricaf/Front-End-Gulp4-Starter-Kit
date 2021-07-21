// ---------- Paths ---------- //

module.exports = {

    template: {
        src: 'root/templates/pages/**/*.html',
        dest: 'root/',
        basePath: 'root/templates/',
        watch: ['root/templates/**/*.html', '!root/templates/*.html']
    },
    style: {
        src: 'root/scss/**/*.s+(c|a)ss',
        dest: 'root/src/css/',
        dist: 'root/src/css/dist/',
        watch: 'root/scss/**/*.s+(c|a)ss',
    },
    js: {
        src: 'root/js/',
        dest: 'root/src/js/',
        dist: 'root/src/js/dist/',
        main: 'root/js/main.js',
        addons: ['root/js/libs/**/*.js', 'root/js/plugins/**/*.js'],
        merge: ['root/src/js/addons.js', 'root/src/js/main.js'],
        remove: ['root/src/js/addons.js', 'root/src/js/main.js'],
        watch: ['root/js/**/*.js', '!root/js/libs/**/*.js', 'root/js/plugins/**/*.js']
    }
    
}
