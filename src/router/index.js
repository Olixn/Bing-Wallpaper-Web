import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Api from '../components/Api'
import View from '../components/View'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/api',
    name: 'Api',
    component: Api
  },
  {
    path: '/view/:hash',
    name: 'View',
    component: View
  },
  
]

const router = new VueRouter({
  routes
})

export default router
