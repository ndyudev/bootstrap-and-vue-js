<template>
  <div class="container">
    <h3>Nhập tháng của bạn:</h3>
    <input type="number" v-model.number="month" />
    <p v-if="month < 1 || month > 12" style="color: red">
      Vui lòng nhập tháng từ 1 đến 12!
    </p>
    <p v-else-if="month >= 1 && month <= 3">Mùa Xuân</p>
    <p v-else-if="month <= 6">Mùa Hè</p>
    <p v-else-if="month <= 9">Mùa Thu</p>
    <p v-else>Mùa Đông</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const month = ref(0);
</script>

<style lang="scss" scoped></style>
