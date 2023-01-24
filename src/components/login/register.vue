<template>
  <div class="register">
    <h2>注册</h2>
    <div class="inputes">
      <form>
        <ul>
          <li><el-input v-model="forms.nickname" placeholder="昵称">
            <template #append>昵称</template>
          </el-input></li>
          <li>
            <el-radio-group v-model="forms.sexi" class="ml-4">
              <el-radio-button label="男" />
              <el-radio-button label="女" />
            </el-radio-group></li>
          <li><el-input v-model="forms.account" placeholder="账号">
            <template #append>账号</template>
          </el-input></li>

          <li><el-input v-model="forms.password" placeholder="密码">
            <template #append>密码</template>
          </el-input></li>

          <li>
            <el-button type="primary" @click="onSubmit">注册</el-button>
            <el-button @click="nones()">返回</el-button>
          </li>



        </ul>
        <div class="upload">

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {setadduser} from "../../api/index.js";

export default {
  name: "register",
  setup(){
    const forms = ref({
      account:"",
      nickname:"",
      sexi:"",
      sex:0,
      password:""
    })
    return{
      forms
    }
  },
  methods:{
    onSubmit(){
      let tis = false;
      let reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
      let str = "";
      for (let sets in this.forms) {
        if (!this.forms[sets]&&sets!="sex"){
          str = "您的信息不能为空";
          tis = false;
          break;
        }else if (sets!="sexi"&&this.forms[sets].length>=5&&this.forms[sets].length<18){
          if(!reg.test(this.forms[sets])&&sets!="nickname"){
            tis = true;
            continue;
          }else if (sets!="nickname"){
            str = "不能输入汉字";
            tis = false;
            break;
          }
        }else if (sets!="sexi"&&sets!="sex"){
          str = "您的信息长度超出或不足";
          tis = false;
          break;
        }
      }

      if (tis){
        this.mehsetadduser();
      }else {
        this.$message({
          message:str,
          type:"error"
        })
      }
    },
    mehsetadduser(){
      if (this.forms.sexi=="男") {
        this.forms.sex = 1;
      }else {
        this.forms.sex = 0;
      }
      setadduser(this.forms).then(res=>{
        if (res){
          this.$message({
            message:"注册成功，请登录",
            type:"success"
          })
        }else {
          this.$message({
            message:"注册失败，用户已经存在",
            type:"error"
          })
        }
      })
    },
    nones(){
      document.getElementsByClassName("register")[0].style.display="none";
    }
  }
}
</script>

<style scoped>

</style>
