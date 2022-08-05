<template>
    <div class="header">
        <i class='bx bx-menu'></i>
        <ul>
            <li>
                <router-link to="/home">Home</router-link>
            </li>
            <li>
                <router-link to="/save">Save</router-link>
            </li>
            <li>
                <router-link to="/daily-budget">Daily Budget</router-link>
            </li>
            <li>
                <router-link to="/basket">Basket</router-link>
            </li>
            <li>
                <router-link to="/logout">Logout</router-link>
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
.header {
    display: flex;
align-items: center;
justify-content: center;
background-color: #DFE0EA;
}
a {
    font-weight: bold;
    color: black;
    text-decoration: none;
}
.header i {
    display: none
}

.header ul {
    display: flex;
    margin: 0;
}

.header ul li {
    text-decoration: none;
    justify-items: center;
    padding: 10px;
    list-style: none;
    
}
</style>