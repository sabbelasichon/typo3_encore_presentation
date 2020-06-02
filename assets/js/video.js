import '../scss/video.scss';

import $ from 'jquery';
import * as HLS from 'video.js/dist/video';

$(() => {
    const buttons = $('.js-other-button');
    buttons.on('click', function (e) {
        e.preventDefault();
        alert('Button is clicked');
    });
});
