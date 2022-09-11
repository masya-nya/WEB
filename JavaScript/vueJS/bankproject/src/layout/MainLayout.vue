<template>
    <the-header></the-header>
    <div class="container">
        <router-view></router-view>
    </div>
</template>
<script>
import TheHeader from '../components/ui/TheHeader.vue'
export default {
    setup() {

    },
    components: {TheHeader}
}
</script>