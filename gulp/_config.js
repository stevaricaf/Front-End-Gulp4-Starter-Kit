// ---------- Paths ---------- //

module.exports = {

    template: {
        src: 'root/templates/pages/**/*.html',
        dest: 'root/',
        basePath: 'root/templates/',
        watch: ['root/templates/**/*.html', '!root/templates/*.html']
    }
    
}
