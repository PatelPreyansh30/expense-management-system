<template>
  <Header />
  <div class="main-container">
    <center>
      <h5>Date: {{ date }}</h5>
      <input
        v-if="isToday"
        type="text"
        v-model="item"
        placeholder="Enter item"
      />
      <br />
      <input
        type="text"
        v-if="isToday"
        v-model="price"
        placeholder="Enter Price"
      />
      <br />
      <button type="button" v-if="isToday" @click="saveBasket">
        Save Basket
      </button>
    </center>

    <center>
      <table v-if="getdata.length != 0" class="rounded shadow">
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th v-if="isToday">Delete</th>
        </tr>

        <tr v-for="data in getdata" :key="data.id">
          <td>{{ data.item }}</td>
          <td>{{ data.price }}</td>
          <td>
            <!-- <button v-if="isToday" id="updateItem" @click="updateItem">Update</button> -->
            <button
              v-if="isToday"
              id="deleteItem"
              @click="deleteItem(data.id, data.date)"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
      <div v-else>No Data Found!!</div>
    </center>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "AddItems",
  components: {
    Header,
  },
  methods: {
    async saveBasket() {
      try {
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
          // console.log(req);
        } else {
          alert("Try Again...");
        }
      } catch (e) {
        // console.log(e.response)
        if (e.response.status == 501) {
          alert("First add your salary...");
          this.$router.push("/save");
        }
        if (e.response.status == 403) {
          alert("Your monthly expense limit exceed!");
        }
      }
      this.$router.go();
    },
    async updateItem() {
      let res = await axios.put("");
    },
    async deleteItem(id, date) {
      try {
        let res = await axios.delete(
          `http://172.20.10.13:8000/bucket/item/${id}`,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("login-token")}`,
            },
          }
        );
        if (res.status == 204) {
          alert("Your item deleted successfully");
          this.$router.go();
        }
      } catch (e) {
        if (e.response.status == 403) {
        }
      }
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
    try {
      let res = await axios.get(
        `http://172.20.10.13:8000/bucket/filter/${this.date}`,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("login-token")}`,
          },
        }
      );
      this.getdata = res.data;
    } catch (e) {
      console.log(e.message);
    }

    let today = new Date().toISOString().slice(0, 10);

    this.isToday = today == this.date;
  },
};
</script>

<style scoped>
center {
  padding: 20px;
}
button,
input {
  padding: 5px;
  margin: 5px;
}
table,
th,
td {
  border: 1px solid;
  text-align: center;
  padding: 15px;
}
table {
  border-radius: 5px;
}
th{
  background-color: #DFE0EA;
}
</style>