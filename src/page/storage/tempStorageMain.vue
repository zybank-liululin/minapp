<template>
  <div class="scroller-box">
    <div class="title">临时数据存储Api</div>
    <div class="outer">
        <input class="data-input" type="text" placeholder="cityName" v-model="cityName">
        <input class="data-input" type="text" placeholder="cityCode" v-model="cityCode">
        <div class="features-btn">
            <div class="item"><mt-button type="primary" size="small" @click="setTempStorage">存储数据</mt-button></div>
            <div class="item"><mt-button type="primary" size="small" @click="getTempStorage">读取数据</mt-button></div>
            <div class="item"><mt-button type="primary" size="small" @click="removeTempStorage">删除数据</mt-button></div>
        </div>
        <div class="features-btn">
            <div class="item"><mt-button type="primary" size="small" @click="clearTempStorage">清除数据</mt-button></div>
            <div class="item flex2"><mt-button type="primary" size="small" @click="getTempStorageInfo">获取数据信息</mt-button></div>
        </div>
    </div>
    <br>
    <div class="outer heighter">
        <input class="data-input" type="text" placeholder="cityName" v-model="cityNameSync">
        <input class="data-input" type="text" placeholder="cityCode" v-model="cityCodeSync">
        <div class="features-btn">
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="setTempStorageSync">同步存储数据</mt-button></div>
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="getTempStorageSync">同步读取数据</mt-button></div>
        </div>
        <div class="features-btn">
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="removeTempStorageSync">同步删除数据</mt-button></div>
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="clearTempStorageSync">同步清除数据</mt-button></div>
        </div>
        <div class="features-btn">
            <div class="item align-center"><mt-button class="widther" type="primary" size="small" @click="getTempStorageInfoSync">同步获取数据信息</mt-button></div>
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
    clearTempStorage () {
      window.zyb.clearTempStorage()
    },
    clearTempStorageSync () {
      window.zyb.clearTempStorageSync()
    },
    getTempStorage () {
      window.zyb.getTempStorage({
        key: 'currentCity',
        success: function (res) {
          window.zyb.alert({content: '获取成功：' + res.data.cityName})
        },
        fail: function (res) {
          window.zyb.alert({content: res.errorMessage})
        }
      })
    },
    getTempStorageSync () {
      let res = window.zyb.getTempStorageSync({ key: 'currentCity' })
      window.zyb.alert({
        content: JSON.stringify(res.data)
      })
    },
    getTempStorageInfo () {
      window.zyb.getTempStorageInfo({
        success: function (res) {
          window.zyb.alert({content: JSON.stringify(res)})
        }
      })
    },
    getTempStorageInfoSync () {
      var res = window.zyb.getTempStorageInfoSync()
      window.zyb.alert({content: JSON.stringify(res)})
    },
    removeTempStorage () {
      window.zyb.removeTempStorage({
        key: 'currentCity',
        success: function () {
          window.zyb.alert({content: '删除成功'})
        }
      })
    },
    removeTempStorageSync () {
      window.zyb.removeTempStorageSync({
        key: 'currentCity'
      })
      window.zyb.alert({content: '删除成功'})
    },
    setTempStorage () {
      window.zyb.setTempStorage({
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
    setTempStorageSync () {
      window.zyb.setTempStorageSync({
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
