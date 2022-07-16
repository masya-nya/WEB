<template>
    <div class="app__item constructor">

        <label for="type">Тип блока</label>
        <select id="type"
                v-model="selectValue"
        >
            <option value="title">Заголовок</option>
            <option value="subtitle">Подзаголовок</option>
            <option value="avatar">Аватар</option>
            <option value="text">Текст</option>
        </select>
        
        <label for="text">Значение</label>
        <textarea 
            id="text" 
            cols="30" rows="7"
            v-model="textareaValue"
        ></textarea>

        <app-buton
            @action="pushBlock"
            :disabled="textareaValue.length < 2"
            
        >Добавить</app-buton>
    </div>
</template>

<script>
import AppButtonVue from './AppButton.vue'

export default {
    emits: ['block-info'],
    props: {

    },
    data() {
        return {
            textareaValue: '',
            selectValue: 'title'
        }
    },
    methods: {
        async pushBlock() {
            this.$emit('block-info', this.textareaValue, this.selectValue)
            this.textareaValue = ''
        }
    },
    components: {
        'app-buton': AppButtonVue
    }
}
</script>