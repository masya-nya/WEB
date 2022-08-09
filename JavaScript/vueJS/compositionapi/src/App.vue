<template>
    <the-header></the-header>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
    mounted() {
        this.$store.dispatch('fetchTasks')
    },
    setup() {
    },
    components: {TheHeader}
}
</script>

<style scoped>
.container {
    padding: 70px 0 0 0;
}
</style>
