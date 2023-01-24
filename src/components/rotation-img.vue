<template>
  <div class="rotation-img">
    <div>
      <a id="rota" href="">
        <div class="heand-imgset">
        </div>
      </a>
      <ul>
        <li class="cliplas">
          <div class="homsimg">
            <img src="/src/assets/img/inde/img.png">
          </div>
          <div class="contributions">
            <div>
              <a href="/#/contributionsViw">

                <el-icon><Position /></el-icon>
                <br/>
                投稿

              </a>
            </div>
            <div class="sispli"><a href="">
              <el-icon><InfoFilled /></el-icon>
              <br/>
              关于我们
            </a></div>
          </div>
        </li>
        <li class="usersis">
            <div class="usersisfavor"><a href="#/information/UserInformation">
              <el-icon><User /></el-icon>
              <br/>
              <br/>
              我的信息
            </a>
          </div>
          <div class="usersisfavor"><a href="#/information/UserFavorites">
            <el-icon><Star /></el-icon>
            <br/>
            <br/>
            我的收藏
          </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import setimg from "../assets/js/heandes.js";
let nvs = setimg.vfdos();
export default {
  name: "rotation-img",
  mounted() {
    nvs();
  }
}
</script>

<style src="../assets/css/rotation-img.css">

</style>
