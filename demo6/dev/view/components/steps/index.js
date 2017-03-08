require('./index.less');
var AppRouter = require('./router/AppRouter');

module.exports = {
  start: function (opts) {
    new AppRouter(opts);
  }
}