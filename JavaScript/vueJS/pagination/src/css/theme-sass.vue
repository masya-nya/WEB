<style lang="scss">
@import url('zero.scss');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

// Переменные ----------------------------------------------------------
$color-grey-dark: rgb(51, 51, 51);
$color-grey-ligth: rgb(171, 171, 171);
$color-white: rgb(255, 255, 255);
$color-yellow: rgb(252, 226, 36);
$color-red: rgb(225, 18, 22);
$color-green: rgb(93, 211, 158);
$color-orange: rgb(255, 153, 0);
$color-btn-base: rgb(188, 244, 222);
$color-btn-base-shadow: rgb(188, 234, 222);
$color-btn-danger: rgb(238, 198, 202);
$color-btn-danger-shadow: rgb(238, 190, 202);
$color-bg-base: rgb(246, 247, 248);
$color-bg-header: rgb(255, 255, 255);
$color-bg-auth: rgb(255, 255, 255);
$color-bg-error: rgb(255, 255, 255);
$color-bg-sidebar: rgb(255, 255, 255);
$color-input-base: rgb(228, 235, 243);
$color-input-hover: rgb(204, 219, 232);
$color-text-base: rgb(51, 51, 51);
$fontSize-text-base: 14px;
$fontSize-title-header: 30px;
// Миксины -------------------------------------------------------------
@mixin header-title {
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
}
@mixin title-h1 {
    font-size: 24px;
    font-weight: 700;
}
@mixin header-links {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
}
@mixin box-shadow-base {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
@mixin fixed-flex-center {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
@mixin not-selected {
    -moz-user-select: -moz-none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
// Функции -------------------------------------------------------------
// SASS ----------------------------------------------------------------

body {
    background-color: $color-bg-base;
    color: $color-text-base;
    font-size: $fontSize-text-base;
    font-family: 'Ubuntu', sans-serif;
}

.container {
    max-width: 1050px;
    margin: 0 auto;
    padding: 20px;
    &.with-auth {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.header {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $color-bg-header;
    padding: 20px 0;
    @include box-shadow-base;
    &__body {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    &__navbar {
        display: flex;
        & >:not(:last-child) {
            margin: 0 10px 0 0;
        }
        & li {
            @include header-links;
        }
        & a {
            color: $color-text-base;
            position: relative;
            transition: all 0.2s ease;
            border-bottom: 3px solid rgba(255, 255, 255, 0);
            padding: 0 0 23px 0;
            &:hover {
                border-color: $color-yellow;
            }
        }
    }
    &__title {
        @include header-title;
    }
}
.form-modal {
    & >:not(:last-child) {
        margin: 0 0 10px 0;
    }
}
.modal {
    z-index: 1001;
    @include fixed-flex-center;
    background-color: rgba(0, 0, 0, 0.3);
    &__body {
        background-color: $color-bg-base;
        border-radius: 3px;
        padding: 30px;
        min-width: 600px;
        & >:not(:last-child) {
            margin: 0 0 20px 0;
        }
    }
    &__title {
        @include title-h1;
        margin: 0 0 20px 0;
    }
}
.auth {
    @include fixed-flex-center;
    &-body {
        @include box-shadow-base;
        background-color: $color-bg-auth;
        padding: 30px;
        max-width: 500px;
        width: 100%;
        border-radius: 3px;
        & >:not(:last-child) {
            margin: 0 0 20px 0;
        }
    }
    &__btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        & a.auth__signup {
            color: $color-grey-ligth;
            border-bottom: 1px solid $color-grey-ligth;
            transition: all 0.1s ease;
            &:hover {
                color: $color-grey-dark;
                border-color: $color-grey-dark;
            }
        }
    }
    & .danger {
        color: $color-red;
    }
    &__title {
        @include title-h1;
    }
}
.signup {
    @include fixed-flex-center;
    &-body {
        @include box-shadow-base;
        background-color: $color-bg-auth;
        padding: 30px;
        max-width: 500px;
        width: 100%;
        border-radius: 3px;
        & >:not(:last-child) {
            margin: 0 0 20px 0;
        }
    }
    &__btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        & a.signup__auth {
            color: $color-grey-ligth;
            border-bottom: 1px solid $color-grey-ligth;
            transition: all 0.1s ease;
            &:hover {
                color: $color-grey-dark;
                border-color: $color-grey-dark;
            }
        }
    }
    &__title {
        @include title-h1;
    }
}
.form-control {
    display: flex;
    flex-direction: column;
    & >:not(:last-child) {
        margin: 0 0 10px 0;
    }
    &__password {
        width: 100%;
        position: relative;
        & .PASSWORD-TOGGLE {
            color: $color-grey-dark;
            position: absolute;
            top: 33%;
            right: 15px;
            font-size: 20px;
            cursor: pointer;
            @include not-selected;
        }
    }
    & label {
        font-size: 16px;
    }
    & textarea {
        background-color: $color-input-base;
        border: 1px solid rgba(255, 255, 255, 0);
        border-radius: 3px;
        font-size: 18px;
        padding: 15px 25px;
        transition: all 0.3s ease;
        resize: none;
        word-break: break-all;
        &.invalid {
            border-color: $color-red;
            color: $color-red;
            background-color: $color-white;
        }
        &:hover {
            background-color: $color-input-hover;
        }
        &:focus {
            background-color: $color-white !important;
            border-color: $color-text-base !important;
        }
    }
    & select {
        background-color: $color-input-base;
        border: 1px solid rgba(255, 255, 255, 0);
        border-radius: 3px;
        font-size: 18px;
        padding: 15px 25px;
        transition: all 0.3s ease;
        &.invalid {
            border-color: $color-red;
            color: $color-red;
            background-color: $color-white;
        }
        &:hover {
            background-color: $color-input-hover;
        }
        &:focus {
            background-color: $color-white !important;
            border-color: $color-text-base !important;
        }
    }
    & input {
        background-color: $color-input-base;
        border: 1px solid rgba(255, 255, 255, 0);
        border-radius: 3px;
        font-size: 18px;
        padding: 15px 25px;
        transition: all 0.3s ease;
        width: 100%;
        word-break: break-all;
        &.invalid {
            border-color: $color-red;
            color: $color-red;
            background-color: $color-white;
        }
        &:hover {
            background-color: $color-input-hover;
        }
        &:focus {
            background-color: $color-white !important;
            border-color: $color-text-base !important;
        }
    }
}
small {
    color: $color-red;
}
.card {
    @include box-shadow-base;
    margin: 20px 0;
    background-color: #fff;
    border-radius: 3px;
    padding: 20px;
    &__title {
        @include title-h1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.error {
    background-color: $color-bg-error;
}
.sidebar {
    background-color: $color-bg-sidebar;
    z-index: 101;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 7px;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 0 30px 2px;
    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0 0 20px 0;
        & h1 {
            @include title-h1;
        }
        & span {
            font-size: 26px;
        }
        
    }
    &__body {
        padding: 0 0 0 5px;
        width: 100%;
        & >:not(:last-child) {
            margin: 0 0 10px 0;
        }
    }
}
.pagination {
    display: flex;
    margin: 10px;
    & >:not(:last-child) {
        margin: 0 5px 0 0;
    }
    & .page-link {
        padding: 5px 7px;
    }
    & .page-item {
        cursor: pointer;
        font-size: 22px;
        border: 1px solid rgba(0, 0, 0, 0);
        background-color: $color-white;
        padding: 5px 0;
        border-radius: 3px;
        @include box-shadow-base;
        @include not-selected;
        &.active {
            background-color: $color-btn-base;
        }
        &:hover {
            border-color: $color-btn-base;
        }
        &:active {
            background-color: $color-btn-base;
        }
    }
}
.message {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid $color-grey-dark;
    padding: 5px;
    width: 100%;
    border-radius: 3px;
    line-height: 1.2;
    &.primary {
        color: $color-green;
        border-color: $color-green;
    }
    &.danger {
        color: $color-btn-danger-shadow;
        border-color: $color-btn-danger-shadow;
    }
    &.warning {
        color: $color-orange;
        border-color: $color-orange;
    }
    &.testing {
        color: $color-green;
        border-color: $color-green;
    }
}
.MESSAGE_OPEN { // AuthPage.vue
    position: fixed;
    top: 10px;
    right: 30px;
    font-size: 35px;
    cursor: pointer;
    transition: all 0.1s ease;
    &:hover {
        transform: scale(1.05);
    }
}
.btn {
    font-size: 16px;
    color: $color-grey-dark;
    padding: 13px 15px;
    border-radius: 5px;
    transition: 0.2s;
    background: $color-btn-base;
    box-shadow: 0 -3px $color-btn-base-shadow inset;
    &:hover {
        background: $color-btn-base-shadow;
    }
    &:active {
        background: $color-btn-base;
        box-shadow: 0 3px $color-btn-base inset;
    }
    &.danger {
        background-color: $color-btn-danger;
        box-shadow: 0 -3px $color-btn-danger-shadow inset;
        &:hover {
            background: $color-btn-danger-shadow;
        }
        &:active {
            background: $color-btn-danger;
            box-shadow: 0 3px $color-btn-danger inset;
        }
    }
}
.activeRoute {
    border-color: $color-yellow !important;
}
button:disabled {
    background-color: #ccc !important;
    box-shadow: 0 -3px #aaa inset !important;
    pointer-events: none !important;
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
        border-color: rgb(33, 209, 159);
        color: rgb(33, 209, 159);
        box-shadow: 0px -3px 10px rgba(33, 209, 159, 0.3),
                    0px 3px 10px rgba(33, 209, 159, 0.3);
    }
    &.canceled {
        border-color: #cc1b00;
        color: #cc1b00;
        box-shadow: 0px -3px 10px rgba(204, 27, 0, 0.3),
                    0px 3px 10px rgba(204, 27, 0, 0.3);
    }
    &.inWork {
        border-color: rgb(163, 75, 193);
        color: rgb(163, 75, 193);
        box-shadow: 0px -3px 10px rgba(163, 75, 193, 0.3),
                    0px 3px 10px rgba(163, 75, 193, 0.3);
    }
    &.done {
        border-color: rgb(83, 75, 98);
        color: rgb(83, 75, 98);
        box-shadow: 0px -3px 10px rgba(83, 75, 98, 0.3),
                    0px 3px 10px rgba(83, 75, 98, 0.3);
    }
}
// Анимация ------------------------------------------------------------
// MEDIA-запросы -------------------------------------------------------
</style>