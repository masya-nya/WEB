<template>
    <div class="sidebar" v-if="$store.getters['messages/isOpen']">
        <div class="sidebar__title">
            <h1>Ваши сообщения</h1>
            <span class="CLOSE_SIDEBAR" @click="close" >&#10006;</span>
        </div>
        <ul class="sidebar__body" v-if="messages.length !== 0">
            <message-body 
                v-for="message in messages" :key="message.id"
                :text="message.text"
                :status="message.status"
                :id="message.id"
            ></message-body>
            <span class="sidebar__clear" @click="clearSidebar">Удалить всё</span>
        </ul>
        <h2 class="H2_ELSE" v-else>
            Список ваших сообщений пуст
        </h2>
    </div>
</template>
<script>
import MessageBody from "./MessageBody.vue";
import { useStore } from "vuex";
import { computed, watch } from 'vue';

export default {
    setup() {
        const store = useStore();

        const messages = computed(() => store.getters['messages/messages']);

        const close = () => {
            store.commit('messages/statusChange', false)
        };

        const clearSidebar = () => {
            store.commit('messages/clearSidebar')
            store.commit('messages/statusChange', false)
        }

        watch(store.getters['messages/messages'], (newV) => {
            if(newV.length !== 0) {
                store.commit('messages/statusChange', true)
            }
        })

        return {
            messages,
            close,
            clearSidebar
        }
    },
    components: {MessageBody}
}
</script>
<style scoped>
.CLOSE_SIDEBAR {
    cursor: pointer;
    transition: all 0.1s ease;
}
.CLOSE_SIDEBAR:hover {
    transform: scale(1.1);
}
.H2_ELSE {
    font-size: 16px;
    color: #aaa;
    text-align: center;
}
</style>