<template>
  <div class="scroller-box">
    <div class="title">获取当前网络状态</div>
    <div class="outer">
      <div>getNetworkType</div>
      <mt-button class="item" type="primary" size="large" @click="getNetworkType">获取当前网络状态</mt-button>
    </div>
    <div class="title">监听网络状态变化</div>
    <div class="outer">
      <div>onNetworkStatusChange</div>
      <mt-button class="item" type="primary" size="large" @click="onNetworkStatusChange">监听网络状态变化</mt-button>
    </div>
    <div class="title">取消监听网络状态变化</div>
    <div class="outer">
      <div>offNetworkStatusChange</div>
      <mt-button class="item" type="primary" size="large" @click="offNetworkStatusChange">取消监听网络状态变化</mt-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'mint-ui'
export default {
  name: 'components',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    getNetworkType () {
      window.zyb.getNetworkType({
        success: (res) => {
          window.zyb.alert({content: JSON.stringify(res)})
        }
      })
    },
    offNetworkStatusChange () {
      window.zyb.offNetworkStatusChange()
    },
    onNetworkStatusChange () {
      window.zyb.onNetworkStatusChange(function (res) {
        window.zyb.alert({content: JSON.stringify(res)})
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
