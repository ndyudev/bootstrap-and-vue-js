<template>
  <div class="container mt-4">
    <div class="row">
      <form @submit.prevent="submitForm" class="col-sm-4">
        <h3>Thêm học sinh</h3>

        <div class="mb-3 mt-3">
          <label for="mssv">MSSV</label>
          <input
            type="text"
            class="form-control"
            v-model="student.mssv"
            id="mssv"
            required
          />
        </div>

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
          <label for="score">Điểm Toán:</label>
          <input
            type="number"
            max="10"
            min="0"
            class="form-control"
            v-model="student.math"
            id="math"
            required
          />
        </div>

        <div class="mb-3">
          <label for="score">Điểm Lý:</label>
          <input
            type="number"
            max="10"
            min="0"
            class="form-control"
            v-model="student.ly"
            id="ly"
            required
          />
        </div>
        <div class="mb-3">
          <label for="score">Điểm Hóa:</label>
          <input
            type="number"
            max="10"
            min="0"
            class="form-control"
            v-model="student.hoa"
            id="hoa"
            required
          />
        </div>

        <button type="submit" class="btn btn-success">
          {{ isEditing ? "Cập nhật" : "Thêm" }}
        </button>
        <button type="button" class="btn btn-warning m-3" @click="resetForm">
          Reset
        </button>
      </form>

      <div class="col-sm-8">
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>MSSV</th>
              <th>Fullname</th>
              <th>Toán</th>
              <th>Lý</th>
              <th>Hóa</th>
              <th>Trung bình</th>
              <th>Xếp loại</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="stu.mssv">
              <td>{{ index + 1 }}</td>
              <td>{{ stu.mssv }}</td>
              <td>{{ stu.name }}</td>
              <td>{{ stu.math }}</td>
              <td>{{ stu.ly }}</td>
              <td>{{ stu.hoa }}</td>
              <td>{{ calculateAverage(stu).toFixed(2) }}</td>
              <td>{{ getGrade(stu) }}</td>
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

const students = ref([]);

const student = ref({
  mssv: "",
  name: "",
  math: null,
  ly: null,
  hoa: null,
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
    mssv: "",
    name: "",
    math: null,
    ly: null,
    hoa: null,
  };
}

function calculateAverage(stu) {
  return (Number(stu.math) + Number(stu.ly) + Number(stu.hoa)) / 3;
}

function getGrade(stu) {
  const avg = calculateAverage(stu);
  if (avg >= 9) return "Xuất sắc";
  if (avg >= 8) return "Giỏi";
  if (avg >= 6.5) return "Khá";
  if (avg >= 5) return "Trung bình";
  return "Yếu";
}
</script>
