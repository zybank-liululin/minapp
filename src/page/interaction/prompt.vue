<template>
  <div class="scroller-box">
    <div class="title">对话框Api</div>
    <div class="outer">
      <div>prompt</div>
      <mt-button class="item" type="primary" size="large" @click="prompt">对话框</mt-button>
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
    prompt () {
      window.zyb.prompt({
        title: '标题单行',
        message: '说明当前状态、提示用户解决方案，最好不要超过两行。',
        placeholder: '给朋友留言',
        okButtonText: '确定',
        cancelButtonText: '取消',
        success: (result) => {
          window.zyb.alert({
            title: JSON.stringify(result)
          })
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
