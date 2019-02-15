module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass:{
            disk: {
                files: {
                    'styles/styles.css' : 'styles/styles.scss'
                }
            }
        },

        watch: {
            css:{
                files:['./styles/styles.scss','./styles/styles.mini.css','./Pictures'],
                tasks:['sass','cssmin','imagemin']
            }
        },
        cssmin:{
            minify:{
                src:'./styles/styles.css',
                dest:'./styles/styles.min.css'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './Pictures/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: './resizedImg/'
                }]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        './styles/styles.css',
                        './*html'
                    ]
                },
                options:{
                    watchTask: true,
                    watchOptions:{
                        ignored:''
                    },
                    server:'./'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-browserify'); //
    grunt.loadNpmTasks('grunt-contrib-imagemin') //Reduce image size
    grunt.loadNpmTasks('grunt-contrib-cssmin'); //minifi css files
    grunt.loadNpmTasks('grunt-contrib-watch');  //Watches my Scss files for change
    grunt.loadNpmTasks('grunt-contrib-sass');    //Converts scss to sass
    grunt.registerTask('default', ['browserSync','watch', 'imagemin']);
}