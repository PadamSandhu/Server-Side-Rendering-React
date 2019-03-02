const path = require('path');

module.exports = {
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