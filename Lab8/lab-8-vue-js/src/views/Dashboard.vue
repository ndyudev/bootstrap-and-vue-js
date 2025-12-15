<template>
    <div>
        <h2>Dashboard</h2>
        <h3>Xin chào bạn</h3>
        <button @click="logout">Đăng Xuất</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
    //   Xóa trạng thái localstoage
    localStorage.removeItem('isAuthenticated');

    // Chuyển đến trang home
    router.push({ name: 'Home' });
};
</script>

<style scoped></style>