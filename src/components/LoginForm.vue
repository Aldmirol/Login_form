<template>
    <div class="form-wrapper">
        <div class="form-title">
            <p>Вход в сервис денежных переводов</p>
        </div>
        <form class="form">
            <div class="login-wrapper">
                <div class="login-title">
                    <span>Номер телефона</span>
                </div>
                <div class="login-container">
                    <div class="country-selector">
                        <span @click="showList" class="flag-image">
                            <img src="../static/images/Flag_of_Russia.svg" alt="">
                        </span>
                    </div>
                    <div class="prefix">
                        <span>+7</span>
                    </div>
                    <BaseInput
                        :classList="loginInput.classList"
                        :maskPattern="'### ### ## ##'"
                        :placeholder="loginInput.placeholder"
                    />
                    <CountryList
                        :classList="countryList.classList"
                        :isActive="countryList.isActive"
                    />
                </div>
            </div>
            <div class="password-wrapper">
                <div class="password-title">
                    <span>Пароль</span>
                </div>
                <div class="password-container">
                    <BaseInput
                        :classList="passwordInput.classList"
                    />
                    <ShowIcon
                        :classList="showIcon.classList"
                        :isShown="showIcon.isShown"
                        @click="showPassword"
                    />
                </div>
            </div>
            <div class="buttons-container">
                <span class="buttons-title">Забыли пароль?</span>
                <button class="submit-button" type="submit">Войти</button>
            </div>
        </form>
    </div>
</template>

<script>
import BaseInput from './base/BaseInput.vue';
import CountryList from './base/CountryList.vue';
import ShowIcon from './base/ShowIcon.vue';

export default {
    components: {
        BaseInput,
        CountryList,
        ShowIcon
    },
    data() {
        return {
            loginInput: {
                classList: ['login-input'],
                placeholder: '000 000 00 00'
            },
            passwordInput: {
                classList: ['login-input']
            },
            countryList: {
                classList: ['hidden-list'],
                isActive: false,
            },
            showIcon: {
                classList: ['show-icon'],
                isShown: false
            }
        }
    },
    methods: {
        showList() {
            return this.countryList.isActive = !this.countryList.isActive;
        },
        showPassword() {
            return this.showIcon.isShown = !this.showIcon.isShown;
        }
    }
}
</script>

<style lang="scss" scoped>
    .form-wrapper {
        width: 400px;
        height: 500px;
        background-color: #ffffff;
        box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);
    }

    .form-title {
        display: flex;
        justify-content: center;

        & p {
            width: 70%;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 500;
        }
    }

    .form {
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-wrapper,
    .password-wrapper,
    .buttons-container {
        height: 20%;
        width: 90%;
    }

    .login-title,
    .password-title {
        height: 20%;

        & span {
            font-size: 0.9rem;
        }
    }

    .login-container,
    .password-container {
        height: 50%;
        margin-top: 2%;
        display: flex;
        position: relative;
        font-size: 1.2rem;
        border: 1px solid #CDD4DA;

        & .prefix {
            height: 100%;
            width: 10%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            & span {
                margin-bottom: 2px;
            }
        }
    }

    .country-selector {
        width: 15%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .flag-image:after {
        content: "";
        border-top: .2em solid;
        border-right: .2em solid transparent;
        border-bottom: 0;
        border-left: .2em solid transparent;
        display: inline-block;
        height: 0;
        margin-left: .255em;
        vertical-align: middle;
        width: 0;
    }

    .buttons-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .buttons-title {
        font-size: 0.9rem;
        color: #1E96D8;
        cursor: pointer;
    }

    .buttons-title:hover {
        text-decoration: underline;
    }

    .submit-button {
        height: 35%;
        background-color: #09527B;
        border: none;
        border-radius: 0.25rem;
        font-size: 1rem;
        color: #ffffff;
        cursor: pointer;
    } 
</style>