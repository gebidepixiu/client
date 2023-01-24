<template>
  <div  :class="[vibs ? cons1 : '', cons]" @click="Collection()">
    <el-icon><Star /></el-icon>
  </div>
</template>

<script>
import {setCollection, getCollection, remCollection} from "../../api/index.js";
import {ref} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";

export default {
  name: "CollectionCon",
  props:{
    com:""
  },
  setup(props){
    const vibs = ref(true);
    const cons = 'collections'
    const cons1 = 'collectionsis'
    return{
      props,vibs,cons,cons1
    }
  },
  mounted() {
    this.getcoll()
  },
  methods:{
    getcoll(){
      (async ()=>{
          this.vibs = (await getCollection({
            usaccount: this.$store.getters.username,
            comicid: this.$props.com
          }))
    })();
    },

    Collection(){
      if (!this.$store.getters.username){
        this.$message({
          message:"请先登录",
          type:"warning"
        })
      }else {
        setCollection({
          usaccount: this.$store.getters.username,
          comicid: this.$props.com
        }).then(ref=>{
          if (ref){
            this.$message({
              message:"收藏成功",
              type:"success"
            })
          }else {
            ElMessageBox.confirm(
                '要将这边漫画移出收藏吗?',
                '取消收藏',
                {
                  confirmButtonText: '没错',
                  cancelButtonText: '算了',
                  type: 'warning',
                }
            )
                .then(() => {
                  remCollection({
                    usaccount: this.$store.getters.username,
                    comicid: this.$props.com
                  }).then(res=>{
                    if (res){
                      ElMessage({
                        type: 'success',
                        message: '漫画已移出收藏',
                      })
                      setTimeout(()=>{
                        this.$router.go(0);
                      },1500)
                    }else {
                      ElMessage({
                        type: 'info',
                        message: '取消操作',
                      })
                    }
                  })

                })
                .catch(() => {
                  ElMessage({
                    type: 'info',
                    message: '取消操作',
                  })
                })
          }
        });
      }
    }
  }
}
</script>

<style scoped>

</style>
