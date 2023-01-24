<template>
  {{nv}}
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {getallf} from "../assets/js/heand/getall.js";
import {ref} from "vue";
export default {
  name: "test1",
  setup(){
    const nv = ref([]);
    return{
      nv
    }
  },
  mounted() {
    let dw = "sad";
    let sdw = new Promise((resolve,reject)=>{
      dw = "阿萨大";
      resolve('OK');
    });
    console.log(sdw)
    console.log(dw)
  }
}
</script>

<style scoped>
#lll{
  width: 300px;
  height: 300px;
  background-color: burlywood;
}
</style>
