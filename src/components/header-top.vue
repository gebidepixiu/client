<template>
  <div class="heand-hes">
    <div class="headers">
      <div class="head-longin">
        <ul>
          <li class="hovers">
            <a href="#">主页</a>
          </li>
          <li>
            <a href="/#/update">每日推荐</a>
          </li>
          <li>
            <a href="/#/category">分类</a>
          </li>
          <li>
            <a href="/#/ranking">榜单</a>
          </li>
          <li>
            <a href="/#/contributionsViw">投稿/建议</a>
          </li>
          <li>
            <a href="/#/details">关于我们</a>
          </li>
        </ul>
      </div>
      <div class="head-longin-from">
        <div>
            <input type="text" id="insech" placeholder="千刀" class="iut-seach"/>
            <button type="button" class="iut-sub" @click="getsearch()">搜漫画</button>
        </div>
      </div>

      <div class="portrait" @click="iflogin()">
<!--        href="/#/Information/UserInformation"-->
          <a>
            <img src="src/assets/img/header/41f858550f42eb1770b97faf219ae215.png">
            <img src="">
          </a>
      </div>
    </div>


  </div>
  <login v-if="logins" @closers="closerss()"/>
</template>

<script>
import {useStore} from "vuex";
import {useRouter,useRoute} from "vue-router";
import Login from "./Login.vue";
import {ref, watch} from "vue";
export default {
  name: "header-top",
  components: {Login},
  setup(){
    const router = useRouter();
    const logins = ref(false);
    return{
      router,logins
    }
  },
  props:{
    top:""
  },
  mounted() {
    this.iflog();
    this.settop();
    watch(()=>this.$store.getters.allimg,(js)=>{
        this.closerss(js);
    })
  },
  methods:{
    closerss(avs){
      this.logins = avs;
    },

    iflog(){
      if (this.$store.getters.username){
        this.logins = false;
      }
    },
    //判断登录
    iflogin(){
      if (this.$store.getters.username){
          this.$router.push("/information/userinformation");
      }else {
        this.$message({
          message:"您未登录，请登录",
          type:"success"
        })
        this.$store.commit("setallimg",true);
      }
    },


    //搜索框
    getsearch(){
      var seletext = document.getElementById("insech");
      if (seletext.value!==""){
        this.router.push({path:"/search", query:{name:seletext.value}})
      }else {
        alert("输入不能为空")
      }

    },

    //头部导航位置
    settop(){
      if (this.$props.top!=undefined){
      var tops =  document.getElementsByClassName("head-longin")[0].getElementsByTagName("li");
      for (let i = 0; i < tops.length; i++) {
          tops[i].style.borderBottom = "none";
      }
      tops[parseInt(this.$props.top)].style.borderBottom ="2px solid white";
    }
    }
  }
}
</script>

<style src="../assets/css/header-tops.css">

</style>
<style src="../assets/css/ovether.css">

</style>
