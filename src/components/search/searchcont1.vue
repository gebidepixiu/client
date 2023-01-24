<template>
  <div class="comic_list_new search_list">
    <div class="everyday_new clearfix" v-for="vis in sech">
      <ul>
        <li>
          <span class="ranking_nub"></span>
          <h2><a class="titles" :href="'#/detailed/'+vis.comicid">{{vis.comicname}}</a></h2>

          <span class="describe">{{vis.comicauthor}}</span>
          <a class="update_tit" :href="'#/detailed/'+vis.comicid">

            <img :src=vis.comicimg />
          </a>
        </li>
      </ul>

    </div>
    <div class="headtoph" v-if="sech.length==0">
      <img src="../../assets/img/header/ea9f0702862b7184.jfif">
      <h2>--抱歉没找到您要的漫画</h2>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {useRoute,useRouter} from "vue-router";
import {ref, watch} from "vue";
import {getsearch} from "../../api/index.js";

export default {
  name: "searchcont1",
  setup(){
    const sech = ref([{}]);
    return{
      sech
    }
  },
  mounted() {
    watch(
        [()=>this.$store.getters.topsttypid,()=>this.$store.getters.topsid,()=>this.$route.query.name],
        (news)=>{
          this.getsechdata();
        }
    )

    this.getsechdata();
  },
  methods:{
    getsechdata(){
      (async ()=>{this.sech = (await getsearch({
        id:this.$store.getters.topsid,
        pageid:this.$store.getters.topsttypid,
        sename: this.$route.query.name
      }))

      })();
      console.log("Asdaw")
    }
  }
}
</script>

<style src="../../assets/css/updatecss.css">

</style>
<style scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  text-align: center;
  border-radius: 4px;
}
</style>
