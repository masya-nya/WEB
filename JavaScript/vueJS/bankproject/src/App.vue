<template>
    <component :is="layout + '-layout'" v-if="layout" />
    <app-messages-sidebar></app-messages-sidebar>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import MainLayout from './layout/MainLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';
import AppMessagesSidebar from './components/ui/AppMessagesSidebar.vue';

export default {
    setup() {
        const route = useRoute();

        return {
            layout: computed(() => route.meta.layout)
        }
    },
    components: {MainLayout, AuthLayout, AppMessagesSidebar}
}
</script>

<style>
</style>
