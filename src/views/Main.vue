<template>
  <div>
    <MainHeader/>
    <div>
      <div class="wallpaper">
        <!-- <b-button type="is-primary" inverted class="main-button">
          Kết nối drone
        </b-button> -->
        <div class="main-title">
          Phần mềm quản lý mạng lưới điện quốc gia
        </div>
      </div> 
    </div>
    <!-- <div class="columns funcs">
      <div v-for="func in funcs" :key="func.id" class="column func-tag-container">
        <router-link class="func-tag" :to="{ path: func.link }">
            <div class="func-icon" v-bind:style="{ 'background-image': 'url(' + require('../assets/icons/' + func.icon) + ')' }"></div>
            <div class="func">
              <span class="func-name">{{func.name}}</span>
              <span class="func-description">{{func.description}}</span>
            </div>
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
import MainHeader from "@/components/common/MainHeader.vue";

export default {
  name: "home",
  components: {
    MainHeader,
  },
  data() {
    return {
      funcs: [
        {
          id: 0,
          icon: 'Communications.svg',
          name: "Trạng thái drone",
          description: "Kiểm tra vị trí và kiểm soát drone",
          link: "/status"
        },
        {
          id: 1,
          icon: 'MapDirections.svg',
          name: "Quản lý lịch trình",
          description: "Tạo, xem, điều chỉnh lịch trình bay",
          link: "/plan"
        },
        {
          id: 2,
          icon: 'Settings.svg',
          name: "Quản lý payloads",
          description: "Cài đặt thông số các thiết bị kèm",
          link: "/payload"
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.wallpaper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 300px;
  padding-top: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(121, 87, 213, 0.66)), 
  url(../assets/images/dronewallpaper2.jpg);
  background-repeat:no-repeat;
  background-size:cover;

  .main-title {
    color: white;
    font-size: 64px;
    text-transform: uppercase;
    font-weight: 800;
    padding: 75px;
  }
  
  .main-button {
    box-shadow: 0px 4px 12px rgba(121, 87, 213, 0.19);
  }
}
.funcs {
  margin: 50px;
  margin-top: -50px;
}
.func-tag-container {
  display: flex;
  justify-content: center;

  .func-tag {
    display: flex;
    align-items: center;
    height: 110px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
    border-radius: 26px;
    padding: 15px;
  }
  .func-icon {
    background-size: contain;
    background-repeat: no-repeat;
    height: 60px;
    width: 60px;
  }
  .func {
    display: flex;
    flex-direction: column;
    margin: 0 15px;

    .func-name {
      font-weight: 900;
      font-size: 20px;
      text-transform: uppercase;
      line-height: 20px;
      color: #4a4a4a;
    }
    .func-description {
      color: #707070;
    }
  }
}
</style>
