<template>
  <div class="content">
      <headerLine v-for="all in get"
                  :id="all.id"
                  :data="all.data"
                  :name="all.name"
      >
      </headerLine>
  </div>
</template>

<script>
import headerLine from "./assembly/headerLine.vue";
import {getallf} from "../assets/js/heand/getall.js";
import {getall} from "../api/index.js";
import {ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "content",
  setup()
      {
      const get = getall();
      return{
        get
      }
    },

  components:{
  headerLine
},
}


</script>

<style scoped>

</style>
