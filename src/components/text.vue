<template>
 <ul v-if="jhs=10">
   <li v-for="jhs in 20"><a>{{ jhs }}</a></li>
 </ul>
</template>

<script>
import tests from "./test1.vue";
import "../assets/js/jquery-1.8.3.min.js";
import login from "./login.vue";
import {ref} from "vue";
export default {
  name: "texst",
  components: {
    login,
    tests
  },
  setup(){
    const nv = ref(1);
  },
  mounted() {

  }
}
</script>

