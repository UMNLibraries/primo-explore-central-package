process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/angular-translate/dist/angular-translate.js',
      './node_modules/angular-material/angular-material.js',
      './node_modules/angular-animate/angular-animate.js',
      './node_modules/angular-aria/angular-aria.js',
      './node_modules/angular-cookies/angular-cookies.js',
      './js/main.js',
      './js/**/*.spec.js',
    ],

    frameworks: ['jasmine', 'browserify'],
    
    plugins: [
      'karma-jasmine',
      'karma-browserify',
      'karma-chrome-launcher',
      'karma-babel-preprocessor',
      'karma-spec-reporter'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: {
      'js/main.js': ['browserify'],
      'js/**/*.spec.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [[ 'babelify', {presets: ['@babel/preset-env']}]]
    },

    // Babel preprocessor specific configuration
    babelPreprocessor: {
      options: {
        presets: ['es2015'], // use the es2015 preset
        sourceMap: 'inline' // inline source maps inside compiled files
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
