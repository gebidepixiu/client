<template>
  <div class="works_recommend clearfix">
    <div class="wors_left">
    <ul class="left">
      <a class="work_href" :href="'#/detailed/'+getall[0].comicid">
        <li class="pic">
          <img :src=getall[0].comicimg alt="">
        </li>
        <li class="title">{{ getall[0].comicname }}</li>
        <li class="describe">{{getall[0].title}}</li>
      </a>
    </ul>
    </div>
    <div>
    <ul class="right" v-for="(des,index) in getall" @mouseenter="setimg(index,$event)">

      <a class="work_href" :href="'#/detailed/'+des.comicid">
        <li class="pic">
          <img :src=des.comicimg alt="">
        </li>
        <li class="title">{{ des.comicname }}</li>
      </a>
    </ul>
    </div>

  </div>
</template>

<script>
import {getheaderimg} from "../../api/index.js";
import {ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "works_recommend-1",
  setup(props,content){
    const getall = ref([{}]);
    return {props,getall
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
    },

  setimg:function (index,event) {

    var left = event.currentTarget.parentNode.parentNode.getElementsByClassName("left")[0];
    var sdw =this.getall[index];
    left.getElementsByTagName("img")[0].src = sdw.comicimg;
    left.getElementsByClassName("title")[0].innerText = sdw.comicname;
    left.getElementsByClassName("describe")[0].innerText = sdw.title;
    left.getElementsByClassName("work_href")[0].href = "#/detailed/"+sdw.comicid;
  }
}
,
  props:{
      imgs:"",
      id:"",
      datatype:""
  }
}
</script>

<style  src="../../assets/css/works.css">

</style>
