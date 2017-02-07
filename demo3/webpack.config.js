var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './dev/entry.js',
  entry: {
    index: "./dev/entry.js",
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: "./",
    // filename: 'bundle.js',
    filename: "js/[name].js",
    chunkFilename: "js/[id].chunk.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by rgy'),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      // favicon: './src/img/favicon.ico', //favicon路径
      filename: './index.html', //生成的html存放路径，相对于 path
      template: './dev/index.html', //html模板路径，相对于当下 path
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      // minify: { //压缩HTML文件
      //   removeComments: true, //移除HTML中的注释
      //   collapseWhitespace: true //删除空白符与换行符
      // }
    })
  ]
}
