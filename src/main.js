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

import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
  color: "rgb(143, 255, 199)",
  failedColor: "red",
  height: "4px"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
