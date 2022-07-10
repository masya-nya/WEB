<template>
    <div class="app__card" v-if="people.length !== 0">
        <h1>Список людей из firebase</h1>
        <div class="people"
            v-for="(person, id) in people" :key="person.id"
        >{{ id + 1 }}) {{ person.firstName }} ({{ person.id }})
        <button 
            class="btn danger"
            @click="$emit('delete', person.id)"
        >Удалить человека</button>
        </div>
    </div>
    <div class="app__card center" v-else>
        <h1>Людей пока нет.</h1>
        <button 
            class="btn"
            @click="$emit('load')"
        >Загрузить людей</button>   
    </div>
</template>

<script>
export default {
    emits: ['load', 'delete'],
    props: {
        people: {
            type: Array
        }
    }
}
</script>