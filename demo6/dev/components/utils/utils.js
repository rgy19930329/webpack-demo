// 工具包

var utils = {
  add: function(x, y) {
    return x + y;
  },
  randomString: function(len) {　　
    len = len || 32;
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; 　　
    var maxPos = $chars.length;　　
    var pwd = '';　　
    for (i = 0; i < len; i++) {　　　　 
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　 
    }　　
    return pwd;
  }
}

module.exports = utils;
