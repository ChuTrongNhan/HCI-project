<template>
  <div>
    <Header/>
    <div class="apage-container">
      <div class="apage-head">
        <div class="apage-title">Quản lý payloads</div>
        <div class="apage-button">
          <b-button type="is-primary" @click="confirm">
              Lưu thông số
          </b-button>
        </div>
      </div>
      <div class="payload-setting--container">
        <div class="payload-setting" style="flex: 1">
          <div class="payload-setting--title">
            <span>Cài đặt máy ảnh</span>
          </div>
          <div class="form-section">
            <span>Chất lượng ảnh</span>
          </div>
          <div class="input-row">
            <figure class="image is-32x32" style="padding: auto">
                <img src="../assets/icons/Photo2.svg">
            </figure>
            <div class="input-name">
              <div>Số lượng ảnh chụp tại một điểm</div>
              <div>Số lượng ảnh lớn sẽ kéo dài thời gian bay</div>
            </div>
            <div id="input-col" class="input-field">
                <b-select v-model="camera.photoCount" placeholder="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </b-select>
            </div>
          </div>
          <div class="input-row">
            <figure class="image is-32x32" style="padding: auto">
                <img src="../assets/icons/Connect.svg">
            </figure>
            <div class="input-name">
              <div>Hướng ảnh khi chụp</div>
            </div>
            <div id="input-col" class="input-field" style="display: flex; flex-direction: row;">
              <figure v-on:click="camera.orientation = false" class="image is-48x48" style="padding: auto">
                <b-tooltip
                      label="Ảnh Ngang"
                      type="is-dark"
                      position="is-bottom"
                >
                <img v-bind:class="[camera.orientation ? 'inactivated-icon' : 'activated-icon']" src="../assets/icons/Landscape.svg">
                </b-tooltip>
              </figure>
              <figure v-on:click="camera.orientation = true" class="image is-48x48" style="padding: auto">
                <b-tooltip
                      label="Ảnh Dọc"
                      type="is-dark"
                      position="is-bottom"
                >
                  <img v-bind:class="[camera.orientation ? 'activated-icon' : 'inactivated-icon']" src="../assets/icons/Portrait.svg">
                </b-tooltip>
              </figure>
            </div>
          </div>

          <div class="form-section">
            <span>Chất lượng video</span>
          </div>
          <div class="input-row">
            <figure class="image is-32x32" style="padding: auto">
                <img src="../assets/icons/SpeedHigh.svg">
            </figure>
            <div class="input-name">
              <div>Tốc độ bay khi quay video</div>
              <div>Tốc độ càng lớn thời gian bay càng giảm nhưng chất lượng video giảm</div>
            </div>
            <div id="input-col" class="input-field video-rate-input">
              <div class="control" style="font-size: 14px; margin-bottom: -8px">
                <b>{{camera.videoRate}} MPH</b>
              </div>
              <b-field style="width: 100%; margin-bottom: 0">
                  <b-slider :min="1" :max="200" 
                            :tooltip="false"
                            v-model="camera.videoRate"
                  ></b-slider>
              </b-field>
            </div>
          </div>
          <div class="input-row">
            <figure class="image is-32x32" style="padding: auto">
                <img src="../assets/icons/MultimediaDVR.svg">
            </figure>
            <div class="input-name">
              <div>Chất lượng thu video</div>
              <div>4K cho chất lượng cao hơn HD nhưng có dung lượng video lớn</div>
            </div>
            <div id="input-col" class="input-field">
              <b-field>
                <b-radio-button v-model="camera.videoQuality"
                    v-bind:native-value="0">
                    <b>HD</b>
                </b-radio-button>
                <b-radio-button v-model="camera.videoQuality"
                    v-bind:native-value="1">
                    <b>4K</b>
                </b-radio-button>
              </b-field>
            </div>
          </div>

          <div class="input-row">
            <b-button @click="setToDefaultCamera" size="is-small">
              Đặt lại mặc định
            </b-button>
          </div>
        </div>
        <div class="another-payload--setting" style="flex: 1">
          <div class="payload-setting">
            <div class="payload-setting--title">
              <span>Cài đặt cảm biến</span>
            </div>
            <div class="input-row">
              <figure class="image is-32x32" style="padding: auto">
                  <img src="../assets/icons/Sensor.svg">
              </figure>
              <div class="input-name">
                <div>Tránh chướng ngại vật</div>
                <div>Ngăn drone va chạm với vật thể</div>
              </div>
              <div id="input-col" class="input-field">
                  <b-switch v-model="sensor.avoid"/>
              </div>
            </div>
            <div class="input-row">
              <figure class="image is-32x32" style="padding: auto">
                  <img src="../assets/icons/AdjustHologram.svg">
              </figure>
              <div class="input-name">
                <div>Tăng cường nhận diện 3D</div>
                <div>Tăng độ nhạy cảm biến để cải thiện độ chi tiết mô hình 3D dựng được</div>
              </div>
              <div id="input-col" class="input-field">
                  <b-switch v-model="sensor.sensible"/>
              </div>
            </div>

            <div class="input-row">
              <b-button @click="setToDefaultSensor" size="is-small">
                Đặt lại mặc định
              </b-button>
            </div>
          </div>

          <div class="payload-setting" style="margin-top: 40px">
            <div class="payload-setting--title">
              <span>Bộ điều khiến bằng tay</span>
            </div>
            <div class="input-row">
              <figure class="image is-32x32" style="padding: auto">
                  <img src="../assets/icons/Connected.svg">
              </figure>
              <div class="input-name">
                <div>Trạng thái kết nối</div>
                <div>Hệ thống lấy thông tin trạng thái kết nối bộ điều khiển từ drone</div>
              </div>
              <div id="input-col" style="min-width: 140px; display: flex; justify-content: flex-end">
                <div style="display: flex; align-items: center">
                  <b v-if="controlpad.connected" style="text-transform: uppercase; color: #7957d5; padding: 5px">Đã kết nối</b>
                  <b v-if="!controlpad.connected" style="text-transform: uppercase; color: #606060; padding: 5px">Chưa kết nối</b>
                  <div v-on:click="refreshControlpad">
                    <b-tooltip
                      label="Cập nhật lại trạng thái"
                      type="is-dark"
                      position="is-bottom">
                      <b-icon class="ic-button" icon="restore"></b-icon>
                    </b-tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-row">
              <figure class="image is-32x32" style="padding: auto">
                  <img src="../assets/icons/Game.svg">
              </figure>
              <div class="input-name">
                <div>Kích hoạt bộ điều khiển</div>
              </div>
              <div id="input-col" class="input-field">
                  <b-switch v-model="controlpad.activated"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";

