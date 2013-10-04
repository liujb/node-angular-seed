module.exports = function(config){
    config.set({


    basePath : '',

    files : [
        'test/e2e/**/*.js'
    ],

    autoWatch : false,

    browsers : ['PhantomJS'],

    frameworks: ['ng-scenario'],

    singleRun : true,

    proxies : {
      '/': 'http://localhost:3000/'
    },
    urlRoot: '__karma__',
    reporters: ['dots'],

    plugins : [
            'karma-phantomjs-launcher',
            //'karma-jasmine',
            'karma-ng-scenario'    
            ]

})}

