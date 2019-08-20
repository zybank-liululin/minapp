<template>
  <div class="scroller-box">
    <div class="section-top">
      <img class="icon" src="../../static/zyLogo.png" />
      <div class="title">小程序官方示例</div>
      <div class="description">以下展示小程序官方组件和API示例</div>
      <div class="select">
        <img class="select-icon" src="../../static/select.png" />
        <input class="select-input" type="text" placeholder="搜索你想要的组件及API">
      </div>
    </div>
    <div class="section-middle">
      <div class="item" @click="selected('component')">
        <div class="type"><span :class="{blue: isshow}" @click="isshow=!isshow">基础组件</span></div>
      </div>
      <div class="item" @click="selected('api')">
        <div class="type" ><span :class="{blue: !isshow}" @click="isshow=!isshow">扩展组件</span></div>
      </div>
    </div>
    <div class="section-bottom">
      <div class="title">界面</div>
      <div class="line" @click="goto('confirm')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">确认框</span>
        <span class="line-name">confirm</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('alert')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">警告框</span>
        <span class="line-name">alert</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('toast')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">弱提示</span>
        <span class="line-name">toast</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('prompt')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">对话框</span>
        <span class="line-name">prompt</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('loading')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">加载</span>
        <span class="line-name">showLoading</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('pullDownRefresh')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">下拉刷新</span>
        <span class="line-name">pullDownRefresh</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
    </div>
    <div class="section-bottom">
      <div class="title">导航</div>
      <div class="line" @click="goto('navigate')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">头部导航</span>
        <span class="line-name">navigateBar</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
    </div>
    <div class="section-bottom">
      <div class="title">数据</div>
      <div class="line" @click="goto('storageMain')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">永久存储</span>
        <span class="line-name">storage</span>
        <span class="line-arrow"><img src="../../static/arrow.png" alt=""></span>
      </div>
      <div class="line" @click="goto('tempStorageMain')">
        <span class="line-icon"><img src="../../static/component.png" alt=""></span>
        <span class="line-content">临时存储</span>
        <span class="line-name">tempStorage</span>
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
  height:2.1rem;
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
  top: 1.87rem;
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
  flex: 2;
}
.line-name {
  flex: 6;
  color: #CCCCCC;
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
