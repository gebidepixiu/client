<template>
  <div class="content update">
    <div class="comic_news">
      <mainBodyNav/>
      <searchcont1/>
    </div>
  </div>
</template>

<script>
import searchcont1 from "./search/searchcont1.vue";
import mainBodyNav from "./search/mainBody-nav.vue";

export default {
  name: "SearchComp",
  components:{
    mainBodyNav,
    searchcont1
  },
  methods:{
  }
}
</script>

<style src="../assets/css/updatecss.css">

</style>
