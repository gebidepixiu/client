<template>
  <headerTop :top="2"/>
  <headImg/>
  <ContentCategory/>
</template>

<script>
import headerTop from "../components/header-top.vue";
import ContentCategory from "../components/Content-Category.vue";
import headImg from "../components/head-img.vue";
export default {
  name: "Category",
  components:{
    headerTop,
    ContentCategory,
    headImg
  }
}
</script>

<style scoped>

</style>
