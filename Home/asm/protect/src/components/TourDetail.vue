<template>
  <div class="container mt-4">
    <h1 class="mb-3">Chi tiết tour & Xếp hạng</h1>

    <div v-if="tour">
      <div class="card mb-4">
        <div class="card-body">
          <h4 class="card-title">
            {{ tour.destination }}
            <small class="text-muted">({{ tour.tourCode }})</small>
          </h4>
          <p class="mb-1">Thời lượng: {{ tour.duration_days }} ngày</p>
          <p class="mb-1">Giá (pp): ${{ tour.price_per_person }}</p>
          <p class="mb-1">Rating: {{ tour.rating }}</p>
          <p class="mb-0"><strong>Xếp hạng hiện tại:</strong> #{{ rank }}</p>
        </div>
      </div>

      <h5>Danh sách xếp hạng theo rating (giảm dần)</h5>
      <div class="list-group">
        <div
          v-for="(t, index) in sortedTours"
          :key="t.tourCode"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>#{{ index + 1 }}</strong>
            <span class="ms-2">{{ t.destination }} ({{ t.tourCode }})</span>
          </div>
          <div>
            <span class="badge bg-secondary">{{ t.rating }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-else class="alert alert-danger">Không tìm thấy tour với mã này.</div> -->
  </div>

  <!-- Button to Open the Modal -->
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import tourPackages from "../data.js";

const route = useRoute();
const tour = ref(null);

const sortedTours = computed(() => {
  return [...tourPackages].sort((a, b) => b.rating - a.rating);
});

const rank = computed(() => {
  if (!tour.value) return "-";
  const idx = sortedTours.value.findIndex(
    (t) => t.tourCode === tour.value.tourCode
  );
  return idx === -1 ? "-" : idx + 1;
});

onMounted(() => {
  const code = route.params.tourCode || route.params.id;
  tour.value = tourPackages.find((t) => t.tourCode === code) || null;
});
</script>

<style scoped>
.list-group-item-primary {
  background-color: rgba(13, 110, 253, 0.08);
}
</style>
