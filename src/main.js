import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import x5GMaps from "x5-gmaps";
// Option 1: Just your key
Vue.use(x5GMaps, "AIzaSyBCphwtfDm-RCIA6tFd6wRF-vCcqipZa0w");

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
