(function($) {
$.fn.tabable = function($o) {
	var _o = $.extend({ tab: '  ' + '  ' }, $o);

	return this.filter('textarea').each(function() {
		$(this).bind('keydown', function($e) {
			if ($e.which === 9) {
				var _t = $e.target,
					_top = _t.scrollTop || 0,
					_ss = _t.selectionStart,
					_se = _t.selectionEnd,
					_l = _o.tab.length;

				_t.value = _t.value.slice(0, _ss)
					.concat(_o.tab)
					.concat(_t.value.slice(_ss, _t.value.length));

				if (_ss === _se) {
					_t.selectionStart =
						_t.selectionEnd = _ss + _l;
				} else {
					_t.selectionStart = _ss + _l;
					_t.selectionEnd = _se + _l;
				}

				if (_top !== 0 && _t.scrollTop !== _top) {
					_t.scrollTop = _top;
				}
				return false;
			}
			return true;
		});
		return true;
	});
};
})(jQuery);
