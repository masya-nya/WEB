<template>
    <div class="question" @click="isOpen = !isOpen">
        <div class="question__title">
            {{ quest.title }}
        </div>
        <div class="question__text" v-if="isOpen">
            {{ quest.text }}
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: {
        quest: {
            type: Object,
            required: true,
        }
    },
    setup() {
        return {
            isOpen: ref(false)
        }
    }
}
</script>

<style>

</style>