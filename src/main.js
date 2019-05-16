import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from "axios";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import VueDataTables from 'vue-data-tables'

Vue.config.productionTip = false


// Bootstrap
Vue.use(BootstrapVue);
// Axios
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})
Vue.prototype.$axios = http;

// Element UI
Vue.use(ElementUI);
// set language to EN
locale.use(lang)

// Vue table
Vue.use(VueDataTables)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
