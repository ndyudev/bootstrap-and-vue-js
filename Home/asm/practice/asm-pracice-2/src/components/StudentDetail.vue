<template>
  <div class="container mt-4">
    <h1 class="mb-4">Chi tiết sinh viên</h1>

    <div v-if="student" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ student.name }}</h5>
        <p class="card-text">
          <strong>ID:</strong> {{ student.id }}<br />
          <strong>Tuổi:</strong> {{ student.age }}<br />
          <strong>Giới tính:</strong> {{ student.gender }}<br />
          <strong>Ngành học:</strong> {{ student.major }}<br />
          <strong>GPA:</strong> {{ student.gpa }}
        </p>
        <router-link to="/students" class="btn btn-secondary me-2">
          Quay lại danh sách
        </router-link>
        <button @click="editStudent" class="btn btn-warning">
          Sửa thông tin
        </button>
      </div>
    </div>

    <div v-else class="alert alert-danger">
      Không tìm thấy sinh viên với ID này.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import data from "../../student-data.js";

const route = useRoute();
const router = useRouter();

const student = ref(null);

const editStudent = () => {
  router.push({ name: "student-form", params: { id: student.value.id } });
};

onMounted(() => {
  const studentId = route.params.id;
  student.value = data.find((s) => s.id === studentId);
});
</script>

<style scoped>
/* Thêm style nếu cần */
</style>
