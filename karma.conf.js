// karma.conf.js  --  karma configuration

// if you import your existing 'webpack.config.js' setup here,
// be sure to read the note about 'entry' below.

module.exports = function(config) {
    config.set({
        // ... normal karma configuration

        files: [
            // all files ending in "_test"
            'test/*_test.js',
            'test/**/*_test.js'
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            'test/*_test.js': ['webpack'],
            'test/**/*_test.js': ['webpack']
        },

        webpack: {
            // you don't need to specify the entry option because
            // karma watches the test entry points
            // webpack watches dependencies

            // ... remainder of webpack configuration (or import)
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i.e.
            noInfo: true,
            // and use stats to turn off verbose output
            stats: {
                // options i.e. 
                chunks: false
            }
        },

        plugins: [
            require("karma-webpack")
        ]

    });
};