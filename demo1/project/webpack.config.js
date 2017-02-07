var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

// ======================================================= //
/**
 * @desc 清空目录
 * @param path 目录路径
 */
function makeFolderEmpty(path) {
  var isExists = fs.existsSync(path);

  if (isExists == true) { // 若存在，则清空
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(fileName) {
      fs.unlinkSync(path + fileName);
    });
    console.log('目录已清空');
  } else { // 若不存在，则新建
    fs.mkdir(path, function(err) {
      if (err) {
        return console.error(err);
      }
      console.log('目录创建成功');
    });
  }
}

/**
 * @desc 新建目录
 * @param path 目录路径
 */
function newFolder(path, callback) {
  var isExists = fs.existsSync(path);
  if(!isExists) {
    fs.mkdir(path, function(err) {
      if (err) {
        return console.error(err);
      }
      callback && callback();
    });
  }
}

// 递归删除文件夹
function deleteFolderRecursive(path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file, index) {
      var curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(path);
  }
};

// 系统命令删除文件夹
function deleteFolder(path, callback) {
  var exec = require('child_process').exec, child;

  child = exec('rm -rf ' + path, function(err, out) { 
    console.log(out); 
    err && console.log(err);
    
    callback && callback();
  });
}

/**
 * @desc 文件拷贝
 * @param src 文件源
 * @param dst 目标路径
 */
function copyFile(src, dst) {
  fs.writeFileSync(dst, fs.readFileSync(src));
  console.log(src, 'copy 成功！')
}

/*
 * @desc 复制目录中的所有文件包括子目录
 * @param src 需要复制的目录
 * @param dst 复制到指定的目录
 */
function copyFolder(src, dst) {
  // 读取目录中的所有文件/目录
  fs.readdir(src, function(err, paths) {
    if (err) {
      throw err;
    }
    paths.forEach(function(path) {
      var _src = src + '/' + path,
        _dst = dst + '/' + path,
        readable, writable;
      fs.stat(_src, function(err, st) {
        if (err) {
          throw err;
        }
        // 判断是否为文件
        if (st.isFile()) {
          // 创建读取流
          readable = fs.createReadStream(_src);
          // 创建写入流
          writable = fs.createWriteStream(_dst);
          // 通过管道来传输流
          readable.pipe(writable);
        }
        // 如果是目录则递归调用自身
        else if (st.isDirectory()) {
          exists(_src, _dst, copyFolder);
        }
      });
    });
  });
};

function exists(src, dst, callback) {
  var isExists = fs.existsSync(path);
  if(isExists) {
    callback(src, dst);
  }else{
    fs.mkdir(dst, function() {
      callback(src, dst);
    });
  }
};

// ======================================================= //
var distPath = path.join(__dirname, '/dist/');
deleteFolder(distPath, function() {
  console.log('dist 删除成功！');
  newFolder(distPath, function() {
    console.log('dist 创建成功！');
    copyFile('./index.html', './dist/index.html');
    exists('./public', './dist/public', copyFolder);
  });
});
// ======================================================= //

module.exports = {
  entry: './entry.js',
  output: {
    path: distPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  resolve: {
    extensions: ['.less', '.js', '.html']
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by rgy')
  ],

}
