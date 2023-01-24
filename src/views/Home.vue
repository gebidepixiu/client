<template>
   <headerTop :top="0"/>
      <headImg/>
      <rotationImg/>
      <content/>
</template>

<script>
import headerTop from "../components/header-top.vue";
import headImg from "../components/head-img.vue";
import rotationImg from "../components/rotation-img.vue";
import content from "../components/content.vue";
import "../assets/js/jquery-1.8.3.min";
import {useStore} from "vuex";
export default {
  name: "Home",
  components:{
    headerTop,
    headImg,
    rotationImg,
    content
  },

}
</script>

<style src="../assets/css/ovether.css">

</style>
