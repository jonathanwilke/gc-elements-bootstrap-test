import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import "./assets/styles.scss";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#gc-element-wrapper-bootstrap");
