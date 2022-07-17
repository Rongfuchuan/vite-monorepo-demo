import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('./pages/index'),
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})