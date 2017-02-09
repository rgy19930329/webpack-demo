// common
require('../../public/static.js');

require('./about.less');
var tpl = require('./about.html');
$('#app').html(tpl);

var utils = require('../../components/utils/utils.js');

console.log(utils.add(2, 6));