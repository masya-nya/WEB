<template>
    <div class="news-item">
        <div class="news-item__top">
            <div class="news-item__top-left">
                <div class="news-item__avatar">
                </div>
            </div>
            <div class="news-item__top-right">
                <h2 class="news-item__title">{{ title }}</h2>
                <span class="news-item__time">{{ time }}</span>
                <p class="news-item__from">from <span>{{ name }}</span></p>
            </div>
        </div>
        <hr>
        <div class="news-item__bottom">
            <div class="news-item__bottom__content">
                {{ description }}
            </div>
            <div class="news-item__bottom-gui">
                <div class="news-item__bottom-gui-likes">

                    <fa class="fa like" 
                        :class="{
                            'active': likeStatus
                        }"
                        icon="fa-solid fa-heart" 
                        @click="postLike(name)"/>

                    <span class="news-item__bottom-gui-like"
                          :class="{
                            'active': likeStatus
                          }">
                        {{ likeValue - 1 }}
                    </span>
                </div>
                <div class="news-item__bottom-gui-btns">

                    <fa icon="fa-solid fa-pencil" 
                        class="fa edit"
                        @click="edit"/>

                    <fa icon="fa-solid fa-trash-can" 
                        class="fa trash"
                        @click="deletePost(name)"/>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    props: {
        title: String,
        description: String,
        time: String,
        name: String,
        likeValue: String,
        likeStatus: Boolean 
    },
    methods: {
        ...mapMutations(['editorStatusChange', 'editorValueChange']),
        ...mapActions(['postLike', 'deletePost']),
        edit() {
            this.editorStatusChange(true)
            this.editorValueChange({
                title: this.title, 
                description: this.description,
                name: this.name
            })
        }
    }
}
</script>