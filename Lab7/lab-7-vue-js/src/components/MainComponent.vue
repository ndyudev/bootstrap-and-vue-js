<template>
  <div>
    <Lesson3ChamBai @info="arrUser" />
    <LoginComponent @login="login" />
    <h3 v-show="isLoggin" class="text-success m-5">Đăng nhập thành công!</h3>
    <h3 v-show="!isLoggin && user.email" class="text-danger m-5">
      Đăng nhập thất bại!
    </h3>
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
}

function arrUser(users) {
  console.log("Danh sách users:", users);
  usersMain.value = users;
}

const isLoggin = computed(() => {
  if (!user.value.email || !user.value.matkhau) return false;

  return usersMain.value.some((userMain) => {
    return (
      userMain.email === user.value.email &&
      userMain.matkhau === user.value.matkhau
    );
  });
});
</script>

<style scoped></style>
