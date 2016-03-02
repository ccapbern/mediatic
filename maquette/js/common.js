'use strict';

$('document').ready(function() {

	$('#edit').change(function() {
		var edit = $(this);
		if (edit.is(':checked')) {
			console.log('checked !');
			$('.inputDisabled').each(function () {
				$(this).prop("disabled", false);
			})
		} else {
			console.log('unchecked !');
			$('.inputDisabled').each(function () {
				$(this).prop("disabled", true);
			})
		}
	});
});