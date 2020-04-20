<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$api.Test1.oneApi({}).then(res=> {
      console.log(res);
    })
  }
}
</script>

<style>
  @import url('./assets/css/common.css');
</style>
