<template>
    <the-header></the-header>
    <div class="container">
        <router-view></router-view>
    </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
export default {
    setup() {

    },
    components: {TheHeader}
}
</script>