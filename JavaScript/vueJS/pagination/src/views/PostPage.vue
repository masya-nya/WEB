<template>
    <app-post-item
        :title="post.title"
        :text="post.body"
        :id="post.id"
        :openDisabled="true"
        :backDisabled="false"
    ></app-post-item>
    <button class="btn" @click="loadComments(post.id)">
            Загрузить комментарии
        </button>
    <div class="comments" v-if="comments.length !== 0">
        <div class="comments__item card" v-for="comment in comments" :key="comment.id">
            <div class="comments__title">{{ comment.name }}</div>
            <div class="comments__email">from: {{ comment.email }}</div>
            <div class="comments__text">{{ comment.body }}</div>
        </div>
    </div>
    <div class="else" v-if="commentStatus">
        Комментарии к данному посту отсутствуют
    </div>
</template>

<script>
import AppPostItem from '../components/AppPostItem.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
export default {
    setup() {
        const route = useRoute();
        const store = useStore();
        const comments = ref([])
        const commentStatus = ref(false)
        
        const post = computed(() => store.state.fetchData.find(e => e.id === +route.params.userId) || { title: '',body: ''})
        const user = computed(() => store.state.users.find(e => e.id === +route.params.userId))
        
        const loadComments = async (id) => {
            comments.value = await store.dispatch('getComments', id)
            if(comments.value.length === 0){
                commentStatus.value = true;
            }
            console.log(comments.value)
        }
        return {
            post,
            user,
            loadComments,
            comments,
            commentStatus
        }
    },
    components: {AppPostItem}
}
</script>

<style scoped>
.comments__item >:not(:last-child) {
    margin: 0 0 15px 0;
}
.comments__title {
    font-size: 26px;
    padding: 3px;
}
.comments__email {
    color: #ccc;
}
.comments__text {
    word-break: break-all;
}
.else {
    font-size: 16;
    padding: 10px;
}
</style>