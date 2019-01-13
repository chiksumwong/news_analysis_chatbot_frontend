<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">News Analysis Chatbot</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <!-- Search -->
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">CN</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-btn variant="primary" @click="login()" v-if="isLogin==false">Sign In</b-btn>

        <b-nav-item-dropdown right v-else>
          <!-- Using button-content slot -->     
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout()">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    data(){
        return{
            isLogin: false
        }
    },
    methods: {
    login() {
      this.isLogin = true
    },
    logout() {
      this.isLogin = false
    }
  }
};
</script>

<style>
</style>
