var utils = require('../../../components/utils/utils.js');
//加载模块CSS
require('./dialog.less');
//加载模板
var tpl = require('./dialog.tmpl');

module.exports = function(text){
  var sid = 'dialog-' + utils.randomString(5);
  console.log(sid);
  var data = {
    text: text,
    sid: sid
  };
  $('#content').append(tpl(data));

  var $dialog = $('#' + sid),
      $delBtn = $dialog.find('.icon-del');
  $delBtn.on('click', function() {
    $dialog.remove();
  });
};
