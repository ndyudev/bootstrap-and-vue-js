<script setup>
import slide7 from "./components/slide7.vue";
import slide7Ps44284 from "./components/slide7-ps44284.vue";
import keyup from "./components/keyup.vue";
import { ref } from "vue";
const countMain = ref(0);
function handleMyEvent(count) {
  countMain.value = count;
  console.log(countMain.value);
}

const myMessage = ref("");
function handleEvent(message) {
  myMessage.value = message;
  console.log(myMessage.value);
}
</script>

<template>
  <!-- <slide7 @my-event="handleMyEvent" />
  <slide7Ps44284 @my-event="handleEvent" /> -->
  <keyup />
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
