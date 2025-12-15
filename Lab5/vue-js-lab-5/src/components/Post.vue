<template>
    <div id="app">
        <h1>Ứng dụng blog nhỏ với Vue.js</h1>
        <CreatePost @add-post="addPost"/>
        <PostList :posts="posts"/>
    </div>
</template>

<script setup>
    import PostList from './PostList.vue'
    import CreatePost from './CreatePost.vue'

    import { ref } from 'vue'
    const posts = ref([])

    function addPost(newPost) {
        posts.value.push(newPost);
    }
</script>

<style lang="css" scoped>
    #app {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

</style>