// 打包多页应用
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './dev/view/app/app.js',
    about: './dev/view/about/about.js',
    progress: './dev/view/progress/progress.js',
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: 'http://localhost:9000/',
    filename: "public/js/[name].js",
    chunkFilename: "public/js/[id].chunk.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!postcss-loader!less-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.tmpl$/, loader: 'tmpl-loader' },  
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=public/img/[name]-[hash].[ext]' },
      // bootstrap fonts
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?&name=public/bootstrap/fonts/[name].[ext]" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000&name=public/bootstrap/fonts/[name].[ext]" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream&name=public/bootstrap/fonts/[name].[ext]" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml&name=public/bootstrap/fonts/[name].[ext]" }
    ]
  },
  postcss: function () {
    return [
      require('autoprefixer'),
      require('postcss-grid'),
    ];
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by rgy'), // 添加编译头部信息
    new webpack.ProvidePlugin({ //加载jq
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      filename: './index.html', //生成的html存放路径，相对于 path
      template: './dev/index.html', //html模板路径，相对于当下 path
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      filename: './about.html', //生成的html存放路径，相对于 path
      template: './dev/index.html', //html模板路径，相对于当下 path
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      filename: './progress.html', //生成的html存放路径，相对于 path
      template: './dev/index.html', //html模板路径，相对于当下 path
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      chunks: ['progress']
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    progress: true,
    port: '9000'
  }
}
