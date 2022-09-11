<template>
    <h2 v-if="toHome" class="backToHomePage">
        <router-link to="/"><span class="arrow">&#8592;</span><span>Вернуться на главную</span></router-link>
    </h2>
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
        },
        toHome: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    setup(props) {
        document.title = `${props.title} | Банкъ`
    }
}
</script>

<style scoped>
.backToHomePage {
    padding: 0 15px 15px 15px;
    font-size: 16px;
    text-transform: uppercase;
}
.backToHomePage:hover span:not([class="arrow"]) {
    text-decoration: underline;
}
.backToHomePage a {
    color: rgb(151, 151, 151);
}
.arrow {
    font-size: 22px;
    position: relative;
    left: -1px;
    animation-name: arrow-move;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
}
@keyframes arrow-move{
    0% {
        left: -3px
    }
    25% {
        left: -1px;
    }
    50% {
        left: 1px;
    }
    75% {
        left: -1px;
    }
    100% {
        left: -3px;
    }
}
</style>