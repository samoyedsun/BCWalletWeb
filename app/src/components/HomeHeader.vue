<template>
    <div class="home-header">
        <div class="online">
            <span>在线:</span>
            <span>{{onlineAmount}}</span>
        </div>
        <div class="login-btn">
            <router-link class="login-btn-link" to="/login">
                <span>登陆</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            timer: null,
            onlineAmount: 0
        }
    },
    methods: {
    },
    mounted () {
        this.timer = setInterval(() => {
            this.onlineAmount = 8392 + Math.ceil(Math.random() * 10)
        }, 1000)
    },
    beforeDestroy () {
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
.home-header{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #2a2c45;
}
.online{
    position: absolute;
    left: 10px;
    top: 15px;
    font-size: 14px;
    font-weight: bold;
    color: #53f708;
}
.login-btn{
    flex:1;
    border: 0 solid rgb(243, 239, 7);
    background-color: rgb(243, 239, 7);
    position: absolute;
    right: 10px;
    top: 10px;
    width: 104px;
    height: 30px;
    border-radius: 5px;
}
.login-btn-link{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
}
a{
    text-decoration:none;
    color: #000;
}
a,a:hover,a:active,a:visited,a:link,a:focus{
    -webkit-tap-highlight-color:rgba(9, 230, 1, 0.945);
    -webkit-tap-highlight-color: transparent;
    outline:none;
    background: none;
    text-decoration: none;
}
</style>
