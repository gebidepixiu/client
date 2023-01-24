<template>
<h2>阿萨大</h2>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import { useStore,mapGetters } from 'vuex'
export default {
  name: "test1",
  setup(){
    const router =useRouter()
    const route=useRoute()
  },
  computed:{
    ...mapGetters([
      "avator"
    ])
  }
  ,
  mounted() {
    console.log(this.avator);
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
