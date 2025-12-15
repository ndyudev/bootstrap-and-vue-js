<script setup></script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">Quản lý student</router-link>
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">Danh sách student</router-link>
          <router-link to="/lesson2" class="nav-link">Lesson 2</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style scoped></style>
