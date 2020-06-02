// jQuery is needed, can you spot it?
import $ from 'jquery';

import '../scss/main.scss';

$(() => {
    const buttons = $('.js-button');
    buttons.on('click', function (e) {
        e.preventDefault();
        alert('Button is clicked');
    });
});