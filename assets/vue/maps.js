import Vue from 'vue';
import GoogleMap from './components/GoogleMap.vue';

const configElement = document.getElementById('google-maps-config');

if (configElement !== null) {
  const config = JSON.parse(configElement.innerHTML);

  new Vue({
    data: {
      locations: config.locations,
    },
    el: '#google-map',
    components: {
      GoogleMap,
    },
  });
}
