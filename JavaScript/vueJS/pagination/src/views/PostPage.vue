<template>
    <div class="card user">
        <div class="body">
            <div class="user__title">
                name: <span>{{ user.name }}</span>
            </div>
            <div class="user__username">
                username: <span>{{ user.username }}</span>
            </div>
            <div class="user__email">
                email: <span>{{ user.email }}</span>
            </div>
            <div class="user__from">
                from: <span>{{ user.address.city }}</span>
            </div>
        </div>
        <button class="btn" @click="$router.push('/')">Назад</button>
    </div>
    <app-post-item
        v-for="post in posts" :key="post.id"
        :title="post.title"
        :text="post.body"
        :id="post.id"
        :openDisabled="true"
    ></app-post-item>
</template>

<script>
import AppPostItem from '../components/AppPostItem.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    setup() {
        const route = useRoute();
        const store = useStore();
        const posts = computed(() => store.state.fetchData.filter(e => e.userId === +route.params.userId) || { title: '',body: ''})
        const user = computed(() => store.state.users.find(e => e.id === +route.params.userId))
        console.log(posts)
        return {
            posts,
            user
        }
    },
    components: {AppPostItem}
}
</script>

<style>
.user {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
span {
    font-size: 20px;
}
</style>