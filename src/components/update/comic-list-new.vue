<template>
  <div class="comic_list_new">
    <div class="everyday_new clearfix" v-for="(vis,index) in lis">
      <ul>
        <li>
          <span class="ranking_nub"></span>
          <h2><a class="titles" :href="'#/detailed/'+vis.comicid">{{ vis.comicname }}</a></h2>


          <span class="describe">{{ vis.comicauthor }}</span>
          <a class="update_tit" :href="'#/detailed/'+vis.comicid">
            <img :src=vis.comicimg />
          </a>
        </li>
        <li>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {ref, watch} from "vue";
import {setCollection,getupimglist} from "../../api/index.js";
import CollectionCon from "../tools/CollectionCon.vue";

export default {
  name: "comic-list-new",
  components: {CollectionCon},
  props:{
    lisid:""
  },
  setup(props){
    const lis = ref([{}]);

    return{
      lis,props
    }
  },
  mounted() {
    watch(
        () => this.$props.lisid,
        (newProps) => {
          this.getupls(newProps);
        }
    );
  },
  methods:{
    //收藏

    getupls(imid){
      (async ()=>{this.lis = (await getupimglist({
        upid: imid
      }))

      })();

    }
  }
}
</script>

<style scoped>

</style>
