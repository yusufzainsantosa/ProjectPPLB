import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/layouts/main/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home-page',
        component: () => import('@/views/Beranda.vue')
      },
      {
        path: '/event',
        name: 'event-page',
        component: () => import('@/views/Event.vue')
      },
      {
        path: '/facility',
        name: 'facility-page',
        component: () => import('@/views/Fasilitas.vue')
      },
      {
        path: '/court',
        name: 'court-page',
        component: () => import('@/views/Lapangan.vue')
      },
      {
        path: '/book',
        name: 'book-page',
        component: () => import('@/views/Penyewaan.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/login',
        name: 'login-page',
        component: () => import('@/views/Login.vue'),
        meta: {
          requiresLogged: true
        }
      },
      {
        path: '/register',
        name: 'register-page',
        component: () => import('@/views/Register.vue'),
        meta: {
          requiresLogged: true
        }
      },
      {
        path: '/logout',
        name: 'logout-page',
        component: () => import('@/views/Logout.vue'),
        meta: {
          requiresAuth: false
        }
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

router.beforeEach((to, from, next) => {
  // if any of the routes in ./router.js has a meta named 'requiresAuth: true'
  // then check if the user is logged in before routing to this path:
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({ name: 'login-page' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresLogged)) {
    // else if any of the routes in ./router.js has a meta named 'requiresLogged: true'
    // then check if the user is logged in; if true continue to home page else continue routing to the destination path
    // this comes to play if the user is logged in and tries to access the login/register page
    if (store.getters.loggedIn) {
      next({ name: 'home-page' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
