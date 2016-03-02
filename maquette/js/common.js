'use strict';

$('document').ready(function() {

	$('#edit').change(function() {
		var edit = $(this);
		if (edit.is(':checked')) {
			$('.inputDisabled').each(function () {
				$(this).prop("disabled", false);
			})
		} else {
			$('.inputDisabled').each(function () {
				$(this).prop("disabled", true);
			})
		}
	});
});