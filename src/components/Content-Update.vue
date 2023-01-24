<template>
  <div class="content update">
    <div class="comic_news">
      <MainBodyNav @getids="setids"/>
      <ComicListNew :lisid="stid"/>
    </div>
  </div>
</template>

<script>
import ComicListNew from "./update/comic-list-new.vue";
import MainBodyNav from "./update/mainBody-nav.vue";
import {ref} from "vue";
export default {
  name: "Content-Update",
  setup(){
    const stid = ref("");
    return{
      stid
    }
  },
  components: {
    MainBodyNav, ComicListNew
  },
  methods:{
    setids(ids){
      this.stid =ids;
    }
  }
}
</script>

<style src="../assets/css/updatecss.css">

</style>
