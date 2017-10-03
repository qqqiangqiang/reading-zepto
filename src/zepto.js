// 整体的代码结构
var Zepto = (function() {
	// 内部整体结构
	// 疑问点一 ？封装这么多层的意义
	var zepto = {},$;

	function Z(doms) {
	  var len = doms.length;
	  for (var i = 0; i < len; i++) {
	  	this[i] = doms[i];
	  }
	  this.length = doms.length;
	}

	zepto.Z = function(doms) {
		return new Z(doms);
	}

	zepto.init = function(doms) {
    var doms = ['domObj1', 'domObj2', 'domObj3'];
    return zepto.Z(doms);
	}

	$ = function() {
		return zepto.init();
	}

	$.fn = {
		constructor: zepto.Z,
		method: function() {
			return this;
		}
	}
  
  /*
  * 既能使用$.each(['a','b','c'], function(){})的方法调用
  * 又能通过$('.category-header').each(function(){})的方法调用
  * 采用这种方式进行指向
  */ 
	zepto.Z.prototype = Z.prototype = $.fn

	return $;

})()

window.Zepto = Zepto;
window.$ = undefined && (window.$ = Zepto)
