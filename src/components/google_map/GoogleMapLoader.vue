<template>
  <div class="route-select-container"> 
    <div class="route-form">
      <div class="route-form-title">Chọn điểm kiểm tra</div>
      <div class="plan-route">
        <div class="route-point" v-for="(point, index) in selectedPoints" :key="point.id">
          <span>Cột điện cao thế {{point.id}}</span>
          <span>{{point.position.lat}}, {{point.position.lng}}</span>
          <div class="remove-button"  v-on:click="removePoint(index)">
            <b-icon size="is-small" icon="window-close"></b-icon>
          </div>
        </div>
        <div class="route-point-add" style="text-align:center">
          <span style="color: gray">Thêm điểm</span>
          <span>Bấm chọn trên bản đồ</span>
        </div>
      </div>
    </div>
    <div class="google-map" ref="googleMap" v-on:click="addPoint"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCphwtfDm-RCIA6tFd6wRF-vCcqipZa0w&callback=initMap">
</script>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import { POINT_MARKER_ICON_CONFIG } from "@/constants/mapSettings";

export default {
  props: {
    mapConfig: Object,
    apiKey: String,
    markers: Array,
    selectedPointsProps: Array,
  },

  data() {
    return {
      google: null,
      map: null,
      count: -2,
      selectedPoints: this.selectedPointsProps,
    };
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });
    this.google = googleMapApi;
    this.initializeMap();
    console.log(this.selectedPointsProps);
    

    // var marker = new this.google.maps.Marker({
    //       position: new this.google.maps.LatLng(this.markers[i].position.lat , this.markers[i].position.lng),
    //       map: this.map,
    //       title: 'Click Me ' + i,
    //       icon: POINT_MARKER_ICON_CONFIG 
    //   });  
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },

    addPoint() {
      ++this.count;
      if (this.count >= 0 && this.count <this.markers.length) {
        this.$emit('add-point', this.count);
        this.selectedPoints.push(this.markers[this.count]);
      }
    },

    removePoint(i) {
      this.$emit('remove-point', i);
      this.selectedPoints.splice(i, 1);
    }
  },
  
  computed: {
    selectedPoint() {
      return markers.filter(el => el.selected);
    }
  }
};
</script>

<style lang="scss" scoped>
.route-select-container {
  display: flex;
  background: white;
  min-height: 500px;
  padding: 20px 0;
  border-radius: 0 0 13px 13px;
}
.route-form {
  padding: 0 20px;
  width: 400px;
}
.route-form-title {
  font-weight: bold;
  font-size: 24px;
}
.plan-route {
  .route-point {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: white;
    border-radius: 15px;
    margin-top: 10px;
    box-shadow: 0px 4px 12px rgba(121, 87, 213, 0.15);
    position: relative;

    &>:first-child { font-weight: 600 }
    &>:nth-child(2) { font-size: 12px; color: #b9b9b9 }
    
    .remove-button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .route-point-add {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 15px;
    margin-top: 10px;
    border: 1px dashed lightgray;

    &>:first-child { font-weight: 600 }
    &>:nth-child(2) { font-size: 12px; color: #b9b9b9 }
  }
}
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>
