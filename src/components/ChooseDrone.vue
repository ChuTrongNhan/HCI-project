<template>
  <div id="choose-page">
    <div class="apage-container">
      <div style="display: flex; flex-direction: column">
        <div class="apage-header">
          <div class="drone-info">
            <span id="drone-info-title" v-if="!(typeof selected === 'undefined') && selected.hasOwnProperty('id')">
              Drone đang chọn:
            </span>
            <span id="drone-info-warning" v-if="(typeof selected === 'undefined') || !selected.hasOwnProperty('id')">
              Hãy chọn một drone cài đặt thông số đầu
            </span>
            <b-taglist v-if="!(typeof selected === 'undefined') && selected.hasOwnProperty('id')" attached>
                <b-tag type="is-dark">{{selected.id}}</b-tag>
                <b-tag type="is-primary">{{selected.name}}</b-tag>
            </b-taglist>
          </div>
          <b-collapse
            aria-id="contentIdForA11y2"
            class="status-panel"
            animation="slide"
            :open.sync="isOpen"
          >
            <div
              slot="trigger"
              class="status-panel-heading"
              role="button"
              aria-controls="contentIdForA11y2"
            >
              <b-icon icon="cards-variant"></b-icon>
              <span style="padding: 0 15px 0 5px">Chọn một drone</span>
              <figure v-bind:class="{'rotate-icon': isOpen}" class="image is-16x16 collapse-icon">
                <img src="../assets/icons/Glyph.svg">
              </figure>
            </div>
            <div class="status-panel-block">
              <b-table
                :data="DRONE_LIST"
                :columns="DRONE_COLUMN"
                :paginated="true"
                :per-page="6"
                :hoverable="true"
                :selected.sync="selected"
              />
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'status',
  components: {
  },
  props: {
    selectedDrone: {},
  },
  data() {
    const DRONE_COLUMN = [
      {
        field: "id",
        label: "ID",
        width: 100,
        centered: true,
        searchable: true,
        sortable: true,
      },
      {
        field: "name",
        label: "TÊN DRONE",
        width: 200,
        searchable: true,
        sortable: true,
      },
    ];

    return {
      DRONE_LIST: [
        { id: "01cA", name: "Gorgeous", active: "Đang bay" },
        { id: "02Hv", name: "Style", active: "Đang bay" },
        { id: "03xd", name: "Fearless", active: "Đang bay" },
        { id: "0cc4", name: "Sparkfly", active: "Không bay" },
        { id: "05cX", name: "SpeakNow", active: "Không bay" },
        { id: "0xH6", name: "Mean", active: "Không bay" },
        { id: "07dA", name: "Mine", active: "Không bay" },
        { id: "08vc", name: "YouNeedToCalmDown", active: "Không bay" },
        { id: "09Cd", name: "BackToDecember", active: "Không bay" },
        { id: "10DR", name: "WhiteHorse", active: "Không bay" },
        { id: "11Xa", name: "AllTooWell", active: "Không bay" },
        { id: "12Nb", name: "OutOfTheWood", active: "Không bay" },
      ],
      DRONE_COLUMN,
      selected: {},
      isOpen: false,
      isModelActive: false,
      activeStep: 0,
    }
  },
  watch: {
    selected() {
      this.isOpen = false;
    }
  }
}
</script>

<style lang="scss">
#choose-page {
  .apage-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .apage-header {
      position: relative;
      z-index: 10;
      background: white;
      width: 100%;
      margin: 15px 20px 30px;
      padding: 0 20px;
    }

    .apage-title {
      color: #333;
      font-size: 36px;
      text-transform: uppercase;
      font-weight: bold;
      margin: 40px 95px 10px;
    }
    .drone-table {
      background: white;
      padding: 5px 13px;
      border-radius: 13px;
      margin: 20px 0;
    } 
    .map {
      height: 100vh;
      width: 100vw;
      min-width: 700px;
      content: '';
      position: relative;
      background-size: cover;
      display: flex;

      .drone-map-marker {
        color: #7957d5;
        position: absolute;
        top: 340px;
        left: 640px;
        border: 3px solid rgba(121, 87, 213, 0.25);
        border-radius: 50%;
        background: rgba(121, 87, 213, 0.05);
        padding: 40px;
        cursor: pointer;
        box-shadow: 0px 0px 20px rgba(121, 87, 213, 0.32);
      }
    }
    .empty-map {
      height: auto;
      background: #e8e8e8;
      border-top: 1px solid #dbdbdb;
      justify-content: center;
    }
    .small-map-container {
      border: 3px solid white;
      position: absolute;
      top: 20px;
      right: 20px;
      box-shadow: 0px 4px 12px rgba(121, 87, 213, 0.19);
      cursor: pointer;

      .small-map {
        height: 80px;
        width: 120px;
        background-size: cover;
      }
    }
    .status-panel {
      background: white;
      border-radius: 10px;
      width: fit-content;
      position: absolute;
      top: 10px;
      left: 20px;
      box-shadow: 0px 4px 12px rgba(121, 87, 213, 0.15);

      .level {
        justify-content: center;
      }

      .status-panel-heading {
        color: black;
        font-size: 14px;
        //text-transform: uppercase;
        font-weight: 600;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .status-panel-block {
        border-top: 1px solid #e8e8e8;
        padding: 0 15px;
      }
    }
  }
  .drone-info {
    padding-bottom: 10px;
    padding-left: 222px;

    #drone-info-title, #drone-info-warning {
      text-transform: uppercase;
      font-weight: 600;
      line-height: 40px;
    }

    #drone-info-warning {
      color: #b9b9b9;
      line-height: 70px;
    }
  }
}
.collapse-icon {
  padding-top: 1px;
  margin: auto;
  margin-right: 0;
}
.rotate-icon {
  transform: rotate(180deg);
}
.is-flying-drone-row {
  font-weight: bold;
  color: #7957d5;
}
.is-inactivate-drone-row {
  color: #b9b9b9;
}
.map-warning-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .map-warning-image {
    opacity: 0.2;
    margin: 20px;
  }
  .map-warning-message {
    font-weight: bold;
    color: #7957d5;
    font-size: 28px;
  }
  .map-warning-action {
    text-align: center;
    font-weight: 600;

    .action-call {
      margin: 10px;
    }
  }
}
</style>