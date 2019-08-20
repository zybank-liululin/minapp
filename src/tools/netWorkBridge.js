const BASE_URL = 'http://baidu.com/'
const request = function (param) {
  return new Promise((resolve, reject) => {
    window.zyb.request({
      url: BASE_URL + param.transName
    })
  })
}
// 解决并行交易loading问题
const parallelRequestWithLoading = function (params) {
  console.log('开启loading')
  if (typeof(params) != Array) return
  Promise.all(params).then(() => {
    console.log('隐藏loading')
  })
}
// 解决串行交易loading问题
const serialRequestWithLoading = function (params) {
  console.log('开启loading')
  if (typeof(params) != Array) return
  Promise.all(params).then(() => {
    console.log('隐藏loading')
  })
}

Vue.prototype.$request = http
Vue.prototype.$parallelRequestWithLoading = parallelRequestWithLoading
Vue.prototype.$SerialRequestWithLoading = SerialRequestWithLoading
