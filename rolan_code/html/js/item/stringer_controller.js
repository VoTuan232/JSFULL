//
//	stringer_controller.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

$(function() {

	$(document).on('elf-update', '.elf-stringer-control', function(e, v) {
		window.stringer($(this), v);
		return false;
	});

});
