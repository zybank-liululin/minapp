<template>
  <div id="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true,
      transitionName: 'none',
      isAnim: false
    }
  },
  watch: {
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
  @import './tools/common.css';
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  [v-cloak] {
    display: none;
  }
</style>
