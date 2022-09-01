<template>
    <div class="card">
        <div class="card__title">{{ title }}</div>
        <div class="card__text">{{ text }}</div>
        <div class="btns">
            <button class="btn" @click="$router.push(`/post/${userId}`)" v-if="!openDisabled">Открыть</button>
            <button class="btn danger" @click="deletePost(id)">Удалить</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
    props: {
        title: String,
        text: String,
        id: Number,
        userId: Number,
        openDisabled: Boolean
    },
    setup() {
        const store = useStore();
        const deletePost = (id) => {
            store.dispatch('deletePost', id)
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