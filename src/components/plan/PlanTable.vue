<template>
  <div style="width: 100%">
    <b-table
      :data="data"
      :hoverable="true"
      :paginated="true"
      :per-page="10">

      <template slot-scope="props">
          <b-table-column field="id" label="ID" width="50" centered >
              <span>{{ props.row.id }}</span>
          </b-table-column>

          <b-table-column field="name" :searchable="true" label="TÊN LỊCH TRÌNH" sortable>
              <b>{{ props.row.name }}</b>
          </b-table-column>

          <b-table-column field="area"  label="KHU VỰC" :searchable="true" sortable>
              {{ props.row.area }}
          </b-table-column>

          <b-table-column field="date" label="NGÀY BAY" sortable>
              <span class="tag">
                  {{ new Date(props.row.date).toLocaleDateString() }}
              </span>
          </b-table-column>

          <b-table-column label="" width="200" centered>
            <span class="tag clickable" style="margin: 0 5px" v-on:click="editPlan(props.row)">Xem</span>
            <!-- <span class="tag clickable" style="margin: 0 5px">Edit</span> -->
            <span class="tag is-dark clickable" style="margin: 0 5px" v-on:click="deletePlan(props.row)">Xóa</span>
          </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "plan-table",
  components: {
  },
  data() {
    return {
        data: [
        { 'id': 1, 'name': 'Bay thử nghiệm', 'area': 'Hoàng Mai', 'date': '2016/10/15 13:43:27'},
        { 'id': 2, 'name': 'Kiểm tra đường dây', 'area': 'Hoàn Kiếm', 'date': '2016/12/15 06:00:53'},
        { 'id': 3, 'name': 'Kiểm tra tụ điện lần 1', 'area': 'Đống Đa', 'date': '2016/04/26 06:26:28' },
        { 'id': 4, 'name': 'Dựng bản đồ khu vực', 'area': 'Hai Bà Trưng', 'date': '2016/04/10 10:28:46'},
        { 'id': 5, 'name': 'Kiểm tra thử nghiệm', 'area': 'Long Biên', 'date': '2016/12/06 14:38:38'},
        { 'id': 6, 'name': 'Bay thử nghiệm', 'area': 'Nam Từ Liêm', 'date': '2016/10/15 13:43:27'},
        { 'id': 7, 'name': 'Kiểm tra đường dây', 'area': 'Bắc Từ Liêm', 'date': '2016/12/15 06:00:53'},
        { 'id': 8, 'name': 'Kiểm tra tụ điện lần 1', 'area': 'Hoàng Mai', 'date': '2016/04/26 06:26:28' },
        { 'id': 9, 'name': 'Bay thử nghiệm', 'area': 'Tây Hồ', 'date': '2016/10/15 13:43:27'},
        { 'id': 10, 'name': 'Kiểm tra đường dây', 'area': 'Cầu Giấy', 'date': '2016/12/15 06:00:53'},
        { 'id': 11, 'name': 'Kiểm tra tụ điện lần 1', 'area': 'Hoàng Mai', 'date': '2016/04/26 06:26:28' },
        { 'id': 12, 'name': 'Dựng bản đồ khu vực', 'area': 'Hai Bà Trưng', 'date': '2016/04/10 10:28:46'},
        { 'id': 13, 'name': 'Kiểm tra thử nghiệm', 'area': 'Long Biên', 'date': '2016/12/06 14:38:38'},
        { 'id': 14, 'name': 'Bay thử nghiệm', 'area': 'Hà Đông', 'date': '2016/10/15 13:43:27'},
        { 'id': 15, 'name': 'Kiểm tra đường dây', 'area': 'Hoàn Kiếm', 'date': '2016/12/15 06:00:53'},
        { 'id': 16, 'name': 'Kiểm tra tụ điện lần 1', 'area': 'Hoàng Mai', 'date': '2016/04/26 06:26:28' },
        { 'id': 17, 'name': 'Dựng bản đồ khu vực', 'area': 'Hai Bà Trưng', 'date': '2016/04/10 10:28:46'},
        { 'id': 18, 'name': 'Dựng bản đồ khu vực', 'area': 'Hai Bà Trưng', 'date': '2016/04/10 10:28:46'},
    ]
    }
  },
  methods: {
    editPlan(plan) {
      this.$router.push({name: 'edit plan', params: { name: plan.name, area: plan.area}});
    },
    deletePlan(plan) {
      this.$buefy.dialog.confirm({
          message: 'Đồng ý xóa lịch trình này?',
          cancelText: 'Không',
          confirmText: 'Đồng ý',
          onConfirm: () => {
            var ind = this.data.findIndex((el) => el.id == plan.id);
            this.data.splice(ind, 1);
            this.$buefy.toast.open('Lịch trình đã được xóa');
          }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
td {
  padding: 12px 10px;
}
.clickable {
  cursor: pointer;
}
</style>