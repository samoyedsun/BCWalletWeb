<template>
    <div class="home-bottom">
        <div class="bottom-base">
            <div class="clear-btn">
                <router-link class="login-btn-link" to="/login">
                    <span>清空</span>
                </router-link>
            </div>
            <div class="submit-btn">
                <router-link class="login-btn-link" to="/login">
                    <span>提交</span>
                </router-link>
            </div>
            <div class="withdraw-btn">
                <router-link class="login-btn-link" to="/login">
                    <span>撤回</span>
                </router-link>
            </div>
        </div>
        <div class="bottom-chip">
            <div v-for="(item,index) in tabbarList" class="tab-item" :key="index">
                <img class="item-wrap" :src="item.img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tabbarList: [
                {name: '主页', path: '/home', img: require('@/assets/chip1.png')},
                {name: '钱包', path: '/wallet', img: require('@/assets/chip5.png')},
                {name: '钱包', path: '/wallet', img: require('@/assets/chip10.png')},
                {name: '钱包', path: '/wallet', img: require('@/assets/chip50.png')},
                {name: '聊天', path: '/chat', img: require('@/assets/chip100.png')},
                {name: '聊天', path: '/chat', img: require('@/assets/chip500.png')},
                {name: '我的', path: '/me', img: require('@/assets/chip1000.png')}
            ]
        }
    },
    methods: {
    }
}
</script>

<style>
.home-bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: rgba(42,44,69,0);
}
.bottom-chip{
    display: flex;
    flex: 1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(255,255,255,0);
}
.tab-item{
    width:100%;
    height:100%;
}
.item-wrap{
    max-width:100%;
    height:100%;
}
.bottom-base{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 75px;
    border-radius: 14px 14px 0 0;
    box-shadow: inset 0 1px 10px 0 #2bff00;
    background-color: rgba(42,44,69,1);
}
.clear-btn{
    position: absolute;
    bottom: 10px;
    right: 10%;
    width: 20%;
    height: 30px;
    border-radius: 5px;
    background-color: burlywood;
}
.submit-btn{
    position: absolute;
    bottom: 10px;
    left: 40%;
    width: 20%;
    height: 30px;
    border-radius: 5px;
    background-color: burlywood;
}
.withdraw-btn{
    position: absolute;
    bottom: 10px;
    left: 10%;
    width: 20%;
    height: 30px;
    border-radius: 5px;
    background-color: burlywood;
}
.login-btn-link{
    float: right;
    width:100%;
    height:100%;
    font-size: 22px;
    text-decoration:none;
    color: black;
}
</style>
