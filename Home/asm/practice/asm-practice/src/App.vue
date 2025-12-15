<script setup></script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">Quản lý công việc</router-link>
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">Danh sách</router-link>
          <router-link to="/lesson1" class="nav-link">Lesson 1</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
/* Thêm style nếu cần */
</style>
