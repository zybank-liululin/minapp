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
const pullDownRefresh = () => import(/* webpackChunkName: "pullDownRefresh" */ '@/page/interaction/pullDownRefresh')
const storageMain = () => import(/* webpackChunkName: "storageMain" */ '@/page/storage/storageMain')
const tempStorageMain = () => import(/* webpackChunkName: "tempStorageMain" */ '@/page/storage/tempStorageMain')
const oauthLogin = () => import(/* webpackChunkName: "oauthLogin" */ '@/page/oauth2/oauthLogin')
const request = () => import(/* webpackChunkName: "request" */ '@/page/request/request')
const canIUse = () => import(/* webpackChunkName: "canIUse" */ '@/page/device/canIUse')
const choosePhoneContact = () => import(/* webpackChunkName: "choosePhoneContact" */ '@/page/device/choosePhoneContact')
const network = () => import(/* webpackChunkName: "network" */ '@/page/device/network')
const getSystemInfo = () => import(/* webpackChunkName: "getSystemInfo" */ '@/page/device/getSystemInfo')
const makePhoneCall = () => import(/* webpackChunkName: "makePhoneCall" */ '@/page/device/makePhoneCall')
const SDKVersion = () => import(/* webpackChunkName: "SDKVersion" */ '@/page/device/SDKVersion')
const clipboard = () => import(/* webpackChunkName: "clipboard" */ '@/page/device/clipboard')
const location = () => import(/* webpackChunkName: "location" */ '@/page/openInterface/location')
const share = () => import(/* webpackChunkName: "share" */ '@/page/openInterface/share')
const chooseImage = () => import(/* webpackChunkName: "share" */ '@/page/openInterface/chooseImage')

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
    },
    {
      path: '/pullDownRefresh',
      name: 'pullDownRefresh',
      component: pullDownRefresh
    },
    {
      path: '/oauthLogin',
      name: 'oauthLogin',
      component: oauthLogin
    },
    {
      path: '/request',
      name: 'request',
      component: request
    },
    {
      path: '/canIUse',
      name: 'canIUse',
      component: canIUse
    },
    {
      path: '/choosePhoneContact',
      name: 'choosePhoneContact',
      component: choosePhoneContact
    },
    {
      path: '/network',
      name: 'network',
      component: network
    },
    {
      path: '/getSystemInfo',
      name: 'getSystemInfo',
      component: getSystemInfo
    },
    {
      path: '/makePhoneCall',
      name: 'makePhoneCall',
      component: makePhoneCall
    },
    {
      path: '/SDKVersion',
      name: 'SDKVersion',
      component: SDKVersion
    },
    {
      path: '/clipboard',
      name: 'clipboard',
      component: clipboard
    },
    {
      path: '/location',
      name: 'location',
      component: location
    },
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/chooseImage',
      name: 'chooseImage',
      component: chooseImage
    }
  ]
})
