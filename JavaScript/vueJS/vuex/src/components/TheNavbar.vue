<template>
    <nav class="navbar">
        <h1 class="navbar__title">
            Лого ({{ counter }})
        </h1>
        <button class="btn" @click="add">Добавить</button>
    </nav>
</template>
<script>
export default {
    computed: {
        counter() {
            return this.$store.getters.counter
        }
    },
    methods: {
        add() {
            this.$store.commit('inc', {
                value: 1
            })
        }
    }
} 
</script>