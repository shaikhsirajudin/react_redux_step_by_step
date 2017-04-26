import path from 'path';
import webpack from 'webpack';

export default {
  devtool : 'inline-source-map',
  entry : [
    'webpack-hot-middleware/client', path.join(__dirname, '/client/index.js')
  ], //Add the entry point for hot module loading
  output : {
    path: '/',
    filename: "bundle.js",
    publicPath: '/' // add the path for hot loading

  },
  //Add the plugin realted to hotmoudle loading
  plugins : [
    new webpack.NoEmitOnErrorsPlugin(), // Handle error mesage in a cleaner way
    new webpack
      .optimize
      .OccurrenceOrderPlugin(), //this plugin is ensure the consistence build hashes
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders: [
      {
        test: /\.js$/,
        include:[ path.join(__dirname, 'client'),path.join(__dirname, 'server/shared')],
        loaders: ['react-hot-loader', 'babel-loader'] //Add react hot loader to ensure react files get updated
      }
    ]
  }
}