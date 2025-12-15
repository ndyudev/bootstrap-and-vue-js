<template>
  <div class="col-sm-4 p-5">
    <h3 class="text-centers">Quản ly công việc</h3>

    <!-- Form Quản lý công việc -->
    <form @submit.prevent="addList">
      <div class="mb-3">
        <label class="form-label">Tên công việc:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Nhập tên công việc"
          v-model="newToDo"
        />
      </div>
      <button class="btn btn-primary" type="submit">Thêm công việc</button>
    </form>
    <!-- Danh sách công việc -->
    <ul class="list-group mt-4">
      <li
        class="list-group-item d-flex justify-content-around align-content-between"
        v-for="(job, index) in jobs"
        :key="index"
      >
        {{ job }}
        <button class="btn btn-danger btn-sm" @click="removeList(index)">
          Xóa
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const newToDo = ref("");
const jobs = ref(["Ăn sáng", "Đi học", "Chơi bóng rổ"]);

const addList = () => {
  if (newToDo.value.trim() !== "") {
    jobs.value.push(newToDo.value.trim());
    newToDo.value = "";
  }
};

const removeList = (index) => {
  jobs.value.splice(index, 1);
};
</script>

<style lang="scss" scoped></style>
