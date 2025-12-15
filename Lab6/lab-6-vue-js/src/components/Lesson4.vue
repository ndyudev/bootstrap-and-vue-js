<template>
  <div class="container mt-4">
    <div class="row">
      <form @submit.prevent="submitForm" class="col-sm-4">
        <h3>Thêm học sinh</h3>

        <div class="mb-3 mt-3">
          <label for="name">Họ tên:</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            id="name"
            required
          />
        </div>

        <div class="mb-3">
          <label for="score">Điểm:</label>
          <input
            type="number"
            max="10"
            min="0"
            class="form-control"
            v-model="student.score"
            id="score"
            required
          />
        </div>

        <div class="mb-3">
          <label for="dob">Ngày sinh:</label>
          <input
            type="date"
            class="form-control"
            v-model="student.dob"
            id="dob"
            required
          />
        </div>

        <button type="submit" class="btn btn-success">
          {{ isEditing ? "Cập nhật" : "Thêm" }}
        </button>
      </form>

      <div class="col-sm-8">
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button class="btn btn-warning" @click="editStudent(index)">
                  Sửa
                </button>
              </td>
              <td>
                <button class="btn btn-danger" @click="deleteStudent(index)">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const students = ref([
  { name: "Nguyễn Chí Hùng", score: 8, dob: "2006-01-01" },
  { name: "Phạm Thị Lan", score: 9, dob: "2006-05-15" },
]);

const student = ref({
  name: "",
  score: null,
  dob: "",
});

let isEditing = ref(false);
let editingIndex = ref(null);

function submitForm() {
  if (isEditing.value) {
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    students.value.push({ ...student.value });
  }
  resetForm();
}

function editStudent(index) {
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

function deleteStudent(index) {
  students.value.splice(index, 1);
}

function resetForm() {
  student.value = {
    name: "",
    score: null,
    dob: "",
  };
}
</script>
