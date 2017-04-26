import path from 'path';


export default {
  devtool: 'inline-source-map',
  entry: 
    path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
     filename: "bundle.js"

  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'babel-loader' ]
      }
    ]
  } 
}