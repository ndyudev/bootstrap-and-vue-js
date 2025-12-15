<template>
  <div class="container">
    <h2>Nhập điểm của bạn:</h2>
    <input type="number" v-model="point" />
    <p v-if="point < 5">Yếu</p>
    <p v-else-if="point >= 5 && point < 6.5">Trung bình</p>
    <p v-else-if="point >= 6.5 && point < 8">Khá</p>
    <p v-else-if="point >= 8 && point <= 9">Giỏi</p>
    <p v-else-if="point >= 9 && point <= 10">Xuất sắc</p>
    <p v-else>Điểm không hợp lệ</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const point = ref(0);
</script>

<style lang="scss" scoped></style>
