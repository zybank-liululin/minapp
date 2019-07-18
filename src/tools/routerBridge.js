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
} else {
  window.router = router
}
