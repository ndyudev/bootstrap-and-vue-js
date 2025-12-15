<template>
    <div>
        <h1>{{ greeting }}</h1>
        <button @click="changeGreeting" v-html="buttonTitle"></button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const buttonTitle = ref('Xin chào!')
    const greeting = ref("Lời chào ban đầu")
    
    const changeGreeting = () => {
        buttonTitle.value = 'Hi'
        greeting.value = "Lời chào đã được thay đổi"
    }
</script>

<style lang="scss" scoped>

</style>