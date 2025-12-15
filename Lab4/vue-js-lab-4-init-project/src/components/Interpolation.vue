<template>
    <div>
        <h1>Hiển thị  nội dung</h1>
        <h2>{{ message }}</h2>
        <h2>{{ number + 7 }}</h2>
        <h2>{{ sayHi() }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
        message: "Xin chào Vue JS",
        number: 10
        };
    },
    methods: {
        sayHi() {
            return 'Đây là một phương thức'
        }
    }
};
</script>

<style lang="scss" scoped></style>
