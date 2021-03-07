<template>
    <form class="login_form">
        <div class="login_form_r1">
            <login-textfield v-model="loginForm.user_name" label="User name" icon="user" />
        </div>
        <div class="login_form_r2">
            <login-textfield v-model="loginForm.mobile_number" label="Mobile number" icon="mobile" />
        </div>
        <div class="login_form_r3">
            <login-textfield v-model="loginForm.password" label="Enter passwords" icon="lock" />
        </div>
        <div class="login_form_r4">
            <login-textfield v-model="loginForm.re_password" label="Re-enter passwords" icon="lock" />
        </div>
        <div class="login_form_r5">
            <login-checkbox label="Keep me sign in" />
            <label>Forget passwords</label>
        </div>
        <div>
            <login-submit @click.native="onSubmit" />
        </div>
    </form>
</template>
<script>
import axios from 'axios'

import LoginTextfield from './LoginTextfield'
import LoginCheckbox from './LoginCheckbox'
import LoginSubmit from './LoginSubmit'
export default {
    components: {
        LoginTextfield,
        LoginCheckbox,
        LoginSubmit
    },
    data () {
        return {
            loginForm: {
                user_name: '',
                mobile_number: '',
                password: '',
                re_password: ''
            }
        }
    },
    methods: {
        onSubmit () {
            let loginPageState = this.$parent.getState()
            if (loginPageState === 1) {
                // 登陆
                let reqData = {
                    mobile_number: this.loginForm.mobile_number,
                    password: this.loginForm.password
                }
                axios({
                    method: 'post',
                    url: 'http://localhost:8203/user/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true,
                    data: reqData
                }).then((res) => {
                    console.log(res)
                })
            } else if (loginPageState === 2) {
                // 注册
                let reqData = {
                    user_name: this.loginForm.user_name,
                    mobile_number: this.loginForm.mobile_number,
                    password: this.loginForm.password,
                    re_password: this.loginForm.re_password
                }
                axios({
                    method: 'post',
                    url: 'http://localhost:8203/user/register',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true,
                    data: reqData
                }).then((res) => {
                    console.log(res)
                })
            }

            // for (var k in this) {
            //     console.log('=========', k)
            // }
        }
    }
}
</script>
<style>
.login_form {
    padding: 20px;
}
.login_form div {
    padding-bottom: 10px;
    display: flex;
    min-height: 40px;
    justify-content: space-between;
    transition: all .6s ease;
}
.login__signup .login_form_r5 {
    opacity: 0;
    transition-duration: .4s;
}
.login__signup .login_button label:nth-child(2) {
    transform: translate(-100%);
    opacity: 0;
}
.login__signin .login_form_r1,
.login__signin .login_form_r4 {
    opacity: 0;
    transform: translateY(30%) scale(0.8);
}
.login__signin .login_form_r2,
.login__signin .login_form_r3 {
    transform: translateY(-100%);
}
.login__signin .login_form_r5 {
    transform: translateY(-200%);
}
.login__signin .login_button label:nth-child(3) {
    transform: translateY(100%);
    opacity: 0;
}
</style>
