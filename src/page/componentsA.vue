<template>
  <div class="hello">
    this is components page A
    <button @click="nextPage">下一页</button>
  </div>
</template>

<script>
export default {
  name: 'componentsA',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
  },
  activated () {
    console.log('activated')
    window.Page(this)
  },
  deactivated () {
    console.log('deactivated')
  },
  methods: {
    nextPage () {
      window.zyb.redirectTo({name: 'componentsB', params: {a: 1}})
      // this.$router.push({name: 'componentsB', params: {a: 1}})
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
