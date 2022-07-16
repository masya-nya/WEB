<template>
    <button 
        class="app__button btn"
        @click="$emit('action')"
    ><slot></slot></button>
</template>
<script>
export default {
    emits: ['action'],
    props: {
    }
}
</script>