<template>
    <div class="container">
        <div class="app">
            <div class="app__item">
                <h2 class="app__title"
                    v-color.hover="myColor"  
                >Директивы</h2>

                <div class="form-control">
                    <label for="inp">Заголовок</label>  
                    <input 
                        v-focus
                        type="text" id="inp">
                </div>
                <button class="btn primary"
                        @click="myColor = myColor === 'darkblue' ? 'darkred' : 'darkblue'"
                >Поменять цвет</button>
            </div>
        </div>
    </div>
</template>

<script>
import focusDirective from './components/focusDirective.js'
import colorDirective from './components/colorDirective.js'

export default {
    mixins: [],
    data() {
        return {
            myColor: 'darkred',
        }
    },
    methods: {
    },
    mounted() {
    },
    directives: {
        focus: focusDirective,
        color: colorDirective
    },
    components: {
    }
}
</script>

<style>
</style>
