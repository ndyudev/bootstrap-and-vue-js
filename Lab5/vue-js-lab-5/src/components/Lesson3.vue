<template>
    <div class="col-sm-8 m-4">
        <h1>Thông tin cá nhân</h1>
        <form>
            <div class="mb-3">
                <label>Họ và tên:</label>
                <input type="text" class="form-control" placeholder="Nhập họ và tên" v-model="userInfo.name">
            </div>

            <div class="mb-3">
                <label>Tuổi:</label>
                <input type="number" class="form-control" placeholder="Nhập tuổi" v-model="userInfo.age">
            </div>

            <div class="mb-3">
                <label>Email:</label>
                <input type="email" class="form-control" placeholder="Nhập email" v-model="userInfo.email">
            </div>
            <div class="mt-4 p-3 bg-dark text-white rounded">
                <h2>Thông tin đã nhập:</h2> 
                <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p> 
                <p><strong>Tuổi:</strong> {{ userInfo.age }}</p> 
                <p><strong>Email:</strong> {{ userInfo.email }}</p> 
            </div>
        </form>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    const userInfo = reactive({
        name: '',
        age: null,
        email: ''
    })
</script>

<style lang="scss" scoped>

</style>