<template>
  <div class="scroller-box">
    <div class="title">加载提示框Api</div>
    <div class="outer">
      <div>showLoading&hideLoading</div>
      <mt-button class="item" type="primary" size="large" @click="showLoading">加载提示框</mt-button>
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
    showLoading () {
      window.zyb.showLoading({
        content: '加载中...',
        delay: 1000
      })
      setTimeout(() => {
        window.zyb.hideLoading()
      }, 4000)
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
