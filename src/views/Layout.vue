<template>
  <div class="layout">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export default {
  name: "layout",
  components: {
    Navbar,
    Footer
  }
};
</script>
