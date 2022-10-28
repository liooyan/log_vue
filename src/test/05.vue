<template>
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
  <li v-for="(value, key) in myObject">
    {{ key }}: {{ value }}
  </li>
</template>

<script>
// https://cn.vuejs.org/guide/essentials/conditional.html

let vue = {
  data() {
    return {
      parentMessage: 'Parent',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
}

export default vue

</script>