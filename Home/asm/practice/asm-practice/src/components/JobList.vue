<template>
  <div class="container mt-4">
    <h1 class="mb-4">Danh sách công việc</h1>

    <!-- Tìm kiếm và lọc -->
    <div class="row mb-3">
      <div class="col-md-6">
        <input
          v-model="searchQuery"
          type="text"
          class="form-control"
          placeholder="Tìm kiếm theo title..."
        />
      </div>
      <div class="col-md-6">
        <select v-model="filterSalary" class="form-control">
          <option value="">Tất cả lương</option>
          <option value="1500-2000">1500 - 2000</option>
          <option value="2000-2500">2000 - 2500</option>
          <option value="2500-3000">2500 - 3000</option>
          <option value="3000+">3000+</option>
        </select>
      </div>
    </div>

    <!-- Danh sách -->
    <div class="table">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="job in filteredJobs"
            :key="job.id"
            @click="viewDetail(job.id)"
            style="cursor: pointer"
          >
            <td>{{ job.id }}</td>
            <td>{{ job.title }}</td>
            <td>
              <router-link
                :to="{ name: 'job-detail', params: { id: job.id } }"
                class="btn btn-primary btn-sm me-2"
                @click.stop
              >
                Chi tiết
              </router-link>
              <button
                @click.stop="editJob(job)"
                class="btn btn-warning btn-sm me-2"
              >
                Sửa
              </button>
              <button
                @click.stop="deleteJob(job.id)"
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
      <button @click="addNewJob" class="btn btn-success">
        Thêm công việc mới
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import data from "../../data.js";

const router = useRouter();

const jobs = ref([]);
const searchQuery = ref("");
const filterSalary = ref("");

const filteredJobs = computed(() => {
  let filtered = jobs.value;

  if (searchQuery.value) {
    filtered = filtered.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (filterSalary.value) {
    filtered = filtered.filter((job) => {
      const salary = job.salary;
      switch (filterSalary.value) {
        case "1500-2000":
          return salary >= 1500 && salary < 2000;
        case "2000-2500":
          return salary >= 2000 && salary < 2500;
        case "2500-3000":
          return salary >= 2500 && salary < 3000;
        case "3000+":
          return salary >= 3000;
        default:
          return true;
      }
    });
  }

  return filtered;
});

// Methods
const viewDetail = (id) => {
  router.push({ name: "job-detail", params: { id } });
};

const editJob = (job) => {
  router.push({ name: "job-form", params: { id: job.id } });
};

const deleteJob = (id) => {
  jobs.value = jobs.value.filter((job) => job.id !== id);
};

const addNewJob = () => {
  router.push({ name: "job-form" });
};

// Lifecycle
onMounted(() => {
  // Load dữ liệu từ data.js
  jobs.value = [...data];
});
</script>

<style scoped>
/* Thêm style nếu cần */
</style>
