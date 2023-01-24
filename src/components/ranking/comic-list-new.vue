<template>
  <div class="comic_list_new comic_ranking">
    <ul>
      <h2  class="title">{{ this.$props.rankname }}</h2>
      <li class="inviter_tet" v-for="(vis,index) in ranlis" @mouseenter="elblack(index,$event)" @mouseleave="elnone(index,$event)">
        <a :href="'#/detailed/'+vis.comicid">
          <span class="num">{{ index+1 }}</span>
          {{ vis.comicname }}
        </a>
        <div class="everyday_new active">
          <ul>
            <li>

              <h2><a class="titles" :href="'#/detailed/'+vis.comicid">{{ vis.comicname }}</a></h2>


              <span class="describe">{{ vis.comicname }}</span>
              <a class="update_tit" :href="'#/detailed/'+vis.comicid">
                <img :src=vis.comicimg>
              </a>
            </li>
            <li>

              <span class="nub nub-1">{{ index+1 }}</span>
            </li>
          </ul>
        </div>
      </li>
      <p><a class="show-all-top" href="">查看完整榜单</a></p>
    </ul>
  </div>
</template>

<script>
import {ref} from "vue";
import {getranklis} from "../../api/index.js";
import CollectionCon from "../tools/CollectionCon.vue";
export default {
  name: "comic-list-new",
  props:{
    id:String,
    rankname:String
  },components:{
    CollectionCon
  },
  setup(props){
    const ranlis = ref([[]]);
    const stimesl = ref("");
    return{
      props,ranlis,stimesl
    }
  },
  beforeMount() {
    this.getranall();
  },
  mounted() {
  },
  methods:{


    //显示隐藏
    elnone(index,event){
      if (index!=0){
             event.currentTarget.getElementsByClassName("active")[0].style.display="none";
      }
    },
    elblack(index,event){
      if (index!=0){
        event.currentTarget.getElementsByClassName("active")[0].style.display="block";
      }
    },


    getranall(){
      (async ()=>{this.ranlis = (await getranklis(
          {
            "ranid":this.$props.id
          }
      ).then(ref=>{

        return ref;
      }))
      })();
    }
  }
}
</script>

<style scoped>

</style>
