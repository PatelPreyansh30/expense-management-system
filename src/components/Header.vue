<template>
    <div class="header">
        <i class='bx bx-menu'></i>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/">Save</router-link>
            </li>
            <li>
                <router-link to="/">Basket</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.header i{
 display: none;
}
.header ul{
    display: flex;
    /* text-decoration: none; */
}
.header ul li{
    text-decoration: none;
    justify-items: center;
    padding: 10px;
}
</style>