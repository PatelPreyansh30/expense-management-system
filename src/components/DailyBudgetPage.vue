<template>
    <Header />
    <h1>DailyBudgetPage</h1>
    <input type="date" v-model="date">
    <button type="submit" @click="submitDate">Show</button>
    <div class="date-deat">
        <div class="date-detail-item">{{this.date}}</div>
    </div>

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
