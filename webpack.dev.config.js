module.exports = {
  entry:  './src/bundle/wrapper.js',
  output: {
      libraryTarget: 'var',
      library: 'showChatTemplate',
      path:     'builds',
      filename: 'chat-template.js',
  },
  module: {
      loaders: [
          {
              test:   /\.js?$/,
              loader: 'babel',
              query: {
                "presets": ["es2015", "react"]
              },
              exclude: /node_modules/
          }
      ],
  },
};
