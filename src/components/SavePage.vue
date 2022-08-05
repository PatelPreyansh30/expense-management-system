<template>
    <Header />
    <div>
        <label>Enter your monthly salary</label> <br> <br>
        <input type="text" placeholder="Enter your salary" v-model="salary"> <br> <br>
        <button @click="saveAdd" type="submit">Save</button>
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