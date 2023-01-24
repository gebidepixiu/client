<template>
  <div class="works_recommend classification_works new_online">
    <div>
    <ul class="right" v-for="des in getall">
      <a class="work_href" :href="'#/detailed/'+des.comicid">
        <li class="pic">
          <img :src=des.comicimg alt="">
        </li>
        <li class="title">{{ des.comicname }}</li>
        <li class="describe">{{des.title}}</li>
      </a>
    </ul>
    </div>

  </div>

</template>

<script>
import {getheaderimg} from "../../api/index.js";
import {ref} from "vue";

export default {
  name: "works_recommend-1",
  setup(props,content){
    const getall = ref({});
    return {
      props,getall
    };
  },


  mounted() {
    this.getallimg();

  },
  updated() {
    this.$emit("nvs",this.getall[0].comicimg)
  },
  methods:{
    getallimg(){
      (async ()=>{this.getall = (await getheaderimg({
        id: this.id,
        workid: this.datatype.type,
        typedata: this.datatype.typedata}))
      })();
    }
  },
  props:{
    id:"",
    datatype:""
  },
}
</script>

<style  src="../../assets/css/works.css">

</style>
