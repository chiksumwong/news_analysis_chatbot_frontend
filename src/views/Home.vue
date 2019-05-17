<template>

<div class="container">
  <br/>

   <el-row>
     <el-button type="primary" @click="chekcNews">Check News By Inputing News</el-button>
    <el-button type="success" @click="chekcNewsByUrl">Check News By Url</el-button>
  </el-row>
  <br/>

  <div class="card">
    <data-tables :data="data" :pagination-props="{ pageSizes: [5, 10, 15] }">
     <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.label">
     </el-table-column>
    </data-tables>
  </div>
  
</div>



 </template>

 <script>
 export default {
   data() {
     return {

       data: [{
            "content": "Water flood",
            "flow_no": "FW201601010001",
            "flow_type": "Repair",
            "flow_type_code": "repair",
            }, {
            "content": "Lock broken",
            "flow_no": "FW201601010002",
            "flow_type": "Repair",
            "flow_type_code": "repair",
            }, {
            "content": "Help to buy some drinks",
            "flow_no": "FW201601010003",
            "flow_type": "Help",
            "flow_type_code": "help"
        }],

       titles: [{
            prop: "flow_no",
            label: "NO."
            }, {
            prop: "content",
            label: "Content"
            }, {
            prop: "flow_type",
            label: "Type"
        }],
     }
   },
   methods: {
    chekcNews() {
      this.$router.push('/news')
    },
    chekcNewsByUrl(){
      this.$router.push('/web')
    }
    
  }
 }
 </script>

<style>

</style>
