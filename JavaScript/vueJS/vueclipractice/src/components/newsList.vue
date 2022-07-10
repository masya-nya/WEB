<template>
    <hr>
    <h4>{{ title }}</h4>
    <ul>
        <li v-for="item in news" :key="item">
            {{ item.id }}) {{ item.title }}
        </li>
    </ul>
</template>
<!-------------------------------------------------------------------------------->
<script>
    export default {
        emits: [],
        props: {
            
        },  
        data() {
            return {
                
            }
        },
        inject: ['title', 'news']
    }
</script>