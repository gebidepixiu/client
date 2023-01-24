<template>
  <div class="content update">
    <div class="comic_news">
      <main-body @gettypeid = "gettyid"/>
      <ComicList :typeid = "typeid"/>
    </div>
  </div>
</template>

<script>
import MainBody from "./category/mainBody-nav.vue";
import ComicList from "./category/comic-list-new.vue";
import {ref} from "vue";
export default {
  name: "Category",
  setup(){
      const typeid = ref("");
      return{
        typeid
      }
  },
methods:{
  gettyid(typeid){
    this.typeid = typeid;
  }
},
  components: {ComicList, MainBody}
}
</script>

<style  src="../assets/css/updatecss.css">

</style>
