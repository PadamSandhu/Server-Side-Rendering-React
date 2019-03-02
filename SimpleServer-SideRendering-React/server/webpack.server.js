const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const config = {
    // Inform webpack that We're building a bundle
    // for nodeJs, rather than for the browser
    target: 'node',

    // Tell webpack the root file of our
    // server application
    entry: './src/index.js',

    // Tell webpack where to put output file

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }

};

module.exports = merge(baseConfig, config);
// Merge will overwrite all the config setting in config constant.