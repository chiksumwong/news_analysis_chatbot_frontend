import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Web from '@/views/Web'
import NewsForm from '@/views/NewsForm'
import Login from '@/views/user/Login'
import Register from '@/views/user/Register'

Vue.use(Router)

export const router = new Router({
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
    },{
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})