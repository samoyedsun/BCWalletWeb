<template>
    <div class="lottery-bottom">
        <div class="bottom-base">
            <div class="chat-btn">
                <router-link class="login-btn-link" to="/login">
                    <span>聊天</span>
                </router-link>
            </div>
            <div class="money">
                <span><img :src="imgChipIcon"/>{{money}}</span>
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
            money: 0,
            currChip: 0,
            imgChipIcon: require('@/assets/chip-icon.png'),
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
        },
        updateMoney (money) {
            this.money = money
        }
    },
    created () {
        let currChip = 1
        this.setCurrChip(currChip)
        let money = 0
        this.updateMoney(money)
    }
}
</script>

<style>
.lottery-bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: rgba(42,44,69,0);
}
.bottom-chip{
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(255,255,255,0);
}
.tab-item{
    margin: 0% 2% 0% 2%;
    width: 10%;
    height: 100%;
}
.tab-item-selected{
    margin: 0% 2% 0% 2%;
    width: 12%;
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
}
.bottom-base{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 75%;
    border-radius: 14px 14px 0 0;
    box-shadow: inset 0 1px 10px 0 burlywood;
    background-color: rgba(42,44,69,1);
}
.detail-btn{
    position: absolute;
    bottom: 10px;
    right: 5%;
    width: 20%;
    height: 30px;
    border-radius: 5px;
    background-color: burlywood;
}
.money{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    left: 25%;
    width: 50%;
    height: 30px;
}
.money span{
    font-size: 14px;
    color: white;
}
.money span img{
    width: 14px;
    height: 14px;
}
.chat-btn{
    position: absolute;
    bottom: 10px;
    left: 5%;
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
