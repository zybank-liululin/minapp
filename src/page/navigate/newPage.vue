<template>
  <div class="newpage">
    我是新页面
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
    window.Page(this)
  },
  methods: {
  }
}
</script>

<style scoped>
.newpage {
    margin-top: 50%;
}
</style>
