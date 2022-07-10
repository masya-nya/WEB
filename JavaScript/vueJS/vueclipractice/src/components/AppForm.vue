<template>
    <div class="container">
        <div class="app">
            <form class="app__card" @submit.prevent="submitForm">
                <h1>Анкета на Vue разработчика!</h1>
                
                <app-input
                    type="text"
                    label="Как тебя зовут?"
                    placeholder="Введи имя"
                    :error="errors.name"
                    v-model.trim="nameValue"
                ></app-input>

                <app-input
                    type="number"
                    label="Введи свой возраст"
                    v-model.number="ageValue"
                ></app-input>

                <app-city
                    label="Твой город"
                    v-model="cityValue"
                ></app-city>

                <div class="form-checkbox">
                    <span class="label">Готов к переезду в Токио?</span>
                    <div class="checkbox">
                        <label><input 
                            type="radio" 
                            name="trip" 
                            value="yes"
                            v-model="relocateValue"
                        /> Да</label>
                    </div>

                    <div class="checkbox">
                        <label><input 
                            type="radio" 
                            name="trip" 
                            value="no"
                            v-model="relocateValue"
                        /> Нет</label>
                    </div>
                </div>

                <div class="form-checkbox">
                    <span class="label">Что знаешь во Vue?</span>
                    <div class="checkbox">
                        <label><input 
                        type="checkbox" 
                        name="skills"
                        value="vuex"
                        v-model="skillsValue"
                    /> Vuex</label>
                    </div>
                    <div class="checkbox">
                        <label><input 
                        type="checkbox" 
                        name="skills"
                        value="cli"
                        v-model="skillsValue"
                    /> Vue CLI</label>
                    </div>
                    <div class="checkbox">
                        <label><input 
                        type="checkbox" 
                        name="skills"
                        value="router"
                        v-model="skillsValue"
                    /> Vue Router</label>
                    </div>
                </div>

                <div class="form-checkbox">
                    <span class="label">Принять пользовательское соглашение:</span>
                    <div class="checkbox">
                        <label><input 
                        type="checkbox"
                        v-model="checkedValue"
                    /> С правилами ознакомлен.</label>
                    </div>
                </div>

                <button 
                    type="submit" 
                    class="btn primary"
                    :class="{
                        'btn-cancel': !checkedValue
                    }"
                >Отправить</button>
            </form>
        </div>
    </div>
</template>
<!-------------------------------------------------------------------------------------->
<script>
import AppInputVue from './components/AppInput.vue';
import AppCityVue from './components/AppCity.vue';
export default {
    data() {
        return {
            nameValue: '',
            ageValue: 18,
            cityValue: 'rnd',
            relocateValue: null,
            skillsValue: [],
            checkedValue: false,
            errors: {
                name: null
            }
        }
    },
    provide() {
        return {
        }
    },
    methods: {
        fromIsValid() {
            let isValid = true;
            if (this.nameValue.length === 0) {
                this.errors.name = '*Поле имени не может быть пустым*'
                isValid = false;
            } else {
                this.errors.name = null;
            }
            return isValid
        },
        submitForm() {
            if(this.fromIsValid()) {
                console.group('Group Data');
                console.log('Name:', this.nameValue);
                console.log('Age:', this.ageValue);
                console.log('City:', this.cityValue);
                console.log('Relocate:', this.relocateValue);
                console.log('Skills:', this.skillsValue);
                console.log('Checked:', this.checkedValue);
                console.groupEnd();
            }
        }
    },
    computed: {
    },
    components: {
        'app-input': AppInputVue,
        'app-city': AppCityVue
    },
}
</script>
<!-------------------------------------------------------------------------------------->
<style lang="scss">
</style>
