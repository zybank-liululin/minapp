<template>
  <div class="scroller-box">
    <div class="title">图片选择</div>
    <div class="outer">
      <div>chooseImage</div>
      <mt-button class="item" type="primary" size="large" @click="chooseImage">图片选择</mt-button>
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
    chooseImage () {
      window.zyb.chooseImage({
        sourceType: ['camera', 'album'],
        count: 2,
        success: (res) => {
          window.zyb.alert({
            content: JSON.stringify(res)
          })
        },
        fail: () => {
          window.zyb.showToast({
            content: 'fail'
          })
        }
      })
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
