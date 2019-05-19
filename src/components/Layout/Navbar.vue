<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-brand href="/" v-show="!isLogin">News Analysis Chatbot</b-navbar-brand>

    <b-navbar-brand href="/" v-show="isAdmin">News Analysis Chatbot Dashboard</b-navbar-brand>

    <b-navbar-brand href="/" v-show="!isAdmin && isLogin">News Analysis Chatbot</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <!-- Right items -->
        <b-navbar-nav class="ml-auto">

          <!-- Login and register button -->
          <b-nav-form v-show="!isLogin">
            <b-button size="sm" variant="success" href="/login" class="mr-sm-2" @click="login">Login</b-button>
          </b-nav-form>

          <b-nav-form v-show="!isLogin">
            <b-button size="sm" variant="success" href="/volunteer" class="my-2 my-sm-0" @click="register">Volunteer Register
            </b-button>
          </b-nav-form>

          <!-- <b-nav-item-dropdown text="Record of News Analysis" right v-show="isLogin">
            <b-dropdown-item href="#">List</b-dropdown-item>
            <b-dropdown-item href="#">Create</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown text="News" right v-show="isLogin">
            <b-dropdown-item href="/news">List</b-dropdown-item>
            <b-dropdown-item href="/news/none">Not Label</b-dropdown-item>
            <b-dropdown-item href="/news/true">Real News</b-dropdown-item>
            <b-dropdown-item href="/news/false">Fake News</b-dropdown-item>
            <b-dropdown-item href="/news/create">Create</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" right v-show="isAdmin">
            <b-dropdown-item href="/user/create">Create</b-dropdown-item>
          </b-nav-item-dropdown>

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
    toDashboard() {
      this.$router.push('/dashboard')
    },
    register() {
      this.$router.push('/register')
    },
    login() {
      this.$router.push('/login')
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
      },
      isAdmin() {
        return this.$store.state.user.isAdmin
      },
    }
};
</script>

<style>
</style>
