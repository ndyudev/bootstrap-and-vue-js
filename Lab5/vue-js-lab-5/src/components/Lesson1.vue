<template>
    <div class="p-5">
        <p>{{ message }}</p>
        <button @click="changeMessage" class="btn btn-dark">Thay đổi thông điệp</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const message = ref('Thông điệp ban đầu!')

    function changeMessage() {
        message.value = 'Thông điệp đã thay đổi !'
    }
</script>

<style lang="scss" scoped>

</style>