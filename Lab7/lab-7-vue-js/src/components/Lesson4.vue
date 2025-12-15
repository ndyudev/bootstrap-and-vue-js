<template>
  <div>
    <!-- Nếu ng dung chưa đăng nhập, hiển thị form đăng nhập -->
    <LoginComponent v-if="!isLoggedIn" @loggedin="handleLoginSuccess" />

    <!-- Nếu ng dùng đã đăng nhập thì hiển thị bình luận -->
    <CommentComponent v-else :username="loggedInUser" />
  </div>
</template>

<script setup>
import LoginComponent from "./LoginComponent.vue";
import CommentComponent from "./CommentComponent.vue";
import { ref } from "vue";

// Quản lý trạng thái đăng nhập và tên ng dùng đã đăng nhập
const isLoggedIn = ref(false);
const loggedInUser = ref("");

// Xử lý khi ng dùng đăng nhập thành công
function handleLoginSuccess(username) {
  loggedInUser.value = username;

  isLoggedIn.value = true;
  console.log(username.value);
}
</script>

<style lang="scss" scoped></style>
