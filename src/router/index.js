import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Landing = () => import(/* webpackChunkName: 'pages-landing' */ '../pages/Landing.vue')
const Lazy = () => import(/* webpackChunkName: 'pages-lazy' */ '../pages/Lazy.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Landing },
      { path: '/lazy', component: Lazy }
    ]
  })
}
