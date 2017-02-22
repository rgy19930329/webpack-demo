/**
 * @desc step1
 * @author ranguangyu
 * @date 2016-02-21
 */
 
var Backbone = require('../../../../components/backbone/index'),
    EventAcrossView = require('./EventAcrossView'),
    bt = require('../../../../components/baiduTmpl/index.js'),
    tpl = require('../tpls/step2-view.tmpl');

var Step2View = Backbone.View.extend({

  el: $('#steps-wrap'),

  template: bt(tpl),

  events: {
    "click #J-step2-next": "_doNext"
  },

  initialize: function() {
    var _this = this;
    this.appRouter = Backbone.history;
    // 
    EventAcrossView.on('v:step1-view-form', function(data) {
      _this._step1Data = data;
    });
  },

  render: function() {
    var _this = this;
    console.log('step2-view');

    this.$el.html(this.template({
      data: _this._step1Data
    }));

    return this;
  },

  _doNext: function() {
    var _this = this;

    var data = $.serializeForm($('#J-current-form'));

    EventAcrossView.trigger('v:step2-view-form', data);
    _this.appRouter.navigate('step3-view', {
      trigger: true
    });
  }

});

module.exports = Step2View;
