<template>
  <div class="container border">
    <div class="row">
      <div class="col-sm-7 p-4">
        <h3>Form Đăng Ký</h3>
        <form @submit.prevent="dangky">
          <div class="mb-3">
            <label for="ht" class="form-label">Họ tên:</label>
            <input
              type="text"
              class="form-control"
              id="fullname"
              v-model="ht"
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
            />
          </div>

          <div class="mb-3">
            <label for="mk" class="form-label">Mật khẩu:</label>
            <input type="password" class="form-control" id="mk" v-model="mk" />
          </div>

          <div class="mb-3">
            <label for="ngSinh" class="form-label">Ngày sinh:</label>
            <input
              type="date"
              class="form-control"
              id="ngSinh"
              v-model="ngSinh"
            />
          </div>

          <div class="mb-3">
            <label class="form-label me-3">Giới tính:</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="gtNam"
                value="Nam"
                v-model="gt"
              />
              <label class="form-check-label" for="gtNam">Nam</label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="gtNu"
                value="Nữ"
                v-model="gt"
              />
              <label class="form-check-label" for="gtNu">Nữ</label>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Ngôn ngữ:</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Tiếng việt"
                id="nnViet"
                v-model="ngonngu"
              />
              <label class="form-check-label" for="nnViet">Tiếng việt</label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Tiếng anh"
                id="nnAnh"
                v-model="ngonngu"
              />
              <label class="form-check-label" for="nnAnh">Tiếng anh</label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Đăng ký</button>
        </form>
      </div>

      <div class="col-sm-4 p-4 ms-3">
        <h3>Thông tin đăng ký:</h3>
        <div v-if="thongTinDangKy">
          <p><strong>Họ tên:</strong> {{ thongTinDangKy.hoten }}</p>
          <p><strong>Email:</strong> {{ thongTinDangKy.email }}</p>
          <p><strong>Ngày sinh:</strong> {{ thongTinDangKy.ngaysinh }}</p>
          <p><strong>Giới tính:</strong> {{ thongTinDangKy.gioitinh }}</p>
          <p><strong>Ngôn ngữ:</strong> {{ thongTinDangKy.ngonngu }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ht = ref("");
const email = ref("");
const mk = ref("");
const ngSinh = ref("");
const gt = ref("");
const ngonngu = ref([]);

const thongTinDangKy = ref(null);

const users = ref([]);

const dangky = () => {
  if (
    ht.value &&
    email.value &&
    mk.value &&
    ngSinh.value &&
    gt.value &&
    ngonngu.value.length > 0
  ) {
    // Tạo object chứa thông tin đăng ký
    thongTinDangKy.value = {
      hoten: ht.value,
      email: email.value,
      ngaysinh: ngSinh.value,
      gioitinh: gt.value,
      ngonngu: ngonngu.value.join(", "),
    };

    // Xóa trắng form sau khi gửi
    ht.value = "";
    email.value = "";
    mk.value = "";
    ngSinh.value = "";
    gt.value = "";
    ngonngu.value = [];
  } else {
    alert("Vui lòng điền đầy đủ thông tin");
  }
};

console.log(users.value.push(thongTinDangKy));
</script>
<style scoped></style>
