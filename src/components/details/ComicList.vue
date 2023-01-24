<template>
  <div class="comic_list">
    <ul>
      <li class="chapter" v-for="(vis,index) in comlis">
        <a :href="'#/Details/'+this.$props.comid+'/'+vis.chaptersname">
          <img class="left_img" src="../../assets/img/header/lp_img_manmanlogo.png">
          <div>
            <h4 class="title">第{{coml[index]}}章</h4>
            <p class="date">{{ vis.updata}}</p>
          </div>
          <el-icon color="rgba(238, 234, 6, 0.8)" size="30px" v-if="vis.section"><Coin /></el-icon>
        </a>
      </li>

    </ul>
  </div>
</template>

<script>
import {ref, watch} from "vue";
import {getdetaiall, getdetailis} from "../../api/index.js";
import {convertToChinaNum} from "../../assets/js/toolsjs.js";
export default {
  name: "ComicList",
  props:{
    comid:"",
    chaptid:{},
    plise:""
  },
  setup(props){
    const comlis = ref([{}]);
    const coml = ref([]);
    const inds = ref(0);
    return{
      comlis,convertToChinaNum,props,inds,coml
    }
  },
  mounted() {
    this.getcomid();
    watch(()=>this.$props.chaptid.up,(news)=>{
      this.getcomid();
    })
  },
  methods:{
    //获取漫画id
    getcomid(){
      (async ()=>{this.inds = (await getdetaiall({
            "comicid": this.$props.comid
          }).then(res=>{
            return res.section;
          }))
            this.getsdwdw();
          }
      )();
    },
    getsdwdw(){
      (async ()=>{this.comlis = (await getdetailis({
            "comid": this.$props.comid,
            "up": this.$props.chaptid.up,
            "end": this.$props.chaptid.end,
            "section": this.inds
          }))
            this.$emit("getforloast","#/Details/"+this.$props.comid+'/'+this.comlis[this.comlis.length-1].chaptersname)
            let sd = this.$props.chaptid.up;
            for (let i = 0; i <= this.$props.chaptid.end-this.$props.chaptid.up; i++) {
              this.coml[i] = convertToChinaNum(sd++);
            }
          }
      )();
    }
  }
}
</script>

<style scoped>

</style>
