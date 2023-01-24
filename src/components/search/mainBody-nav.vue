<template>
  <div class="mainBody_nav">
    <ul>
      <li @click="settop(0,$event)"><a>综合排序</a></li>
      <li @click="settop(1,$event)"><a>按作者</a></li>
      <li @click="settop(2,$event)"><a>按类型</a></li>
    </ul>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "mainBody-nav",
  setup(){
    const day = ref(["今天","昨天"]);
    const ids = ref("");
    return{
      day,ids
    }
  },
  mounted() {
    this.settop();
  },
  methods:{
    settop(index,event){
      if (index!=undefined){
        for (let i = 0; i < 3; i++) {
          document.getElementsByClassName("mainBody_nav")[0].getElementsByTagName("a")[i].classList.remove("settop");
        }
        this.$store.commit("settopsid",index);
        event.currentTarget.getElementsByTagName("a")[0].classList.add("settop");
      }else {
        document.getElementsByClassName("mainBody_nav")[0].getElementsByTagName("a")[0].classList.add("settop");
        this.$store.commit("settopsid",0);
      }

    }
  }
}

</script>

<style scoped>

</style>
