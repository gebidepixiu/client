<template>
  <div class="content update rankings">
    <div class="comic_news">
      <ComicListNew v-for="vis in getranklis" :id="vis.rankid" :rankname="vis.rankname"/>
    </div>
  </div>
</template>

<script>
import ComicListNew from "./ranking/comic-list-new.vue";
import {getranking} from "../api/index.js";
import {ref} from "vue";

export default {
  name: "Content-Ranking",
  setup(){
      const getranklis = getranking();
      return{
        getranklis
      }
  },
  components: {
   ComicListNew
  },
}
</script>

<style scoped>

</style>
