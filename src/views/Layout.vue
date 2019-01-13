<template>
  <div class="layout">
    <Navbar/>
    <Content/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Layout/Navbar";
import Content from "@/components/Layout/Content";

export default {
  name: "layout",
  components: {
    Navbar,
    Content
  }
};
</script>
