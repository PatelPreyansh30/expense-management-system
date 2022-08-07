<template>
  <Header />
  <center class="search">
    <input type="text" class="shadow" placeholder="Search..." v-model="item" />
    <i @click="searchQuery" class="shadow bx bx-search"></i>
  </center>

  <div class="flex">
    <div v-for="data in data" :key="data.id">
      <div class="rounded shadow basket-item" id="showBucket" @click="showBucket(data.date)">
        {{ data.date }}
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
import AddItems from "./AddItems.vue";

export default {
  name: "BasketPage",
  data() {
    return {
      data: [],
      item: null,
      date: null,
    };
  },
  methods: {
    searchQuery() {
      this.$router.push(`/search-result/${this.item}`);
    },
    showBucket(date) {
      this.$router.push(`/bucket-view/${date}`);
    },
  },
  async mounted() {
    try{
      let req = await axios.get("http://172.20.10.13:8000/bucket/get-dates/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("login-token")}`,
        },
      });
      if (req.status == 200) {
        this.data = req.data;
      }
    } catch(e){

      console.log(this.data)
      }    
      
    let today = new Date().toISOString().slice(0, 10);
    console.log(this.data);
    let haveDate = true
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i].date == today){
        haveDate = false
        break
      }
    }
    if(haveDate){
      console.log(haveDate)
      this.data.push({'date':today})
    }
    // this.isToday = today == this.todayDate;
  },
  name: "BasketPage",
  components: { Header, AddItems },
};
</script>

<style scoped>
i {
  font-size: 25px;
  padding: 5px;
  border: 1px solid;
  background-color: #dfe0ea;
  cursor: pointer;
}
.inputfield {
  border: 2px 2px 2px 0;
}
.search {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.basket-container {
  display: flex;
  justify-content: center;
  align-content: space-between;
}
.flex {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
}
.basket-item {
  text-align: center;
  padding: 18px;
  margin: 10px;
  height: 150px;
  width: 150px;
  background-color: #dfe0ea;
  cursor: pointer;
}
</style>
