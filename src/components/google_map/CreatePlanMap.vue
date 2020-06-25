<template>
    <GoogleMapLoader
      :mapConfig="mapConfig"
      apiKey="AIzaSyBCphwtfDm-RCIA6tFd6wRF-vCcqipZa0w"
      :markers="markers"
    >
      <template slot-scope="{ google, map }">
        <!-- <GoogleMapMarker v-for="marker in markers" :key="marker.id" :marker="marker" :google="google" :map="map" :id="marker.id" /> -->
        <GoogleMapLine
          v-for="line in lines"
          :key="line.id"
          :path.sync="line.path"
          :google="google"
          :map="map"
        />
      </template>
    </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader";
// import GoogleMapMarker from "./GoogleMapMarker";
import GoogleMapLine from "./GoogleMapLine";

import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
    // GoogleMapMarker,
    GoogleMapLine
  },

  methods:{
    test() {
      console.log("12");
      
    }
  },

  data() {
    return {
      selectedPoint: [],
      markers: [
        {
          id: "a",
          position: { lat: 21.004995, lng: 105.843637 },
        },
        {
          id: "b",
          position: { lat: 21.008701, lng: 105.838873 }
        },
        {
          id: "c",
          position: { lat: 21.008480, lng: 105.849216 },
        },
        {
          id: "d",
          position: { lat: 20.999544, lng: 105.836073 },
        },
        {
          id: "e",
          position: { lat: 21.005870, lng: 105.834000 },
        },
        {
          id: "f",
          position: { lat: 21.000640, lng: 105.854012 },
        },
        {
          id: "g",
          position: { lat: 20.998756, lng: 105.844227 },
        }
      ],
      // lines: [
      //   {
      //     id: "1",
      //     path: [{ lat: 3, lng: 101 }, { lat: 5, lng: 99 }]
      //   },
      //   {
      //     id: "2",
      //     path: [{ lat: 5, lng: 99 }, { lat: 6, lng: 97 }]
      //   }
      // ]
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter,
      };
    },

    mapCenter() {
      return this.markers[0].position;
    },

    lines() {
      var res = [];
      for (var i = 1; i < this.selectedPoint.length; ++i) {
        var el = { 
          id: i.toString(), 
          path: [this.selectedPoint[i - 1].position, this.selectedPoint[i].position]
        }
        res.push(el);
      }
      return res;
    }
  },
};
</script>
