<template>
    <div class="home-bottom">
        <router-link v-for="(item, index) in tabbarList" :key="index" class="tab-item" :to="item.path" active-class="isActive">
            <div class="item-wrap">{{item.name}}</div>
        </router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tabbarList: [
                {name: '主页', path: '/home'},
                {name: '钱包', path: '/wallet'},
                {name: '聊天', path: '/chat'},
                {name: '我的', path: '/me'}
            ]
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.home-bottom{
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
    top: auto;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    padding: 0 0 constant(safe-area-inset-bottom);
    padding: 0 0 env(safe-area-inset-bottom);
    border-radius: 14px 14px 0 0;
    -webkit-box-shadow: inset 0 1px 3px 0 #636798;
    box-shadow: inset 0 1px 3px 0 #636798;
    background-color: #2a2c45;
}
.isActive{
    color: burlywood;
}
.tab-item{
    flex:1;
    font-size:22px;
    height:100%;
}
.item-wrap{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
a{
    text-decoration:none;
    color: white;
}
a,a:hover,a:active,a:visited,a:link,a:focus{
    -webkit-tap-highlight-color:rgba(9, 230, 1, 0.945);
    -webkit-tap-highlight-color: transparent;
    outline:none;
    background: none;
    text-decoration: none;
}
</style>
