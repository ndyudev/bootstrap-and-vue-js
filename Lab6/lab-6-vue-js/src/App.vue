<script setup>
import Lesson1 from "./components/Lesson1.vue";
import Lesson2 from "./components/Lesson2.vue";
import Lesson3 from "./components/Lesson3.vue";
import Lesson4 from "./components/Lesson4.vue";
import FileNhapDiem from "./components/FileNhapDiem.vue";
</script>

<template>
  <!-- <Lesson1 />
  <Lesson2 />
  <Lesson3 />
  <Lesson4 /> -->
  <FileNhapDiem />
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
