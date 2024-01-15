import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/what-we-do',
      name: 'what we do',
      component: () => import('../views/WhatWeDoView.vue')
    }
  ]
})

export default router
