<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Tour Manager</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Danh sách Tour
          </li>
        </ol>
      </nav>

      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h4">Danh sách Tour</h1>
        <div>
          <button class="btn btn-sm btn-success me-2" @click="openAdd()">
            Thêm Tour
          </button>
          <button
            class="btn btn-sm"
            :class="top3Only ? 'btn-primary' : 'btn-outline-primary'"
            @click="toggleTop3"
          >
            Top 3 rating
          </button>
          <button
            class="btn btn-sm ms-2"
            :class="cheapOnly ? 'btn-primary' : 'btn-outline-primary'"
            @click="toggleCheap"
          >
            Giá &lt; 300 USD
          </button>
        </div>
      </div>

      <div class="row g-3">
        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="tour in displayedTours"
          :key="tour.tourCode"
        >
          <div class="card h-100">
            <div
              class="card-header d-flex justify-content-between align-items-center"
            >
              <strong>{{ tour.tourCode }}</strong>
              <span
                class="badge"
                :class="tour.rating >= 4.7 ? 'bg-success' : 'bg-secondary'"
              >
                {{ tour.rating >= 4.7 ? "Top Rated" : "Standard" }}
              </span>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ tour.destination }}</h5>
              <p class="card-text mb-1">
                Thời lượng: {{ tour.duration_days }} ngày
              </p>
              <p class="card-text mb-1">
                Giá (pp): ${{ tour.price_per_person }}
              </p>
              <p class="card-text text-muted mb-2">Rating: {{ tour.rating }}</p>

              <div class="d-flex gap-2">
                <router-link
                  :to="{ name: 'ranking', params: { tourCode: tour.tourCode } }"
                  class="btn btn-sm btn-outline-primary"
                  >Xếp hạng & Chi tiết</router-link
                >
                <button
                  class="btn btn-sm btn-outline-secondary"
                  @click="openEdit(tour)"
                >
                  Sửa
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteTour(tour)"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal (simple Vue-controlled modal) -->
    <div v-if="showModal">
      <div class="modal-backdrop fade show"></div>
      <div class="modal d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                {{ editMode ? "Sửa Tour" : "Thêm Tour" }}
              </h5>
              <button
                type="button"
                class="btn-close"
                @click="closeModal"
              ></button>
            </div>
            <div class="modal-body">
              <div v-if="errors.length" class="alert alert-danger">
                <ul class="mb-0">
                  <li v-for="(e, i) in errors" :key="i">{{ e }}</li>
                </ul>
              </div>

              <div class="mb-2">
                <label class="form-label">Mã tour</label>
                <input
                  class="form-control"
                  v-model="form.tourCode"
                  :readonly="editMode"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Điểm đến</label>
                <input class="form-control" v-model="form.destination" />
              </div>
              <div class="mb-2">
                <label class="form-label">Thời lượng (ngày)</label>
                <input
                  type="number"
                  class="form-control"
                  v-model.number="form.duration_days"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Giá (USD)</label>
                <input
                  type="number"
                  class="form-control"
                  v-model.number="form.price_per_person"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Rating (1-5)</label>
                <input
                  type="number"
                  step="0.1"
                  class="form-control"
                  v-model.number="form.rating"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" @click="closeModal">Hủy</button>
              <button class="btn btn-primary" @click="saveTour">Lưu</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import các hàm cần thiết từ Vue.js
// ref: tạo biến reactive (thay đổi sẽ cập nhật UI)
// computed: tính toán giá trị dựa trên biến khác
// onMounted: chạy code khi component được tạo
// reactive: tạo object reactive
import { ref, computed, onMounted, reactive } from "vue";

// Import dữ liệu tour từ file data.js
import tourPackages from "../data.js";

// Biến lưu danh sách tour hiện tại (có thể thay đổi khi thêm/sửa/xóa)
const tours = ref([]);

// Biến kiểm soát việc hiển thị modal (true = hiện, false = ẩn)
const showModal = ref(false);

// Biến kiểm soát chế độ: thêm mới hay sửa (true = sửa, false = thêm)
const editMode = ref(false);

// Object lưu dữ liệu form nhập liệu
const form = reactive({
  tourCode: "", // Mã tour
  destination: "", // Điểm đến
  duration_days: 1, // Số ngày
  price_per_person: 0, // Giá mỗi người
  rating: 1, // Đánh giá từ 1-5
});

// Mảng lưu danh sách lỗi validation
const errors = ref([]);

// Biến lọc: chỉ hiển thị top 3 rating cao nhất
const top3Only = ref(false);

// Biến lọc: chỉ hiển thị tour giá dưới 300 USD
const cheapOnly = ref(false);

