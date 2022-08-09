<template>
    <div class="card">
        <h1 class="card__title">
            Страницы с адресом "{{ urlAdress }}" не существует 
        </h1>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const urlAdress = route.path
        return {
            urlAdress
        }
    }
} 
</script>
<style scoped>
h1 {
    text-align: center;
    padding: 20px 0;
}
</style>