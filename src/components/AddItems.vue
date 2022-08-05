<template>
  <Header />
  <div class="main-container">
    <h3>{{ date }}</h3>

    <input v-if="isToday" type="text" v-model="item" placeholder="Enter item" />
    <input
      type="text"
      v-if="isToday"
      v-model="price"
      placeholder="Enter Price"
    />
    <button type="button" v-if="isToday" @click="saveBasket">
      Save Basket
    </button>

    <table>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th v-if="isToday">Update</th>
      </tr>

      <tr v-for="data in getdata" :key="data.id">
        <td>{{ data.item }}</td>
        <td>{{ data.price }}</td>
        <td>
          <button v-if="isToday" id="updateItem" @click="updateItem">
            Update
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "AddItems",
  components:{
    Header,
  },
  methods: {
    async saveBasket() {
      let res = await axios.post(
        "http://172.20.10.13:8000/bucket/item/",
        {
          item: this.item,
          price: this.price,
          user: `${localStorage.getItem("login-userid")}`,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("login-token")}`,
          },
        }
      );
      if (res.status == 201) {
        alert("Data Saved...");
        let req = await axios.get(
          "http://172.20.10.13:8000/bucket/get-dates/",
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("login-token")}`,
            },
          }
        );
        this.getdata = [
          {
            item: res.data.item,
            item: res.data.price,
          },
        ];
        console.log(req);
      } else {
        alert("Try Again...");
      }
    },
    async updateItem() {
      let res = await axios.put("");
    },
  },
  data() {
    return {
      item: null,
      price: null,
      getdata: [],
      date: null,
      isToday: false,
    };
  },
  async mounted() {
    this.date = this.$route.params.date;
    let res = await axios.get(
      `http://172.20.10.13:8000/bucket/filter/${this.date}`,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("login-token")}`,
        },
      }
    );
    this.getdata = res.data;

    let today = new Date().toISOString().slice(0, 10);

    this.isToday = today == this.date;
  },
};
</script>
