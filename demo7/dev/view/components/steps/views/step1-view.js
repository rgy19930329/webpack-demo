/**
 * @desc step1
 * @author ranguangyu
 * @date 2016-02-21
 */
 
var Backbone = require('../../../../components/backbone/index'),
    EventAcrossView = require('./EventAcrossView'),
    tpl = require('../tpls/step1-view.tmpl');

var Step1View = Backbone.View.extend({

  el: $('#steps-wrap'),

  template: tpl,

  events: {
    "click #J-step1-next": "_doNext"
  },

  initialize: function() {
    var me = this;
    this.appRouter = Backbone.history;
  },

  render: function() {
    console.log('step1-view');
    
    this.$el.html(this.template({
      data: {}
    }));

    return this;
  },

  _doNext: function() {
    var _this = this;

    var data = $.serializeForm($('#J-current-form'));

    EventAcrossView.trigger('v:step1-view-form', data);
    _this.appRouter.navigate('step2-view', {
      trigger: true
    });
  }

});

module.exports = Step1View;
