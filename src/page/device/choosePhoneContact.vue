<template>
  <div class="scroller-box">
    <div class="title">选择通信录联系人</div>
    <div class="outer">
      <div>choosePhoneContact</div>
      <mt-button class="item" type="primary" size="large" @click="choosePhoneContact">选择通信录联系人</mt-button>
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
    choosePhoneContact () {
      window.zyb.choosePhoneContact({
        success: (res) => {
          window.zyb.alert({
            content: '姓名：' + res.name + '\n号码：' + res.mobile
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
