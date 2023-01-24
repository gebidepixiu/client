<template>
  <headerTop :top="3"/>
  <headImg/>
  <ContentRanking/>
</template>

<script>
import headerTop from "../components/header-top.vue";
import ContentRanking from "../components/Content-Ranking.vue";
import headImg from "../components/head-img.vue";
import "../assets/js/jquery-1.8.3.min";
export default {
  name: "Ranking",
  components:{
    headerTop,
    ContentRanking,
    headImg
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
