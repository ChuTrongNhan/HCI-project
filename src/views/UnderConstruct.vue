<template>
  <div>
    <Header/>
    <div class="map empty-map">
      <div class="map-warning-card">
      <figure class="image is-96x96 map-warning-image">
        <img src="../assets/icons/Repair.svg">
      </figure>
      <div class="map-warning-message">
        Sorry for the inconvenience :(
      </div>
      <div class="map-warning-action">
        <p class="action-call">
          <span>This page is under maintenance. We're preparing to serve you better</span>
        </p>
        <div class="action-step" style="40px">
            <b-button type="is-primary"
              tag="router-link"
                to="/"
                icon-left="home">
              HOME
            </b-button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
export default {
  name: 'status',
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped>
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