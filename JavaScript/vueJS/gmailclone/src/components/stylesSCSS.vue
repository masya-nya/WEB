<style lang="scss">
@import url('./zero.scss');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    background-color: #324563;
    font-family: 'Roboto', sans-serif;
    color: #324563;
}

.container {
    max-width: 1050px;
    margin: 0 auto;
}
.app {
    &__item {
        background-color: #fff;
        border-radius: 15px;
        margin: 10px 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    &__title {
        font-size: 28px;
        font-weight: 700;
        padding: 2px 0 5px 0;
    }
}
.navbar {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px 100px;
    border-radius: 15px;
    &__title {
        font-size: 24px;
        color: #213462;
    }
    &__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & :not(:last-child) {
            margin: 0 20px 0 0;
        }
    }
    &__item {
        font-size: 18px;
        & a {
            color: #213462;
            text-transform: uppercase;
            padding: 0 0 1px 0;
            &:hover {
                border-bottom: 3px solid #213462;
            }
        }
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
.page-active {
    border-bottom: 1px solid #213462;
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
}
    

</style>