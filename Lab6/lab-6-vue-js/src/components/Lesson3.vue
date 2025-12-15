<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card p-0">
          <img :src="item.img" alt="Hình ảnh" />
          <div class="card-body justify-content-start text-start">
            <h3 class="card-title fw-bold fs-3">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "../assets/dau.jpg";
import img2 from "../assets/gia-vi.jpg";
import img3 from "../assets/rau-cu.jpg";

const items = [
  {
    title: "8 loại rau củ quả giàu canxi",
    content:
      "Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...",
    img: img3,
  },
  {
    title: "Các loại gia vị tốt cho sức khỏe",
    content:
      "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương...",
    img: img2,
  },
  {
    title: "9 loại đậu bổ dưỡng nên dùng nhiều",
    content:
      "Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...",
    img: img1,
  },
];
</script>

<style lang="scss" scoped></style>
