import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Landing = () => import(/* webpackChunkName: 'pages-landing' */ '../pages/Landing.vue')
const Overview = () => import(/* webpackChunkName: 'pages-overview' */'../pages/Overview.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Landing },
      { path: '/overview', component: Overview }
    ]
  })
}
