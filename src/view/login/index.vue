<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'Login',
}
</script>