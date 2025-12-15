<template>
  <div class="container mt-4">
    <h1 class="mb-4">Chi tiết công việc</h1>

    <div v-if="job" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ job.title }}</h5>
        <p class="card-text"><strong>ID:</strong> {{ job.id }}</p>
        <p class="card-text"><strong>Lương:</strong> {{ job.salary }}</p>
        <p class="card-text"><strong>Kỹ năng:</strong> {{ job.skills }}</p>
      </div>
    </div>

    <div v-else class="alert alert-danger">Công việc không tồn tại.</div>

    <div class="mt-3">
      <router-link to="/" class="btn btn-secondary"
        >Quay lại danh sách</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import data from "../../data.js";

const route = useRoute();
const job = ref(null);
const jobs = ref([]);

jobs.value = [...data];

const id = parseInt(route.params.id);
job.value = jobs.value.find((job) => job.id === id);
</script>

<style scoped>
/* Thêm style nếu cần */
</style>
