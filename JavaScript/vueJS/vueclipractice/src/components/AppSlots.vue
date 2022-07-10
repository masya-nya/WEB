<template>
    <div class="container">
        <div class="app">
            <div class="app__card">
                <h2 class="app__title">Slots</h2>
                
            </div>

            <app-list>
                <template #default="{iter, idx}">
                    <span style="color: blueviolet;">
                    {{ idx + 1 }}) 
                    {{ iter }}
                    </span>
                </template>
            </app-list>

            <app-block v-for="item in 2" :key="item">
                <p>Это самый важный текст для нового блока</p>
                <template #header>
                    <h1>Это заголовок</h1>
                </template>
                <template #footer>
                    <hr>
                    <h1>Это футер</h1>
                </template>
            </app-block>
        </div>
    </div>
</template>
<!-------------------------------------------------------------------------------------->
<script>
import AppBlockVue from './components/AppBlock.vue'
import AppListVue from './components/AppList.vue'
export default {
    data() { 
        return {
        }
    },
    provide() {
        return {
    }
    },
    methods: {
    },
    components: {
        'app-block': AppBlockVue,
        'app-list': AppListVue
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
        padding: 7px 12px;
        border-radius: 13px;
        font-size: 18px;
        background-color: #213462;
        color: #fff;
        transition: all 0.1s ease;
        &:hover {
            transform: scale(1.03);
        }
    }
    .danger {
        background-color: #610000;
    }

}
</style>
