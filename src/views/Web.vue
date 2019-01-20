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

    checkNewsByUrl(){
      const params = {
        url: this.url,
      };

      this.axios.post('checknewsbyurl/', params, {
        headers: {
			    'content-type': 'application/json',
		    },
      })
      .then((response) => {
        this.isResult = true;
        this.result = response.data;
      });
    }
  }
};
</script>

<style>
</style>
