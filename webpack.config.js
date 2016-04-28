module.exports = {
    entry:  './src/bundle/wrapper.js',
    output: {
        libraryTarget: 'var',
        library: 'ShowChatTemplate',
        path:     'builds',
        filename: 'chatTemplate.js',
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: __dirname + '/src',
            }
        ],
    },
};