// Hàm chạy khi component được tạo (load dữ liệu ban đầu)
onMounted(() => {
  // Sao chép dữ liệu từ data.js vào tours
  tours.value = [...tourPackages];
});

// Hàm mở modal để thêm tour mới
function openAdd() {
  editMode.value = false; // Chế độ thêm
  clearForm(); // Xóa form
  errors.value = []; // Xóa lỗi
  showModal.value = true; // Hiện modal
}

// Hàm mở modal để sửa tour
function openEdit(t) {
  editMode.value = true; // Chế độ sửa
  // Điền dữ liệu tour vào form
  form.tourCode = t.tourCode;
  form.destination = t.destination;
  form.duration_days = t.duration_days;
  form.price_per_person = t.price_per_person;
  form.rating = t.rating;
  errors.value = []; // Xóa lỗi
  showModal.value = true; // Hiện modal
}

// Hàm đóng modal
function closeModal() {
  showModal.value = false;
}

// Hàm xóa sạch dữ liệu form
function clearForm() {
  form.tourCode = "";
  form.destination = "";
  form.duration_days = 1;
  form.price_per_person = 0;
  form.rating = 1;
}

// Hàm kiểm tra dữ liệu nhập có hợp lệ không
function validate() {
  const errs = []; // Mảng lưu lỗi

  // Kiểm tra mã tour không rỗng
  if (!form.tourCode || !form.tourCode.trim())
    errs.push("Mã tour không được để trống.");

  // Kiểm tra mã tour không trùng (chỉ khi thêm mới)
  const exists = tours.value.find((t) => t.tourCode === form.tourCode);
  if (!editMode.value && exists) errs.push("Mã tour đã tồn tại.");

  // Kiểm tra thời lượng > 0
  if (form.duration_days <= 0) errs.push("Thời lượng phải lớn hơn 0.");

  // Kiểm tra rating trong khoảng 1-5
  if (form.rating < 1 || form.rating > 5)
    errs.push("Rating phải trong khoảng 1 đến 5.");

  return errs; // Trả về danh sách lỗi
}

// Hàm lưu tour (thêm mới hoặc cập nhật)
function saveTour() {
  errors.value = validate(); // Kiểm tra lỗi
  if (errors.value.length) return; // Nếu có lỗi, dừng lại

  if (editMode.value) {
    // Cập nhật tour hiện tại
    const idx = tours.value.findIndex((t) => t.tourCode === form.tourCode);
    if (idx !== -1) {
      tours.value[idx] = {
        ...tours.value[idx], // Giữ nguyên các trường khác
        destination: form.destination,
        duration_days: form.duration_days,
        price_per_person: form.price_per_person,
        rating: form.rating,
      };
    }
  } else {
    // Thêm tour mới vào danh sách
    tours.value.push({
      tourCode: form.tourCode,
      destination: form.destination,
      duration_days: form.duration_days,
      price_per_person: form.price_per_person,
      rating: form.rating,
    });
  }

  closeModal(); // Đóng modal sau khi lưu
}

// Hàm xóa tour
function deleteTour(t) {
  // Hỏi xác nhận trước khi xóa
  if (!confirm(`Xác nhận xóa tour ${t.tourCode}?`)) return;
  // Lọc bỏ tour khỏi danh sách
  tours.value = tours.value.filter((x) => x.tourCode !== t.tourCode);
}

// Hàm bật/tắt lọc top 3
function toggleTop3() {
  top3Only.value = !top3Only.value; // Đảo ngược giá trị
}

// Hàm bật/tắt lọc giá rẻ
function toggleCheap() {
  cheapOnly.value = !cheapOnly.value; // Đảo ngược giá trị
}

// Computed property: tính toán danh sách tour hiển thị dựa trên bộ lọc
const displayedTours = computed(() => {
  let list = [...tours.value]; // Sao chép danh sách

  if (top3Only.value) {
    // Lọc top 3 rating cao nhất
    const top3 = [...list]
      .sort((a, b) => b.rating - a.rating) // Sắp xếp giảm dần theo rating
      .slice(0, 3) // Lấy 3 đầu tiên
      .map((t) => t.tourCode); // Lấy mã tour
    list = list.filter((t) => top3.includes(t.tourCode)); // Giữ lại chỉ top 3
  }

  if (cheapOnly.value) {
    // Lọc tour giá dưới 300
    list = list.filter((t) => t.price_per_person < 300);
  }

  return list; // Trả về danh sách đã lọc
});
</script>

<style scoped>
.card-header {
  font-size: 0.95rem;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
.modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}
</style>
