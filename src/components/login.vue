<template>
  <div class="login">
    <div>
    <sign/>
    <register/>
      <el-icon @click="closes()"><Close /></el-icon>
    </div>
  </div>
</template>

<script>

import Register from "./login/register.vue";
import Sign from "./login/sign.vue";
import {ref} from "vue";
export default {
  name: "login",
  setup(){

  },
  methods:{
    closes(){
      this.$store.commit("setallimg",false);
    }
  },
  components: {Sign, Register}
}
</script>

<style src="../assets/css/login.css">

</style>
