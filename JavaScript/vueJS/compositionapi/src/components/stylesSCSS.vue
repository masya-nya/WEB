<style lang="scss">



@import url('./zero.scss');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

$fontSizeTitle: 28px;

body {
    background-color: #1a4780;
    font-family: 'Roboto', sans-serif;
    color: #324563;
    padding: 30px;
}
.navbar {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ccc;
    &__menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & >:not(:last-child) {
            margin: 0 20px 0 0;
        }
        &-item {
            & a {
                text-transform: uppercase;
                color: #324563;
                font-size: 18px;
                &:hover {
                    border-bottom: 3px solid #cc1b00;
                    padding: 0 0 3px 0;
                }
            }
        }
    }
}
.container {
    max-width: 1050px;
    margin: 0 auto;
}
.validate-p {
    color: #cc1b00;
    font-weight: 700;
    margin: 0 0 0 20px;
    font-size: 14px;
}
.status {
    border: 2px solid #000;
    color: #000;
    font-size: 14px;
    padding: 3px 10px;
    border-radius: 15px;
    font-weight: 700;
    text-transform: uppercase;
    
    &.active {
        border-color: #77dd77;
        color: #77dd77;
        box-shadow: 0px -3px 10px rgba(119, 221, 119, 0.3),
                    0px 3px 10px rgba(119, 221, 119, 0.3);
    }
    &.canceled {
        border-color: #cc1b00;
        color: #cc1b00;
        box-shadow: 0px -3px 10px rgba(204, 27, 0, 0.3),
                    0px 3px 10px rgba(204, 27, 0, 0.3);
    }
    &.inWork {
        border-color: #915212;
        color: #915212;
        box-shadow: 0px -3px 10px rgba(145, 82, 18, 0.3),
                    0px 3px 10px rgba(145, 82, 18, 0.3);
    }
    &.done {
        border-color: #213462;
        color: #213462;
        box-shadow: 0px -3px 10px rgba(33, 52, 98, 0.3),
                    0px 3px 10px rgba(33, 52, 98, 0.3);
    }
}
.task {
    background-color: #fff;
    padding: 20px;
    margin: 0 0 30px 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    & >:not(:last-child) {
        margin: 0 0 20px 0;
    }
    &__status {
        display: flex;
        align-items: center;
    }
    &__title {
        display: flex;
        font-size: 26px;
        padding: 0 0 0 10px ;
    }
    &__description {
        display: flex;
        word-break: break-all;
        line-height: 1.5;
        align-items: start;
    }
    &__deadline {
        display: flex;
        align-items: center;
    }
    & strong {
        font-size: 16px;
        margin: 0 10px 0 0;
        word-break: normal;
    }
    &__btns {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-left {
            & >:not(:last-child) {
                margin: 0 10px 0 0 ;
            }
        }
    }
}
.card {
    background-color: #fff;
    padding: 20px;
    margin: 0 0 30px 0;
    border-radius: 10px;
    & >:not(:last-child) {
        margin: 0 0 20px 0;
    }
    &__title {
        font-size: 28px;
        font-weight: 700;
        word-break: break-all;
        line-height: 1.2;
    }
    &__title {
        word-break: break-all;
        line-height: 1.5;
    }
    &__description {
        word-break: break-all;
        line-height: 1.5;
    }
    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__bottom {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        & >:not(:last-child) {
            margin: 0 0 15px 0;
        }
    }
    &__deadline {
        font-weight: 700;
        letter-spacing: 0.2vh;
        color: #aaa;
    }
    &__btns {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-close {
            font-size: 33px;
            cursor: pointer;
            transition: all 0.1s ease;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
}

.constructor-exit {
    position: absolute;
    display: block;
    top: 30px;
    right: 30px;
}

.create {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    &__title {
        font-size: 35px;
        font-weight: 700;
        margin: 0 0 20px 0;
    }
}
.form-control {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    & .btn {
        margin: 20px 0 0 0;
    }
    & label {
        font-size: 16px;
        font-weight: 700;
        margin: 0 0 5px 0;
        padding: 0 0 0 5px;
    }
    & input {
        border: 1px solid #213462;
        padding: 7px 15px;
        width: 100%;
        border-radius: 7px;
        &:focus {
            box-shadow: 0px 1px 1px #213462;
        }
        &:not(:last-child) {
        margin: 0 0 15px 0;
        }
    }
    & textarea {
        border: 1px solid #213462;
        padding: 7px 15px;
        width: 100%;
        border-radius: 7px;
        resize: none;
        &:focus {
            box-shadow: 0px 1px 1px #213462;
        }
    }
}
.modal {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba( 100, 100, 100, 0.5);
    &-delete {
        background-color: #fff;
        max-width: 500px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__title {
        font-size: 26px;
        font-weight: 700;
        margin: 0 0 40px 0;
        word-break: break-all;
        line-height: 1.4;
    }
    &__btns {
        width: 100%;
        display: flex;
        justify-content: space-around;
        & >:not(:last-child) {
            margin: 0 30px 0 0;
        }
        & button {
            font-size: 28px;
            padding: 10px 30px;
        }
    }
}
.btn {
    font-size: 14px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    padding: 13px 15px;
    border-radius: 10px;
    background: rgb(64, 199, 129);
    box-shadow: 0 -3px rgb(53, 167, 110) inset;
    transition: 0.2s;
    &:hover {
        background: rgb(53, 167, 110);
    }
    &:active {
        background: rgb(33, 147, 90);
        box-shadow: 0 3px rgb(33, 147, 90) inset;
    }
    &.primary {
        background-color: rgb(33, 52, 98);
        box-shadow: 0 -3px rgb(8, 37, 103) inset;
        &:hover {
            background: rgb(8, 37, 103);
        }
        &:active {
            background: rgb(33, 52, 98);
            box-shadow: 0 3px rgb(33, 52, 98) inset;
        }
    }
    &.danger {
        background-color: rgb(145, 50, 18);
        box-shadow: 0 -3px rgb(115, 35, 23) inset;
        &:hover {
            background: rgb(115, 35, 23);
        }
        &:active {
            background: rgb(145, 50, 18);
            box-shadow: 0 3px rgb(145, 50, 18) inset;
        }
    }
    &.warning {
        background-color: rgb(145, 82, 18);
        box-shadow: 0 -3px rgb(99, 56, 12) inset;
        &:hover {
            background: rgb(99, 56, 12);
        }
        &:active {
            background: rgb(145, 82, 18);
            box-shadow: 0 3px rgb(145, 82, 18) inset;
        }
    }
    &.normal {
        background-color: #77dd77;
        background-color: rgb(119, 221, 119);
        box-shadow: 0 -3px rgb(78, 212, 78) inset;
        &:hover {
            background: rgb(78, 212, 78);
        }
        &:active {
            background: rgb(119, 221, 119);
            box-shadow: 0 3px rgb(119, 221, 119) inset;
        }
    }
    &.like {
        background-color: #cc1b00;
    }
}
.button7 {
    font-size: 14px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    padding: 13px 15px;
    border-radius: 10px;
    background: rgb(64, 199, 129);
    box-shadow: 0 -3px rgb(53, 167, 110) inset;
    transition: 0.2s;

    &:hover {
        background: rgb(53, 167, 110);
    }

    &:active {
        background: rgb(33, 147, 90);
        box-shadow: 0 3px rgb(33, 147, 90) inset;
    }
}
button {
    &:disabled {
        background-color: #ccc !important;
        box-shadow: 0 -3px #aaa inset !important;
        pointer-events: none !important;
    }
}
hr {
    height: 1px;
    background-color: #ccc;
    width: 100%;
}
.activeRoute {
    border-bottom: 3px solid #cc1b00;
    padding: 0 0 3px 0;
    color: #cc1b00;
}

</style>