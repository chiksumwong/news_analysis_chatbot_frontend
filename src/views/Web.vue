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

      {{result}}
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      result:"",
    };
  },
  methods: {

    onSubmit() {
      this.checkNewsByUrl();
    },

    checkNewsByUrl(){
      const params = {
        url: this.url,
      };
      this.axios.post('http://127.0.0.1:8000/api/checknewsbyurl/', {
        params
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
};
</script>

<style>
</style>
