<template>
  <router-view></router-view>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  mounted() {
    let token = localStorage.getItem("login-token");
    if (token) {
      this.$router.push("/home");
    } else {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  display: block;
}
</style>
