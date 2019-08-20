<template>
  <div class="scroller-box">
    <div class="title">设置剪贴板数据</div>
    <div class="outer">
      <div>setClipboard</div>
      <mt-button class="item" type="primary" size="large" @click="setClipboard">设置剪贴板数据</mt-button>
    </div>
    <div class="title">获取剪贴板数据</div>
    <div class="outer">
      <div>getClipboard</div>
      <mt-button class="item" type="primary" size="large" @click="getClipboard">获取剪贴板数据</mt-button>
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
    setClipboard () {
      window.zyb.setClipboard({text: '中原银行剪贴板测试'})
    },
    getClipboard () {
      window.zyb.getClipboard({
        success: (res) => {
          window.zyb.alert({content: res.text})
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
