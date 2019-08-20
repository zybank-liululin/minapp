<template>
  <div class="scroller-box">
    <div class="title">分享</div>
    <div class="outer">
      <div>shareApp</div>
      <mt-button class="item" type="primary" size="large" @click="share">分享</mt-button>
      <mt-button class="item" type="primary" size="large" @click="closeShare">关闭分享</mt-button>
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
    onShareAppMessage () {
      return {
        title: '中原银行小程序示例',
        desc: '小程序官方示例 Demo，展示已支持的接口能力及组件。',
        path: 'request',
        success: function () {
          window.zyb.alert({content: '分享成功'})
        },
        fail: function () {
          window.zyb.alert({content: '分享失败'})
        }
      }
    },
    share () {
      window.zyb.showSharePanel()
    },
    closeShare () {
      window.zyb.hideShareMenu()
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
  height: 1.8rem;
  padding: 0.1rem 0.2rem 0.2rem 0.2rem;
  background-color: white;
}
</style>
