<template>
  <div class="scroller-box">
    <div class="title">确认框Api</div>
    <div class="outer">
      <div>confirm</div>
      <mt-button class="item" type="primary" size="large" @click="showConfirm">确认框</mt-button>
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
    showConfirm () {
      window.zyb.confirm({
        title: '温馨提示',
        content: '您是否想查询快递单号：1234567890',
        confirmButtonText: '马上查询',
        cancelButtonText: '暂不需要',
        success: (result) => {
          window.zyb.alert({
            title: `${result.confirm}`
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
