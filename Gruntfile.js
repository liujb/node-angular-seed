
module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    
    grunt.initConfig({

        express: {
            options: {
                port: process.env.PORT || 3000
            },
            dev: {
                options: {
                    script: './server/app.js'
                }
            },
            prod: {
                options: {
                    script: './server/app.js'
                }
            }
        },
        watch: {
            express: {
                files: [
                    'server\\app.js'
                ],
                tasks: ['express:dev'],
                options: {
                    livereload: true,
                    nospawn: true //Without this option specified express won't be reloaded
                }
            }
        }//watch
    })//init
  
    grunt.registerTask('server', [
        'express:dev',
        'watch'
    ]);

    grunt.registerTask('default', ['server']);
    

}
