'use strict';

$('document').ready(function () {

    function startDate() {
        var d = new Date();
        var currentDay = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
        var currentMonth = (d.getMonth() + 1 < 10) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
        var currentYear = d.getFullYear();
        $('.startDate').val(currentYear + '-' + currentMonth + '-' + currentDay);
    }
    startDate();


    // Edit mode
    function edit() {
        $('.editOff').css('display', 'none');
        $('.editOn').css('display', 'block');
        $('.inputDisabled').each(function () {
            $(this).css('display', 'block');
        });
        $('.labelDisabled').each(function () {
            $(this).css('display', 'none');
        });
    }

    // Cancel edit mode
    function cancelEdit() {
        $('.editOff').css('display', 'block');
        $('.editOn').css('display', 'none');
        $('.inputDisabled').each(function () {
            $(this).css('display', 'none');
        });
        $('.labelDisabled').each(function () {
            $(this).css('display', 'inline-block');
        });
    }

    $('.edit').click(function () {
        edit();
    });

    $('.cancel').click(function () {
        cancelEdit();
    });

    $('.save').click(function () {
        cancelEdit();
    });
});