<template>
  <div class="scroller-box">
    <div class="section-top">
      <div class="select">
        <img class="select-icon" src="../../static/select.png" />
        <input class="select-input" type="text" placeholder="搜索你想要的组件及API">
      </div>
    </div>
    <div class="section-bottom">
      <div class="title">开放接口</div>
      <div class="line" @click="goto('oauthLogin')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">授权登录</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('request')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">网络请求</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('request')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">网络请求(ptRequest)</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('location')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">获取地理位置</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('share')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">分享</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('chooseImage')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">图片选择</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
    </div>
    <div class="section-bottom">
      <div class="title">设备</div>
      <div class="line" @click="goto('canIUse')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">api是否支持当前版本</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('SDKVersion')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">获取基础库版本号</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('getSystemInfo')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">获取手机系统信息</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('network')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">网络状态</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('clipboard')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">剪贴板</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('makePhoneCall')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">拨打电话</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('choosePhoneContact')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">选择手机联系人</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'interfaces',
  data () {
    return {
      isshow: true
    }
  },
  mounted () {
  },
  activated () {
    window.Page(this)
  },
  methods: {
    goto (route) {
      window.zyb.navigateTo({name: route})
    },
    onPageShow () {
      console.log('onPageShow')
    },
    onBack () {
      console.log('onBack')
    },
    onPageHide () {
      console.log('onPageHide')
    },
    onPullDownRefresh () {
      console.log('onPullDownRefresh', new Date())
      window.zyb.stopPullDownRefresh()
    }
  }
}
</script>

<style scoped>
.scroller-box {
  -webkit-overflow-scrolling: touch;
}
.section-top {
  background-color: #1D1D29;
  height:0.4rem;
  padding: 0.44rem;
}
.section-top .icon {
    width: 0.6rem;
    position: relative;
}
.section-top .title {
  color: white;
  font-size: 0.24rem;
  margin-top: 0.06rem;
}
.section-top .description {
  color: #919199;
  font-size: 0.14rem;
  margin-top: 0.06rem;
}
.section-top .select {
  width: 88%;
  height: 0.44rem;
  background-color: white;
  position: absolute;
  top: 0.62rem;
  border-radius: 0.04rem;
  line-height: 0.44rem;
  left: 6%;
  box-shadow: 1px 3px 5px #EFEFEF;
}
.select .select-icon {
  width: 0.3rem;
  margin-top: 0.07rem;
}
.section-middle {
  height: 0.8rem;
  background-color: #FFFFFF;
  display: block;
  display: flex;
}
.item {
  flex: 1;
  position: relative;
  text-align: center;
}
.type{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
}
.type span {
  height: 100%;
  display: inline-block;
  font-size: 0.18rem;
}
.blue{
  color: #1371F7;
  border-bottom: 3px solid #1371F7;
}
.section-bottom {
  background-color: #FFFFFF;
  margin: 0.12rem 0.1rem 0.1rem 0.1rem;
  padding: 0.2rem 0.1rem 0.05rem 0.1rem;
  text-align: left;
}
.section-bottom .title{
  font-size: 0.16rem;
  height: 0.3rem;
  line-height: 0.2rem;
}
.line{
  height: 0.46rem;
  line-height: 0.46rem;
  display: flex;
  justify-content: space-between;
}
.line-icon {
  margin-top: 0.1rem;
  flex: 1.2;
}
.line-icon img{
  width: 0.26rem;
  height: 0.26rem;
}
.line-content {
  flex: 8;
}
.line-arrow {
  width: 0.13rem;
  margin-top: 0.08rem;
  flex:1;
  text-align: right;
}
.line-arrow img{
  width: 0.25rem;
  height: 0.24rem;
}
</style>
