import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('@/views/ListView.vue')
    },
    {
      path: '/display',
      name: 'display',
      component: () => import('@/views/DisplayView.vue')
    },
    {
      path: '/shortcut',
      name: 'shortcut',
      component: () => import('@/views/ShortcutView.vue')
    },

    {
      path: '/set',
      name: 'set',
      component: () => import('@/views/SetView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('@/views/FeedbackView.vue')
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('@/views/GroupView.vue')
    },
  ]
})

export default router
