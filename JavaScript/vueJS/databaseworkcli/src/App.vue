<template>
    <div class="container">
        <div class="app">
            <app-alert :alert="alert" @close="closeAlert"></app-alert>
            <form class="app__card" @submit.prevent="createPerson">
                <h1>Работа с базой данных Firebase</h1>

                <app-input type="text" label="Введите имя" placeholder="Введи имя" v-model.trim="nameValue"></app-input>

                <button type="submit" class="btn primary" :class="{
                    'btn-cancel': nameValue.length < 2
                }">Создать человека</button>

            </form>

            <app-loader v-if="loading"></app-loader>

            <app-people-list v-else :people="people" @load="loadPeople" @delete="deletePeople"></app-people-list>
        </div>
    </div>
</template>
<!-------------------------------------------------------------------------------------->
<script>
import AppInputVue from './components/AppInput.vue'
import AppPeopleList from './components/AppPeopleList.vue'
import AppAlert from './components/AppAlert.vue'
import AppLoader from './components/AppLoader.vue'
//import axios from 'axios'

export default {
    data() {
        return {
            url: 'https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/people.json',
            nameValue: '',
            people: [],
            alert: null,
            loading: false
        }
    },
    provide() {
        return {
        }
    },
    mounted() {
        this.loadPeople()
    },
    methods: {
        closeAlert() {
            this.alert = null;
        },
        async createPerson() {
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: this.nameValue
                })
            });
            const fireaseData = await response.json();

            this.people.push({
                id: fireaseData.name,
                firstName: this.nameValue
            })

            this.nameValue = '';
        },
        async loadPeople() {
            // const {data} = await axios.get(this.url);
            // const res = Object.keys(data).map(key => {
            //     return {
            //         id: key,
            //         firstName: data[key].firstName 
            //     }
            // })
            // console.log(res)
            try {
                this.loading = true;
                const response = await fetch(this.url)
                const json = await response.json()
                if (!json) {
                    throw new Error('Список людей пуст.')
                }
                setTimeout(() => {
                    this.people = Object.keys(json).map(key => {
                        return {
                            id: key,
                            firstName: json[key].firstName
                        }
                    })
                    this.loading = false;
                }, 500)

            } catch (e) {
                this.alert = {
                    type: 'danger',
                    title: 'Ошибка!',
                    text: e.message
                }
                this.loading = false;
            }

        },
        async deletePeople(id) {
            try {
                //await axios.delete(`https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
                await fetch(`https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`, {
                    method: 'DELETE'
                })
                const removedPerson = this.people.filter(person => person.id === id);
                this.people = this.people.filter(person => person.id !== id);
                this.alert = {
                    type: '',
                    title: 'Успешно!',
                    text: `Пользователь "${removedPerson[0].firstName}" удален.`
                }
            } catch (e) {
                console.log(e.message)
            }
        }
    },
    computed: {
    },
    components: {
        'app-input': AppInputVue,
        'app-people-list': AppPeopleList,
        'app-alert': AppAlert,
        'app-loader': AppLoader
    }
}
</script>
<!-------------------------------------------------------------------------------------->
<style lang="scss">
</style>
