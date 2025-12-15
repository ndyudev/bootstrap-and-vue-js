<template>
  <div class="m-5 col-10">
    <h2>Đăng Nhập:</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="loginEmail">Email:</label>
        <input
          type="email"
          class="form-control"
          id="userEmail"
          v-model="info.email"
          placeholder="Nhập email"
        />
      </div>

      <div class="mb-3">
        <label for="loginPassword">Mật khẩu:</label>
        <input
          type="password"
          class="form-control"
          id="loginPassword"
          v-model="info.matkhau"
          placeholder="Nhập mật khẩu"
        />
      </div>

      <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const info = ref({
  email: "",
  matkhau: "",
});

const emit = defineEmits(["login"]);

function handleLogin() {
  if (info.value.email && info.value.matkhau) {
    emit("login", info.value);
  } else {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
}
</script>

<style scoped></style>
