<template>
  <div id="app">
    <router-link :to="{name:'Login', params:{id:123, userName:'hangge'}}">
      跳转到 hello
    </router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  background: #eee;
  height: 100vh;
  overflow: hidden;
  font-weight: 400 !important;
}
.el-button{
  font-weight: 400 !important;
}
</style>
