import router from '../router/index.js'
// const isApp = window.navigator.userAgent.indexOf('pmbs') > 0
const isApp = window.zyb
if (!isApp) {
  window.zyb = {}
  window.Page = function () {}
  window.zyb.navigateTo = function (param) {
    router.push(param)
  }
  window.zyb.redirectTo = function (param) {
    router.replace(param)
  }
  window.zyb.switchTab = window.zyb.reLaunch = function (param) {
    router.replace(param)
  }
  window.zyb.navigateBack = function (param) {
    router.go(-1)
  }
} else {
  window.router = router
}
