<template>
  <div class="hello">
    this is interfaces page
  </div>
</template>

<script>
export default {
  name: 'interfaces',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    console.log('vueconsole')
    window.Page(this)
  },
  methods: {
    nextPage () {
      window.zyb.navigateTo({name: 'componentsB', params: {a: 1}})
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
