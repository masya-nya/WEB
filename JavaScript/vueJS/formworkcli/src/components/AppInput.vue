<template>
    <div class="form-control" 
        :class="{
        invalid: error
    }">
        <label :for="id">{{ label }}</label>
        <input 
            :type="type" 
            :id="id" 
            :placeholder="placeholder"
            :value="modelValue"
            @input="change"
        >

        <small v-if="error">
            {{ error }}
        </small>
    </div>
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: {    
        modelValue: String,
        label: String, 
        error: {
            type: String,
            required: false,
            default: null
        },
        placeholder: String,
        type: String
    },
    date() {
        return {
        }
    },
    methods: {
        change(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
    computed: {
        id() {
            return 'input-' + Math.random()
        }
    }
}
</script>