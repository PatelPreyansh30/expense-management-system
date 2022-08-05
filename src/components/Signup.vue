<template>
<center>

  <h1>SignUp Page</h1>
  <div class="signup">

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
  <div class="login">
    <router-link to="/login">Already registered ? Login Now</router-link>

  </div>
</center>
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
<style scoped>
center {
  margin-top: 10rem;
}
center h1{
  margin-bottom: 50px;
}
 .signup input{
  display:flex;
  align-items:center;
  justify-content: center;
}
.signup button{
   background-color: blue;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  border-radius: 15px;
}
.login{
  margin-top: 30px;
}
.login a {
  
  text-decoration: none;
}
</style>