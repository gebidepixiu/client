<template>
<HeaderTop/>
  <div class="content detailses">
    <div class="details_top">
      <h2 class="details_top_title"></h2>
    </div>
    <div class="details_bottom">
      <ul>
        <li v-for="vis in indslist">
          <img :src=vis>
        </li>
      </ul>
    </div>
  </div>


  <div class="details_list">


    <el-dropdown
        :hide-on-click="false"
        trigger="click"
        @visible-change="disblocch(false)"
    >
      <el-button type="primary" circle>
    <span class="el-dropdown-link">
      工具栏
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-button type="danger" circle @click="getfris()">上一章</el-button>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-button type="danger" circle @click="getlost()">下一章</el-button>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-button type="danger" circle @click="disblocch(true)">目录</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <div class="chapterdiv">
      <ul>

        <li v-for="vis in indslistchp">
          <a :href="'#/Details/'+this.$route.params.comid+'/'+vis.chaptersname">
            <p>第{{vis.kfs}}章</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderTop from "./header-top.vue";
import {hide} from "../assets/js/details-sis.js";
import "../assets/js/jquery-1.8.3.min.js"
import {getchus, getchuslist, getdetais} from "../api/index.js";
import {ref, watch} from "vue";
import {convertToChinaNum} from "../assets/js/toolsjs.js";
var sdw = hide();
export default {
  name: "detailsSis",
  components:{
    HeaderTop
  },
  setup(){
    const inds = ref();
    const indslist = ref();
    const indslistchp = ref([{}]);
    return{
      inds,indslist,indslistchp
    }
  },
  mounted() {
    watch(()=>this.$route.params.chopid,()=>{
      this.indslist = null;
      this.gettops();
      this.getchlist();
    })
    this.gettops();
    this.getchlist();

  },

  methods:{
    getfris(){
      for (let i = 0; i < this.indslistchp.length; i++) {
        if (this.indslistchp[i].chaptersname==this.$route.params.chopid&&i!=0){
          this.$router.push({name:"Details",params:{comid:this.$route.params.comid,chopid:this.indslistchp[i-1].chaptersname}})
          break;
        }else if (this.indslistchp[i].chaptersname==this.$route.params.chopid&&i==0){
          this.$message({
            message:"已经是第一章了亲"
          })
          break;
        }
      }
    },
    getlost(){
      for (let i = 0; i < this.indslistchp.length; i++) {
        if (this.indslistchp[i].chaptersname==this.$route.params.chopid&&i!=this.indslistchp.length-1){
          this.$router.push({name:"Details",params:{comid:this.$route.params.comid,chopid:this.indslistchp[i+1].chaptersname}})
          break;
        }else if (this.indslistchp[i].chaptersname==this.$route.params.chopid&&i==this.indslistchp.length-1){
          this.$message({
            message:"已经是最后一章了亲"
          })
          break;
        }
      }
    },


    //获取章节
    getchlist(){
      (async ()=>{this.indslistchp = (await getdetais({
        "comicid": this.$route.params.comid,
      }))
        for (let i = 0; i < this.indslistchp.length; i++) {
          this.indslistchp[i].kfs = convertToChinaNum(i+1);
        }
      })();
    },

    //判断是否购买
    gettops(){
      (async ()=>{this.inds = (await getchus({
            "comicid": this.$route.params.comid,
            "chaptersname": this.$route.params.chopid
          }).then(res=>{
                if (!this.$store.getters.username&&!res){
                    this.$message({
                      message:"该漫画章节为付费章节，请登录"
                    })
                    this.$store.commit("setallimg",true);
                    return null;
                }else if (this.$store.getters.username!=null){
                  return this.getuserch();
                }else {
                  return res;
                }

              })
          )
            if (this.inds){

               this.indslist =  (await getchuslist({
                 "comicid": this.$route.params.comid,
                 "chaptersname": this.$route.params.chopid
               })
               )
            }else if (this.inds!==null){
              this.$message({
                message:"该漫画章节为付费章节，请购买呦"
              })
            }
      }
      )();
    },

    //根据登录判断是否购买过漫画
    getuserch(){
      var los = true;
      return (async ()=>{los = (await getchus({
                "comicid": this.$route.params.comid,
                "chaptersname": this.$route.params.chopid,
                "account": this.$store.getters.username
              }).then(res=>{
                return res;
          }))
          return los;
          }
      )();
    },




    disblocch(ins){
      var jh = document.getElementsByClassName("chapterdiv")[0].style.display;
      if (!ins){
        document.getElementsByClassName("chapterdiv")[0].style.display ="none";
      }else {
      if (jh=="none"||jh==""){
        document.getElementsByClassName("chapterdiv")[0].style.display ="block";
      }else {
        document.getElementsByClassName("chapterdiv")[0].style.display ="none";
      }
      }
    },

  }

}
</script>

<style src="../assets/css/header-tops.css"></style>
<style src="../assets/css/details.css"></style>
<style>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
