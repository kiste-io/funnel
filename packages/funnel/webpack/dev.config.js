const {merge} = require('webpack-merge');
const webpack = require('webpack');
const base = require('./base.config');
const path = require('path')

module.exports = merge(base, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 9000,
      },
    plugins: [
      new webpack.EnvironmentPlugin({
        FUNNEL_SINK_CLICKS_ENDPOINT: 'http://localhost:9292/events/clicks'
      })
      
    ]
});
