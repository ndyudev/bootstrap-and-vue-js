<template>
  <div class="container">
    <input type="text" v-model="message" />
    <h3>{{ message }}</h3>
    <button @click="sendEvent">Guiwr</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const message = ref("");

const emit = defineEmits(["my-event"]);

function sendEvent() {
  emit("my-event", message.value);
}
</script>

<style lang="scss" scoped></style>
