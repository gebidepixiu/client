<template>
  <headerTop/>
  <head-img/>
  <searchComp/>
</template>

<script>
import searchComp from "../components/SearchComp.vue";
import headerTop from "../components/header-top.vue";
import HeadImg from "../components/head-img.vue";
export default {
  name: "Search",
  components:{
    searchComp,headerTop,HeadImg
  }
}
</script>

<style scoped>

</style>
