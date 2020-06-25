<template>
    <b-navbar class="hust-navbar">
        <template slot="start">
            <b-navbar-item href="/" class="hust-caption-text">
              <b-icon icon="home"></b-icon>
              <div style="
                padding: 0 15px 0 5px;
                border-right: 1px solid #d6d6;"
              >
                Home
              </div>
            </b-navbar-item>
            <b-navbar-dropdown :hoverable="true" label="Chức năng nhóm 1">
                <b-navbar-item 
                  v-for="item in items" :key="item.name"
                  tag="router-link" :to="{ path: item.link }"
                  class="hust-dropdown-text"
                >
                  {{item.name}}
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Chức năng nhóm 2"></b-navbar-dropdown>
            <b-navbar-dropdown label="Chức năng nhóm 3"></b-navbar-dropdown>
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
  name: "Header",
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