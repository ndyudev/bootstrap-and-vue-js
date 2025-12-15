<script setup>
import Slide6 from "./components/Slide6.vue";
import Student from "./components/Student.vue";
</script>

<template>
  <!-- <Slide6 /> -->
  <Student />
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
