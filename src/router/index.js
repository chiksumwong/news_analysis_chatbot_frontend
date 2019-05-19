import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import CreateRecordByText from '@/components/record/CreateRecordByText'
import CreateRecordByUrl from '@/components/record/CreateRecordByURL'
import Login from '@/views/user/Login'
import Register from '@/views/user/Register'
import Volunteer from '@/views/user/Volunteer'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    }, {
      path: "/news/url",
      name: "news.url",
      component: CreateRecordByUrl
    }, {
      path: "/news/text",
      name: "news.text",
      component: CreateRecordByText
    }, {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/volunteer',
      name: 'volunteer',
      component: Volunteer
    },
    {
      path: '/user/create',
      name: 'register',
      component: Register
    },

    // otherwise redirect to home
    {
      path: '*',
      redirect: '/'
    }
  ]
})