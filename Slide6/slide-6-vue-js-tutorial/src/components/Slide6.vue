<template>
  <div>
    <h1 v-if="show">Slide 6</h1>
    <h1 v-show="show">Render Show</h1>
    <button @click="show = !show" v-html="show ? 'AN' : 'HIEN'"></button>
  </div>
  <input type="number" min="0" max="10" />
</template>

<script setup>
import { ref } from "vue";
const show = ref(true);
</script>

<style lang="scss" scoped></style>
