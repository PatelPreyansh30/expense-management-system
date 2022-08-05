<template>
    <Header />
    <!-- <h1>DailyBudgetPage</h1> -->
    <div class="date-box">
        <div class="date-box-item">

            <label>Enter Date</label> <br>
        </div>
        <div class="date-box-item">
            <input type="date" v-model="date"><br> <br>

        </div>
        <div class="date-box-item">
            <button type="submit" @click="submitDate">Show</button>

        </div>

    </div>
    <div class="date-detail">
        <div class="date-detail-item"> 
            <lable >Today's Date</lable> 
            <h6>Aug 4 2022</h6>
        </div>
        <div class="date-detail-item">
            <lable>Budget</lable>
            <h6>$ 800</h6>
        </div>
        <div class="date-detail-item">
            <lable>Savings</lable>
            <h6>$ 100</h6>
        </div>
        <div class="date-detail-item">
           <lable>Expence</lable> 
            <h6>$ 500</h6>
        </div>
    </div>
    <center>
        <div class="nt">Net amount:
            <h6>$ 300</h6>
        </div>
    </center>

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
<style scoped>
.date-box {
    margin: auto;
    width: 125px;
    padding-top: 70px;
}

.date-detail {
    display: flex;
    flex-flow: row wrap;
    padding-top: 75px;
    margin-left: 12px;
}

.date-detail-item {
    flex: 25%;
    margin:10px;
}
.date-detail-item lable {
    padding-left: 5px;
    border-left: 2px solid black;
}
</style>