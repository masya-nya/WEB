<template>
    <div class="alert " :class="type">
        <h1 class="alert__title">{{ title }}</h1>
        <p>{{ text }}</p>
        <button 
            class="btn"
            :class="type"
            v-if="closable"
            @click="$emit('close')"
        >Закрыть</button>
    </div>
</template>
<script>
export default {
    emits: ['close'],
    props: {
        title: {
            type: String
        },
        text: {
            type: String
        },
        type: {
            type: String,
            default: 'primary',
            validator(value) {
                return ['primary', 'danger', 'warning'].includes(value)
            }
        },
        closable: {
            type: Boolean,
            default: false
        },
        visability: {
            type: Boolean
        }
    }
}
</script>