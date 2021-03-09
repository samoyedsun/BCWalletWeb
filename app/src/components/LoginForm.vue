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
            },
            aletMsg: '',
            displayStsates: 'none'
        }
    },
    methods: {
        validateMobilePhone (value, callback) {
            if (value === '') {
                callback(new Error('手机号不可为空！'))
            } else {
                if (value !== '') {
                    var reg = /^1[3456789]\d{9}$/
                    if (!reg.test(value)) {
                        callback(new Error('您输入的手机号无效！'))
                    }
                }
                callback()
            }
        },
        validatePass (value, callback) {
            if (value === '') {
                callback(new Error('密码不可为空！'))
            } else if (value.length < 6) {
                callback(new Error('密码长度最小6位'))
            } else {
                callback()
            }
        },
        onSubmit () {
            let loginPageState = this.$parent.getState()
            if (loginPageState === 1) {
                // 登陆
                let reqData = {
                    mobile_number: this.loginForm.mobile_number,
                    password: this.loginForm.password
                }
                this.validateMobilePhone(this.loginForm.mobile_number, (msg) => {
                    if (!msg) {
                        this.validatePass(this.loginForm.password, (msg) => {
                            if (!msg) {
                                axios({
                                    method: 'post',
                                    url: 'http://localhost:8203/user/login',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    withCredentials: true,
                                    data: reqData
                                }).then((res) => {
                                    this.$toast.success('登陆成功!')
                                })
                            } else {
                                this.$toast.error(msg.toString())
                            }
                        })
                    } else {
                        this.$toast.error(msg.toString())
                    }
                })
            } else if (loginPageState === 2) {
                // 注册
                let reqData = {
                    user_name: this.loginForm.user_name,
                    mobile_number: this.loginForm.mobile_number,
                    password: this.loginForm.password,
                    re_password: this.loginForm.re_password
                }
                this.validateMobilePhone(this.loginForm.mobile_number, (msg) => {
                    if (!msg) {
                        this.validatePass(this.loginForm.password, (msg) => {
                            if (!msg) {
                                axios({
                                    method: 'post',
                                    url: 'http://localhost:8203/user/register',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    withCredentials: true,
                                    data: reqData
                                }).then((res) => {
                                    this.$toast.success('注册成功!')
                                })
                            } else {
                                this.$toast.error(msg.toString())
                            }
                        })
                    } else {
                        this.$toast.error(msg.toString())
                    }
                })
            }
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
