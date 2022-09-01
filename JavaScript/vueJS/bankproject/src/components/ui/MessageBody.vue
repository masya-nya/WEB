<template>
    <div :class="['message', status]">
        <p>{{ text }}</p>
        <span class="CLOSE_SIDEBAR" @click="close(id)" >&#10006;</span>
    </div>
</template>
<script>
import { useStore } from 'vuex'

export default {
    props: {
        status: String,
        text: String,
        id: Number
    },
    setup() {
        const store = useStore();

        const close = (id) => {
            store.commit('messages/deleteMessage', id)
        }

        return {
            close
        }
    }
}
</script>
<style scoped>
.CLOSE_SIDEBAR {
    cursor: pointer;
    padding: 0 0 0 5px;
}
</style>