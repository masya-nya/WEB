<template>
    <form class="app__item" @submit.prevent="submit">
        <h2>Мини клон Gmail</h2>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" v-model.trim="email">
        </div>

        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password">
        </div>

        <button class="btn primary" type="submit">Войти</button>
        <router-link to="/forget">
            <button class="btn warning">Забыл пароль?</button>
        </router-link>
    </form>
</template>

<script>
export default {
    inject: ['login'],
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        isValid() {
            return this.email !== '' && this.password !== ''
        }
    },
    methods: {
        submit() {
            if (this.isValid) {
                this.login()
            }
        }
    }
}
</script>

<style scoped>
h2 {
    font-size: 24px;
    margin: 0 0 10px 0;
}
</style>