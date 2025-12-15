<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { RouterLink, useRoute, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Go toHelloWorld</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>

    <main>
      <h1>Tren routerview</h1>
      <RouterView />
      <h1>dưới routerview</h1>
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
