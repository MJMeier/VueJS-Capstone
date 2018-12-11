import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Picks from "./views/Picks.vue";
import AllPicks from "./views/AllPicks.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/home", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/picks", name: "picks", component: Picks },
    { path: "/allpicks", name: "allpicks", component: AllPicks }
  ]
});
