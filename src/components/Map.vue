<template>
  <div class="route-select-container"> 
    <div class="route-form">
      <div class="route-form-title">Chọn điểm kiểm tra</div>
      <div class="plan-route">
        <div class="route-point" v-for="(point, index) in selectedPoints" :key="index">
          <span>Cột điện cao thế</span>
          <span>{{point.lat}}, {{point.lng}}</span>
          <div class="remove-button"  v-on:click="remove(index)">
            <b-icon size="is-small" icon="window-close"></b-icon>
          </div>
        </div>
        <div class="route-point-add" style="text-align:center">
          <span style="color: gray">Thêm điểm</span>
          <span>Bấm chọn trên bản đồ</span>
        </div>
      </div>
    </div>
    <gmaps-map :options="mapOptions">
      <gmaps-marker v-for="(item, i) in markers" :key="i" :options="item" v-on:click="add(item)"/>
      <gmaps-polyline :path="selectedPoints" strokeColor="yellow" :strokeWeight="1.5"/>
    </gmaps-map>
  </div>
</template>

<script>
import { gmapsMap, gmapsPolyline, gmapsMarker } from 'x5-gmaps';

export default {
  components: { 
    gmapsMap, 
    gmapsPolyline, 
    gmapsMarker 
  },
  props: ['selected'],
  data() {
    return {
      selectedPoints: this.selected,
      markers: [
        { position: { lat: 21.004995, lng: 105.843637 } },
        { position: { lat: 21.008701, lng: 105.838873 } },
        { position: { lat: 21.008480, lng: 105.849216 } },
        { position: { lat: 20.999544, lng: 105.836073 } },
        { position: { lat: 21.005870, lng: 105.834000 } },
        { position: { lat: 21.000640, lng: 105.854012 } },
        { position: { lat: 20.998756, lng: 105.844227 } },
      ],
      mapOptions: {
          center:{ lat: 21.004995, lng: 105.843637 },
          zoom: 15,
      },
    }
  },

  methods: {
    remove(i) {
      this.selectedPoints.splice(i, 1);
    },

    add(point) {
      this.selectedPoints.push(point.position);
    }
  },
}
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
</style>