<script setup>
import Lesson1 from "./components/Lesson1.vue";
import Lesson2 from "./components/Lesson2.vue";
import Lesson3 from "./components/Lesson3.vue";
import Post from "./components/Post.vue";
</script>

<template>
  <div>
    <!-- <Lesson1 /> -->
    <!-- <Lesson2 /> -->
    <!-- <Lesson3/> -->
    <Post/>
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
