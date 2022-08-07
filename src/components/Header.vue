<template>
  <div class="scrollmenu">
    <router-link to="/home">Home</router-link>
    <router-link to="/save">Save</router-link>
    <router-link to="/daily-budget">Daily Budget</router-link>
    <router-link to="/basket">Basket</router-link>
    <router-link to="/logout">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
div.scrollmenu {
  background-color: #DFE0EA;
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
}

div.scrollmenu a:hover {
  transform: scale(1.5);
  transition: 0.4s;
}
</style>