<template>
  <div class="mainBody_nav">
    <ul>

      <li><a  @click="settop(0,$event)">全部</a></li>
      <li v-for="ins in gettypeids" @click="settop(ins.id,$event)"><a>{{ins.type}}</a></li>
    </ul>
  </div>
</template>

<script>
import {ref} from "vue";
import {gettypeall} from "../../api/index.js";

export default {
  name: "mainBody",
  setup(){
    const gettypeids = ref([{}]);
    return{
      gettypeids
    }
  },
  mounted() {
    this.gettypealls();
    this.settop();
  },
  methods:{
    settop(index,event){
      if (index!=undefined&&index!=0){
        for (let i = 0; i < document.getElementsByClassName("mainBody_nav")[0].getElementsByTagName("a").length; i++) {
          document.getElementsByClassName("mainBody_nav")[0].getElementsByTagName("a")[i].classList.remove("settop");
        }
        event.currentTarget.getElementsByTagName("a")[0].classList.add("settop");
        this.$emit("gettypeid",index);
      }else {
        for (let j = 0; j < document.getElementsByClassName("mainBody_nav")[0].getElementsByTagName("a").length; j++) {
          document.getElementsByClassName("mainBody_nav")[0].getElementsByTagName("a")[j].classList.remove("settop");
        }
        document.getElementsByClassName("mainBody_nav")[0].getElementsByTagName("a")[0].classList.add("settop");
        this.$emit("gettypeid","0");
      }

    },
    gettypealls(){
      (async ()=>{this.gettypeids = (await gettypeall())
      })();
    }
  },

}
</script>

<style scoped>

</style>
