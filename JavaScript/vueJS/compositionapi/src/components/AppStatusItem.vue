<template>
    <div class="status" :class="type">
        {{ type }}
    </div>
</template>
<script>
export default {
    props: ['type'],
    data() {
        return {
        }
    }
}
</script>