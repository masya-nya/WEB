<template>
    <div class="container">
        <div class="app">
            <div class="app__card">
                <async-component></async-component>
                <h2 class="app__title">Динамические и асинхронные компоненты</h2>
                <btn-component 
                    ref="myBtn"
                    @action="active = 'one'"
                    :color="oneColor">
                    One
                </btn-component>
                <btn-component 
                    @action="active = 'two'" 
                    :color="twoColor">
                    Two
                </btn-component>
            </div>

            <keep-alive>
                <component :is="componentName"></component>
            </keep-alive>
        </div>
    </div>
</template>
<!-------------------------------------------------------------------------------------->
<script>
import btnComponentVue from './components/btnComponent.vue'
import AppTextOne from './components/AppTextOne.vue'
import AppTextTwo from './components/AppTextTwo.vue'

export default {
    data() { 
        return {
            active: 'one' // 'two'
        }
    },
    provide() {
        return {
    }
    },
    mounted() {
        console.log(this.$refs.myBtn)
    },
    methods: {
    },
    computed: {
        componentName() {
            return 'app-text-' + this.active
        },
        oneColor() {
            return this.active === 'one' ? 'active' : '';
        },
        twoColor() {
            return this.active === 'two' ? 'active' : '';
        }
    },
    components: {
        'btn-component': btnComponentVue,
        'app-text-one': AppTextOne,
        'app-text-two': AppTextTwo
    },
}
</script>
<!-------------------------------------------------------------------------------------->
<style lang="scss">
@import url('./components/style.scss');
body {
    background-color: #324563;
}
hr {
    background-color: #000;
    height: 1px;
}
.container {
    max-width: 1050px;
    margin: 0 auto;
}
.app {
    padding: 50px;
    font-family: 'Roboto', sans-serif;
    & :not(:last-child) {
        margin: 0 0 15px 0;
    }
    &__card{
        width: 100%;
        background-color: #fff;
        color: #324563;
        padding: 40px 20px;
        border-radius: 20px;
        font-size: 20px;
        & h1 {
            font-weight: 700;
        }
    }
    &__title {
        font-weight: 700;
        font-size: 30px;
    }
    .news {
        & p {
            font-size: 18px;
        }
        &__title {
            font-size: 24px;
            font-weight: 700;
        }
    }
    .btn {
        padding: 7px 20px;
        border: 1px solid #213462;
        border-radius: 13px;
        font-size: 18px;
        color: #213462;
        transition: all 0.1s ease;
        &:hover {
            transform: scale(1.03);
        }
    }
    .danger {
        background-color: #610000;
    }
    .active {
        background-color: #213462;
        color: #fff;
    }
    input {
        border: 1px solid #213462;
        padding: 5px 10px;
        border-radius: 7px;
        width: 50%;
    }
}
</style>