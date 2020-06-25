<template>
  <gmaps-map :options="mapOptions">
    <gmaps-marker :options="current"/>
    <gmaps-polyline :path="route" strokeColor="yellow" :strokeWeight="1.5"/>
  </gmaps-map>
</template>

<script>
import { gmapsMap, gmapsPolyline, gmapsMarker } from 'x5-gmaps';

export default {
  components: { gmapsMap, gmapsPolyline, gmapsMarker },
  props: ['route', 'current'],
  data: () => ({
    mapOptions: {
        center:{ lat: 21.004995, lng: 105.843637 },
        zoom: 15,
    },
  }),
}
</script>