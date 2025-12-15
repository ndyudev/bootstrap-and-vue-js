<template>
  <div class="container m-3">
    <input type="text" v-model="count" />
    <h3>{{ count }}</h3>
    <button @click="sendEvent">Submit</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);

const emit = defineEmits(["my-event"]);

const sendEvent = () => {
  emit("my-event", count.value);
};
</script>

<style lang="scss" scoped></style>
