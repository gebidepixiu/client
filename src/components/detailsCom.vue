<template>
  <div class="content details_con">
    <subject_left :comid='this.$route.params.comid' :chaptid='chapters'/>
    <subject_right :comid='this.$route.params.comid' @setchap="setchapter"/>
  </div>
</template>

<script>
import Subject_left from "./details/subject_left.vue";
import Subject_right from "./details/subject_right.vue";
import operation from "./details/operation.vue";
import {ref} from "vue";
export default {
  name: "details",
  components: {
    Subject_right, Subject_left,operation
  },
  setup(){
    const chapters = ref({up:1,end:10});
    return{
      chapters
    }
  },
  mounted() {

  },
  methods:{
    setchapter(news,news1){
      this.chapters.up = news;
      this.chapters.end = news1;
    }
  }
}
</script>

<style src="../assets/css/comic_details.css">

</style>
