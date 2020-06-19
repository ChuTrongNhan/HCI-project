<template>
  <div id="drone-control">
    <b-collapse v-show="!stopDrone" class="drone-button" aria-id="contentIdForA11y2" animation="slide" :open.sync="isOpen">
        <div slot="trigger" role="button" aria-controls="contentIdForA11y2" class="drone-header">
          <b-tooltip label="Điều khiển drone" type="is-dark" position="is-right">
            <figure class="image is-24x24">
              <img src="../assets/icons/Send.svg">
            </figure>
          </b-tooltip>
        </div>
        <div class="drone-container">
          <div class="drone-adjust">
            <div>Vị trí hiện tại</div>
            <div>Cột điện A993 - 9°53'28.8"N 105°30'30.1"E</div>
          </div>

          <div id="custom-line"></div>

          <div class="drone-adjust">
            <div>Vị trí tiếp theo</div>
            <div v-show="countStep<2">Cột điện HGS43245 - 15°11'53.8"N 108°10'19.0"E</div>
            <div v-show="countStep>=2" style="color: #7957d5">ĐIỂM CUỐI - 15°11'53.8"N 108°10'19.0"E </div>
          </div>

          <div class="drone-buttons">
            <b-button class="drone-button" type="is-primary" icon-right="chevron-double-right" 
                      :loading="isMoving" size="is-small" 
                      :disabled="countStep>=2 || stopDrone"
                      @click="move">
                  Di chuyển đến vị trí tiếp theo
            </b-button>
            <b-button class="drone-button" icon-right="cancel" size="is-small" 
                      :disabled="stopDrone"
                      @click="stop">
                  Dừng hành trình
            </b-button>
          </div>
        </div>  
    </b-collapse>
    <div v-show="stopDrone" style="font-weight: 600; text-align:center">
      Drone đã dừng hành trình và đang bay về vị trí cuối!
    </div>
    <b-modal :active.sync="isCardModalActive" :width="800" scroll="keep">
            <photo-gallery/>
        </b-modal>
  </div>
</template>

<script>
import PhotoGallery from "@/components/PhotoGallery.vue";

export default {
  name: 'drone-control',
  components: {
    PhotoGallery,
  },
  data() {
    return {
      isComponentModalActive: false,
      isCardModalActive: false,
      isOpen: false,
      currentPos: "DS",
      isMoving: false,
      countStep: 0,
      stopDrone: false,
    }
  },
  methods: {
    move() {
      ++this.countStep;
      this.isMoving = true;
      setTimeout(() => { this.isMoving = false }, 3000);
      this.$buefy.snackbar.open({
          duration: 3000,
          message: 'Đang di chuyển đến vị trí tiếp theo',
          position: 'is-top',
          actionText: 'OK',
          queue: false,
      })
    },
    stop() {
      this.$buefy.dialog.confirm({
          title: 'Dừng hành trình',
          message: 'Bạn có chắc chắn muốn <b>dừng hành trình bay</b>? Thao tác này không thể hoàn tác. Sau khi dừng bay drone sẽ bay về vị trí cuối lịch trình.',
          confirmText: 'Dừng hành trình',
          cancelText: 'Không dừng hành trình',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => { 
            this.stopDrone = true; 
            this.isCardModalActive = true;
          }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#drone-control {
  background: white;
  border-radius: 20px;
  padding: 15px;
  width: fit-content;
  height: fit-content;
  box-shadow: 0px 4px 12px rgba(121, 87, 213, 0.15);

  .drone-header {
    display: flex;
    justify-content: center;
  }

  .drone-container {
  
    .drone-adjust {
      text-align: center;
      padding: 0 15px;
      margin-top: 0px;
      &:first-of-type, &:last-of-type {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid #d8d8d8;
      }

      &>:first-child { font-size: 12px; color: #b9b9b9 }
      &>:nth-child(2), &>:nth-child(3)  { font-weight: 600  }
    }
    .drone-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 15px 0 15px;
      margin-top: 27px;
      border-top: 1px solid #d8d8d8;

      .drone-button {
        width: 250px;
        margin: 5px;
      }
    }
  }
  #custom-line {
    width: 0;
    height: 30px;
    border-left: 1px solid #d8d8d8;
    content: '';
    margin: 5px auto;
  }
}
</style>