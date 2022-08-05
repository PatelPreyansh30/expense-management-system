<template>
  <Header />
  <table v-if="isData">
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in data" :key="data.id">
        <td>{{ data.item }}</td>
        <td>{{ data.price }}</td>
        <td>{{ data.date }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>No Data Found...</p>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "SearchResult",
  components: {
    Header,
  },
  data() {
    return {
      data: [],
      isData: true,
    };
  },
  async mounted() {
    let res = await axios.get(
      `http://172.20.10.13:8000/bucket/search/?item=${this.$route.params.data}`,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("login-token")}`,
        },
      }
    );
    this.data = res.data;
    if (res.data.length == 0) {
      this.isData = false;
    }
  },
};
</script>
