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
.modal {
        z-index: 3;
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        padding: 30px;
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
        &__body {
            cursor: default;
            background-color: #fff;
            padding: 40px 20px 20px 20px;
            border-radius: 15px;
            max-width: 600px;
            border: 1px solid #213462
        }
        &__title {
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 10px 0;
        }
        &__text {
            font-size: 18px;
            margin: 0 0 20px 0;
        }
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
    &__item {
        background-color: #fff;
        border-radius: 15px;
        margin: 10px 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    &__title {
        font-size: 28px;
        font-weight: 700;
        padding: 2px 0 5px 0;
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
    .form-control {
        display: flex;
        flex-direction: column;
        margin: 30px 0 15px 0;
        & label {
            font-size: 18px;
            font-weight: 700;
        }
        & input {
            border: 1px solid #213462;
            padding: 7px 15px;
            width: 100%;
            border-radius: 7px;
            &:focus {
                box-shadow: 0px 1px 1px #213462;
            }
        }
    }
    
    .alert {
        display: flex;
        flex-direction: column;
        align-items: start;
        background-color: #fff;
        width: 100%;
        border: 1px solid;
        border-left: 7px solid;
        padding: 35px 20px;
        margin: 10px 0;
        & button {
            margin: 30px 0 0 0;
        }
        &.danger {
            border-color: #913212;
        }
        &.primary {
            border-color: #345634;
        }
        &.warning {
            border-color: #915212;
        }
        &__title {
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 10px 0;
        }
        color: #000;
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
        padding: 7px 20px;
        margin: 5px 0;
        border-radius: 13px;
        font-size: 18px;
        background-color: #213462;
        color: #fff;
        transition: all 0.1s ease;
        &.primary {
            background-color: #213462;
        }
        &.danger {
            background-color: #913212;
        }
        &.warning {
            background-color: #915212;
        }
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