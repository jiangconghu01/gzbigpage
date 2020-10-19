import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/allview',
    name: 'allview',
    component: () => import('@/views/provider.all.view.vue')
  },
  {
    path: '/keypointview',
    name: 'keypointview',
    component: () => import('@/views/provider.keypoint.view.vue')
  },
  {
    path: '/detailview',
    name: 'detailview',
    component: () => import('@/views/provider.detail.view.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
