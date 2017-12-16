import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Landing = () => import('../pages/Landing.vue')
const Contact = () => import('../pages/Contact.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Landing },
      { path: '/contact', component: Contact }
    ]
  })
}
