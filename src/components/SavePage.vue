<template>
  <Header />
  <center>
    <label for="salary">Enter your monthly salary</label>
    <br />
    <input
      required
      id="salary"
      type="text"
      placeholder="Enter your salary"
      v-model="salary"
    />
    <br />
    <button @click="saveAdd" type="submit">Save</button>
  </center>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "SavePage",
  data() {
    return {
      salary: null,
    };
  },
  methods: {
    async saveAdd() {
      let res = await axios.post(
        "http://172.20.10.13:8000/user/userdata/",
        {
          user: localStorage.getItem("login-userid"),
          salary: this.salary,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("login-token")}`,
          },
        }
      );
      if (res.status == 201) {
        alert("Salaray Added, Thank You!");
        this.$router.push("/home");
      } else {
        alert("Error in adding salary...");
      }
    },
  },
  async mounted(){
    try{
      let res = await axios.get("http://172.20.10.13:8000/user/userdata/",{
        headers:{
          Authorization:`Token ${localStorage.getItem('login-token')}`
        }
      })
      // console.log(res)
      if(res.status==200){
        this.$router.push(`/update-salary/${res.data[0].id}/${res.data[0].salary}`)
      }
    }
    catch(e){
      console.log(e)
    }
  },
  components: {
    Header,
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
