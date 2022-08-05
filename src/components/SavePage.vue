<template>
    <Header />
    <div class="salary">
        <div class="salary-item">

            <label>Enter your monthly salary</label> <br> <br>
        </div>
        <div class="salary-item">

            <input type="text" placeholder="Enter your salary" v-model="salary"> <br> <br>
        </div>
        <div class="salary-item">
            
            <button @click="saveAdd" type="submit">Save</button>
        </div>
    </div>
</template>
<script>
import Header from './Header.vue';
export default {
    name: "SavePage",
    data() {
        return {
            salary: null,
        };
    },
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
.salary-item label{
    border-left: 2px solid black;
    display: inline-block;
    padding-left: 5px;
}

</style>