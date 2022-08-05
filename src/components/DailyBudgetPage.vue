<template>
    <Header />
    <h1>DailyBudgetPage</h1>
    <input type="date" v-model="date">
    <button type="submit" @click="submitDate">Show</button>
    <Header />
    <h1>DailyBudgetPage</h1>
</template>
<script>
import Header from "./Header.vue";
export default {
    name: "DailyBudgetPage",
    components: { Header },
    data() {
        return {
            date: null
        }
    },
    methods: {
        submitDate() {
            console.log(this.date)
        }
    },
    name: "DailyBudgetPage",
    components: {
        Header,
    },
};
</script>
