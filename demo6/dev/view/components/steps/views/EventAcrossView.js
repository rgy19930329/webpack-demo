/**
 * 支持不同视图之间通过事件进行通讯
 */

var Backbone  = require('../../../../components/backbone/index');

var EventAcrossView = $.extend({}, Backbone.Events);

module.exports = EventAcrossView;