// jQuery is needed, can you spot it?

$(document).ready(function () {
    // Do you know let and const?
    var buttons = $('.js-button');
    buttons.on('click', function (e) {
        e.preventDefault();
        alert('Button is clicked');
    });
});