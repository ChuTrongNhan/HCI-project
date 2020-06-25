<template>
  <div id="drone-control">
    <b-collapse class="drone-button" aria-id="contentIdForA11y2" animation="slide" :open.sync="isOpen">
        <div slot="trigger" role="button" aria-controls="contentIdForA11y2" class="drone-header">
          <b-tooltip label="Điều khiển drone" type="is-dark" position="is-right">
            <figure class="image is-24x24">
              <img src="@/assets/icons/Param.svg">
            </figure>
          </b-tooltip>
        </div>
        <div class="drone-container">
          <div style="display: flex; flex-direction: row; align-items: baseline;">
            <div class="drone-adjust">
              <div>Điều chỉnh thông số payloads</div>
              <div>Các thông số sẽ được lưu lại cho lần bay sau</div>
            </div>
            <div>
              <b-button class="drone-button" icon-right="square-edit-outline" type="is-primary"
                      @click="stop">
            </b-button>
            </div>
          </div>
        </div>  
    </b-collapse>
    <b-modal :active.sync="isCardModalActive" :width="600" scroll="keep">
      <drone-setting-modal/>
    </b-modal>
  </div>
</template>

<script>
import DroneSettingModal from "@/components/status/DroneSettingModal.vue";

export default {
  name: 'drone-control',
  components: {
    DroneSettingModal,
  },
  data() {
    return {
      isComponentModalActive: false,
      isCardModalActive: false,
      isOpen: false,
    }
  },
  methods: {
    stop() {
      this.isCardModalActive = true;
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

      &>:first-child { font-weight: 600 }
      &>:nth-child(2), &>:nth-child(3)  { font-size: 12px; color: #b9b9b9 }
    }
    .drone-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 15px 0 15px;

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