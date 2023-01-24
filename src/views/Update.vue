<template>
  <headerTop :top="1"/>
  <headImg/>
  <ContentUpdate/>
</template>

<script>
import headerTop from "../components/header-top.vue";
import ContentUpdate from "../components/Content-Update.vue";
import headImg from "../components/head-img.vue";
export default {
  name: "update",
  components: {
    ContentUpdate,
    headImg,
    headerTop
  }
}
</script>

<style scoped>

</style>
