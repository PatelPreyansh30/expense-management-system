<template>
  <h1>Login Page</h1>
  <div>
    <input
      required
      type="text"
      placeholder="Enter Username"
      v-model="username"
    />
    <br /><br />
    <input
      required
      type="password"
      placeholder="Enter Password"
      v-model="password"
    />
    <br /><br />
    <button @click="userlogin">Login</button>
  </div>
  <br /><br />
  <router-link to="/signup">Not our user ? Sign Up</router-link>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async loginAPI() {},
    async userlogin() {
      let res = await axios.post("http://172.20.10.13:8000/user/login/", {
        password: this.password,
        username: this.username,
      });

      if (res.status == 200) {
        alert("Login successfully");
        localStorage.setItem("login-token", res.data.token);
        localStorage.setItem("login-userid", res.data.user_id);
        // localStorage.setItem('login-email',res.data.email)
        localStorage.setItem("login-username", res.data.username);
        this.$router.push("/home");
      } else {
        this.$router.push("/login");
      }
    },
  },
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
