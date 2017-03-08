// common
require('../../public/static.js');

require('./progress.less');
var tpl = require('./progress.html');
$('#app').html(tpl);
// 
var _ = require('underscore');
var StepsApp = require('../components/steps/index');
StepsApp.start();
