<template>
  <div class="scroller-box">
    <div class="title">位置信息</div>
    <div class="outer">
      <div>getLocation</div>
      <mt-button class="item" type="primary" size="large" @click="getLocation">获取用户位置位置</mt-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'mint-ui'
export default {
  name: 'components',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      openId: ''
    }
  },
  component: {
    mtButton: Button
  },
  created () {
  },
  activated () {
    window.Page(this)
  },
  methods: {
    getLocation () {
      window.zyb.showLoading()
      window.zyb.getLocation({
        type: 3,
        success (res) {
          window.zyb.hideLoading()
          window.zyb.alert({content: JSON.stringify(res)})
        },
        fail () {
          window.zyb.hideLoading()
          window.zyb.alert({ title: '定位失败' })
        }
      })
    }
  }
}
</script>

<style scoped>
.scroller-box {
  -webkit-overflow-scrolling: touch;
  padding: 0.2rem;
  text-align: left;
}
.title{
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.16rem;
}
.item{
  margin-top: 0.14rem;
}
.outer {
  width: 100%;
  height: 1.2rem;
  padding: 0.1rem 0.2rem 0.2rem 0.2rem;
  background-color: white;
}
</style>
