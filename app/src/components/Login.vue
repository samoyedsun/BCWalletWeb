<template>
    <div class="login" :class="{ login__signin: isSignIn, login__signup: isSignUp}">
        <login-tabs @click.native="switchState" />
        <login-form />
    </div>
</template>

<script>
import LoginTabs from './LoginTabs'
import LoginForm from './LoginForm'
export default {
    components: {
        LoginTabs,
        LoginForm
    },
    data () {
        return {
            state: 1
        }
    },
    computed: {
        isSignIn () {
            return this.state === 1
        },
        isSignUp () {
            return this.state === 2
        }
    },
    methods: {
        isSignInPage () {
            return this.state === 1
        },
        isSignUpPage () {
            return this.state === 2
        },
        switchState () {
            this.state = this.state === 1 ? 2 : 1
        }
    }
}
</script>
<style>
.login {
    width: 100%;
    color: white;
    font-size: 14px;
    font-weight: bold;
}
</style>
