import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./http";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import moment from "dayjs";
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = http;
Vue.prototype.$moment = moment;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
