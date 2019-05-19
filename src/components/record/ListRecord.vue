<template>
    <div class="card">
      <data-tables :data="data" :pagination-props="{ pageSizes: [5, 10, 15] }" >
        <el-table-column
          v-for="title in titles"
          :prop="title.prop"
          :label="title.label"
          :key="title.label"
          :width="title.width"
          sortable
        ></el-table-column>
      </data-tables>
    </div>
</template>

<script>
import RecordAPI from "@/api/Record";

export default {
  data() {
    return {
      data: [],
      titles: [
        {
          prop: "channel",
          label: "Channel",
          width: "100"
        },
        {
          prop: "text",
          label: "Text",
          width: "800"
        },
        {
          prop: "result",
          label: "Result",
          width: "80"
        },
        {
          prop: "probability",
          label: "Probability",
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
    async loadRecords() {
      const res = await RecordAPI.getAllRecords();
      if (res.data) {
        console.log("load records success", res.data);

        this.data = res.data.results;
      } else {
        console.log("Fail", res.err);
      }
    }
  },
  mounted() {
    this.loadRecords();
  }
};
</script>

<style>

</style>
