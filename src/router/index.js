import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Landing = () => import(/* webpackChunkName: 'pages-landing' */ '../pages/Landing.vue')
const Photo = () => import(/* webpackChunkName: 'pages-photo' */ '../pages/Photo.vue')
const SSR = () => import(/* webpackChunkName: 'pages-ssr' */ '../pages/SSR.vue')
const Overview = () => import(/* webpackChunkName: 'pages-overview' */'../pages/Overview.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Landing },
      { path: '/photo', component: Photo },
      { path: '/ssr', component: SSR },
      { path: '/overview', component: Overview }
    ]
  })
}
