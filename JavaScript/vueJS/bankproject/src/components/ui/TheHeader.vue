<template>
    <div class="header">
        <div class="header__body">
            <div class="header__title" @click="$router.push('/')">
                Банк<span class="YELLOW_WORD">ъ</span>
            </div>
            <ul class="header__navbar">
                <li>
                    <router-link to="/">Заявки</router-link>
                </li>
                <li>
                    <router-link to="/help">Помощь</router-link>
                </li>
                <li>
                    <a href="#" @click.prevent="openMessages">Сообщения</a>
                </li>
                <li>
                    <a href="#" @click.prevent="logout">Выход</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
    setup() {
        const router = useRouter()
        const store = useStore()

        const openMessages = () => {
            store.commit('messages/statusChange')
        }

        const logout = () => {
            store.commit('auth/logout');
            router.push('./auth')
        }
        return {
            logout,
            openMessages
        }
    }
}
</script>
<style>
.YELLOW_WORD {
    color: rgb(252, 226, 36);
}
</style>