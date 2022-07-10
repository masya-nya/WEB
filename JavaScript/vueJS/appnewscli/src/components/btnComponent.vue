<template>
    <button 
        class="btn" 
        :class="color"
        @click="$emit('action')"
        ><slot />
    </button>
</template>
<!-------------------------------------------------------------------------------->
<script>
    export default {
        emits: ['action'],
        props: {
            color: {
                type: String,
                required: true,
                default: '',
                validator(value) {
                    return ['', 'danger'].includes(value)
                }
            }
        },  
        data() {
            return {
                
            }
        }
    }
</script>
<!-------------------------------------------------------------------------------->
<style scoped>
</style>