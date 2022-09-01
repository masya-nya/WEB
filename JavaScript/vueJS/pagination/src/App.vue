<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        onMounted(() => {
            store.dispatch('getPosts')
            store.dispatch('getUsers')
        })
    }
}
</script>

<style>

</style>