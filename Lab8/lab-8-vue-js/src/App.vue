<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <div id="app">
        <RouterView :key="route.fullPath"></RouterView>
    </div>  
</template>

<style scoped>

</style>
