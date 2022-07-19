<template>
    <div class="container">
        <div class="app">
            <div class="app__item">
                <app-alert
                    :title="alertTitle"
                    :text="alertText"
                    type="danger"
                    :closable="true"
                    @close="alert = false"
                    v-if="alert"
                ></app-alert>
                <div class="app__item">
                    <button 
                        class="btn"
                        @click="toggleAlert"
                    >{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
                </div>
            </div>

            <app-block
            ></app-block>
        </div>
    </div>
</template>

<script>
import AppAlertVue from './components/AppAlert.vue'
import AppBlockVue from './components/AppBlock.vue'
import mixin from './components/AppMixin.js'

export default {
    mixins: [mixin],
    data() {
        return {
            alertTitle: 'Внимание!',
            alertText: 'Это очень важно сообщение!'
        }
    },
    methods: {
    },
    components: {
        'app-alert': AppAlertVue,
        'app-block': AppBlockVue
    }
}
</script>