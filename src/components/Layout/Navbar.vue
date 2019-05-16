<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-brand href="/">News Analysis Chatbot</b-navbar-brand>

  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    }
  }
};
</script>

<style>
</style>
