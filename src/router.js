import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Web from '@/views/Web'
import NewsForm from '@/views/NewsForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },{
      path: "/web",
      name: "web",
      component: Web
    },{
      path: "/news",
      name: "news",
      component: NewsForm
    },
  ]
})
