<template>
    <div class="home-header">
        <div class="online">
            <span>在线:</span>
            <span>9999</span>
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
        }
    },
    methods: {
    },
    created () {
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
    bottom: auto;
    width: 100%;
    height: 52px;
    padding: 0 0 constant(safe-area-inset-bottom);
    padding: 0 0 env(safe-area-inset-bottom);
    -webkit-box-shadow: inset 0 1px 3px 0 #636798;
    box-shadow: inset 0 1px 3px 0 #636798;
    background-color: #2a2c45;
    z-index: 10;
}
.online{
    position: absolute;
    left: 10px;
    top: 15px;
    font-size: 14px;
    font-weight: bold;
}
.login-btn{
    flex:1;
    border: 0 solid #fc5;
    background-color: #fc5;
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
