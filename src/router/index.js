import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

function load(component) {
  return () => import(`@/views/${component}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: load('Main')
  },
  {
    path: '/search',
    name: 'search',
    component: load('Search')
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notfound',
    component: load('404')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
