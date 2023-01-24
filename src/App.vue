<template>
  <div id="index">
    <div class="hean-uot">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerTop from "./components/header-top.vue";
export default {
  name: 'App',
  components:{
    headerTop
  }
}
</script>
<style>

</style>
