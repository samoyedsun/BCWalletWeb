<template>
    <form class="login_form">
        <div class="login_form_r1">
            <!--
            <login-textfield ref="mobileNumber" label="用户名" icon="user" />
            -->
        </div>
        <div class="login_form_r2">
            <login-textfield ref="userName" label="用户名" icon="mobile" />
        </div>
        <div class="login_form_r3">
            <login-textfield ref="password" label="密码" icon="lock" />
        </div>
        <div class="login_form_r4">
            <login-textfield ref="password2" label="密码" icon="lock" />
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
            aletMsg: '',
            displayStsates: 'none'
        }
    },
    methods: {
        validateUserName (value) {
            if (value === '') {
                return {ok: false, err: '用户名不可为空.'}
            } else {
                var reg = /^[A-Za-z0-9]{6,16}$/
                if (!reg.test(value)) {
                    return {ok: false, err: '用户名必须由 6-16位字母、数字组成.'}
                }
                return {ok: true}
            }
        },
        validateMobilePhone (value) {
            if (value === '') {
                return {ok: false, err: '手机号不可为空.'}
            } else {
                var reg = /^1[3456789]\d{9}$/
                if (!reg.test(value)) {
                    return {ok: false, err: '您输入的手机号无效.'}
                }
                return {ok: true}
            }
        },
        validatePassword (value, callback) {
            if (value === '') {
                return {ok: false, err: '密码不可为空.'}
            } else {
                var reg = /^[A-Za-z0-9]{6,16}$/
                if (!reg.test(value)) {
                    return {ok: false, err: '密码必须由 6-16位字母、数字组成.'}
                }
                return {ok: true}
            }
        },
        onSubmit () {
            if (this.$parent.isSignInPage()) { // 登陆
                let userNameChil = this.$refs.userName
                let passwordChil = this.$refs.password

                let reqData = {
                    username: userNameChil.getInputValue(),
                    password: passwordChil.getInputValue()
                }
                let ret = this.validateUserName(reqData.username)
                if (!ret.ok) {
                    return this.$toast.error(ret.err)
                }
                ret = this.validatePassword(reqData.password)
                if (!ret.ok) {
                    return this.$toast.error(ret.err)
                }
                this.$api.post('/user/login', reqData).then((response) => {
                    let data = response.data
                    if (data.code === 10000) {
                        this.$toast.success(data.err)
                        this.$router.push({ path: '/home' })
                    } else {
                        this.$toast.error(data.err)
                    }
                }, (err) => {
                    this.$toast.error(err)
                })
            } else if (this.$parent.isSignUpPage()) { // 注册
                let userNameChil = this.$refs.userName
                let passwordChil = this.$refs.password
                let password2Chil = this.$refs.password2

                let reqData = {
                    username: userNameChil.getInputValue(),
                    password: passwordChil.getInputValue(),
                    password2: password2Chil.getInputValue()
                }
                let ret = this.validateUserName(reqData.username)
                if (!ret.ok) {
                    return this.$toast.error(ret.err)
                }
                ret = this.validatePassword(reqData.password)
                if (!ret.ok) {
                    return this.$toast.error(ret.err)
                }
                if (reqData.password !== reqData.password2) {
                    let err = '两次密码不一致!'
                    return this.$toast.error(err)
                }
                this.$api.post('/user/register', reqData).then((response) => {
                    let data = response.data
                    if (data.code === 10000) {
                        this.$toast.success(data.err)
                        this.$parent.switchState()
                    } else {
                        this.$toast.error(data.err)
                    }
                }, (err) => {
                    this.$toast.error(err)
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
