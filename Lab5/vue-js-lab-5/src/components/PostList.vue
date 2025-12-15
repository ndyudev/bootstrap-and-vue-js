<template>
  <div>
    <h2>Danh sách bài viết</h2>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tiêu đề</th>
          <th>Nội dung</th>
          <th>Tác giả</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(post, index) in posts"
          :key="index"
          :class="{ highlighted: post.title.length > 20 }"
          :style="{
            backgroundColor: post.backgroundColor,
            color: post.textColor,
          }"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
          <td>{{ post.author }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="css" scoped>
.highlighted {
  border: 2px solid lightgray;
}
</style>
