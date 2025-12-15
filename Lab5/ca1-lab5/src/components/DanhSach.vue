<template>
  <div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>STT</th>
          <th>User</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th>Mật khẩu</th>
          <th>Giới tính</th>
          <th>Ngôn ngữ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.user }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.language }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  users: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
