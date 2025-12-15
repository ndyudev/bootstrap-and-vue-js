<template>
  <div>
    <h2>Chi tiết Bài viết Blog</h2>

    <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p>ID của bài viết là: {{ $route.params.id }}</p>
      <p>Title: {{ post.title }}</p>
      <p>{{ post.content }}</p>
    </div>
    <div v-else>
      <p>Không tìm thấy bài viết: {{ $route.params.id }}</p>
    </div>

    <button @click="$router.push({ name: 'BlogList' })">
      Quay lại danh sách Blog
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref(null);

//Mẫu
const posts = [
  {
    id: 1,
    title: "Khám phá Vue Router - Công cụ mạnh mẽ cho SPA",
    content:
      "Vue Router là thư viện định tuyến chính thức của Vue.js, giúp xây dựng Single Page Applications một cách dễ dàng. Với Vue Router, bạn có thể tạo các routes động, nested routes, navigation guards và nhiều tính năng mạnh mẽ khác. Điều này giúp ứng dụng của bạn có trải nghiệm mượt mà như một ứng dụng native, không cần reload lại trang khi chuyển đổi giữa các màn hình.",
  },
  {
    id: 2,
    title: "TypeScript và Vue 3 - Combo hoàn hảo cho dự án lớn",
    content:
      "TypeScript đang trở thành lựa chọn phổ biến khi phát triển ứng dụng Vue 3. Với type safety, auto-completion và khả năng phát hiện lỗi sớm, TypeScript giúp code của bạn dễ bảo trì và mở rộng hơn. Kết hợp với Composition API của Vue 3, bạn có thể xây dựng các component có tính tái sử dụng cao và dễ dàng test. Đây là xu hướng mà mọi Vue developer nên học hỏi.",
  },
  {
    id: 3,
    title: "Pinia - State Management hiện đại cho Vue 3",
    content:
      "Pinia là thư viện quản lý state chính thức mới của Vue, thay thế Vuex. Với API đơn giản hơn, hỗ trợ TypeScript tốt hơn và DevTools mạnh mẽ, Pinia mang đến trải nghiệm tuyệt vời cho developers. Bạn có thể tạo các stores modular, sử dụng Composition API để quản lý state một cách linh hoạt. Pinia còn hỗ trợ code-splitting tự động, giúp tối ưu performance cho ứng dụng của bạn.",
  },
];

//Để chuyển từ /home->/blog
const fetchPost = () => {
  const postId = parseInt(route.params.id);
  post.value = posts.find((p) => p.id === postId); //Tìm và trả đồi tượng bài viết đầu tiên (p) trong mảng posts trên mà có thược tính id khớp với postId đó
};

//Chạy logic khi componet chạy
fetchPost();
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
</style>
