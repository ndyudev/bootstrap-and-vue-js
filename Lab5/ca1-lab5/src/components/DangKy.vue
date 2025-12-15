<template>
  <div class="container border border-black mt-4">
    <div class="row">
      <div class="col-sm-6 py-3">
        <h4 class="text-black mb-3">Form Đăng Ký Thông Tin</h4>
        <form class="border-black border p-3 rounded">
          <div class="mb-3">
            <label for="fullname" class="form-label">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              id="fullname"
              placeholder="Nhập họ và tên"
              required
              v-model="user"
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Nhập email"
              required
              v-model="email"
            />
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label">Số điện thoại</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              placeholder="Nhập số điện thoại"
              required
              v-model="phone"
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Nhập mật khẩu"
              required
              v-model="password"
            />
          </div>

          <div class="mb-3">
            <label for="confirm-password" class="form-label"
              >Xác nhận mật khẩu</label
            >
            <input
              type="password"
              class="form-control"
              id="confirm-password"
              placeholder="Xác nhận mật khẩu"
              required
              v-model="confirmPassword"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Giới tính:</label>
            <div class="form-check form-check-inline mx-3">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="Nam"
                required
                v-model="gender"
              />
              <label class="form-check-label" for="male">Nam</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="Nữ"
                v-model="gender"
              />
              <label class="form-check-label" for="female">Nữ</label>
            </div>
          </div>

          <div class="mb-3">
            <label for="language" class="form-label">Ngôn ngữ</label>
            <select
              name="language"
              id="language"
              class="form-select"
              required
              v-model="language"
            >
              <option value="Vietnamese">Tiếng Việt</option>
              <option value="English">Tiếng Anh</option>
              <option value="Chinese">Tiếng Trung</option>
              <option value="Japanese">Tiếng Nhật</option>
            </select>
          </div>

          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="confirm-terms"
              v-model="agreeToTerms"
              required
            />
            <label class="form-check-label" for="confirm-terms">
              Tôi đồng ý với các điều khoản và điều kiện
            </label>
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary" @click="registerUser">
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["register-user"]);
const user = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");
const gender = ref("");
const language = ref("");
const agreeToTerms = ref(false);

function registerUser() {
  if (
    !user.value ||
    !email.value ||
    !phone.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    alert("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Mật khẩu và xác nhận mật khẩu không khớp.");
    return;
  }

  if (!agreeToTerms.value) {
    alert("Bạn phải đồng ý với các điều khoản và điều kiện.");
    return;
  }

  const newUser = {
    user: user.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    gender: gender.value,
    language: language.value,
  };

  // Gửi dữ liệu bài viết mới lên component cha
  emit("register-user", newUser);

  // Reset fields
  user.value = "";
  email.value = "";
  phone.value = "";
  password.value = "";
  confirmPassword.value = "";
  gender.value = ""; // Reset gender
  language.value = ""; // Reset language
  agreeToTerms.value = false; // Reset checkbox
}
</script>

<style lang="scss" scoped></style>
