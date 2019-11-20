import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/layout.vue'
import Home from '@/Home/Home.vue'
import User from '@/User/User.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Layout
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/User/:id/:name',
    component: User
  }, ]
})

export default router