<template>
  <headerTop/>
  <headImg/>
  <formation/>
</template>

<script>
import formation from "../components/information.vue";
import headerTop from "../components/header-top.vue";
import headImg from "../components/head-img.vue";
export default {
  name: "Information",
  components:{
    headImg,
    formation,
    headerTop
  }
}
</script>

<style>

</style>
