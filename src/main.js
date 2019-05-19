import Vue from 'vue'
import App from './App'
import { router } from './router'
import { store } from './store'

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from "axios";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import VueDataTables from 'vue-data-tables'

import CripNotice from 'crip-vue-notice'

Vue.config.productionTip = false


// Bootstrap
Vue.use(BootstrapVue);
// Axios
const instance  = axios.create({
  // baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : 'http://localhost:3000/api/v1/'
  baseURL: process.env.VUE_APP_BASE_API,
})
instance.interceptors.request.use(
 (config) => {
   let token = localStorage.getItem('token');

   if (token) {
     const authToken = 'Bearer ' + token
     config.headers['Authorization'] = authToken
   }

   return config
 },
 (error) => {
   return Promise.reject(error)
 }
)
Vue.prototype.$axios = instance ;

// Element UI
Vue.use(ElementUI);
// set language to EN
locale.use(lang)

// Vue table
Vue.use(VueDataTables)

// Notification
Vue.use(CripNotice)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
