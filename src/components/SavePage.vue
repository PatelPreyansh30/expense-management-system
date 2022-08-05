<template>
    <Header />
    <div>
        <label>Enter your monthly salary</label> <br />
        <br />
        <input type="text" placeholder="Enter your salary" v-model="salary" />
        <br />
        <br />
        <button @click="saveAdd" type="submit">Save</button>
    </div>
    
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
            let res = await axios.post("http://172.20.10.13:8000/user/userdata/", {
                "user": localStorage.getItem('login-userid'),
                "salary": this.salary
            },
                {
                    headers: {
                        Authorization: `Token ${localStorage.getItem('login-token')}`
                    }
                }
            );
            if (res.status == 201) {
                alert("Salaray Added, Thank You!")
                this.$router.push('/home')
            }
            else {
                alert("Error in adding salary...")
            }
        },
    },
    components: { Header },
methods: {
    saveAdd() {
        console.log("saved");
    }
},
components: { Header }
}
</script>

<style scoped>
.salary {
    display: flex;
    margin: auto;
    width: 250px;
    padding-top: 150px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
}

.salary-item label {
    border-left: 2px solid black;
    display: inline-block;
    padding-left: 5px;
}
</style>
