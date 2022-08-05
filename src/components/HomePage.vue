<template>
    <Header />
    <div class="home-page">
        <div class="box">
            <router-link to="/save">Save</router-link>
            <router-link to="/daily-budget">Daily Budget</router-link>
            <router-link to="/basket">Basket</router-link>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
// import axios from 'axios'

export default {
    name: "HomePage",
    components: { Header }
}
</script>