<template>
    <div class="app__item comments">
        <h1 class="app__title">Комментарии</h1>
        <div 
            class="comments__item"
            v-for="item in arr" :key="item.id"
        >
            <div class="comments__email">
                {{ item.email }}
            </div>
            <div class="comments__com">
                {{ item.body }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        arr: Array
    },
    data() {

    }
}
</script>
<style scope>
    .comments {
        margin: 30px 0 0 0;
    }
    .comments__item {
        margin: 15px 0;
    }
    .comments__email {
        font-weight: 700;
        font-size: 20px;
        margin: 0 0 10px 0;
    }
</style>