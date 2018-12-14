import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import Chat from "vue-beautiful-chat";
Vue.use(Chat);

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
