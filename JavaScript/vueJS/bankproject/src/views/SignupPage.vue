<template>
    <div class="signup">
        <form class="signup-body" @submit.prevent="onSubmit">
            <div 
                v-if="isTooManyAttempts"
                class="danger"
            >Слишком много попыток, даю вам время передохнуть ({{ timeout / 1000 }})</div>
            
            <h1 
                class="signup__title" 
                @click="count"
            >Создать аккаунт</h1>

            <div class="form-control">
                <label for="email">Email</label>
                <input 
                    :class="[{invalid: eError}]" 
                    placeholder="Введите email" 
                    type="email" id="email" 
                    v-model="email" 
                    @blur="eBlur">
                <small class="danger" v-if="eError">{{ eError }}</small>
            </div>
                
            <div class="form-control">
                <label for="password">Пароль</label>
                <div class="form-control__password">
                    <input 
                        ref="inputPassword" 
                        :class="[{invalid: pError}]" 
                        placeholder="Введите пароль" 
                        type="password" 
                        id="password" 
                        v-model="password" 
                        @blur="pBlur">
                    <font-awesome-icon 
                        @click="passwordToggle($refs.inputPassword)" 
                        class="PASSWORD-TOGGLE" 
                        :icon="FAIconValue" /> 
                </div>
                <small 
                    v-if="pError"
                    class="danger"
                >{{ pError }}</small>
            </div>
            <div class="signup__btns">
                <button 
                    class="btn" 
                    type="submit" 
                    :disabled="isSubmitting || isTooManyAttempts"
                >Создать</button>
                <a 
                    class="signup__auth" 
                    href="#" 
                    @click.prevent="toAuthPage"
                >Войти в аккаунт</a>
            </div>
        </form>
    </div>
    <div 
        v-if="!messagesIsOpen" 
        @click="openMessage" 
        class="MESSAGE_OPEN"
    >&#9993;</div>
</template>

<script>
import { useSignupForm } from '../use/signup-form'

export default {
    setup() {
        document.title = 'Регистрация';
        return { ...useSignupForm() }
    }
}
</script>

<style>

</style>