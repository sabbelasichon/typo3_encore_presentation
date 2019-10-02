import '../Css/custom.scss';
import Vue from 'vue';
import CookieLaw from 'vue-cookie-law';

// jQuery is needed, can you spot it?
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';


new Vue({
    el: '#cookie',
    components: {
        CookieLaw,
    }
});

// Do you know let and const?
const buttons = $('.js-button');
buttons.on('click', function (e) {
    e.preventDefault();
    alert('Button is clicked');
});

