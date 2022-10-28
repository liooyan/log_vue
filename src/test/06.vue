<template>
  <!-- `greet` 是上面定义过的方法名 -->
  <button @click="greet">Greet</button>
</template>

<script>
// https://cn.vuejs.org/guide/essentials/conditional.html

let vue = {
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      // 方法中的 `this` 指向当前活跃的组件实例
      console.log(`Hello ${this.name}!`)
      // `event` 是 DOM 原生事件
      if (event) {
        console.log(event.target.tagName)
      }
    }
  }
}

export default vue

</script>