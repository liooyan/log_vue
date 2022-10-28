<template>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-show="awesome">Hello!</h1>
</template>

<script>
// https://cn.vuejs.org/guide/essentials/conditional.html

let vue = {
  data() {
    return {
      awesome: false
    }
  },

  mounted() {
    console.log(this.awesome)
    this.awesome =true
  }
}

export default vue

</script>