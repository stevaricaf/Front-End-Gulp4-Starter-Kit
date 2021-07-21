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
    
}
