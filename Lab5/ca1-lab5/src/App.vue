<script setup>
import DangKy from "./components/DangKy.vue";
import DanhSach from "./components/DanhSach.vue";

import { ref } from "vue";
const users = ref([]);
function registerUserFunc(newUser) {
  users.value.push(newUser);
  console.log(newUser);
}
</script>

<template>
  <DangKy @register-user="registerUserFunc" />
  <DanhSach :users="users" />
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
