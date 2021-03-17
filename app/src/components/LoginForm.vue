<template>
    <form class="login_form">
        <div class="login_form_r1">
            <login-textfield ref="userName" label="用户名" icon="user" />
        </div>
        <div class="login_form_r2">
            <login-textfield ref="mobileNumber" label="手机号" icon="mobile" />
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
            let loginPageState = this.$parent.getState()
            if (loginPageState === 1) { // 登陆
                let mobileNumberChil = this.$refs.mobileNumber
                let passwordChil = this.$refs.password

                let reqData = {
                    mobile_number: mobileNumberChil.getInputValue(),
                    password: passwordChil.getInputValue()
                }
                let ret = this.validateMobilePhone(reqData.mobile_number)
                if (!ret.ok) {
                    return this.$toast.error(ret.err)
                }
                ret = this.validatePassword(reqData.password)
                if (!ret.ok) {
                    return this.$toast.error(ret.err)
                }
                /*
                this.$api.post('http://localhost:8203/user/login', reqData).then((response) => {
                    let data = response.data
                    if (data.code === 20000) {
                        this.$toast.success(data.err)
                    } else {
                        this.$toast.error(data.err)
                    }
                }, (error) => {
                    this.$toast.success(error)
                })
                */
                return this.$router.push({ path: '/home' })
            } else if (loginPageState === 2) { // 注册
                let userNameChil = this.$refs.userName
                let mobileNumberChil = this.$refs.mobileNumber
                let passwordChil = this.$refs.password
                let password2Chil = this.$refs.password2

                let reqData = {
                    user_name: userNameChil.getInputValue(),
                    mobile_number: mobileNumberChil.getInputValue(),
                    password: passwordChil.getInputValue(),
                    password2: password2Chil.getInputValue()
                }
                let ret = this.validateUserName(reqData.user_name)
                if (!ret.ok) {
                    return this.$toast.error(ret.err)
                }
                ret = this.validateMobilePhone(reqData.mobile_number)
                if (!ret.ok) {
                    return this.$toast.error(ret.err)
                }
                ret = this.validatePassword(reqData.password)
                if (!ret.ok) {
                    return this.$toast.error(ret.err)
                }
                if (reqData.password !== reqData.password2) {
                    return this.$toast.error('两次密码不一致!')
                }
                /*
                this.$api.post('http://localhost:8203/user/register', reqData).then((response) => {
                    let data = response.data
                    if (data.code === 20000) {
                        this.$toast.success(data.err)
                    } else {
                        this.$toast.error(data.err)
                    }
                }, (error) => {
                    this.$toast.error(error)
                })
                */
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
