<template>
  <div class="subject_left">
    <div class="subject_top">
      <div class="top_left">
        <img :src=comlis.comicimg>
      </div>
      <ul class="top_right">
        <li class="title describe">{{ comlis.comicname }}</li>
        <li class="author describe">
          作者:
          <a href="">{{ comlis.comicauthor }}</a>
        </li>
        <li class="people describe">
          类型:
          <span>{{ comlis.comTp.type }}</span>
        </li>
        <li class="ellipsis describe">
          {{ comlis.title }}
        </li>
        <li class="btnGroup describe">
          <a :href=ind>阅读最新一话</a>
          <div class="collection subject_conll">
            <CollectionCon :com="this.$props.comid"/>
          </div>
        </li>
      </ul>
    </div>



    <div class="subject_bottom">
      <div class="ellipsis">
        <h2>《{{ comlis.comicname }}》的目录列表</h2>
      </div>
      <ComicList :comid="this.$props.comid" :chaptid="this.$props.chaptid" :plise="comlis.section" @getforloast="setsis"/>
    </div>
  </div>
</template>

<script>
import CollectionCon from "../tools/CollectionCon.vue";
import {getdetaiall} from "../../api/index.js";
import {ref, watch} from "vue";
import ComicList from "./ComicList.vue";
export default {
  name: "subject_left",
  components: {ComicList,CollectionCon},
  props:{
    comid:"",
    chaptid:{}
  },
  setup(){
      const comlis = ref({
        comicid:"",
        comicname:"",
        comicauthor:"",
       comicprice:"",
       title:"",
       uptime:"",
       loadtime:"",
        state:"",
        comicimg:"",
        comTp:""
      })
      const ind = ref("");
      return{
        comlis,ind
      }
  },
  beforeMount() {
    this.getcomid();
  },

  methods:{
    setsis(vis){
      this.ind = vis;
    },
  //获取漫画id
    getcomid(){
      (async ()=>{this.comlis = (await getdetaiall({
        "comicid": this.$props.comid
      }))
      }
      )();
    }
  }
}
</script>

<style scoped>

</style>
