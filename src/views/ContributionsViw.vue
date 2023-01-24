<template>
  <HeaderTop :top="4"/>
  <contributions/>
</template>

<script>
import contributions from "../components/contributions.vue";
import HeaderTop from "../components/header-top.vue";
export default {
  name: "ContributionsViw",
  components:{
    HeaderTop,
    contributions
  }
}
</script>

<style scoped>

</style>
