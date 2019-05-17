<template>
  <div class="container">
    <br/>
    <b-card>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <!-- Title -->
        <b-form-group id="inputGroup1" label="Title" label-for="input1">
          <b-form-input id="exampleInput1" v-model="form.title" required placeholder="Enter title"></b-form-input>
        </b-form-group>

        <!-- Text -->
        <b-form-group id="inputGroup2" label="Text" label-for="textarea1">
          <b-form-textarea
            id="textarea1"
            v-model="form.text"
            placeholder="Enter text"
            :rows="28"
            :max-rows="100"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
    <br/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        text: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.title = "";
      this.form.text = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
</style>
