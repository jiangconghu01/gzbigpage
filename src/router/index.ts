import { createRouter, createWebHashHistory, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext, Router } from 'vue-router'
import store from '@/store/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/allview'
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
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  store.commit('setCurrentPage', to.name)
  next()
})
export default router
