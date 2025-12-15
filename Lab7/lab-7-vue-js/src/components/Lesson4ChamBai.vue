<template>
  <div>
    <LoginComponent @login="login" />
    <h3 v-show="isLoggin">Đăng nhập thànhcoong</h3>
    <Lesson3ChamBai @info="arrUser" />
  </div>
</template>

<script setup>
import LoginComponent from "./LoginComponent.vue";
import Lesson3ChamBai from "./Lesson3ChamBai.vue";
import { ref, computed } from "vue";

const usersMain = ref([]);

const user = ref({
  email: "",
  matkhau: "",
});

function login(info) {
  user.value.email = info.email;
  user.value.matkhau = info.matkhau;
  console.log(user.value);
}

function arrUser(users) {
  console.log(users);
  usersMain.value = users;
  console.log(usersMain.value);
}

const isLoggin = computed(() => {
  if (!user.value.email || !user.value.matkhau) {
    return false;
  }

  const found = usersMain.value.some((userMain) => {
    return (
      userMain.email === user.value.email &&
      userMain.matkhau === user.value.matkhau
    );
  });

  return found;
});
</script>

<style lang="scss" scoped></style>
