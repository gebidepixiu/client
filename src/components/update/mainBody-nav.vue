<template>
  <div class="mainBody_nav">
    <ul>
      <li v-for="(vis,index) in day" @click="settop(index,$event)"><a>{{ vis }}</a></li>
    </ul>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "mainBody-nav",
  setup(){
    const day = ref(["今天","昨天"]);
    const ids = ref({});
    return{
      day,ids
    }
  },
  mounted() {
    this.settop();
    this.getdate();
  },
  methods:{
    settop(index,event){
      if (index!=undefined){
        for (let i = 0; i < 7; i++) {
          document.getElementsByClassName("mainBody_nav")[0].getElementsByTagName("a")[i].classList.remove("settop");
        }
        event.currentTarget.getElementsByTagName("a")[0].classList.add("settop");
        this.$emit("getids",index);
      }else {
        document.getElementsByClassName("mainBody_nav")[0].getElementsByTagName("a")[0].classList.add("settop");
        this.$emit("getids","0");
      }

    },
    getdate(){//获取头部
      var day = new Date().getDay()
      var kj =  day-2;
      var hs = "一二三四五六日";
      for (let i = 0; i < 7;i++) {
          if (kj!=0&&kj!=day){
            // console.log(hs.charAt(kj-1))
            this.day[i+2] = "星期"+hs.charAt(kj-1);
            kj--;
          }else if (kj!=day){
            kj = 7;
            this.day[i+2] = "星期"+hs.charAt(kj-1);
            kj--;
          }
      }

    }
  }
}

</script>

<style scoped>

</style>
