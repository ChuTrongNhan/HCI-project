<template>
  <div id="plan-page">
    <Header />
    <div class="plan-page-container">
      <div class="plan-page-head">
        <div class="page-title">Chỉnh sửa lịch trình</div>
      </div>
      <section class="plan-form">
        <b-field grouped>
          <b-field label="Tên*">
              <b-input 
                v-model="name"
                placeholder="Nhập tên lịch trình"
                type="text"
                required
                validation-message="Lịch trình phải có tên"
              ></b-input>
          </b-field>

          <b-field label="Khu vực*">
              <b-select v-model="area" placeholder="Khu vực" required validation-message="Bắt buộc chọn khu vực">
                  <option v-for="province in provinces" :key="province" :value="province">{{province}}</option>
              </b-select>
          </b-field>

          <b-field label="Ngày bay dự tính">
            <b-datepicker v-model="date"
                placeholder="Bấm chọn ngày"
                icon="calendar-today"
                trap-focus>
            </b-datepicker>
          </b-field>
        </b-field>
        <b-field label="Các đối tượng cần kiểm tra">
            <div class="block" style="margin: 20px 0">
              <b-checkbox v-model="checkboxGroup"
                  native-value="tudien">
                  Tụ điện
              </b-checkbox>
              <b-checkbox v-model="checkboxGroup"
                  native-value="cotchinh">
                  Cột chính
              </b-checkbox>
              <b-checkbox v-model="checkboxGroup"
                  native-value="cotneo">
                  Cột neo
              </b-checkbox>
              <b-checkbox v-model="checkboxGroup"
                  native-value="daydien">
                  Dây điện
              </b-checkbox>
            </div>
        </b-field>
        <b-field label="Mục đích*">
            <b-input v-model="note" type="textarea"></b-input>
        </b-field>
      </section>
      <div class="plan-page-route">
        <Map class="plan-map" :selected="selected"/>
      </div>
      <div class="submit-section">
         <b-button type="is-primary" @click="confirm">Lưu lịch trình</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Map from "@/components/Map.vue";

export default {
  name: "plan",
  components: {
    Header,
    Map,
  },

  methods: {
    confirm() {
      if (this.name.length<=0 || this.area.length <=0 || this.note.length <= 0) {
        this.$buefy.toast.open({
          message: 'Vui lòng điền đầy đủ các thông tin',
          type: 'is-danger'
        });
        return;
      }
      this.$buefy.dialog.confirm({
          message: 'Đồng ý lưu lại lịch trình này?',
          cancelText: 'Không',
          confirmText: 'Đồng ý',
          onConfirm: () => {
            this.$router.push("plan");
            this.$buefy.toast.open({
              message: 'Lịch trình đã được lưu lại',
              type: 'is-success'
            });
          }
      })
    },
  },
  data() {
    return {
      name: this.$route.params.name,
      area: this.$route.params.area,
      note: 'Kiểm tra đường dây điện sau bão. Chú ý khu vực cây cối dày đặc',
      selected: [
        { lat: 20.998756, lng: 105.844227 },
        { lat: 20.999544, lng: 105.836073 },
        { lat: 21.008701, lng: 105.838873 }
      ],
      date: new Date(),
      checkboxGroup: [],
      provinces: ["Hoàn Kiếm", "Đống Đa", "Ba Đình", "Hai Bà Trưng", "Hoàng Mai", "Thanh Xuân", "Long Biên", "Nam Từ Liêm", "Bắc Từ Liêm", "Tây Hồ", "Cầu Giấy", "Hà Đông"],
    }
  },
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
}
.plan-form {
  padding: 20px;
  background: white;
  width: 100%;
  border-radius: 13px 13px 0 0;
}
.plan-map {
  width: 100%;
  height: 500px;
}
.page-title {
  color: #333;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: bold
}
.submit-section {
  padding: 20px;
  text-align: center;
}
</style>