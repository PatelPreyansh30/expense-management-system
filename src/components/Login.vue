<template>
  <center>
    <h1>Login Page</h1>
    <div class="login">
      <input required type="text" placeholder="Enter Username" v-model="username" />
      <br /><br />
      <input required type="password" placeholder="Enter Password" v-model="password" />
      <br /><br />
      <button @click="userlogin">Login</button>
    </div>
    <div class="register">
      <router-link to="/signup">Not our user ? Sign Up</router-link>
    </div>
  </center>

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
    async loginAPI() { },
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
<style scoped>
center {
  margin-top: 10rem;
}
center h1{
  margin-bottom: 50px;
}
 .login input{
  display:flex;
  align-items:center;
  justify-content: center;
}
.login button{
   background-color: blue;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width:30%;
  border-radius: 15px;
}
.register{
  margin-top: 30px;
}
.register a {
  
  text-decoration: none;
}
</style>