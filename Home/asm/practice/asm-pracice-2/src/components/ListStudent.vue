<template>
  <div class="container mt-4">
    <h1 class="mb-4">Danh sách sinh viên</h1>

    <!-- Tìm kiếm và lọc -->
    <div class="row mb-3">
      <div class="col-md-6">
        <input
          v-model="searchQuery"
          type="text"
          class="form-control"
          placeholder="Tìm kiếm theo tên..."
        />
      </div>
      <div class="col-md-4">
        <select v-model="gpaFilter" class="form-select">
          <option value="">Tất cả GPA</option>
          <option value="3.0">GPA >= 3.0</option>
          <option value="3.5">GPA >= 3.5</option>
          <option value="4.0">GPA >= 4.0</option>
        </select>
      </div>
    </div>

    <!-- Danh sách -->
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Ngành học</th>
            <th>GPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="student in filteredStudents"
            :key="student.id"
            @click="viewDetail(student.id)"
            style="cursor: pointer"
          >
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.major }}</td>
            <td>{{ student.gpa }}</td>
            <td>
              <router-link
                :to="{ name: 'student-detail', params: { id: student.id } }"
                class="btn btn-primary btn-sm me-2"
                @click.stop
              >
                Chi tiết
              </router-link>
              <button
                @click.stop="editStudent(student)"
                class="btn btn-warning btn-sm me-2"
              >
                Sửa
              </button>
              <button
                @click.stop="deleteStudent(student.id)"
                class="btn btn-danger btn-sm"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Nút thêm mới -->
    <div class="mt-3">
      <button @click="addNewStudent" class="btn btn-success">
        Thêm sinh viên mới
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import data from "../../student-data.js";

const router = useRouter();

const students = ref([]);
const searchQuery = ref("");
const gpaFilter = ref("");

const filteredStudents = computed(() => {
  let filtered = students.value;

  // Lọc theo tên
  if (searchQuery.value) {
    filtered = filtered.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Lọc theo GPA
  if (gpaFilter.value) {
    const minGPA = parseFloat(gpaFilter.value);
    filtered = filtered.filter((student) => student.gpa >= minGPA);
  }

  return filtered;
});

// Methods
const viewDetail = (id) => {
  router.push({ name: "student-detail", params: { id } });
};

const editStudent = (student) => {
  router.push({ name: "student-form", params: { id: student.id } });
};

const deleteStudent = (id) => {
  if (confirm("Bạn có chắc muốn xóa sinh viên này?")) {
    students.value = students.value.filter((student) => student.id !== id);
  }
};

const addNewStudent = () => {
  router.push({ name: "student-form" });
};

// Lifecycle
onMounted(() => {
  // Load dữ liệu từ student-data.js
  students.value = [...data];
});
</script>

<style scoped>
/* Thêm style nếu cần */
</style>
