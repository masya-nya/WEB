<template>
    <div class="search">
        <app-search-input></app-search-input>
        <button class="btn" @click="$store.commit('modalCreateStatusChange', true)">Создать</button>
    </div>
    <app-post-item
        v-for="post in posts" :key="post.id"
        :title="post.title"
        :text="post.body"
        :id="post.id"
        :userId="post.userId"
        :openDisabled="false"
    ></app-post-item>
    <paginate
        v-model="page"
        :page-count="pagesCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Назад'"
        :next-text="'Вперед'"
    ></paginate>
    <the-modal-create
        v-if="$store.getters.modalCreateStatus"
    ></the-modal-create>
</template>

<script>
import { computed } from 'vue'; 
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router'
import AppPostItem from '../components/AppPostItem.vue';
import AppSearchInput from '../components/AppSearchInput.vue'
import TheModalCreate from '@/components/ui/TheModalCreate.vue'

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const posts = computed(() => store.getters.posts)
        const pageChangeHandler = (page) => {
            router.push(`${route.path}?page=${page}`)
            store.commit('pageChangeHandler', page)
        }
        return {
            pagesCount: computed(() => store.getters.postsCount),
            posts,
            pageChangeHandler,
            page: computed(() => +route.query.page || 1)
        }
    },
    components: {AppPostItem, AppSearchInput, TheModalCreate}
}
</script>

<style scoped>
.search {
    display: flex;
    justify-content: flex-start;
}
</style>