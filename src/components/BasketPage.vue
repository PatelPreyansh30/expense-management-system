<template>
    <Header />

    <div class="search">
        <input type="text" placeholder="Search.." v-model="search">
        <i @click="searchQuery" class='bx bx-search'></i>
    </div>
    <div class="basket-container" v-for="basket in baskets" :key="basket.id">
        <div class="basket-item">Date 1</div>
        <div class="basket-item">Date 2</div>
        <div class="basket-item">Date 3</div>
    </div>
    <AddItems />
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
import AddItems from './AddItems.vue'

export default {
    name: 'BasketPage',
    data() {
        return {
            baskets: [],
            search: null,
        }
    },
    methods: {
        searchQuery() {
            console.log(this.search);
        }
    },
    // async mounted() {
    //     let res = await axios.post(`http://172.20.10.13:8000/bucket/item/`, {
    //         'item':'XYZ',
    //         'price':50,
    //         'user':`${localStorage.getItem('login-userid')}`
    //     }, {
    //         headers: {
    //             'Authorization': `Token ${localStorage.getItem('login-token')}`
    //         }
    //     })
    // },
    name: "BasketPage",
    components: { Header, AddItems }
}
</script>