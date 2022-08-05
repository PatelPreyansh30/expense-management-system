<template>
<div class="search">
    <input type="text" placeholder="Search.." v-model="search">
    <i @click="searchQuery"  class='bx bx-search'></i>
</div>
<div class="basket-container">
    <div class="basket-item">Date 1</div>
    <div class="basket-item">Date 2</div>
    <div class="basket-item">Date 3</div>
</div>
</template>

<script>
export default {
    name:'BasketPage',
    data() {
        return {
            search:null,
        }
    },
    methods:{
        searchQuery() {
           console.log(this.search);
        }
    }
}
</script>