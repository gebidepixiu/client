<template>
  <div class="subject_right">
    <div class="subject_top">
      <h2 id="up_top">欢迎打赏</h2>
      <p>您的金钱就是我的动力!!!</p>
      <img src="../../assets/img/inde/img.png">
    </div>



    <div class="subject_bottom">
      <h2>章节列表</h2>
      <div>
        <el-button round v-for="(vis,index) in chaptersbut" @click="setchapterlis(vis.up,vis.end)">{{vis.up}} - {{vis.end}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {getdetais} from "../../api/index.js";
import {ref} from "vue";

export default {
  name: "subject_right",
  props:{
    comid:""
  },
  setup(){
    const  chapters = ref([{}]);
    const  chaptersbut = ref([]);
    return{
      chapters,chaptersbut
    }
  },
  mounted() {
    this.getchapter();
  },
  methods:{
    setchapterlis(up,end){
      this.$emit("setchap",up,end)

    },


    getchapter(){
      (async ()=>{this.chapters = (await getdetais({
            "comicid": this.$props.comid
          }))

            let set = 0;
            let conout = 0;
            for (let i = 1; i < this.chapters.length; i++) {
                  let chaptersbuts = {};
                  if (i%10==0&&i!=this.chapters.length-1){
                      chaptersbuts.up = conout+1;
                      conout = i;
                      chaptersbuts.end = i;
                      this.chaptersbut[set] = chaptersbuts;
                      set++;
                  }else if (i==this.chapters.length-1){
                    chaptersbuts.up = conout+1;
                    chaptersbuts.end = this.chapters.length;
                    this.chaptersbut[set] = chaptersbuts;
                  }
            }
          }
      )();
    }
  }
}
</script>

<style scoped>

</style>
