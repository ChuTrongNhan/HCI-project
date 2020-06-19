<template>
  <div class="map empty-map">
    <div class="map-warning-card">
      <figure class="image is-96x96 map-warning-image">
        <img src="../assets/icons/NoFlying.svg">
      </figure>
      <div class="map-warning-message">
        Oops! Drone bạn chọn đang không bay
      </div>
      <div class="map-warning-action">
        <p class="action-call">
          <span v-show="!flyingPlanChoosen">Bạn muốn chọn lịch trình và cho drone bay ngay bây giờ ?</span>
          <span v-show="flyingPlanChoosen">
            Bạn đã chọn drone 
            <b-taglist v-if="!(typeof selected === 'undefined') && selected.hasOwnProperty('id')" attached style="display: inline;">
                <b-tag type="is-dark">{{selected.id}}</b-tag>
                <b-tag type="is-primary">{{selected.name}}</b-tag>
            </b-taglist>
            bay theo lịch trình
            <span style="color: #7957d5">Untitled</span>
          </span>
        </p>
        <div v-show="!flyingPlanChoosen" class="action-step">
            <b-button type="is-primary" @click="openModal" icon-right="android-auto">
              Chọn lịch trình
            </b-button>
        </div>
        <div v-show="flyingPlanChoosen" class="action-step" style="margin-top: 30px">
            <b-button outlined @click="openModal" icon-right="android-auto" :expanded="true">
              Chọn lại lịch trình
            </b-button>
        </div>
        <div v-show="flyingPlanChoosen" class="action-step">
            <b-button type="is-primary" @click="startFlying" icon-right="send" :expanded="true">
              Bắt đầu bay
            </b-button>
        </div>
      </div>
    </div>
    <b-modal :active.sync="isModalActive" :width="1000" scroll="keep">
        <flying-plan />
    </b-modal>
  </div>
</template>

<script>
import FlyingPlan from "@/components/FlyingPlan.vue";

export default {
  name: 'not-flying',
  components: {
    FlyingPlan,
  },
  props: {
    selected: {
      id: String,
      name: String,
    }
  },
  data() {
    return {
      isModalActive: false,
      flyingPlanChoosen: false,
    }
  },
  methods: {
    openModal() {
      this.isModalActive = true;
      this.flyingPlanChoosen = true;
    },

    startFlying() {
      this.$emit('start-drone', this.selected);
    }
  }
}
</script>

<style lang="scss" scoped>
.action-step {
  margin-bottom: 10px;
  padding: 0 100px;
  &:first-of-type {
    margin-top: 20px;
  }
}
</style>