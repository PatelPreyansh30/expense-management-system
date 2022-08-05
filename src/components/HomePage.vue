<template>
    <Header />
  <div class="home-page">
    <div class="box">
      <div class="box-item">

      <router-link to="/save">Save</router-link>
      </div>
      <div class="box-item"> 
      <router-link to="/daily-budget">Daily Budget</router-link>
      </div>
      <div class="box-item">
      <router-link to="/basket">Basket</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: { Header },
  // mounted() {
  //   let token = localStorage.getItem("login-token");
  //   if (!token) {
  //     this.$router.push("/login");
  //   } else {
  //     this.$router.push("/home");
  //   }
  // },
};
</script>
<style scoped>

.home-page {
   display: flex;
   height: 300px;
align-items: center;
justify-content: center;
background-color: #f8f9ff;
}
.box{
  margin: auto;
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.box-item{
  background-color: #DFE0EA;
    text-align: center;
    line-height: 110px;
    padding: 12px;
    margin: 12px;
    height: 150px;
    width: 150px;
    cursor: pointer;
}

  a{
    /* background-color: blue; */
    text-decoration: none;
    color: #000000;
    margin: 12px;
    height: 30px;
    width: 120px;
  }
</style>