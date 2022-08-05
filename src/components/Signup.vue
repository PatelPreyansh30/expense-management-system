<template>
    <h1>SignUp Page</h1>
    <div>
        <input required type="text" placeholder="Enter Username" v-model="username">
        <br><br>
        <input required type="email" placeholder="Enter Email" v-model="email">
        <br><br>
        <input required type="password" placeholder="Enter Password" v-model="password">
        <br><br>
        <button @click="userSignup">Sign Up</button>
    </div>
    <br><br>
    <router-link to="/login">Already registered ? Login Now</router-link>
</template>

<script>
// import axios from 'axios'

export default {
    name: 'Signup',
    data() {
        return {
            username: null,
            email: null,
            password: null,
        }
    }
}
</script>