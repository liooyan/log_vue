<template>
  <div class="container">
    hello {{ state.message }}
    <div>数字: {{ count }}</div>
    <div>两倍数字: {{ doubleCount }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: {
        message: "run"
      }, count: 1,
      doubleCount: 4
    }
  }
}
</script>
<style lang="scss">
body {
  font-size: 16px;
}

.container {
  text-align: center;
  line-height: 2;
}
</style>