<template>
  <div>
    <div v-show="viewMap" class="map" >
      <Map :route="route" :current="currents[0]"/>
      <div class="garget">
        <drone-param v-bind:id="selected.id" v-bind:name="selected.name" style="margin: 20px 0 0 20px" :key="selected.id + 'drone-param'"/>
        <drone-control style="margin: 20px 0 0 20px" :key="selected.id + 'drone-control'" @moveNext="moveNext"/>
        <drone-setting style="margin: 20px 0 0 20px" />
      </div>
      <b-tooltip
        :label="mapName[smallMapName]"
        type="is-dark"
        position="is-bottom"
        class="small-map-container"
      >
        <div 
          class="small-map"
          v-on:click="switchView" 
          v-bind:style="{ 'background-image': 'url(' + require('@/assets/images/' + smallMapImg) + ')' }"
        >
        </div>
      </b-tooltip>
    </div>
    <div 
      v-show="!viewMap"
      class="map" 
      v-bind:style="{ 'background-image': 'url(' + require('@/assets/images/' + mapImg) + ')' }"
    >
      <div class="garget">
        <drone-param v-bind:id="selected.id" v-bind:name="selected.name" style="margin: 20px 0 0 20px" :key="selected.id + 'drone-param'"/>
        <camera-control style="margin: 20px 0 0 20px" :key="selected.id + 'camera-control'"/>
        <drone-setting style="margin: 20px 0 0 20px" />
      </div>
      <b-tooltip
        :label="mapName[smallMapName]"
        type="is-dark"
        position="is-bottom"
        class="small-map-container"
      >
        <div 
          class="small-map"
          v-on:click="switchView" 
          v-bind:style="{ 'background-image': 'url(' + require('@/assets/images/' + smallMapImg) + ')' }"
        >
        </div>
      </b-tooltip>
    </div>
  </div>
</template>

<script>
import CameraControl from "@/components/status/CameraControl.vue";
import DroneControl from "@/components/status/DroneControl.vue";
import DroneParam from "@/components/status/DroneParam.vue";
import DroneSetting from "@/components/status/DroneSetting.vue";
import Map from "@/components/status/FlyingMap.vue";

export default {
  name: 'is-flying',
  components: {
    CameraControl,
    DroneControl,
    DroneParam,
    DroneSetting,
    Map,
  },
  props: {
    selected: {
      id: String,
      name: String,
    }
  },
  data() {
    return {
      route: [
        { lat: 21.004995, lng: 105.843637 },
        { lat: 21.008701, lng: 105.838873 } ,
        { lat: 21.008480, lng: 105.849216 } ,
        { lat: 20.999544, lng: 105.836073 } ,
        { lat: 20.998756, lng: 105.844227 } ,
      ],
      currents: [
        { position: { lat: 21.004995, lng: 105.843637 } },
        { position: { lat: 21.008701, lng: 105.838873 } },
        { position: { lat: 21.008480, lng: 105.849216 } },
        { position: { lat: 20.999544, lng: 105.836073 } },
        { position: { lat: 20.998756, lng: 105.844227 } },
      ],
      viewMap: true,
      mapImg: 'Google-Maps.jpg',
      smallMapImg: 'column-high-voltage.jpg',
      mapName: ['Ảnh bản đồ', 'Ảnh từ camera'],
      smallMapName: 1,
      isShowMap: true,
    }
  },
  methods: {
    switchView() {
      this.viewMap = !this.viewMap;
      var tmp = this.mapImg;
      this.mapImg = this.smallMapImg;
      this.smallMapImg = tmp;
      this.smallMapName = 1 - this.smallMapName;
      this.isShowMap = !this.isShowMap;
    },

    moveNext() {
      this.currents.splice(0,1);
      this.route.splice(0,1);
    }
  }
}
</script>

<style lang="scss" scoped>
.garget {
  position: absolute;
  display: flex;
}
</style>