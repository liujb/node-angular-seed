
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
        },//watch
        jasmine_node: {
            projectRoot: "./test/server",  //这里是指测试文件放的地方。变量名起的太stupid!
            requirejs: false,
            forceExit: true
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                //background: true,
                singleRun: true
            },
            e2e: {
                configFile: 'karma-e2e.conf.js',
                //background: true,
                singleRun: true
            }
        }
    })//init
  
    grunt.registerTask('server', [
        'express:dev',
        'watch'        
    ]);
    
    grunt.registerTask('UnitTest',[
        'express:dev',
        //'watch',
        'karma:unit'
    ]);

    grunt.registerTask('E2eTest',[
        'express:dev',
        //'watch',
        'karma:e2e'
    ]);

    grunt.registerTask('test',[
        'express:dev',
        'karma:unit',
        //'watch',
        'karma:e2e'
    ]);
    

    grunt.registerTask('default', ['server']);
    

}
