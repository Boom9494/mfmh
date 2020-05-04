import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home'
import chcartoon from '../views/chcartoon'
import zixun from '../views/zixun'
import jpcartoon from '../views/jpcartoon'
import login from '../views/login'
import my from '../views/my'
import register from '../views/register'
import search from '../views/search'
import special from '../views/special'
import update from '../views/update'
import paslogin from '../views/paslogin'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/chcartoon',
    component: chcartoon
  },
  {
    path: '/zixun',
    component: zixun
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/my',
    component: my
  },
  {
    path: '/jpcartoon',
    component: jpcartoon
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/special',
    component: special
  },
  {
    path: '/update',
    component: update
  },
  {
    path: '/paslogin',
    component: paslogin
  },
  {
    path: '*',
    redirect: '/home'
  }

]

const router = new VueRouter({
  routes
})

export default router
