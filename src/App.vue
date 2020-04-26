<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    async post1() {
      await this.$api.Test1.oneApi2({}).then(res=> {
        console.log(222)
        console.log(222,res);
      })
      console.log(444)
    },
    post2() {
      this.$api.Test1.oneApi({}).then(res=> {
        console.log(111)
        console.log(111,res);
      })
    }
  },
  created() {
    this.post2();
    this.post1();
    console.log(3333)
  }
}
</script>

<style>
  @import url('./assets/css/common.css');
</style>
