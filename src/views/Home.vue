<template>
  <div>
    <br>
    <el-row>
      <el-button type="primary" @click="chekcNews">Check News by Text</el-button>
      <el-button type="success" @click="chekcNewsByUrl">Check News by URL</el-button>
    </el-row>
    <br>
    <listReocrd/>
  </div>
</template>

 <script>
import listReocrd from "@/components/record/ListRecord";

export default {
  methods: {
    chekcNews() {
      this.$router.push("/news/text");
    },
    chekcNewsByUrl() {
      this.$router.push("/news/url");
    }
  },
  components: {
    listReocrd
  }
};
</script>

<style>
</style>
