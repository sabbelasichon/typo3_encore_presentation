// jQuery is needed, can you spot it?

$(document).ready(function () {
    var buttons = $('.js-button');
    buttons.on('click', function (e) {
        e.preventDefault();
        alert('Button is clicked');
    });
});