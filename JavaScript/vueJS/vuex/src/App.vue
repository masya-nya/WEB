<template>
    <the-navbar></the-navbar>
    <div class="container">
        <div class="app__item">
            Счетчик {{ $store.getters.counter }} ({{ $store.getters.doubleCounter }}) 
        </div>
        <button class="btn" @click="add">Добавить 5</button>
        <button class="btn danger" @click="incAsync">Добавить 10</button>
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'

export default {
    // data() {
    //     return {
    //         counter: 0
    //     }
    // },
    components: {
        TheNavbar
    },
    methods: {
        add() {
            this.$store.commit('inc', {
                value: 5
            })
        },
        incAsync() {
            this.$store.dispatch('incrAsync', {
                value: 10,
                delay: 150
            })
        }
    }
}
</script>

<style>
</style>
