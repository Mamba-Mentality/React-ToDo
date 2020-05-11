const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  mode: 'none',
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias:{
      applicationStyles: 'app/styles/app.scss',
      appComponents: path.resolve(__dirname, 'app/components/')
    },
    extensions: ['*','.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // Babel Loader
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
          // sass-loader
          { loader: 'sass-loader' }
        ],
      }
    ]
  }
};