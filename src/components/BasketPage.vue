<template>
  <Header />
  <div class="container"></div>
  <div class="search">
    <input type="text" placeholder="Search.." v-model="item" />
    <i @click="searchQuery" class="bx bx-search"></i>
  </div>
  <div class="flex">
    <div class="" v-for="data in data" :key="data.id">
      <div class="basket-item" id="showBucket" @click="showBucket(data.date)">{{ data.date }}</div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios"
import AddItems from "./AddItems.vue";

export default {
  name: "BasketPage",
  data() {
    return {
      data: [],
      item: null,
      date : null
    };
  },
  methods: {
    searchQuery() {
        this.$router.push(`/search-result/${this.item}`)
    },
    showBucket(date){
        this.$router.push(`/bucket-view/${date}`)
    }
  },
  async mounted() {
    let req = await axios.get("http://172.20.10.13:8000/bucket/get-dates/", {
      headers: {
        Authorization: `Token ${localStorage.getItem("login-token")}`,
      },
    });
    if(req.status==200){
        this.data = req.data;
    }
  },
  name: "BasketPage",
  components: { Header, AddItems },
};
</script>

<style scoped>
.basket-container {
  display: flex;
  justify-content: center;
  align-content: space-between;
}
.flex {
    display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
}
.basket-item {
  padding: 20px;
  height: 150px;
  width: 150px;
  background-color: #DFE0EA;
  cursor: pointer;
}
</style>
