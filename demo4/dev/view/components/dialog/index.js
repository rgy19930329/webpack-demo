var bt = require('../../../components/baiduTmpl/index.js'),
    utils = require('../../../components/utils/utils.js');
//加载模块CSS
require('./dialog.less');
//加载模板
var tpl = require('./dialog.html');

module.exports = function(text){
  var sid = 'dialog-' + utils.randomString(5);
  console.log(sid);
  var data = {
    text: text,
    sid: sid
  };
  var html = bt( tpl, data );
  $('#content').append(html);

  var $dialog = $('#' + sid),
      $delBtn = $dialog.find('.icon-del');
  $delBtn.on('click', function() {
    $dialog.remove();
  });
};
