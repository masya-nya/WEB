<template>
    <div class="app__item">
        <app-alert
            :title="alertTitle"
            :text="alertText"
            type="warning"
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
</template>
<script>
import AppAlertVue from './AppAlert.vue'
import mixin from './AppMixin.js'

export default {
    mixins: [mixin],
    data() {
        return {
            alertTitle: 'Внимание!',
            alertText: 'Это очень важно сообщение!',
        }
    },
    methods: {},
    components: {
        'app-alert': AppAlertVue
    }
}
</script>