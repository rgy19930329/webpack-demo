/**
 * @desc step1
 * @author ranguangyu
 * @date 2016-02-21
 */
 
var Backbone = require('../../../../components/backbone/index'),
    EventAcrossView = require('./EventAcrossView'),
    bt = require('../../../../components/baiduTmpl/index.js'),
    tpl = require('../tpls/step3-view.tmpl');

var Step3View = Backbone.View.extend({

  el: $('#steps-wrap'),

  template: bt(tpl),

  events: {
    "click #J-step3-next": "_doNext"
  },

  initialize: function() {
    var _this = this;
    this.appRouter = Backbone.history;
    //
    EventAcrossView.on('v:step2-view-form', function(data) {
      _this._step2Data = data;
    });
  },

  render: function() {
    var _this = this;
    console.log('step3-view');

    this.$el.html(this.template({
      data: _this._step2Data
    }));

    return this;
  },

  _doNext: function() {
    var _this = this;

    window.location.href = '/about.html';
  }

});

module.exports = Step3View;
