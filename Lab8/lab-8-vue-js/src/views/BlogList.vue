<template>
  <div>
    <h2>Danh Sách Blog</h2>
    <ul>
      <li>
        <RouterLink :to="{ name: 'BlogPost', params: { id: 1 } }"
          >Bài số 1</RouterLink
        >
      </li>
      <li>
        <RouterLink :to="{ name: 'BlogPost', params: { id: 2 } }"
          >Bài số 2</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped></style>
