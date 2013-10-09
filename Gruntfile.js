
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
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            'dist/*',
                            'dist/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },
        copy: {
            dist: {
                files: [
                    {expand: true,src: ['app/**'],dest: 'dist'},
                    {expand: true,src: ['server/**'],dest: 'dist'},
                    {expand: true,src: ['package.json'],dest: 'dist'}
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    //removeCommentsFromCDATA: true
                     // https://github.com/yeoman/grunt-usemin/issues/44
                     //collapseWhitespace: true,
                    /* collapseBooleanAttributes: true,
                     removeAttributeQuotes: true,
                     removeRedundantAttributes: true,
                     useShortDoctype: true,
                     removeEmptyAttributes: true,
                     removeOptionalTags: true*/
                },
                files: [
                    {
                        expand: true,
                        src: ['app/**/*.html', 'app/**/partials/*.html','!app/index-async.html'],
                        dest: 'dist'
                    }
                ]
            }
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
        'jasmine_node',
        'express:dev',
        'karma:unit',
        //'watch',
        'karma:e2e'
    ]);
    grunt.registerTask('default', ['server']);
    

}
