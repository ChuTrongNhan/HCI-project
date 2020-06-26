<template>
    <b-navbar class="hust-navbar">
        <template slot="start">
            <b-navbar-item href="/" class="hust-caption-text">
              <b-icon icon="home"></b-icon>
              <div style="
                padding: 0 15px 0 5px;
                border-right: 1px solid #d6d6;"
              >
                Trang chủ
              </div>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/home' }" class="hust-dropdown-text">
              Điều khiển thiết bị bay
            </b-navbar-item>
            <b-navbar-item href="http://bibiweb.xyz/home.php">Trạm điện và đợt kiểm tra</b-navbar-item>
            <b-navbar-item href="https://angular-project-51bf8.web.app/login">Quản trị</b-navbar-item>
            <b-navbar-item href="https://drive.google.com/file/d/14nBDn5-4sz43u-0OnhDohtohhxrm98wZ/view?fbclid=IwAR0rupV7966W6twWeFrOEzrmcaS-WI19A7cihf-CmNWW_VqItsH2D3mw0QU">Báo cáo</b-navbar-item>
            <b-navbar-item href="https://kewin1807.github.io/">Phát hiện sự cố và thành phần</b-navbar-item>
            <b-navbar-item href="http://nhom6.now.sh/">Quản lý sự cố</b-navbar-item>
        </template>

        <template slot="end">
          <div class="hust-user-tag"> 
            <figure class="image is-32x32">
                <img class="is-rounded" src="../../assets/icons/Avatar.svg">
            </figure>
            Oh! It's you<b style="color: #7957D5">, KSTN</b>
          </div>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      items: [
        {
          name: "Trạng thái drone",
          link: "/status"
        },
        {
          name: "Quản lý lịch trình",
          link: "/plan"
        },
        {
          name: "Quản lý payloads",
          link: "/payload"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css");
.hust-caption-text {
  text-transform: uppercase;
  font-weight: 600;
}
.hust-medium-text {
  font-weight: 500;
  color: #606060;
}
.hust-dropdown-text {
  line-height: 30px;
}
.hust-navbar {
  background: #FFFFFF;
  border-bottom: 2px solid #DFDFDF;
}
.hust-user-tag {
  display: flex;
  align-items: center;
  padding: 0 15px;

  figure {
    margin: 10px;
  }
}
</style>