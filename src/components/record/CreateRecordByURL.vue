<template>
  <div class="container">
    <br>
    <b-card>
      <b-input-group prepend="Website">
        <b-form-input v-model="url"></b-form-input>
        <b-input-group-append>
          <b-btn variant="info" @click="onSubmit">Submit</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-card>

    <b-card v-if="isResult">
      {{result}}
    </b-card>
  </div>
</template>

<script>
import NewsAPI from "@/api/News";

export default {
  data() {
    return {
      url: "",
      result:"",
      isResult: false,
    };
  },

  methods: {

    onSubmit() {
      this.checkNewsByUrl();
    },

    async checkNewsByUrl(){
      const payload = {
        url: this.url,
      };

      const res = await NewsAPI.checkNewsByUrl(payload);

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
