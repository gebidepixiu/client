<template>
  <div class="content information">

    <div class="herdertop">

      <router-link to="UserInformation">
        <el-button type="primary"><el-icon><Avatar /></el-icon>
        个人信息
      </el-button>
      </router-link>
      <router-link to="UserFavorites">
      <el-button type="primary"><el-icon><Star /></el-icon>收藏</el-button>
      </router-link>
      <el-button @click="remove()" type="primary"><el-icon><Goods /></el-icon>注销登录</el-button>
      <div class="userheader">
          <img :src=imgst>
      </div>

    </div>

    <div class="herderbottom">
    <router-view></router-view>
  </div>

  </div>
</template>

<script>
import 'element-plus/es/components/button/style/css'
import Order from "./information/Order.vue";
import UserFavorites from "./information/UserFavorites.vue";
import UserInformation from "./information/UserInformation.vue";
import {ref, watch} from "vue";
import {useStore} from "vuex";
import {ElMessage, ElMessageBox} from "element-plus";
export default {
  name: "information",
  components:{
    Order,
    UserFavorites,
    UserInformation
  },
  setup(){
    const imgst = ref("http://localhost:8080/users/getaheadportrait?id="+useStore().getters.username)
    return{
      imgst
    }
  },
  mounted() {
  this.getuser();
  },
  methods: {
    getuser() {
      if (!this.$store.getters.username) {
        this.$message({
          message: "您未登录或您的登录信息出错，请重新登录",
          type: "warning"
        })
        setTimeout(() => {
          this.$router.push("/");
        }, 1500)
      }
    },

    remove() {
      ElMessageBox.confirm(
          '确定要退出登录吗?',
          'Warning',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }
      )
          .then(() => {
            window.sessionStorage.removeItem("username");
            ElMessage({
              type: 'success',
              message: '退出登录成功',
            })
            setTimeout(() => {
              this.$router.go(0);
            }, 1500)
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '退出登录失败 请重试或者联系管理员',
            })
          })
    }
  }
}
</script>

<style scoped src="../assets/css/information.css">

</style>
