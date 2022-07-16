<template>
    <div class="container">
        <div class="app">

            <div class="app__top">
                <app-constructor
                    @block-info="blockInfo"    
                ></app-constructor>

                <app-resume
                    :list="list"
                ></app-resume>

            </div>

            <div class="app__bottom">

                <app-button
                    @action="loadComments"
                >
                    Загрузить комментарии
                </app-button>

                <app-comments
                    :arr="comm"
                    v-if="comm.length !== 0"
                ></app-comments>
                
            </div>

        </div>  
    </div>
    
</template>

<script>
import AppConstructorVue from './components/AppConstructor.vue'
import AppResumeVue from './components/AppResume.vue'
import AppButtonVue from './components/AppButton.vue'
import AppCommentsVue from './components/AppComments.vue'

export default {
    data() {
        return {
            list: [],
            comm: []
        }
    },
    methods: {
        blockInfo(textareaValue, selectValue) {
            this.list.push({
                id: this.list.length + 1,
                type: selectValue,
                text: textareaValue
            })
        },
        async loadComments() {
            const fet = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
            const data = await fet.json()
            this.comm = data
        }
    },
    components: {
        'app-constructor': AppConstructorVue,
        'app-resume': AppResumeVue,
        'app-button': AppButtonVue,
        'app-comments': AppCommentsVue
    }
}
</script>

<style>
</style>
