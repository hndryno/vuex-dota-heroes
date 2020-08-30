import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Strength from '../views/Strength.vue'
import Agility from '../views/Agility.vue'
import Intelligence from '../views/Intelligence.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stregth',
    name: 'Strength',
    component: Strength
  },
  {
    path: '/agility',
    name: 'Agility',
    component: Agility
  },
  {
    path: '/intelligence',
    name: 'Intelligence',
    component: Intelligence
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
