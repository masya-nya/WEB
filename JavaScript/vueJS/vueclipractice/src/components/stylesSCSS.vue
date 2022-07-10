<style lang="scss">
@import url('./zero.scss');

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

    &__card {
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

    h1 {
        font-size: 30px;
        font-weight: 700;
    }

    .form-control {
        font-size: 16px;
        display: flex;
        flex-direction: column;

        & label {
            font-weight: 700;
        }

        & input {
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            padding: 7px 15px;
            font-size: 16px;

            &:focus {
                border-color: #213462;
            }
        }

        & select {
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            padding: 7px 15px;
            font-size: 14px;

            &:focus {
                border-color: #213462;
            }
        }
    }

    .form-checkbox {
        font-size: 16px;

        & .label {
            display: block;
            font-weight: 700;
            margin: 0 0 15px 0;
        }

        & .checkbox {
            margin: 0 0 10px 10px;
        }
    }

    .btn-cancel {
        background-color: #ccc;
        pointer-events: none;
    }

    small {
        color: red;
        font-weight: 700;
    }

    .form-control.invalid input {
        border-color: red;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .people {
        font-size: 18px;
        display: flex;
        justify-content: space-between;
    }

    .alert {
        padding: 20px;
        font-size: 18px;
        border-left: 5px solid #610000;
        background-color: #fff;
        border-radius: 3px;
    }

    .loader-body {
        display: flex;
        justify-content: center;
        align-self: center;
    }

    .loader {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }

    .loader div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }

    .loader div:nth-child(1) {
        animation-delay: -0.45s;
    }

    .loader div:nth-child(2) {
        animation-delay: -0.3s;
    }

    .loader div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

}
</style>