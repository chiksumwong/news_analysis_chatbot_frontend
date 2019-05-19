import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import CreateRecordByText from '@/components/record/CreateRecordByText'
import CreateRecordByUrl from '@/components/record/CreateRecordByURL'
import Login from '@/views/user/Login'
import Register from '@/views/user/Register'
import Volunteer from '@/views/user/Volunteer'
import ListNews from '@/components/news/ListNews'
import CreateNews from '@/components/news/CreateNews'
import NoneNews from '@/components/news/NoneNews'
import TrueNews from '@/components/news/TrueNews'
import FalseNews from '@/components/news/FalseNews'

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
    {
      path: '/news',
      name: 'news',
      component: ListNews
    },
    {
      path: '/news/none',
      name: 'news.none',
      component: NoneNews
    },
    {
      path: '/news/true',
      name: 'news.true',
      component: TrueNews
    },
    {
      path: '/news/false',
      name: 'news.false',
      component: FalseNews
    },
    {
      path: '/news/create',
      name: 'news.create',
      component: CreateNews
    },

    // otherwise redirect to home
    {
      path: '*',
      redirect: '/'
    }
  ]
})