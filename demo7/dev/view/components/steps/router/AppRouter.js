/**
 * @desc 组件路由
 * @author ranguangyu
 * @date 2016-02-21
 */

var Backbone  = require('../../../../components/backbone/index'),
		AppView = require('../views/AppView');

var AppRouter = Backbone.Router.extend({
	initialize: function(opts){
		this.appView = new AppView(opts);

		Backbone.history.stop();
		Backbone.history.start();
	},

	routes: {
		'step1-view' : 'renderStep1View',
		'step2-view' : 'renderStep2View',
		'step3-view' : 'renderStep3View',
		''           : 'renderInit'
	},

	/**
	 * step1
	 * @return {[type]} [description]
	 */
	renderStep1View: function() {
		this.appView.getView('Step1').render();
	},

	/**
	 * step2
	 * @return {[type]} [description]
	 */
	renderStep2View: function(){
		this.appView.getView('Step2').render();
	},

	/**
	 * step3
	 * @return {[type]} [description]
	 */
	renderStep3View: function() {
		this.appView.getView('Step3').render();
	},

	/**
	 * 初始化
	 * @return {[type]} [description]
	 */
	renderInit: function() {
		this.appView.render();
	}
});

module.exports = AppRouter;
