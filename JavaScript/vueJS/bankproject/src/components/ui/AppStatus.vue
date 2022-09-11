<template>
    <div class="status" :class="typeMap[type]">
        {{ textMap[type] }}
    </div>
</template>

<script>
import textMap from './statusObj'
export default {
    props: {
        type: {
            type: String,
            required: true,
            validator(value) {
                return ['active', 'done', 'canceled', 'pending'].includes(value)
            }
        }
    },
    setup() {
        const typeMap = {
            active: 'active',
            done: 'done',
            canceled: 'canceled',
            pending: 'active'
        }

        return {
            textMap,
            typeMap
        }
    }
}
</script>

<style>

</style>