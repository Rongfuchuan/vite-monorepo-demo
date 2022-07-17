import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { routes as cardRoutes } from 'vite-monorepo-card'

export const routes: RouteRecordRaw[] = [
  ...cardRoutes
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})