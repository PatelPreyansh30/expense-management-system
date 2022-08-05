<template>
  <Header />
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Logout",
  components: {
    Header,
  },
  mounted() {
    if (confirm("Are you sure ?")) {
      localStorage.removeItem("login-token");
      this.$router.push("/login");
    } else {
      alert("Logout Failed...");
      this.$router.push("/home");
    }
  },
};
</script>
