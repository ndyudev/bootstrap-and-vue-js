<template>
    <div>
        <input type="text" v-model="userInput" />
        <p> Giá trị bạn nhập: {{ userInput }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const userInput = ref("Message")

</script>

<style lang="scss" scoped></style>
