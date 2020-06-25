<template>
  <div id="camera-control">
    <b-collapse class="camera-button" aria-id="contentIdForA11y2" animation="slide" :open.sync="isOpen">
        <div slot="trigger" role="button" aria-controls="contentIdForA11y2" class="camera-header">
          <b-tooltip label="Điều khiển máy ảnh" type="is-dark" position="is-right">
            <figure class="image is-24x24">
              <img src="@/assets/icons/Camera.svg">
            </figure>
          </b-tooltip>
        </div>
        <div class="camera-container">
          <div class="camera-adjust">
            <div>Xoay camera trục X</div>
            <div><i>(Trái-Phải)</i></div>
            <b-field>
                <b-slider :min="-180" :max="180" v-model="camera.rotX"/>
            </b-field>
          </div>

          <div class="camera-adjust">
            <div>Xoay camera trục Y</div>
            <div><i>(Lên-Xuống)</i></div>
            <b-field>
                <b-slider :min="-180" :max="180" v-model="camera.rotY"/>
            </b-field>
          </div>

          <div class="camera-adjust">
            <div>Phóng to</div>
            <div></div>
            <b-field>
                <b-slider :min="1" :max="10" v-model="camera.zoom"/>
            </b-field>
          </div>

          <div class="camera-adjust">
            <b-button type="is-primary" icon-right="camera" size="is-small" @click="success">
                  Chụp ảnh
            </b-button>
          </div>
        </div>  
    </b-collapse>

    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
        <div class="card">
            <div class="card-image">
                <figure v-show="camera.zoom <= 3" class="image is-4by3">
                    <img src="@/assets/images/column-high-voltage.jpg" alt="Image">
                </figure>
                <figure v-show="camera.zoom > 3" class="image is-4by3">
                    <img src="@/assets/images/column-high-voltage2.jpg" alt="Image">
                </figure>
            </div>
            <div class="card-content">
                <div class="content">
                    Ảnh sẽ tự động được lưu vào kết quả hành trình 
                </div>
            </div>
        </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'camera-control',
  data() {
    return {
      isOpen: false,
      camera: {
        rotX: 0,
        rotY: 0,
        zoom: 1,
      },
      isCardModalActive: false,
    }
  },
  methods: {
    success() {
        this.isCardModalActive = true;
        this.$buefy.toast.open({
            message: 'Chụp thành công!',
            type: 'is-success'
        })
    },
  }
}
</script>

<style lang="scss" scoped>
#camera-control {
  background: white;
  border-radius: 20px;
  padding: 15px;
  width: fit-content;
  height: fit-content;
  box-shadow: 0px 4px 12px rgba(121, 87, 213, 0.15);

  .camera-header {
    display: flex;
    justify-content: center;
  }

  .camera-container {
  
    .camera-adjust {
      text-align: center;
      padding: 0 15px;
      margin-top: 0px;
      &:first-of-type, &:last-of-type {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid #d8d8d8;
      }

      &>:first-child { font-weight: 600 }
      &>:nth-child(2) { font-size: 12px; color: #b9b9b9 }
      &>:nth-child(3) { 
        width: 100%; 
        margin-bottom: 0; 
        margin-top: -5px;
      }
    }
  }
}
</style>