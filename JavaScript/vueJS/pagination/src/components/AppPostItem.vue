<template>
    <div class="card">
        <div class="card__title">{{ title }}</div>
        <div class="card__text">{{ text }}</div>
        <div class="btns">
            <button class="btn" @click="$router.push(`/post/${id}`)" v-if="!openDisabled">Открыть</button>
            <button class="btn danger" @click="deletePost(id)">Удалить</button>
            <button class="btn " @click="$router.push('/')" v-if="!backDisabled">Назад</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
export default {
    props: {
        title: String,
        text: String,
        id: Number,
        userId: Number,
        openDisabled: Boolean,
        backDisabled: Boolean
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const deletePost = (id) => {
            store.dispatch('deletePost', id)
            if (route.path !== '/') {
                router.push('/')
            }
        }

        return {
            deletePost
        }
    }
}
</script>

<style scoped>
.btns {
    display: flex;
    justify-content: space-between;
}
.card >:not(:last-child) {
    margin: 0 0 30px 0;
}
</style>