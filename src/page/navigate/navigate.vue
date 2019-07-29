<template>
  <div class="scroller-box">
    <div class="title">导航栏</div>
    <mt-button type="default" size="large" @click="navigateTo">跳转到新页面</mt-button>
    <mt-button class="item" type="default" size="large" @click="redirectTo">在当前页打开</mt-button>
    <mt-button class="item" type="default" size="large" @click="switchTab">跳转到另一个Tab组件</mt-button>
    <mt-button class="item" type="default" size="large" @click="reLaunch">reLaunch</mt-button>
    <mt-button class="item" type="default" size="large" @click="navigateBack">navigateBack</mt-button>
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
    navigateTo () {
      window.zyb.navigateTo({name: 'newPage'})
    },
    redirectTo () {
      window.zyb.redirectTo({name: 'newPage'})
    },
    switchTab () {
      window.zyb.switchTab({name: 'interfaces'})
    },
    navigateBack () {
      window.zyb.navigateBack()
    },
    reLaunch () {
      window.zyb.reLaunch({name: 'main'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroller-box {
  -webkit-overflow-scrolling: touch;
  padding:0 0.2rem 0 0.2rem;
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
</style>
