<template>
    <h1>Login Page</h1>
    <div>
        <input type="text" placeholder="Enter Username" v-model="username">
        <br><br>
        <input type="password" placeholder="Enter Password" v-model="password">
        <br><br>
        <button @click="userlogin">Login</button>
    </div>
    <br><br>
    <router-link to="/signup">Not our user ? Sign Up</router-link>
</template>

<script>
// import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            username: null,
            password: null,
        }
    }
}
</script>