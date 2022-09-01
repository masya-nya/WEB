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
.news-item {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    margin: 0 0 30px 0;
    border-radius: 10px;
    & >:not(:last-child) {
        margin: 0 0 20px 0;
    }
    &__avatar {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background-color: #ccc;
    }
    &__title {
        font-size: 28px;
        font-weight: 700;
        word-break: break-all;
        line-height: 1.2;
    }
    &__time {
        font-size: 14px;
        color: #aaa;
    }
    &__from {
        font-size: 16px;
        & span {
            word-break: break-all;
            color: #c7349d;
            text-decoration: underline;
            font-size: 18px;
            cursor: pointer;
        }
    }
    &__top {
        display: flex;
        align-items: center;
        &-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0 0 0 30px;
            & >:not(:last-child) {
                margin: 0 0 10px 0;
            }
        }
    }
    &__bottom {
        &__content {
            word-break: break-all;
            line-height: 1.5;
        }
        &-gui {
            display: flex;
            justify-content: space-between;
            margin: 20px 0 0 0;
            padding: 0 20px;
            &-likes {
                display: flex;
                align-items: center;
            }
            &-like{
                font-size: 16px;
                font-weight: 700;
                color: #324563;
                margin: 0 0 0 5px;
                -moz-user-select: none;
                -khtml-user-select: none;
                -webkit-user-select: none;
                user-select: none;
                &.active {
                    color: #cc1b00;
                }
            }
            &-btns {
                & >:not(:last-child) {
                    margin: 0 20px 0 0;
                }
            }
        }
    }
}
.fa {
    font-size: 26px;
    cursor: pointer;
    color: #213462;
    &.like {
        transition: all 0.1s ease;
        &:hover {
            transform: scale(1.1);
        }
        &.active {
            color: #db3218;
        }
    }
    &.trash {
        color: #913212;
        transition: all 0.1s ease;
        &:hover {
            transform: scale(1.1);
        }
    }
    &.edit {
        color: #123543;
        transition: all 0.1s ease;
        &:hover {
            transform: scale(1.1);
        }
    }
    &.exit {
        color: #324563;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        transition: all 0.1s ease;
        &:hover {
            background-color: rgba(50, 69, 99, 0.2);
        }
    }
}
.constructor-exit {
    position: absolute;
    display: block;
    top: 30px;
    right: 30px;
}
.modal-editor {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    &__body {
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        width: 500px;
        & label {
            font-size: 14px;
            font-weight: 700;
        }
        & >:not(:last-child) {
            margin: 0 0 20px 0;
        }
    }
    &__input {
        display: flex;
        flex-direction: column;
        & >:not(:last-child) {
            margin: 0 0 10px 0;
        }
        & input {
            border: 1px solid #213462;
            padding: 10px 20px;
            border-radius: 5px;
        }
    }
    &__textarea {
        display: flex;
        flex-direction: column;
        & >:not(:last-child) {
            margin: 0 0 10px 0;
        }
        & textarea {
            resize: none;
            border: 1px solid #213462;
            padding: 10px 20px;
            border-radius: 5px;
        }
    }
    &__btns {
        display: flex;
        justify-content: space-between;
    }
}
.constructor {
    background-color: #fff;
    margin: 0 0 30px 0;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    &__container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        & >:not(:last-child) {
            margin: 0 0 30px 0;
        }
    }
    &__title {
        font-size: 30px;
        font-weight: 700;
    }
    &__body {
        & >:not(:last-child) {
            margin: 0 0 20px 0;
        }
    }
    &__btns {
        display: flex;
        justify-content: space-between;
    }
}
.form-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 10px 0;
    width: 100%;
    max-width: 400px;
    
    & label {
        font-size: 18px;
        font-weight: 700;

    }
    & input {
        border: 1px solid #213462;
        padding: 7px 15px;
        width: 100%;
        max-width: 300px;
        border-radius: 7px;
        &:focus {
            box-shadow: 0px 1px 1px #213462;
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
button {
    &:disabled {
        background-color: #ccc;
        color: #444;
        cursor: no-drop;
    }
}
hr {
    height: 1px;
    background-color: #ccc;
    width: 100%;
}
    

@media (max-width: 600px) {
    .constructor__title {
        font-size: 22px;
    }
    .input23423 label {
        font-size: 14px;
    }
    .news-item__title {
        font-size: 18px;
    }
    .news-item__time {
        font-size: 11px;
    }
    .news-item__from {
        font-size: 11px;
        & span {
            font-size: 12px;
        }
    }
    .news-item__bottom__content {
        font-size: 12px;
    }
    .fa {
        font-size: 18px;
    }
}
@media (max-width: 460px) {
    .news-item {
        &__top {
            flex-direction: column;
        }
        &__avatar {
            margin: 0 0 20px 0;
        }
        &__top-right {
            margin: 0;
            align-items: center;
        }
    }
}


</style>