<template>
  <div class="container">
    <br>
    <b-card>
      <!-- Text -->
      <b-form>
        <b-form-group id="inputGroup2" label="Statement">
          <b-form-textarea
            v-model="statement"
            placeholder="Enter text"
            :rows="28"
            :max-rows="100"
            required
          ></b-form-textarea>
        </b-form-group>

        <!-- label -->
        <b-form-group label="Label:">
          <b-form-select v-model="label" :options="label_option" required></b-form-select>
        </b-form-group>

        <b-button variant="primary" @click="onSubmit">Submit</b-button>
        <b-button variant="danger" @click="onReset">Reset</b-button>
      </b-form>
    </b-card>
    <br>
  </div>
</template>

<script>
import NewsAPI from "@/api/News";

export default {
  data() {
    return {
      statement: "",
      label: "",
      label_option: [
        { text: "Real News", value: "True" },
        { text: "Fake News", value: "False" },
        { text: "Connot Identify", value: "None" }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.createNews();
    },
    onReset() {
      this.statement = "";
      this.label = "";
    },
    async createNews() {

      const payload = {
        statement: this.statement,
        label: this.label
      };

      const res = await NewsAPI.createNews(payload);
      if (res.data) {
        console.log("create news success", res.data);

        this.$notice.success({
            title: 'News Created',
        })

        this.onReset();
      } else {
        console.log("Fail", res.err);
      }
    }
  }
};
</script>

<style>
</style>
