<template>
    <div class="form-control">
        <label :for="id">{{ label }}</label>
        <select 
            :id="id"
            :value="modelValue"
            @input="change"
        >
            <option value="spb">Санкт-Петербург</option>
            <option value="msk">Москва</option>
            <option value="kzn">Казань</option>
            <option value="rnd">Ростов-на-Дону</option>
        </select>
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        label: String,
        modelValue: String
    },
    data() {
        return {
            id: 'input-' + Math.random()
        }
    },
    methods: {
        change(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>