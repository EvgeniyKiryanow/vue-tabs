import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// import Vue from "vue/dist/vue.esm";

// eslint-disable-next-line no-unused-vars
import HkInterface from "hk-interface";
require("hk-interface/dist/hkInterface.css");
Vue.config.productionTip = false;
Vue.use(HkInterface);
new Vue({
  HkInterface,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
