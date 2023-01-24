<template>
  <div class="comic_news">
    <div class="comic_list_new favorites">
      <div class="everyday_new clearfix" v-for="(vis,index) in ranlis">
        <ul>
          <li>
            <span class="ranking_nub"></span>
            <h2><a class="titles" href="">{{ vis.comicname }}</a></h2>


            <a class="update_tit" :href="'#/detailed/'+vis.comicid">
              <span class="describe">{{ vis.comicauthor }}</span>
              <img :src=vis.comicimg>
            </a>
          </li>
          <li>
            <CollectionCon :com="vis.comicid"/>
          </li>
        </ul>
      </div>
      <div class="headtoph" v-if="ranlis.length==0">
        <img src="../../assets/img/header/ea9f0702862b7184.jfif">
        <h2>--您还没有收藏的漫画哦，请再去逛逛吧</h2>
      </div>
    </div>
  </div>
</template>

<script>
import {getallcoll} from "../../api/index.js";
import {ref} from "vue";
import CollectionCon from "../tools/CollectionCon.vue";

export default {
  name: "UserFavorites",
  components: {CollectionCon},
  setup(){
    const ranlis = ref([{}])
    return{
      ranlis
    }
  },
  mounted() {
      this.getcoll();
  },
  methods:{
    getcoll(){
      (async ()=>{this.ranlis = (await getallcoll(
          {
            id:this.$store.getters.username
          }
      ))

      })();
    }

  }
}

</script>

<style src="../../assets/css/updatecss.css">

</style>
<style src="../../assets/css/information.css">

</style>
