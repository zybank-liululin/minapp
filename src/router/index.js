import Vue from 'vue'
import Router from 'vue-router'

const interfaces = () => import(/* webpackChunkName: "interface" */ '@/page/interfaces')
const main = () => import(/* webpackChunkName: "main" */ '@/page/main')
const navigate = () => import(/* webpackChunkName: "navigate" */ '@/page/navigate/navigate')
const newPage = () => import(/* webpackChunkName: "newPage" */ '@/page/navigate/newPage')
const confirm = () => import(/* webpackChunkName: "confirm" */ '@/page/interaction/confirm')
const loading = () => import(/* webpackChunkName: "loading" */ '@/page/interaction/loading')
const alert = () => import(/* webpackChunkName: "alert" */ '@/page/interaction/alert')
const prompt = () => import(/* webpackChunkName: "prompt" */ '@/page/interaction/prompt')
const toast = () => import(/* webpackChunkName: "toast" */ '@/page/interaction/toast')
const storageMain = () => import(/* webpackChunkName: "storageMain" */ '@/page/storage/storageMain')
const tempStorageMain = () => import(/* webpackChunkName: "tempStorageMain" */ '@/page/storage/tempStorageMain')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/interfaces',
      name: 'interfaces',
      component: interfaces
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/navigate',
      name: 'navigate',
      component: navigate
    },
    {
      path: '/newPage',
      name: 'newPage',
      component: newPage
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: confirm
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/toast',
      name: 'toast',
      component: toast
    },
    {
      path: '/prompt',
      name: 'prompt',
      component: prompt
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/storageMain',
      name: 'storageMain',
      component: storageMain
    },
    {
      path: '/tempStorageMain',
      name: 'tempStorageMain',
      component: tempStorageMain
    }
  ]
})
