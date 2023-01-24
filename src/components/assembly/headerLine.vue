<template>
  <div class="headerLine flexbox">
    <div class="hean-mores">
      <img :src=img>
      <span>{{name}}</span>
    </div>
    <span class="flex1 line"></span>
    <a href="" class="mores">
<!--      <span>更多</span>-->
<!--      <img src="">-->
    </a>
  </div>

  <div class="headerLinelist" v-for="vs in data">
    <works_recommend1 v-if="vs.type==0" :id="id" :datatype="vs" @nvs="get"/>
    <works_recommend2 v-if="vs.type==1" :id="id" :datatype="vs" @nvs="get"/>
    <works_recommend3 v-if="vs.type==2" :id="id" :datatype="vs" @nvs="get"/>
  </div>
</template>

<script>
import works_recommend1 from "./works_recommend-1.vue";
import works_recommend2 from "./works_recommend-2.vue";
import works_recommend3 from "./works_recommend-3.vue";
import {ref} from "vue";
import {useStore} from "vuex";
export default {
  name: "headerLine",
  components:{
    works_recommend1,
    works_recommend2,
    works_recommend3
  },
  props:{
    id:"",
    data:"",
    name:"",
  },
setup(props,content){
    const img = ref("dd");
    return{
      img
    }
},
  methods:{
    get(n){
      this.img = n;
    }

  }
}
</script>

<style  src="../../assets/css/headerLine.css">

</style>
