<template>
  <div id="flying-plan">
    <div class="f-header">
      <div style="display:flex; justify-content: center; opacity: 0.19">
        <figure class="image is-48x48">
            <img src="@/assets/icons/Pick.svg">
        </figure>
      </div>
      <div class="f-title">Chọn hành trình bay</div>
    </div>
    <div class="plan">
      <div class="plan-table">
        <b-table
                :data="PLAN_LIST"
                :columns="PLAN_COLUMN"
                :paginated="true"
                :per-page="5"
                :hoverable="true"
                :selected.sync="selected"
              />
      </div>
      <div v-if="!(typeof selected === 'undefined') && selected.hasOwnProperty('id')" class="plan-detail">
        <div class="plan-header">
          <div class="plan-header--left">
            <span>Lịch trình</span>
            <span>{{selected.name}}</span>
          </div>
          <div class="plan-header--right">
            <b-tag type="is-primary">ID: {{selected.id}}</b-tag>  
          </div>
        </div>
        <div class="plan-description">
          <b>Mục tiêu:</b> Thu thập ảnh các tụ sứ, kiểm tra sự cố đường dây
        </div>
        <div class="plan-route">
          <div class="route-point">
            <span>ĐIỂM ĐẦU</span>
            <span>(15°11'53.8"N, 108°10'19.0"E)</span>
          </div>
          <div class="route-point">
            <span>Cột điện A993</span>
            <span>(9°53'28.8"N, 105°30'30.1"E)</span>
          </div>
          <div class="route-point">
            <span>ĐIỂM CUỐI</span>
            <span>(15°11'53.8"N, 108°10'19.0"E)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="f-foot">
        <button class="button is-primary" type="button" @click="$parent.close()">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flying-plan',
  data() {
    const PLAN_LIST = [
        { id: 1, name: "Kiểm tra đợt 2", area: "Bách Khoa", createdDate: "2020-07-01" },
        { id: 2, name: "Dựng bản đồ", area: "Bách Khoa", createdDate: "2020-06-12" },
        { id: 3, name: "Bay thử nghiệm", area: "Hoàn Kiếm", createdDate: "2020-05-25" },
        { id: 4, name: "Kiểm tra tụ", area: "Hoàng Mai", createdDate: "2020-05-01" },
        { id: 5, name: "Kiểm tra dây", area: "Long Biên", createdDate: "2020-03-08" },
        { id: 6, name: "Bay thử nghiệm", area: "Hà Đông", createdDate: "2020-03-02" },
        { id: 7, name: "Untitled", area: "Cầu Giấy", createdDate: "2020-01-14" },
        { id: 8, name: "Untitled (2)", area: "Times City", createdDate: "2019-12-31" },
        { id: 9, name: "Untitled (3)", area: "Bách Khoa", createdDate: "2019-10-01" },
      ];
    const PLAN_COLUMN = [
      // {
      //   field: "id",
      //   label: "ID",
      //   width: 100,
      //   centered: true,
      //   searchable: true,
      //   sortable: true,
      // },
      {
        field: "name",
        label: "TÊN",
        width: 180,
        searchable: true,
        sortable: true,
      },
      {
        field: "area",
        label: "KHU VỰC",
        width: 180,
        searchable: true,
        sortable: true,
      },
      {
        field: "createdDate",
        label: "NGÀY BAY",
        width: 150,
        sortable: true,
      },
    ];

    return {
      PLAN_LIST,
      PLAN_COLUMN,
      selected: {},
    }
  },
  methods: {
    getImgUrl(value) {
        return `https://picsum.photos/id/43${value}/1230/500`
    }
  }
}
</script>

<style lang="scss">
#flying-plan {
  background: white;
  padding: 30px;
  border-radius: 13px;

    .plan {
      display: flex;
      flex-wrap: wrap;
      max-height: 60vh;
      margin: 20px 0;

      .level {
        justify-content: center;
      }
    }

    .plan-table {
      border: 1px solid #7957d5;
      padding: 15px;
      border-radius: 15px;
      flex: 1;
    }

    .plan-detail {
      flex: 1;
      margin: 0 20px;
      padding: 20px 30px;
      border-radius: 15px;
      background: #f5f5f5;

      .plan-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .plan-header--left {
          display: flex;
          flex-direction: column;

          &>:first-child { text-transform: uppercase }
          &>:nth-child(2) { font-size: 28px; font-weight: 700 }
        }
      }

      .plan-description {
        padding: 10px 0;
        border-bottom: 1px solid #c8c8c8;
      }

      .plan-route {
        .route-point {
          display: flex;
          flex-direction: column;
          padding: 10px;
          background: white;
          border-radius: 15px;
          margin-top: 10px;
          box-shadow: 0px 4px 12px rgba(121, 87, 213, 0.15);

          &>:first-child { font-weight: 600 }
          &>:nth-child(2) { font-size: 12px; color: #b9b9b9 }
        }
      }
    }

    .f-header {
      text-align: center;
    }

    .f-title {
      color: #606060;
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 600;
    }

    .f-note {
      color: #b8b8b8;
    }

    .f-foot {
      text-align: center;
    }
}
</style>