<template>
  <h1>SignUp Page</h1>
  <div>
    <input
      required
      type="text"
      placeholder="Enter Username"
      v-model="username"
    />
    <br /><br />
    <input required type="email" placeholder="Enter Email" v-model="email" />
    <br /><br />
    <input
      required
      type="password"
      placeholder="Enter Password"
      v-model="password"
    />
    <br /><br />
    <button @click="userSignup">Sign Up</button>
  </div>
  <br /><br />
  <router-link to="/login">Already registered ? Login Now</router-link>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      username: null,
      email: null,
      password: null,
    };
  },
  methods: {
    async userSignup() {
      let res = await axios.post("http://172.20.10.13:8000/user/register/", {
        email: this.email,
        password: this.password,
        username: this.username,
      });

      if (res.status == 201) {
        alert("Sign up successfully");
        this.$router.push("/login");
      } else {
        this.$router.push("/signup");
      }
    },
  },
  mounted() {
    let token = localStorage.getItem("login-token");
    if (token) {
      this.$router.push("/home");
    } else {
      this.$router.push("/signup");
    }
  },
};
</script>
