// jQuery is needed, can you spot it?

$(document).ready(function () {
    var otherButtons = $('.js-other-button');
    otherButtons.on('click', function (e) {
        e.preventDefault();
        alert('Other button is clicked');
    });
});