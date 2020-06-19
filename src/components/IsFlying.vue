<template>
  <div 
    class="map" 
    v-bind:style="{ 'background-image': 'url(' + require('../assets/images/' + mapImg) + ')' }"
  >
    <drone-param v-bind:id="selected.id" v-bind:name="selected.name" style="margin: 20px 0 0 20px" :key="selected.id + 'drone-param'"/>
    <drone-control style="margin: 20px 0 0 20px" :key="selected.id + 'drone-control'"/>
    <camera-control style="margin: 20px 0 0 20px" :key="selected.id + 'camera-control'"/>
    <b-tooltip 
        v-show="isShowMap"
        :label="selected.id + ' | ' + selected.name"
        position="is-bottom"
        class="drone-map-marker">
      <b-icon icon="map-marker" size="is-large"
            type="is-primary"></b-icon>
    </b-tooltip>
    <b-tooltip
      :label="mapName[smallMapName]"
      type="is-dark"
      position="is-bottom"
      class="small-map-container"
    >
      <div 
        class="small-map"
        v-on:click="switchView" 
        v-bind:style="{ 'background-image': 'url(' + require('../assets/images/' + smallMapImg) + ')' }"
      >
      </div>
    </b-tooltip>
  </div>
</template>

<script>
import CameraControl from "@/components/CameraControl.vue";
import DroneControl from "@/components/DroneControl.vue";
import DroneParam from "@/components/DroneParam.vue";

export default {
  name: 'is-flying',
  components: {
    CameraControl,
    DroneControl,
    DroneParam,
  },
  props: {
    selected: {
      id: String,
      name: String,
    }
  },
  data() {
    return {
      mapImg: 'Google-Maps.jpg',
      smallMapImg: 'column-high-voltage.jpg',
      mapName: ['Ảnh bản đồ', 'Ảnh từ camera'],
      smallMapName: 1,
      isShowMap: true,
    }
  },
  methods: {
    switchView() {
      var tmp = this.mapImg;
      this.mapImg = this.smallMapImg;
      this.smallMapImg = tmp;
      this.smallMapName = 1 - this.smallMapName;
      this.isShowMap = !this.isShowMap;
    },
  }
}
</script>