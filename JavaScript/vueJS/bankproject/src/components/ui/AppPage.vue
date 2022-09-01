<template>
    <div class="card">
        <div class="card__title">
            {{ title }}
            <slot name="header" />
        </div>
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup(props) {
        document.title = `${props.title} | Банкъ`
    }
}
</script>

<style>
</style>