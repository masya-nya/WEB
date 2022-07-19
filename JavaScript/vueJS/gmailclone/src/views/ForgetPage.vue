<template>
    <div class="app__item">
        <h2>Забыл пароль? Так вспоминай!</h2>
        <button class="btn primary" @click="$router.push('/login')">Обратно к логину</button>
        <button class="btn primary" @click="goToMain">Обратно к логину 2</button>
    </div>
</template>
<script>    
export default {
    methods: {
        goToMain() {
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
    h2 {
        font-size: 24px;
        margin: 0 0 15px 0;
    }
</style>