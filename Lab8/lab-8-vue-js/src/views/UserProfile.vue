<template>
    <div>
        <h2>Thông tin người dùng</h2>

        <nav>
            <!-- Dùng :to gọi cái tên của componet đó ra luôn khỏi cần phải path -->
            <RouterLink :to="{ name: 'UserProfileInfo' }">Thông tin</RouterLink> | 
            <RouterLink :to="{ name: 'UserProfileSettings' }">Cài đặt thông tin</RouterLink>
        </nav>

        <hr>

        <RouterView/>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>