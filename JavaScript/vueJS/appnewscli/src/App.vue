<template>
    <div class="container">
        <div class="app">
            <div class="app__card">
                <h2 class="app__title">Актуальные новости на {{ date }}</h2>
                <span>
                    Открыто: <strong>{{ openRate }}</strong> 
                    | 
                    Прочитано: <strong>{{ readRate }}</strong>
                </span>
            </div>
            <item-news 
                v-for="item in news" :key="item.id"
                :title="item.title"
                :id="item.id"
                :text="item.text"
                :is-open="item.isOpen"
                :was-read="item.wasRead"
                @open-news="openNews"
                @read-news="readNews"
            ></item-news>
        </div>
    </div>
</template>
<!-------------------------------------------------------------------------------------->
<script>
import newsItem from './components/newsItem'

export default {
    data() {
        return {
            date: new Date().toLocaleDateString(),
            openRate: 0,
            readRate: 0,
            news: [
                {
                    id: 1, 
                    title: 'Какая то новость, которая идет первой', 
                    text: 'Какой то текст в подполе один',
                    isOpen: false,
                    wasRead: false
                },
                {
                    id: 2,
                    title: 'Какая то новость, которая идет второй', 
                    text: 'Какой то текст в подполе два',
                    isOpen: false,
                    wasRead: false
                },
                {
                    id: 3, 
                    title: 'Какая то новость, которая идет третьей', 
                    text: 'Какой то текст в подполе три',
                    isOpen: false,
                    wasRead: false
                }
            ]
        }
    },
    provide() {
        return {
        title: 'Список всех новостей:',
        news: this.news
    }
    },
    methods: {
        openNews() {
            this.openRate++;
        },
        readNews(id) {
            if(this.news.find(x => x.id === id).wasRead === false) {
                this.news.find(x => x.id === id).wasRead = true
                this.readRate++;
            } else {
                this.news.find(x => x.id === id).wasRead = false
                this.readRate--;
            }
        }
    },
    components: {
        'item-news': newsItem
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
