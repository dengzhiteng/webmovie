import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Learn',
    component: () => import('../views/Learn.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
    {
    path: '/list',
      name: 'List',
       component: () => import('../views/List.vue')
  },
    {
    path: '/detail/:id',//sp1.一定要传递固定参数id
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
