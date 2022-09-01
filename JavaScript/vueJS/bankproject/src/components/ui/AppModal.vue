<template>
    <div class="modal" @mousedown.self="$emit('close')">
        <div class="modal__body">
            <h2 class="modal__title">{{ title }}</h2>
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['close'],
    props: {
        title: {
            type: String,
            required: false
        }
    }
}
</script>

<style>

</style>