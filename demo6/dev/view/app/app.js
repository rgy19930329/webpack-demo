// common
require('../../public/static.js');

require('./app.less');
var tpl = require('./app.html');
$('#app').html(tpl);

$('#btn').on('click', function(){
  // 异步加载 
  // require.ensure(['../../components/dialog/index.js'], function(require){
  //   var Dialog = require('../../components/dialog/index.js');
  //   new Dialog(new Date() - 0);
  // });

  var Dialog = require('../components/dialog/index.js');
  new Dialog(new Date() - 0);
});

var utils = require('../../components/utils/utils.js');

console.log(utils.add(2, 8));