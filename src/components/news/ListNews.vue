<template>
  <data-tables :data="data" :pagination-props="{ pageSizes: [5, 10, 15] }">
    <el-table-column
      v-for="title in titles"
      :prop="title.prop"
      :label="title.label"
      :key="title.label"
      :width="title.width"
      sortable
    ></el-table-column>
  </data-tables>
</template>

<script>
import NewsAPI from "@/api/News";

export default {
  data() {
    return {
      data: [],
      titles: [
        {
          prop: "id",
          label: "ID",
          width: "60"
        },
        {
          prop: "statement",
          label: "Statement",
          width: "1600"
        },
        {
          prop: "label",
          label: "Label",
          width: "80"
        },
        {
          prop: "last_modify_date",
          label: "Modify",
          width: "100"
        },
        {
          prop: "created",
          label: "Created",
          width: "100"
        }
      ]
    };
  },
  methods: {
    async loadNews() {
      const res = await NewsAPI.getAllNews();
      if (res.data) {
        console.log("load records success", res.data);

        this.data = res.data.results;
      } else {
        console.log("Fail", res.err);
      }
    }
  },
  mounted() {
    this.loadNews();
  }
};
</script>

<style>
</style>
