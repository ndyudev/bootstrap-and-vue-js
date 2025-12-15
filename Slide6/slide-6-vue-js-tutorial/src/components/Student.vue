<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>MSSV</th>
          <th>Fullname</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(studentItem, index) in students" :key="studentItem.idsv">
          <td>{{ index + 1 }}</td>
          <td>{{ studentItem.idsv }}</td>
          <td>{{ studentItem.fullname }}</td>
          <td>{{ studentItem.address.city }}</td>
          <td>
            <button @click="detailAddres(index)">Chi tiết</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Địa chỉ:</strong>
      {{ student.address.city }} - {{ student.address.quan }},
      {{ student.address.p }} ({{ student.address.detail }})
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const student = ref({
  idsv: null,
  fullname: "",
  address: { city: "", quan: "", p: "", detail: "" },
});

const students = ref([
  {
    idsv: 1,
    fullname: "Nhat Duy",
    address: { city: "tay Ninh", quan: "12", p: "VN", detail: "PMQT12" },
  },
  {
    idsv: 2,
    fullname: "The Ngu",
    address: { city: "Hanoi", quan: "12", p: "VN", detail: "PMQT12" },
  },
  {
    idsv: 3,
    fullname: "Huu Trong",
    address: { city: "Ho Chi Minh", quan: "12", p: "VN", detail: "PMQT12" },
  },
]);

function detailAddres(index) {
  console.log(students.value[index]);
  console.log({ ...students.value[index] });

  student.value = { ...students.value[index] }; // Copy object students cho student
  console.log(student.value);
}
</script>

<style lang="css" scoped></style>
