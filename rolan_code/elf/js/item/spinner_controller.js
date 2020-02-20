//
//	spinner_controller.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function() {

	$('#app-container').on('elf-update', '.elf-spinner-control', function(e, v) {
		$(this).prop('value', v);
		var _$input = $(this).children('input');
		calc(_$input, v * 1)
		return false;
	});

	$('#app-container').on('change', '.elf-spinner-control', function(e) {
		e.stopPropagation();
		var _$input = $(this).children('input');
		var v = _$input.val();
		if (isNaN(v)) { v = $(this).val() } else { v = invert(_$input, v) }
		calc(_$input, (v * 1));
	});

	$('.elf-spinner-up-control').on('click', function(e) {
		e.stopPropagation();
		var _$input = $(this).siblings('input');
		var v = _$input.parent().val() * 1;
		calc(_$input, v + 1);
	});

	$('.elf-spinner-down-control').on('click', function(e) {
		e.stopPropagation();
		var _$input = $(this).siblings('input');
		var v = _$input.parent().val() * 1;
		calc(_$input, v - 1);
	});

	function calc(_$input, v) {
		var min = _$input.attr('min'); if (!min) min = 0;
		var max = _$input.attr('max'); if (!max) max = 0;
		min *= 1; max *= 1;
		if (v < min) v = min;
		if (v > max) v = max;
		_$input.val(power(_$input, v));
		_$input.parent().val(v);
		_$input.parent().trigger('elf-change', v);
	}

	function power(_$, v) {
		var n = _$.attr('power');
		if (n) {
			v = v * Math.pow(10, n);
			if (n < 0) v = v.toFixed(Math.abs(n));
		}
		return v;
	}

	function invert(_$, v) {
		var n = _$.attr('power');
		if (n) { v = Math.round(v * Math.pow(10, -n)); }
		return v;
	}

});
