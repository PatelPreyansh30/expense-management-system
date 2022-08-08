<template>
  <center>
    <h1>SignUp Page</h1>
    <div class="login">
      <div class="password-show">
        <input required type="text" placeholder="Enter Username" v-model="username" />
        <br /><br />
        <input required type="email" placeholder="Enter Email" v-model="email" />
        <br /><br />
        <div class="password">
        <input id="password" required type="password" placeholder="Enter Password" v-model="password" />
        <i class="fa fa-eye" id="eye-icon" @click="showPassword" aria-hidden="true"></i>
        </div>
      </div>
      <br /><br />
      <button @click="userSignup">Signup</button>
    </div>
    <div class="register">
      <router-link to="/login">Already Registered ? Login Now</router-link>
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
      password_toggle: false,
    };
  },
  methods: {
    showPassword() {
      if (this.password_toggle) {
        document.getElementById('password').setAttribute('type', 'password')
        document.getElementById('eye-icon').classList.remove("fa-eye-slash")
        document.getElementById('eye-icon').classList.add("fa-eye")
        this.password_toggle = false
      }
      else {
        document.getElementById('password').setAttribute('type', 'text')
        document.getElementById('eye-icon').classList.add("fa-eye-slash")
        document.getElementById('eye-icon').classList.remove("fa-eye")
        this.password_toggle = true
      }
    },
    async userSignup() {
      try {
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
      }
      catch (e) {
        let err = e.response.data
        if (err.username) {
          alert(err.username)
        }
        else if (err.email) {
          alert(err.email)
        }
        else if (err.password) {
          alert(err.password)
        }
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
  margin-top: 3rem;
}

center h1 {
  margin-bottom: 2.5rem;
}

input {
  width: 30%;
  padding: 5px;
}
#password{
  width: 26.5%;
}

.password{
  display: flex;
  justify-content: center;
}

i{
  border-top: 1.5px solid #767676;
  border-right: 1.5px solid #767676;
  border-bottom: 1.5px solid #767676;
  border-radius: 2px 2px 2px;
  padding: 7.5px;
  font-size: 20px;
}

.login button {
  background-color: blue;
  color: white;
  padding: 14px 20px;
  border: none;
  cursor: pointer;
  width: 30%;
  border-radius: 15px;
}

.register {
  margin-top: 30px;
}

.register a {
  text-decoration: none;
}
</style>