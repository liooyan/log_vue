<template>
  <p> {{ count }}</p>
</template>

<script>
// https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html

let vue = {
  data() {
    return {
      count: 1
    }
  },

  // `mounted` 是生命周期钩子，之后我们会讲到
  mounted() {
    // `this` 指向当前组件实例
    console.log(this.count) // => 1

    // 数据属性也可以被更改
    this.count = 2
  }
}

export default vue

</script>