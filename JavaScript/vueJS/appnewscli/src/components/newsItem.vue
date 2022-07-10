<template>
    <div class="app__card news">
        <h3 class="news__title">
           {{ id }}) {{ title }}
        </h3>
        <btn-component 
            @action="open"
        >{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</btn-component>
        <div v-if="isNewsOpen">
        <hr>
            <p>{{ text }}</p>
            <btn-component
                    @action="readNews(id)"
                    color="danger"
            >{{ wasRead ? 'Отменить' : 'Прочитано' }}</btn-component>
            <news-list></news-list>
        </div>
    </div>
</template>
<!------------------------------------------------------------------------>
<script>
import btnComponentVue from './btnComponent.vue'
import newsListVue from './newsList.vue'
    export default {
        // props: ['title', 'id', 'text'],   
        // emits: ['open-news'],
        props: {
            title: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            },
            text: {
                type: String,
                required: false,
                default: 'news'
            },
            isOpen: Boolean,
            wasRead: Boolean
        },
        emits: {
            'open-news': null,
            'read-news'(id) {
                if(id) {
                    return true
                }
                console.warn('Нет параматера id для emit(read-news)')
                return false
            }
        },
        data() {
            return {
                isNewsOpen: this.isOpen
            }
        },
        methods: {
            open() {
                this.isNewsOpen = !this.isNewsOpen
                if(this.isNewsOpen){
                    this.$emit('open-news')
                }
            },
            readNews(id) {
                this.$emit('read-news', id)
            }
        },
        components: {
            'btn-component': btnComponentVue,
            'news-list': newsListVue
        }
    }
</script>