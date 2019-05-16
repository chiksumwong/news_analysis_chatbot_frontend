import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from "axios";

Vue.config.productionTip = false


// Bootstrap
Vue.use(BootstrapVue);
// Axios
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})
Vue.prototype.$axios = http;


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
