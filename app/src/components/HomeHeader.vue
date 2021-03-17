<template>
    <div class="home-header">
        <router-link class="tab-item" to="/login" active-class="isActive">
            <div class="item-wrap">登陆</div>
        </router-link>
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
    border-radius: 0px 0px 0px 0px;
    -webkit-box-shadow: inset 0 1px 3px 0 #636798;
    box-shadow: inset 0 1px 3px 0 #636798;
    background-color: #2a2c45;
    z-index: 131;
}
.isActive{
    color:rgb(240, 4, 4);
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
    color:#72759f;
}
a,a:hover,a:active,a:visited,a:link,a:focus{
    -webkit-tap-highlight-color:rgba(9, 230, 1, 0.945);
    -webkit-tap-highlight-color: transparent;
    outline:none;
    background: none;
    text-decoration: none;
}
</style>
