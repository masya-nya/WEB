<template>
    <header class="header navbar" v-if="visible">
        <h3 class="navbar__title">
            GmailClone
        </h3>
        <ul class="navbar__nav">
            <li class="navbar__item">
                <router-link to="/dashboard">Главная</router-link>
            </li>
            <li class="navbar__item">
                <router-link to="/mail">Почта</router-link>
            </li>
            <li class="navbar__item">
                <a href="#" @click.prevent="exit()">Выйти</a>
            </li>
        </ul>
    </header>
</template>
<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    inject: ['logout'],
    methods: {
        exit() {
            this.logout()
        }
    }

}
</script>