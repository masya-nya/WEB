<template>
    <div class="auth">
        <form class="auth-body" @submit.prevent="onSubmit">
            <div 
                class="danger" 
                v-if="isTooManyAttempts"
            >Слишком много попыток, даю вам время передохнуть ({{ timeout / 1000 }})</div>
            
            <h1 
                class="auth__title" 
                @click="count"
            >Войти в систему</h1>

            <div class="form-control">
                <label for="email">Email</label>
                <input :class="[{invalid: eError}]" placeholder="Введите email" type="email" id="email" v-model="email" @blur="eBlur">
                <small class="danger" v-if="eError">{{ eError }}</small>
            </div>
                
            <div class="form-control">
                <label for="password">Пароль</label>
                <input :class="[{invalid: pError}]" placeholder="Введите пароль" type="password" id="password" v-model="password" @blur="pBlur">
                <small class="danger" v-if="pError">{{ pError }}</small>
            </div>
            <div class="auth__btns">
                <button class="btn" type="submit" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
                <a class="auth__signup" href="#" @click.prevent="toSignupPage">Создать аккаунт</a>
            </div>
        </form>
    </div>
    <div v-if="!messagesIsOpen" @click="openMessage" class="MESSAGE_OPEN">
        &#9993;
    </div>
</template>
<script>
import { useLoginForm } from '../use/login-form'

export default {
    setup() {
        document.title = 'Авторизация';
        return { ...useLoginForm() }
    }
}
</script>
<style scoped>
</style>