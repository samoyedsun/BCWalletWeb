<template>
    <div class="home-bottom">
        <div class="bottom-base">
            <div class="clear-btn">
                <router-link class="login-btn-link" to="/login">
                    <span>清空</span>
                </router-link>
            </div>
            <div class="chat-btn">
                <router-link class="login-btn-link" to="/login">
                    <span>聊天</span>
                </router-link>
            </div>
            <div class="detail-btn">
                <router-link class="login-btn-link" to="/login">
                    <span>明细</span>
                </router-link>
            </div>
        </div>
        <div class="bottom-chip">
            <img class="tab-item" :class="currChip==item.value?'tab-item-selected':''" v-for="(item, index) in chipList" :key="index" :src="item.img" v-on:click="setCurrChip(item.value)">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            currChip: null,
            chipList: [
                {value: 1, img: require('@/assets/chip1.png')},
                {value: 5, img: require('@/assets/chip5.png')},
                {value: 10, img: require('@/assets/chip10.png')},
                {value: 50, img: require('@/assets/chip50.png')},
                {value: 100, img: require('@/assets/chip100.png')},
                {value: 500, img: require('@/assets/chip500.png')},
                {value: 1000, img: require('@/assets/chip1000.png')}
            ]
        }
    },
    methods: {
        setCurrChip (chip) {
            this.currChip = chip
        },
        getCurrChip () {
            return this.currChip
        }
    },
    created () {
        let currChip = 1
        this.setCurrChip(currChip)
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
    width: 100%;
    height: 100%;
}
.tab-item-selected{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: curr-chip 2s linear infinite;
}
/* 光圈渐变动画 */
@keyframes curr-chip {
    0%{
        box-shadow: 0 0 0px #6DD5FA
    }
    10%{
        box-shadow: 0 0 10px #6DD5FA
    }
    20%{
        box-shadow: 0 0 20px #6DD5FA
    }
    30%{
        box-shadow: 0 0 30px #6DD5FA
    }
    40%{
        box-shadow: 0 0 40px #6DD5FA
    }
    50%{
        box-shadow: 0 0 50px #6DD5FA
    }
    60%{
        box-shadow: 0 0 40px #6DD5FA
    }
    70%{
        box-shadow: 0 0 30px #6DD5FA
    }
    80%{
        box-shadow: 0 0 20px #6DD5FA
    }
    90%{
        box-shadow: 0 0 10px #6DD5FA
    }
    100%{
        box-shadow: 0 0 0px #6DD5FA
    }
    from{
        transform: rotate(0deg);
        filter: hue-rotate(0deg);
    }
    to{
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
    }
}
.bottom-base{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 75px;
    border-radius: 14px 14px 0 0;
    box-shadow: inset 0 1px 10px 0 burlywood;
    background-color: rgba(42,44,69,1);
}
.detail-btn{
    position: absolute;
    bottom: 10px;
    right: 10%;
    width: 20%;
    height: 30px;
    border-radius: 5px;
    background-color: burlywood;
}
.clear-btn{
    position: absolute;
    bottom: 10px;
    left: 40%;
    width: 20%;
    height: 30px;
    border-radius: 5px;
    background-color: burlywood;
}
.chat-btn{
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
