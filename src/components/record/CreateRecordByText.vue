<template>
  <div class="container">
    <br>
    <b-card title="Input the text of news for analysis">
      <el-input type="textarea" v-model="text" placeholder="Enter text" rows="28" required></el-input>
      <br>
      <br>
      <b-button variant="success" @click="onSubmit">Submit</b-button>
      <b-button variant="danger" @click="onReset">Reset</b-button>
    </b-card>
    <b-card v-show="isResult">
      <p>{{result}}</p>
    </b-card>
    <br>
  </div>
</template>

<script>
import NewsAPI from "@/api/News";

export default {
  data() {
    return {
      text: "",
      result:"true",
      isResult: false
    };
  },
  methods: {
    onSubmit(evt) {
      this.checkNewsByText();
    },
    onReset(evt) {
      this.text = ""
    },
    async checkNewsByText(){
      const payload = {
        text: this.text
      };

      const res = await NewsAPI.checkNewsByText(payload);

      if (res.data){
        this.isResult = true;
        this.result = res.data;
      }
    }
  }
};
</script>

<style>
</style>
