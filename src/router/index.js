import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseLayout from '@/layout/BaseLayout'

const routes = [
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    path: '/login'
  },
  {
    path: '/',
    name: 'BaseLayout',
    component: BaseLayout,
    redirect: '/login',
    children: [
      {
        path: '/IntegratedDispatch',
        component: () => import('@/views/IntegratedDispatch/IntegratedDispatch'),
        name: '水库总览',
        meta: {
          level1_Code: 'dispatch'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

export {
  routes
}

export default router
