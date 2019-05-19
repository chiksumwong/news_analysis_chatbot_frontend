<template>
  <b-card>
    <data-tables
      :data="data"
      :pagination-props="{ pageSizes: [5, 10, 15] }"
      :action-col="actionCol"
    >
      <el-table-column
        v-for="title in titles"
        :prop="title.prop"
        :label="title.label"
        :key="title.label"
        :width="title.width"
        sortable
      ></el-table-column>
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
          width: "1400"
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
      ],
      actionCol: {
        label: "Label",
        props: {
          align: "center"
        },

        buttons: [
          {
            props: {
              type: "success"
            },
            handler: row => {
              console.log(row)
              this.updateNews(row.id, row.statement, "True")
            },
            label: "True"
          },
          {
            props: {
              type: "danger"
            },
            handler: row => {
              this.updateNews(row.id, row.statement, "False")
            },
            label: "False"
          }
        ]
      }
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
    async updateNews(news_id, input_statement, input_lable) {
      const payload = {
        statement: input_statement,
        label: input_lable
      };

      const res = await NewsAPI.updateNewsById(news_id, payload);
      if (res.data) {
        console.log("update news success", res.data);

        this.$notice.success({
            title: 'News Updated',
        })
        
        this.loadNews();
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
