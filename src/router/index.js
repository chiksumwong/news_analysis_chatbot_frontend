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
import UpdateNews from '@/components/news/UpdateNews'

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
      component: ListNews
    },
    {
      path: '/news/true',
      name: 'news.true',
      component: ListNews
    },
    {
      path: '/news/false',
      name: 'news.false',
      component: ListNews
    },
    {
      path: '/news/create',
      name: 'news.create',
      component: CreateNews
    },
    {
      path: '/news/update',
      name: 'news.update',
      component: UpdateNews
    },

    // otherwise redirect to home
    {
      path: '*',
      redirect: '/'
    }
  ]
})