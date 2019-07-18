<template>
  <div class="hello">
    this is components page<br>
    <button @click="nextPage">下一页</button>
  </div>
</template>

<script>
export default {
  name: 'components',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
  },
  activated () {
    console.log('vueconsole')
    window.Page(this)
  },
  methods: {
    nextPage () {
      // debugger
      window.zyb.navigateTo({name: 'componentsA', params: {a: 1}})
      // debugger
      // this.$router.push({name: 'componentsA', onSuccess: function () {}})
    },
    onPageShow: function () {
      console.log('onPageShow')
    },
    onBack: function () {
      console.log('onBack')
    },
    onPageHide: function () {
      console.log('onPageHide')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
