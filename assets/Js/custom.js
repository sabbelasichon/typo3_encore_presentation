import '../Css/custom.css';
import Vue from 'vue'
import CookieLaw from 'vue-cookie-law'

// jQuery is needed, can you spot it?
const $ = require('jquery');
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

