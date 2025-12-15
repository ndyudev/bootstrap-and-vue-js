<template>
  <div>
    <input type="checkbox" value="cl" v-model="checkedNames" />Cầu lông
    <br />
    <input type="checkbox" value="bd" v-model="checkedNames" />Bóng đá
    <br />
    <input type="checkbox" value="bl" v-model="checkedNames" />Bơi lội
    <br />

    <p>Ngôn ngữ bạn chọn: {{ checkedNames.join(", ") }}</p>
    <p>Sở thích: {{ favorites.join(", ") }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const checkedNames = ref([]);
const favorites = ref([]);

watch(checkedNames, (newVal) => {
  favorites.value = [];

  if (newVal.includes("cl")) favorites.value.push("Cầu lông");
  if (newVal.includes("bd")) favorites.value.push("Bóng đá");
  if (newVal.includes("bl")) favorites.value.push("Bơi lội");
});
</script>
