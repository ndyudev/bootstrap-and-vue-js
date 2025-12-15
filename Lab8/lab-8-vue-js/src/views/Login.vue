<template>
    <div>
        <h2>Trang đăng nhập</h2>
        <div>
            <label for="username">Tên người dùng:</label>
            <input type="text" id="username" v-model="username" required>
        </div>

        <div>
            <label for="password">Mật khẩu:</label>
            <input type="password" id="password" v-model="password" required>
        </div>
        <button @click="mockLogin">Đăng Nhập</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');

const router = useRouter();

//Đăng nhập thành công và cập nhật localstorage
const mockLogin = () => {
    // Trong index.js
    localStorage.setItem('isAuthenticated', 'true');

    // Chuyển hướng sang dashboard
    router.push({ name: 'Dashboard' });
}
</script>

<style scoped></style>