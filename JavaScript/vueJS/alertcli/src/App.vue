<template>
    <div class="container">
        <div class="app">
            <div class="app__item">
                <h2 class="app__title">{{ $i18n('app.title') }}</h2>
                <button class="btn primary"
                        @click="$alert('Wow it is working!')"
                >ALERT</button>
                <button class="btn primary"
                        @click="changeLang"
                >{{ $i18n('app.button.changeLng') }}</button>
                <button class="btn primary"
                        @click="modalCheck = !modalCheck"
                >{{ $i18n('app.button.modal') }}</button>

                <teleport to="body">
                    <app-modal
                        v-if="modalCheck"
                        @close="modalCheck = false"
                    ></app-modal>
                </teleport>
            </div>
        </div>
    </div>
</template>

<script>
import AppModalVue from './components/AppModalView.vue'

export default {
    inject: ['switchLanguage'],
    mixins: [],
    data() {
        return {
            modalCheck: false
        }
    },
    methods: {
        changeLang() {
            this.switchLanguage()
            this.$forceUpdate()
        }
    },
    mounted() {
    },
    directives: {
    },
    components: {
        'app-modal': AppModalVue
    }
}
</script>

<style>
</style>
