import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Client',
    meta: {layout: 'main'},
    component: () => import('../views/Client.vue')
  },
  {
    path: '',
    name: 'Address',
    meta: {layout: 'main'},
    component: () => import('../views/Address.vue')
  },
  {
    path: '',
    name: 'Passport',
    meta: {layout: 'main'},
    component: () => import('../views/Passport.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
