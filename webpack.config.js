module.exports = {
  entry: './app/app.jsx',
  mode: 'none',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias:{
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['*','.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
