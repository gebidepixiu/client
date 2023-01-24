<template>
<div class="sign">
  <h2>登录</h2>
  <div class="inputes">
    <el-input v-model="inputuser" placeholder="账号" />
    <el-input v-model="inputpass" type="password" show-password placeholder="密码" />

    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button @click="noness()">注册</el-button>
  </div>

</div>
</template>

<script>
import {ref} from "vue";
import {getusers} from "../../api/index.js";
import {useRouter} from "vue-router";

var constime = null;
export default {
  name: "sign",
  setup(){
    const inputuser = ref("");
    const inputpass = ref("");
    const cons = ref(0);
    return{
      inputuser,inputpass,cons,
    }
  },
  methods:{
    noness(){
    document.getElementsByClassName("register")[0].style.display = "block";
    },
    //登录判断
    onSubmit(){
      if (!this.inputuser==""&&this.inputpass!==""&&this.cons!=3){
        this.getusefycon();
      }else if (this.cons!=3){
        this.$message({message: '账号密码不能为空',
          type: 'success',});
        this.cons++;
      }else {
        this.$message({message: '您点击的太快了请3秒后再点',
          type: 'success',});
        clearTimeout(constime);
        console.log(constime)
        constime = null;
        constime = setTimeout(()=>{
          this.cons = 0;
       },3000);
      }
    },
    getusefycon(){
      (async ()=>{await (
          getusers({
            account:this.inputuser,
            password:this.inputpass}).then(res=>{
            if (res){
              this.$message({
                message:"登录成功",
                type:"success"
              })
              this.$store.commit("setUsername",this.inputuser);
              setTimeout(()=> {
                this.$router.go(0);
              },1500);
            }else {
              this.$message({
                  message:"账号或密码错误，请仔细检查是否大小写",
                  type:"error"
              })

              this.cons++;
            }
          })
      )})()
    }
  }
}
</script>

<style scoped>

</style>
