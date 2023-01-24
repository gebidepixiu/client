<template>

      <div class="comic_list_new">
        <div class="classification clearfix" v-for="vis in typelist">
          <a :href="'#/detailed/'+vis.comicid">
            <img :src=vis.comicimg>
          </a>
          <ul>
            <li class="title describe">
              <a :href="'#/detailed/'+vis.comicid">
                {{ vis.comicname }}
              </a>
            </li>
            <li class="subtitle describe">
              <a href="">
                {{ vis.comicauthor }}
              </a>
            </li>
            <li class="text describe">
              {{vis.title}}
            </li>
            <li>
              <a :href="'#/detailed/'+vis.comicid" class="start_look">点击阅读</a>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
import {ref, watch} from "vue";
import {gettyplis} from "../../api/index.js";

export default {
  name: "ComicList",
  props:{
    typeid:""
  },
  setup(props){
      const typelist = ref([{}]);
      return{
        props,typelist
    }
  },
  mounted() {
      watch(()=>this.$props.typeid,(news)=>{
        console.log("Asdaw")
        this.getcatlis(news);
      })
  },
  methods:{
    getcatlis(imid){
      (async ()=>{this.typelist = (await gettyplis( {"typeid":imid}))

      })();

    }
  }
}
</script>

<style scoped>

</style>
