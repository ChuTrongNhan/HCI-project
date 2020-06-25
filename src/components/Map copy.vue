<template>
  <gmaps-map :options="mapOptions">
    <gmaps-marker v-for="(item, i) in items" :key="i" :options="item.options" v-on:click="test(i)"/>
    <gmaps-polyline :path="items2" strokeColor="yellow" :strokeWeight="1.5"/>
  </gmaps-map>
</template>

<script>
  import { gmapsMap, gmapsPolyline, gmapsMarker } from 'x5-gmaps';

  export default {
    components: { gmapsMap, gmapsPolyline, gmapsMarker },
    data: () => ({
      items: [
        { options: { position: { lat: 21.004995, lng: 105.843637 } } },
        { options: { position: { lat: 21.008701, lng: 105.838873 } } },
        { options: { position: { lat: 21.008480, lng: 105.849216 } } },
        { options: { position: { lat: 20.999544, lng: 105.836073 } } },
      ],
      mapOptions: {
          center:{ lat: 21.004995, lng: 105.843637 },
          zoom: 15,
      },
      items2: [
        { lat: 21.008701, lng: 105.838873 },
        { lat: 21.008480, lng: 105.849216 },
        { lat: 20.999544, lng: 105.836073 },
        { lat: 21.005870, lng: 105.834000 },
      ],
    }),
    methods: {
      test(i) {
        console.log(i);
        
      }
    },
  }
</script>