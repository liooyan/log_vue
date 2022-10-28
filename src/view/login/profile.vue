<template>
  <div >
    {{ name }},   {{ $route.params.userName }}
  </div>
</template>


<script>
export default {
  data(){
    return {
      name: 'profile'
    }
  }, mounted() {
    console.log(this.$route.params)
  }
}
</script>