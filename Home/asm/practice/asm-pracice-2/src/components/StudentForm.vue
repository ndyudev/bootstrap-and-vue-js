<template>
  <div class="container mt-4">
    <h1 class="mb-4">{{ isEdit ? "Sửa sinh viên" : "Thêm sinh viên mới" }}</h1>

    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="name" class="form-label">Tên</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          id="name"
          required
          :class="{ 'is-invalid': errors.name }"
        />
        <div class="invalid-feedback">{{ errors.name }}</div>
      </div>

      <div class="mb-3">
        <label for="age" class="form-label">Tuổi</label>
        <input
          v-model.number="form.age"
          type="number"
          class="form-control"
          id="age"
          required
          min="18"
          max="100"
          :class="{ 'is-invalid': errors.age }"
        />
        <div class="invalid-feedback">{{ errors.age }}</div>
      </div>

      <div class="mb-3">
        <label for="gender" class="form-label">Giới tính</label>
        <select
          v-model="form.gender"
          class="form-control"
          id="gender"
          required
          :class="{ 'is-invalid': errors.gender }"
        >
          <option value="">Chọn giới tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
        <div class="invalid-feedback">{{ errors.gender }}</div>
      </div>

      <div class="mb-3">
        <label for="major" class="form-label">Ngành học</label>
        <input
          v-model="form.major"
          type="text"
          class="form-control"
          id="major"
          required
          :class="{ 'is-invalid': errors.major }"
        />
        <div class="invalid-feedback">{{ errors.major }}</div>
      </div>

      <div class="mb-3">
        <label for="gpa" class="form-label">GPA</label>
        <input
          v-model.number="form.gpa"
          type="number"
          class="form-control"
          id="gpa"
          required
          min="0"
          max="4"
          step="0.1"
          :class="{ 'is-invalid': errors.gpa }"
        />
        <div class="invalid-feedback">{{ errors.gpa }}</div>
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
import data from "../../student-data.js";

const router = useRouter();
const route = useRoute();

const form = reactive({
  id: null,
  name: "",
  age: "",
  gender: "",
  major: "",
  gpa: "",
});
const errors = ref({});
const isEdit = ref(false);
const students = ref([]);

// Methods
const validateForm = () => {
  errors.value = {};

  if (!form.name.trim()) {
    errors.value.name = "Tên là bắt buộc.";
  }

  if (!form.age || form.age < 18 || form.age > 100) {
    errors.value.age = "Tuổi phải từ 18 đến 100.";
  }

  if (!form.gender) {
    errors.value.gender = "Giới tính là bắt buộc.";
  }

  if (!form.major.trim()) {
    errors.value.major = "Ngành học là bắt buộc.";
  }

  if (!form.gpa || form.gpa < 0 || form.gpa > 4) {
    errors.value.gpa = "GPA phải từ 0 đến 4.";
  }

  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  if (!validateForm()) {
    return;
  }

  if (isEdit.value) {
    // Cập nhật
    const index = students.value.findIndex((student) => student.id === form.id);
    if (index !== -1) {
      students.value[index] = { ...form };
    }
  } else {
    // Thêm mới
    const maxId = Math.max(
      ...students.value.map((student) => parseInt(student.id.replace("PS", "")))
    );
    form.id = `PS${String(maxId + 1).padStart(5, "0")}`;
    students.value.push({ ...form });
  }

  router.push("/");
};

// Lifecycle
onMounted(() => {
  // Load students từ student-data.js
  students.value = [...data];

  const id = route.params.id;
  if (id) {
    isEdit.value = true;
    const student = students.value.find((student) => student.id === id);
    if (student) {
      Object.assign(form, student);
    }
  }
});
</script>

<style scoped>
/* Thêm style nếu cần */
</style>
