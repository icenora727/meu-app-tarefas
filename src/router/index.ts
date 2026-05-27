import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/tabs',
    component: () => import('../views/TabsPage.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: 'tarefas',
        component: () => import('../views/TarefasPage.vue')
      },
      {
        path: 'tarefas/:id',
        component: () => import('../views/DetalhePage.vue')
      },
      {
        path: 'profile',
        component: () => import('../views/ProfilePage.vue'),
        meta: { requerNome: true }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
