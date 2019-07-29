<template>
  <div class="scroller-box">
    <div class="title">永久数据存储Api</div>
    <div class="outer">
        <input class="data-input" type="text" placeholder="cityName" v-model="cityName">
        <input class="data-input" type="text" placeholder="cityCode" v-model="cityCode">
        <div class="features-btn">
            <div class="item"><mt-button type="primary" size="small" @click="setStorage">存储数据</mt-button></div>
            <div class="item"><mt-button type="primary" size="small" @click="getStorage">读取数据</mt-button></div>
            <div class="item"><mt-button type="primary" size="small" @click="removeStorage">删除数据</mt-button></div>
        </div>
        <div class="features-btn">
            <div class="item"><mt-button type="primary" size="small" @click="clearStorage">清除数据</mt-button></div>
            <div class="item flex2"><mt-button type="primary" size="small" @click="getStorageInfo">获取数据信息</mt-button></div>
        </div>
    </div>
    <br>
    <div class="outer heighter">
        <input class="data-input" type="text" placeholder="cityName" v-model="cityNameSync">
        <input class="data-input" type="text" placeholder="cityCode" v-model="cityCodeSync">
        <div class="features-btn">
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="setStorageSync">同步存储数据</mt-button></div>
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="getStorageSync">同步读取数据</mt-button></div>
        </div>
        <div class="features-btn">
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="removeStorageSync">同步删除数据</mt-button></div>
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="clearStorageSync">同步清除数据</mt-button></div>
        </div>
        <div class="features-btn">
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="getStorageInfoSync">同步获取数据信息</mt-button></div>
            <div class="item align-center"></div>
        </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'mint-ui'
export default {
  name: 'components',
  data () {
    return {
      cityName: '',
      cityCode: '',
      cityNameSync: '',
      cityCodeSync: ''
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
    clearStorage () {
      window.zyb.clearStorage()
    },
    clearStorageSync () {
      window.zyb.clearStorageSync()
    },
    getStorage () {
      window.zyb.getStorage({
        key: 'currentCity',
        success: function (res) {
          window.zyb.alert({content: '获取成功：' + res.data.cityName})
        },
        fail: function (res) {
          window.zyb.alert({content: res.errorMessage})
        }
      })
    },
    getStorageSync () {
      let res = window.zyb.getStorageSync({ key: 'currentCity' })
      window.zyb.alert({
        content: JSON.stringify(res.data)
      })
    },
    getStorageInfo () {
      window.zyb.getStorageInfo({
        success: function (res) {
          window.zyb.alert({content: JSON.stringify(res)})
        }
      })
    },
    getStorageInfoSync () {
      var res = window.zyb.getStorageInfoSync()
      window.zyb.alert({content: JSON.stringify(res)})
    },
    removeStorage () {
      window.zyb.removeStorage({
        key: 'currentCity',
        success: function () {
          window.zyb.alert({content: '删除成功'})
        }
      })
    },
    removeStorageSync () {
      window.zyb.removeStorageSync({
        key: 'currentCity'
      })
      window.zyb.alert({content: '删除成功'})
    },
    setStorage () {
      window.zyb.setStorage({
        key: 'currentCity',
        data: {
          cityName: this.cityName,
          adCode: this.cityCode
        },
        success: function () {
          window.zyb.alert({content: '写入成功'})
        }
      })
    },
    setStorageSync () {
      window.zyb.setStorageSync({
        key: 'currentCity',
        data: {
          cityName: this.cityNameSync,
          adCode: this.cityCodeSync
        }
      })
      window.zyb.alert({content: '写入成功'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroller-box {
  -webkit-overflow-scrolling: touch;
  padding:0 0.2rem 0.2rem 0.2rem;
  text-align: left;
}
.title{
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.16rem;
}
.outer {
  width: 100%;
  height: 2rem;
  padding: 0.1rem 0.2rem 0.2rem 0.2rem;
  background-color: white;
}
.data-input {
    height: 0.4rem;
    line-height: 0.4rem;
}
.features-btn {
    display: flex;
    height: 0.4rem;
    margin-top: 0.04rem;
}
.item {
    flex: 1;
    font-size: 0.1rem;
    line-height: 0.4rem;
}
.flex2{
    flex: 2;
}
.widther {
    width: 97%;
    font-size: 0.1rem;
}
.heighter {
    height: 2.5rem;
}
.align-center {
    text-align: center;
}
</style>
