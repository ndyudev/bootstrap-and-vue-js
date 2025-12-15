<template>
  <div class="container mt-4">
    <h1 class="mb-4">{{ isEdit ? "Sửa công việc" : "Thêm công việc mới" }}</h1>

    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
          required
          :class="{ 'is-invalid': errors.title }"
        />
        <div class="invalid-feedback">{{ errors.title }}</div>
      </div>

      <div class="mb-3">
        <label for="salary" class="form-label">Salary</label>
        <input
          v-model.number="form.salary"
          type="number"
          class="form-control"
          id="salary"
          required
          min="1000"
          max="5000"
          :class="{ 'is-invalid': errors.salary }"
        />
        <div class="invalid-feedback">{{ errors.salary }}</div>
      </div>

      <div class="mb-3">
        <label for="skills" class="form-label">Skills</label>
        <textarea
          v-model="form.skills"
          class="form-control"
          id="skills"
          rows="3"
          required
          :class="{ 'is-invalid': errors.skills }"
        ></textarea>
        <div class="invalid-feedback">{{ errors.skills }}</div>
      </div>

      <button type="submit" class="btn btn-primary me-2">
        {{ isEdit ? "Cập nhật" : "Thêm mới" }}
      </button>
      <router-link to="/" class="btn btn-secondary">Hủy</router-link>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import data from "../../data.js";

const router = useRouter();
const route = useRoute();

const form = reactive({
  id: null,
  title: "",
  salary: "",
  skills: "",
});
const errors = ref({});
const isEdit = ref(false);
const jobs = ref([]);

// Methods
const validateForm = () => {
  errors.value = {};

  if (!form.title.trim()) {
    errors.value.title = "Title là bắt buộc.";
  }

  if (!form.salary || form.salary < 0 || form.salary > 5000) {
    errors.value.salary = "Salary phải từ 0 đến 5000.";
  }

  if (!form.skills.trim()) {
    errors.value.skills = "Skills là bắt buộc.";
  }

  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  // 1. Kiểm tra form có hợp lệ không
  if (!validateForm()) {
    return; // Dừng nếu không hợp lệ
  }

  // 2. Nếu đang sửa
  if (isEdit.value) {
    // Tìm vị trí công việc trong mảng
    const index = jobs.value.findIndex((job) => job.id === form.id);
    if (index !== -1) {
      // Cập nhật công việc tại vị trí đó
      jobs.value[index] = { ...form };
    }
  } else {
    // 3. Nếu thêm mới
    // Tạo ID mới = ID lớn nhất + 1
    const maxId = Math.max(...jobs.value.map((job) => job.id));
    form.id = maxId + 1;
    // Thêm vào mảng
    jobs.value.push({ ...form });
  }

  // 4. Quay về trang danh sách
  router.push("/");
};

// Lifecycle
onMounted(() => {
  // Load jobs từ data.js
  jobs.value = [...data];

  const id = route.params.id;
  if (id) {
    isEdit.value = true;
    const job = jobs.value.find((job) => job.id === parseInt(id));
    if (job) {
      Object.assign(form, job);
    }
  }
});
</script>

<style scoped>
/* Thêm style nếu cần */
</style>
