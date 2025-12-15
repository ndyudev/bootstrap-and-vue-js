<template>
    <!-- <div :class="{ active: isActive, 'text-info': hasError}">
        Hello World
    </div>

    <hr> -->
    <button @click="ngayDem = !ngayDem">Ngày/Đêm</button>
    <div v-bind:class="[ngayDem?'bg-light text-dark':'bg-dark text-light']">
        Đây là giao diện
    </div>
    <hr>
</template>

<script setup>
    import { ref } from 'vue';

    const isActive = ref(true);
    const hasError = ref(true);
    const ngayDem = ref(true);
</script>