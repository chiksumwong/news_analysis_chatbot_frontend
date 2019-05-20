<template>
  <b-card>
    <data-tables :data="data" :pagination-props="{ pageSizes: [5, 10, 15] }">
      <el-table-column
        v-for="title in titles"
        :prop="title.prop"
        :label="title.label"
        :key="title.label"
        :width="title.width"
        sortable
      ></el-table-column>

      <el-table-column label="Label">
        <template slot-scope="scope">
          <el-button type="success" @click="updateNews(scope.row, 'True')">True</el-button>
          <el-button type="info" @click="updateNews(scope.row, 'False')">False</el-button>
        </template>
      </el-table-column>

      <el-table-column label="Actions" v-if="isAdmin">
        <template slot-scope="scope">
          <el-button type="danger" @click="deleteNews(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </data-tables>
  </b-card>
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
          width: "1300"
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

        let filter = res.data.results.filter(function(item, index, array) {
          return item.label === "None";
        });

        this.data = filter;
      } else {
        console.log("Fail", res.err);
      }
    },
    async updateNews(row, input_lable) {
      let news_id = row.id;
      let input_statement = row.statement;

      const payload = {
        statement: input_statement,
        label: input_lable
      };

      const res = await NewsAPI.updateNewsById(news_id, payload);
      if (res.data) {
        console.log("update news success", res.data);

        this.$notice.success({
          title: "News Updated"
        });

        this.loadNews();
      } else {
        console.log("Fail", res.err);
      }
    },
    async deleteNews(row) {
      console.log("delete row", row);
      let id = row.id;
      const res = await NewsAPI.deleteNewsById(id);
      // notification
      this.$notice.success({
        title: "Delete Success",
        description: "News is deleted!"
      });
      this.loadNews();
    }
  },
  mounted() {
    this.loadNews();
  },
  computed: {
    isAdmin() {
      return this.$store.state.user.isAdmin;
    }
  }
};
</script>

<style>
</style>
