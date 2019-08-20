<template>
  <div class="scroller-box">
    <div class="title">授权登录</div>
    <div class="outer">
      <div>getOpenId</div>
      <mt-button class="item" type="primary" size="large" @click="getOpenId">获取OpenId</mt-button>
    </div>
    <div class="title">获取用户信息</div>
    <div class="outer">
      <div>getUserInfo</div>
      <mt-button class="item" type="primary" size="large" @click="getUserInfo">获取用户信息</mt-button>
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
    getOpenId () {
      let self = this
      window.zyb.getOpenId({
        success: function (res) {
          self.openId = res.openId
          window.zyb.alert({content: res.openId})
        },
        fail: function (res) {
          window.zyb.alert({content: res})
        }
      })
    },
    getUserInfo () {
      window.zyb.request({
        url: 'http://40.64.132.190:9003/oauth/getUserInfo',
        method: 'GET',
        data: {
          openId: this.openId
        },
        headers: {
          'content-type': 'application/json'
        },
        dataType: 'json',
        success: function (res) {
          window.zyb.alert({content: res.data.data})
        },
        fail: function (res) {
          window.zyb.alert({content: 'fail'})
        },
        complete: function (res) {
          window.zyb.hideLoading()
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
