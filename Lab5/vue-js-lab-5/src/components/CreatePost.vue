<template>
  <div>
    <h2>Tạo bài viết mới</h2>
    <input v-model="title" type="text" placeholder="Tiêu đề bài viết" />
    <input v-model="author" type="text" placeholder="Tên tác giả" />
    <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
    <button @click="submitPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["add-post"]);
const title = ref("");
const author = ref("");
const content = ref("");

function submitPost() {
    if (title.value && author.value && content.value) {
    const newPost = {
        title: title.value,
        content: content.value,
        author: author.value,
    };

    // Gửi dữ liệu bài viết mới lên component cha
    emit("add-post", newPost);

    // Reset fields
    title.value = "";
    author.value = "";
    content.value = "";
    }
}
</script>

<style lang="css" scoped>
input,
textarea {
    display: block;
    width: 100%;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
