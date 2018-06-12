import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/product',
    component: Layout,
    name: '平台产品',
    redirect: '/product/platform',
    meta: { title: '平台产品', icon: 'example' ,roles: ['admin']},
    children: [
      {
        path: 'platform',
        name: '未发布',
        component: () => import('@/views/product/notsend'),
        meta: { title: '未发布', icon: 'table' ,roles: ['admin']},
      },
      {
        path: 'send',
        name: '已发布',
        component: () => import('@/views/product/send'),
        meta: { title: '已发布', icon: 'tree', roles: ['admin'] }
      },
      {
        path: 'details',
        name: 'details',
        component: () => import('@/views/product/send/details'),
        meta: { title: '已发布详情', icon: 'tree', roles: ['admin'] },
        hidden: true
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

