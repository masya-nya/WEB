<template>
    <div class="app__item resume">
        <div 
            class="app__title"
            v-if="list.length === 0"    
        >
            Добавьте первый блок, чтобы увидеть результат
        </div>
        <div v-for="item in list" :key="item.id">
            <component 
                :is="'app-' + item.type"
                :class="'app__' + item.type"
                v-bind="{value: item.text}"
            ></component>
        </div>
    </div>
</template>

<script>
import AppTitleVue from './subcomponents/AppTitle.vue'
import AppSubtitleVue from './subcomponents/AppSubtitle.vue'
import AppParagraphVue from './subcomponents/AppParagraph.vue'
import AppAvatarVue from './subcomponents/AppAvatar.vue'

export default {
    props: {
        list: {
            type: Array
        }
    },
    data() {
        return {
        }
    },
    components: {
        'app-title': AppTitleVue,
        'app-subtitle': AppSubtitleVue,
        'app-text': AppParagraphVue,
        'app-avatar': AppAvatarVue
    }
}
</script>