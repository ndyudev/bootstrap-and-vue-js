<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ count + 7 }}</h2>
    <h2>{{ countRef }}</h2>
    <button @click="increment">Increment</button>
    <button v-on:click="reset">reset</button>
  </div>
  <div>
    <h1 v-html="messageRef"></h1>
    <h3 v-html="messageRef" style="color: red"></h3>
    <h3 v-bind:style="styleData" v-html="messageRef1"></h3>
    <h3 v-bind:class="textBlue" v-html="messageRef2"></h3>
  </div>
  <h3>{{ messageSring }}</h3>
  <button @click="showInfo">Show</button>

  <div class="container">
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-primary">Primary</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = 0;
const message = "Hello, Vue 3!";
const countRef = ref(0);
const messageRef = ref("Hello with ref");
const styleData = "color: red";
const messageRef1 = ref("Hello with ref 1");
const messageRef2 = ref("Hello with ref 2");
const textBlue = "text-blue";

const increment = () => {
  countRef.value++;
};

const reset = () => {
  countRef.value = 0;
};

const messageSring = ref("qua lại khách chờ sông lặn sóng");
const showInfo = () => {
  messageSring.value = messageSring.value.split(" ").reverse().join(" ");
};
</script>

<style scoped>
.text-blue {
  color: blue;
}
.text-info {
  color: white;
  font-size: 5rem;
}
</style>
