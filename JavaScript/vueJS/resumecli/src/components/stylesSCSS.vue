<style lang="scss">
@import url('./zero.scss');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    background-color: #324563;
    padding: 30px;
    font-family: 'Roboto', sans-serif;
    color: #324563;
}

.container {
    max-width: 1050px;
    margin: 0 auto;
}

.app {
    
    &__top {
        display: flex;
        justify-content: space-between;
        align-items: start;
        max-width: 100%;
    }
    & .constructor {
        margin: 0 20px 0 0;
        width: 30%;
    }
    & .resume {
        width: calc(70% - 20px);
        word-wrap: break-word;
    }
    &__bottom {
    }
    &__item {
        background-color: #fff;
        border-radius: 15px;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    &__title {
        font-size: 28px;
        font-weight: 700;
    }
    &__subtitle {
        font-size: 20px;
        font-weight: 700;
    }
    &__text {
        font-size: 14px;
        white-space: normal;
    }
    &__avatar {
        display: flex;
        justify-content: center;
        & img {
            width: 150px;
            height: auto;
            border-radius: 50%;
        }
    }
    .constructor {
        & label {
            font-size: 16px;
            font-weight: 700;
            &:not(:first-child) {
                margin: 10px 0 0 0;
            }
        }
        & select {
            border: 2px solid #ccc;
            padding: 7px 12px;
            border-radius: 7px;
            font-weight: 700;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            color: #324563;
        }
        & textarea {
            resize: none;
            border: 2px solid #ccc;
            padding: 7px 12px;
            border-radius: 7px;
        }
    }
    & .btn {
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
    &__button {
        margin: 15px 0 0 0;
        &:disabled {
            background-color: #ccc;
            color: #444;
            cursor: no-drop;
        }
    }
    hr {
        height: 1px;
        background-color: #ccc;
    }
}

</style>