<template>
  <Header />
  <center>
    <span>{{ msg }}</span>
    <label for="salary">Update your monthly salary</label>
    <br />
    <input
      required
      id="salary"
      type="text"
      placeholder="Enter your salary"
      v-model="updatedSalary"
    />
    <br />
    <button @click="updateSalary" type="submit">Update</button>
    <div id="msg"></div>
  </center>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "UpdateSalary",
  props: {
    msg: String,
  },
  components: {
    Header,
  },
  data() {
    return {
      updatedSalary: null,
    };
  },
  methods: {
    async updateSalary() {
      let res = await axios.patch(
        `http://172.20.10.13:8000/user/userdata/${this.$route.params.id}`,
        {
          salary: this.updatedSalary,
          user: localStorage.getItem("login-userid"),
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("login-token")}`,
          },
        }
      );
      //   console.log(res.data.salary)
      if (res.status == 200) {
        document.getElementById("salary").value = "";
        document
          .getElementById("salary")
          .setAttribute("placeholder", "Current Salary: " + res.data.salary);
        document.getElementById("msg").innerHTML = "Successfully Updated!!";
      }
    },
  },
  mounted() {
    document
      .getElementById("salary")
      .setAttribute(
        "placeholder",
        "Current Salary: " + this.$route.params.salary
      );
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
</style>
