<template>
  <div id="plan-page">
    <Header />
    <div class="plan-page-container">
      <div class="plan-page-head">
        <div class="page-title">Quản lý lịch trình</div>
        <div class="page-button">
          <b-button type="is-primary" icon-left="plus-circle-outline"
                    tag="router-link" to="/create-plan">
              Tạo lịch trình
          </b-button>
        </div>
      </div>
      <div class="page-table">
        <plan-table />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import PlanTable from "@/components/plan/PlanTable.vue";

export default {
  name: "plan",
  components: {
    Header,
    PlanTable,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.plan-page-container {
  padding: 40px 75px;
  
  .plan-page-head {
    margin: 0 20px 40px;
    display: flex;

    .page-button {
      margin: auto;
      margin-right: 0;
    }
  }

  .page-table {
    display: flex;
    overflow-x: auto;
    justify-content: center;
    background: white;
    border-radius: 13px;
    padding: 20px;
  }
}
.page-title {
  color: #333;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: bold
}
</style>