var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // entry: './dev/entry.js',
  entry: {
    index: './dev/entry.js',
    about: './dev/view/about/about.js'
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: './',
    filename: "public/js/[name].js",
    chunkFilename: "public/js/[id].chunk.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      // { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css', 'less') },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=public/img/[name]-[hash].[ext]' }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by rgy'), // 添加编译头部信息
    new webpack.ProvidePlugin({ //加载jq
      $: 'jquery'
    }),
    // new ExtractTextPlugin('public/css/[name].css'), //单独使用style标签加载css并设置其路径
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      // favicon: './src/img/favicon.ico', //favicon路径
      filename: './index.html', //生成的html存放路径，相对于 path
      template: './dev/index.html', //html模板路径，相对于当下 path
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      // favicon: './src/img/favicon.ico', //favicon路径
      filename: './about.html', //生成的html存放路径，相对于 path
      template: './dev/view/about/about.html', //html模板路径，相对于当下 path
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      chunks: ['about']
    })
  ]
}
