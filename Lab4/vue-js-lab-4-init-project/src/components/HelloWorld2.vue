<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(1)
</script>

<template>
  <h3>Hello World 2</h3>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
