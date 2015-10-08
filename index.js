'use strict';

// Second param is not mandatory, used only to force specific
// module version when nested dependencies cause conflict.
module.exports = function addJsxEngine(Mincer, jsx) {

  var JsxEngine = Mincer.JsxEngine = function JsxEngine() {
    Mincer.Template.apply(this, arguments);
    jsx = jsx || Mincer.Template.libs.jsx || require('react-tools');
  };

  require('util').inherits(JsxEngine, Mincer.Template);

  JsxEngine.prototype.evaluate = function evaluate(context, locals) {
    this.data = jsx.transform(this.data);
    return;
  };

  Mincer.registerEngine('.jsx', Mincer.JsxEngine);

  Object.defineProperty(Mincer.JsxEngine, 'defaultMimeType', {value: 'application/javascript'});
};
