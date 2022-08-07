<template>
  <Header />
  <center>
    <div class="box">
      <div class="box-item shadow rounded">
        <router-link to="/save"><span>Save</span></router-link>
      </div>
      <div class="box-item shadow rounded">
        <router-link to="/daily-budget"><span>Daily Budget</span></router-link>
      </div>
      <div class="box-item shadow rounded">
        <router-link to="/basket"><span>Basket</span></router-link>
      </div>
    </div>
  </center>
</template>

<script>
import Header from "./Header.vue";
// import axios from "axios";

export default {
  name: "HomePage",
  components: { Header },
  mounted() {
    let token = localStorage.getItem("login-token");
    if (!token) {
      this.$router.push("/login");
    } else {
      this.$router.push("/home");
    }
  },
};
</script>
<style scoped>
.box {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.box-item {
  background-color: #dfe0ea;
  margin: 10px;
  flex-wrap: wrap;
  text-align: center;
  height: 150px;
  width: 150px;
  cursor: pointer;
}
.box-item:hover{
  transform: scale(1.1);
  transition: 0.5s;
}
.box-item a span {
  position: relative;
  top: 40%;
  font-size: 20px;
}
a {
  /* background-color: blue; */
  text-decoration: none;
  color: #000000;
}

/* @media (max-width:550px) {
  .box{
    display: grid;
    grid-template-rows: auto auto auto;
  }
} */
</style>