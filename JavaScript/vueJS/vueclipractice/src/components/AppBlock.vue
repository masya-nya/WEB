<template>
    <div class="app__card">
        <slot name="header"></slot>
        <slot>No text</slot>
        <slot name="footer"></slot>
    </div>
</template>
<!-------------------------------------------------------------------------------------->
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>