export default {
  name: "payload",
  components: {
    Header,
  },
  data() {
    return {
      camera: {
        photoCount: 2,
        orientation: false,
        videoRate: 100,
        videoQuality: 0,
      },
      sensor: {
        avoid: false,
        sensible: false,
      },
      controlpad: {
        connected: true,
        activated: false,
      }
    }
  },
  methods: {
    confirm() {
        this.$buefy.dialog.confirm({
            message: 'Bạn đã sẵn sàng lưu lại các thông số này?',
            cancelText: 'Không, tôi chưa muốn lưu',
            confirmText: 'Đồng ý',
            onConfirm: () => this.$buefy.toast.open({
              message: 'Đã lưu thành công!',
              type: 'is-success',
            })
        })
    },
    setToDefaultCamera() {
      this.camera.photoCount = 2;
      this.camera.orientation = false;
      this.camera.videoRate = 100;
      this.camera.videoQuality = 0;
    },

    setToDefaultSensor() {
      this.sensor.avoid = false;
      this.sensor.sensible = false;
    },

    refreshControlpad() {
      this.controlpad.connected = !this.controlpad.connected;
    }
  }
}
</script>

<style lang="scss" scoped>
.apage-container {
  padding: 0 75px 45px;

  .apage-head {
    display: flex;
    margin: 40px 20px;
  }

  .apage-title {
    color: #333;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .apage-button {
    margin: auto;
    margin-right: 0;
  }
}

.payload-setting--container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .payload-setting {
    border: 1px solid #A89F9F;
    box-sizing: border-box;
    border-radius: 3px;
    padding-left: 15px;
    margin: 20px;
    min-width: 385px;

    .payload-setting--title {
      color: #606060;
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 600;
      margin-top: -20px;
      margin-bottom: 20px;

      span {
        background-color: #f8f8f8;
        padding: 0 15px;
        font-weight: 600px;
      }
    }

    .form-section {
      color: black;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 15px;
      padding: 2px 0;
      font-size: 18px;
      border-bottom: 1px solid #a7a7a7;
      text-transform: uppercase;
      font-size: 14px;
    }

    .input-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 15px;
      margin-bottom: 20px;

      &:last-child {
        margin-top: 30px;
      }

      #input-col{
        margin-left: auto;
        //max-width: 130px;
      }

      figure {
        display: flex;
        min-width: 32px;
      }

      .video-rate-input {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 130px;
      }

      .input-name {
        margin: 0 15px;
        div {
          &:first-child {
            font-weight: 600;
            color: black;
          }
          &:nth-child(2) {
            font-weight: 400;
            color: #606060;
            font-size: 12px;
          }
        }
      }
    }
  }
}
.ic-button {
  cursor: pointer;
}
.activated-icon {
  opacity: 1;
}
.inactivated-icon {
  opacity: 0.15;
}
</style>