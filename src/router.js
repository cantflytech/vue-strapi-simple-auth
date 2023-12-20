import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Request from './views/Request.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
      
      {
        path: '/request',
        name: 'request',
        component: Request,
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
      },

    // {
    //   path: '/secure',
    //   name: 'secure',
    //   component: Secure,
    //   meta: { 
    //     requiresAuth: true
    //   }
    // },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next('')
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router