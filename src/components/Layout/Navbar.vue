<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-brand href="/">News Analysis Chatbot</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

        <!-- Right items -->
        <b-navbar-nav class="ml-auto">

          <!-- Login and register button -->
          <b-nav-form v-show="!isLogin">
            <b-button size="sm" variant="success" href="/login" class="mr-sm-2" @click="login">Login</b-button>
          </b-nav-form>
          <b-nav-form v-show="!isLogin">
            <b-button size="sm" variant="success" href="/register" class="my-2 my-sm-0" @click="register">Register
            </b-button>
          </b-nav-form>

          <!-- User -->
          <b-nav-item-dropdown right v-show="isLogin">
            <template slot="button-content" class="text-uppercase"><em>{{username}}</em></template>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>


  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    register() {
      this.$route.push('/register')
    },
    login() {
      this.$route.push('/login')
    },
    logout() {
      this.$store.dispatch('user/logout')
    },
  },
    computed: {
      isLogin() {
        return this.$store.state.user.status.isLogin
      },
      username() {
        return this.$store.state.user.username
      }
    }
};
</script>

<style>
</style>
