<template>
  <Header />
  <center class="date-box">
    <label>Search Date</label>
    <br />
    <input required type="date" id="dateinput" v-model="date" />
    <br />
    <button type="submit" @click="submitDate">Show</button>
  </center>

  <!-- <div class="forloop"> -->
  <div class="date-detail">
    <div class="date-detail-item">
      <lable>Today's Date</lable>
      <h6>{{ data.date }}</h6>
    </div>
    <div class="date-detail-item">
      <lable>Budget</lable>
      <h6><i class="bx bx-rupee"></i>{{ data.budget }}</h6>
    </div>
    <div class="date-detail-item">
      <lable>Savings</lable>
      <h6><i class="bx bx-rupee"></i>{{ data.savings }}</h6>
    </div>
    <div class="date-detail-item">
      <lable>Expence</lable>
      <h6><i class="bx bx-rupee"></i>{{ data.expanse }}</h6>
    </div>
  </div>

  <center class="net-amount">
    Net amount:
    <h6><i class="bx bx-rupee"></i>{{ data.net_amount }}</h6>
  </center>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "DailyBudgetPage",
  components: { Header },
  data() {
    return {
      date: null,
      data: [],
    };
  },
  methods: {
    async submitDate() {
      try {
        let res = await axios.get(
          `http://172.20.10.13:8000/bucket/dashboard/${this.date}`,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("login-token")}`,
            },
          }
        );
        if (res.data.date == null) {
          alert("This Date Record Not Found!");
        } else {
          this.data = res.data;
        }
      } catch (e) {
        console.log(e);
        if (e.response.status == 501) {
          alert("First Enter Your Salary");
          this.$router.push("/save");
        }
      }
    },
  },
  async mounted() {
    let today = new Date().toISOString().slice(0, 10);
    try {
      let res = await axios.get(
        `http://172.20.10.13:8000/bucket/dashboard/${today}`,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("login-token")}`,
          },
        }
      );
      this.data = res.data;
    } catch (e) {
      if (e.response.status == 501) {
        alert("First Add Your Salary...");
        this.$router.push("/save");
      }
    }
  },
};
</script>
<style scoped>
center {
  margin-top: 2rem;
}
label,
input,
button {
  margin: 10px;
  font-size: 20px;
}
label {
  border-left: 2px solid;
  padding: 5px;
}
.date-detail {
  margin: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
.date-detail-item {
  font-size: 20px;
  margin: 10px;
  width: 130px;
  height: 58px;
  text-align: center;
}
.net-amount {
  font-size: 20px;
  margin: 1.5rem;
}
</style>