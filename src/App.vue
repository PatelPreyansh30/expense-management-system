<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: "App",
  components: { Header }
}
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  display: block;
}
</style>
