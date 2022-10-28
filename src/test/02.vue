<template>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <div v-bind:id="dynamicId"></div>
  <div v-bind:disabled="vueDisabled"></div>
  <div >{{ htmlValue() }}</div>
</template>

<script>
let vue = {
  data() {
    return {
      rawHtml: '<span style="color: red">This should be red.</span>',
      dynamicId: 'idTest',
      vueDisabled: false,
      htmlValue:()=> {
        return "html text"
      }
    }
  }
}

export default vue

</script>
<style>
#idTest {
  background-color: aquamarine;
  height: 100px;
}


</style>