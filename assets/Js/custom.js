import '../Css/custom.css';

// jQuery is needed, can you spot it?
const $ = require('jquery');
import 'bootstrap/dist/js/bootstrap';

$(document).ready(function () {
    // Do you know let and const?
    const buttons = $('.js-button');
    buttons.on('click', function (e) {
        e.preventDefault();
        alert('Button is clicked');
    });
});