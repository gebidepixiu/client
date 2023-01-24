<template>

  <div class="herdertops">
    <h2><span>{{ forms.nickname }}</span></h2>
  </div>
  <div class="homebottom">
    <form>
      <ul>
        <li>账号:<el-input disabled v-model="forms.account"/></li>
        <li>昵称:<el-input v-model="forms.nickname"/></li>
        <li>性别:
          <el-radio-group v-model="forms.sexi" class="ml-4">
            <el-radio-button label="男" />
            <el-radio-button label="女" />
          </el-radio-group>
        </li>
        <li>密码:<el-input v-model="forms.password"/></li>
        <li>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </li>
      </ul>
    </form>
    <div class="upload">
      <el-upload
          class="upload-demo"
          drag
          :data="namesid"
          name="multimg"
          action="http://localhost:8080/users/sethamimg"
          multiple
          :on-success="imgsuccess"
          :before-upload="beforeAvatarUpload"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          上传头像 <em>点击/拖拽</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            头像上传 jpg/png 500kb
          </div>
        </template>
      </el-upload>
    </div>
  </div></template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";
import { ElMessage } from 'element-plus'
import {getalluserins, setadduser, setalluserins} from "../../api/index.js";
import {useRoute, useRouter} from "vue-router";
export default {
  name: "UserInformation",
  setup(){
    const forms = ref({
      account:"",
      nickname:"",
      sexi:"",
      sex:0,
      password:""
    })
    const namesid = ref({"namesid":useStore().getters.username})
    const imgsuccess = (file,files)=>{
      if (file){
        ElMessage({
          message:"头像上传成功,请刷新页面已查看新头像",
          type:"success"
        })
      }else {
        ElMessage({
          message:"头像上传失败",
          type:"error"
        })
      }
    }
    const beforeAvatarUpload = (file)=>{
      console.log(file)
      if (file.type !== 'image/jpeg'&&file.type !=="image/png") {
        ElMessage.error('请上传正确的文件格式')
        return false
      } else if (file.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
      }
      return true
    }
    return{
      namesid,imgsuccess,beforeAvatarUpload,forms
    }
  },
  mounted() {
    this.getalluser()
  },
  computed:{

  },
  methods:{
    onSubmit(){
      let tis = false;
      let reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
      let str = "";
      for (let sets in this.forms) {
        if (!this.forms[sets]&&sets!="sex"){
          console.log(sets)
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
        }else if (sets!="sexi"&&sets!="sex"&&sets!="account"){
          console.log(sets)
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
      setalluserins(this.forms).then(res=>{
        if (res){
          this.$message({
            message:"信息修改成功",
            type:"success"
          })

        }else {
          this.$message({
            message:"修改失败，请联系管理员",
            type:"error"
          })
        }
      })
    },


    getalluser(){
      getalluserins({"account":this.$store.getters.username}).then(res=>{
        console.log(res)
        this.forms.account = res.account;
        this.forms.nickname = res.nickname;
        this.forms.password = res.password;
        this.forms.sex = res.sex;
        if (this.forms.sex==0){
          this.forms.sexi = "女"
        }else {
          this.forms.sexi = "男"
        }
      })
    }
  }
}
</script>
