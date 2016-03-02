'use strict';

$('document').ready(function() {

	var d = new Date();
	var currentDay = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
	var currentMonth = (d.getMonth() + 1 < 10) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
	var currentYear = d.getFullYear();
	$('.startDate').val(currentYear + '-' + currentMonth + '-' + currentDay);

	// Edit mode
	$('.edit').click(function() {
		$('.editOff').css('display', 'none');
		$('.editOn').css('display', 'block')
		$('.inputDisabled').each(function() {
			$(this).prop("disabled", false);
		})
	});

	$('.cancel').click(function() {
		$('.editOff').css('display', 'block');
		$('.editOn').css('display', 'none')
		$('.inputDisabled').each(function() {
			$(this).css('display', 'none');
		})
	});

	$('.save').click(function() {
		$('.editOff').css('display', 'block');
		$('.editOn').css('display', 'none')
		$('.inputDisabled').each(function() {
			$(this).prop("disabled", true);
		})
	});
});