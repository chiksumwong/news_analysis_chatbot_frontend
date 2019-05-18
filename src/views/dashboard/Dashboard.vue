<template>
<div>
  <el-row>
    <el-col :span="3">
      <Menu/>
    </el-col>

    <el-col :span="21">
      <router-view></router-view>
    </el-col>
    </el-row>
    <Footer/>
</div>
  
  
</template>

<script>
import Menu from "@/components/dashboard/Menu.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Menu,
    Footer
  }
};
</script>

<style>
</style>
