<template>
    <div class="container">
        <div class="app">

            <the-modal-editor
                v-if="editorStatus"
            ></the-modal-editor>

            <the-news-constructor
            ></the-news-constructor>

            <app-news-item  
                v-for="item in allPosts" :key="item.id"
                :title="item.title"
                :description="item.description"
                :time="item.time"
                :name="item.id"
                :like-value="item.like.value"
                :like-status="item.like.status"
            ></app-news-item>
        </div>
    </div>
</template>

<script>
import AppNewsItem from './components/AppNewsItem.vue'
import TheNewsConstructor from './components/TheNewsConstructor.vue'
import TheModalEditor from './components/TheModalEditor.vue'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['allPosts', 'editorStatus'])
    },
    methods: {
    },
    async mounted() {
        this.$store.dispatch('fetchNews')
    },
    components: {AppNewsItem, TheNewsConstructor, TheModalEditor}
}
</script>
    
<style>
</style>
