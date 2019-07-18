import Vue from 'vue'
import Router from 'vue-router'

const components = () => import(/* webpackChunkName: "components" */ '@/page/components')
const componentsA = () => import(/* webpackChunkName: "componentsA" */ '@/page/componentsA')
const componentsB = () => import(/* webpackChunkName: "componentsB" */ '@/page/componentsB')
const interfaces = () => import(/* webpackChunkName: "interface" */ '@/page/interfaces')
const main = () => import(/* webpackChunkName: "main" */ '@/page/main')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'components',
      name: 'components',
      component: components,
      meta: {
      }
    },
    {
      path: '/componentsA',
      name: 'componentsA',
      component: componentsA
    },
    {
      path: '/componentsB',
      name: 'componentsB',
      component: componentsB
    },
    {
      path: '/interfaces',
      name: 'interfaces',
      component: interfaces
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
