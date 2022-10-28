<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
let vue = {
  data() {
    return {
      count: 0
    }
  }
}

export default vue

</script>