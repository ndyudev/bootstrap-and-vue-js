<template>
  <p>
    Name: <input type="text" :value="name" />
    <!-- Name: <input type="text" v-bind:value="name"> -->
  </p>
  <a class="btn btn-primary" :href="url">click me</a>
  <h2>{{ student }}</h2>
</template>
<script>
import {Reactive} from 'vue';

const student = Reactive({
  name: "Duy",
  age: 20,
});
export default {
  data() {
    return {
      name: "Vue",
      url: "https://www.google.com/",
    };
  },
};
</script>
