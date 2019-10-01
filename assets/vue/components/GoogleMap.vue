<template>
    <div>
        <div ref="map" :style="{height: height, width: width}"></div>
    </div>
</template>

<script>

    import gmapsInit from '../utils/gmaps';

    export default {
        name: 'google-map',
        data() {
            return {
            }
        },
        props: {
            locations: Array,
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '900px'
            },
            googleMapsKey: {
                required: true,
                type: String,
            }
        },
        mounted() {
            this.loadMap();
        },
        methods: {
            async loadMap() {
                try {
                    const mapOptions = {
                        maxZoom: 15,
                        streetViewControl: false,
                        fullscreenControl: false,
                        mapTypeControl: false
                    };

                    const google = await gmapsInit(this.googleMapsKey);
                    const map = new google.maps.Map(this.$refs.map, mapOptions);
                    const bounds = new google.maps.LatLngBounds();
                    let infoWindow = new google.maps.InfoWindow();

                    for (let location of this.locations) {
                        const marker = new google.maps.Marker({
                            position: {lat: parseFloat(location.marker.position.lat), lng: parseFloat(location.marker.position.lng)},
                            map: map,
                            icon: this.icon,
                            infowindow: infoWindow,
                        });

                        let zoomer = google.maps.event.addListener(map, "idle", function() {
                            map.setZoom(7);
                            google.maps.event.removeListener(zoomer);
                        });

                        google.maps.event.addListener(marker, 'click', function (e) {
                            infoWindow.setContent(location.marker.infoWindow);
                            infoWindow.open(map, this);
                        });

                        bounds.extend(marker.getPosition());
                    }
                    map.fitBounds(bounds);
                } catch (error) {
                }
            }
        }
    };
</script>

<style scoped lang="scss">

</style>

