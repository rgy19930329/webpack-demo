/**
 * @desc 主视图
 * @author ranguangyu
 * @date 2016-02-21
 */

var Backbone 	= require('../../../../components/backbone/index'),
		Step1View = require('./step1-view'),
		Step2View = require('./step2-view'),
		Step3View = require('./step3-view');

var AppView = Backbone.View.extend({

	el: $('#steps-wrap'),    //必须绑定到存在的dom元素上面，不然后面的所有事件将会失效

	initialize: function(opts) {
		this.options = opts;

    this.step1View = new Step1View(opts);
    this.step2View = new Step2View(opts);
    this.step3View = new Step3View(opts);

    this.appRouter = Backbone.history;

	  // this.render();
	},

	/**
	 * 获取view
	 * 
	 * @param  {[type]} viewName [description]
	 * @return {[type]}          [description]
	 */
	getView: function(viewName) {
		return {
			'Step1' : this.step1View,
			'Step2' : this.step2View,
			'Step3' : this.step3View,
		}[viewName];
	},

	render: function() {
		this.step1View.render();
	},

  _openView: function(path) {
    this.appRouter.navigate(path, {
        trigger: true
    });
  }

});

module.exports = AppView;
