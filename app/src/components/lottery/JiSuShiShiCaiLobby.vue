<template>
    <div class="ji-su-shi-shi-cai-lobby">
        <div class="lobby-upper">
        </div>
        <div class="lobby-lower">
            <div class="lobby-lower-left">
                <li class="betting-family">
                    两面
                </li>
                <li class="betting-family">
                    1-5球
                </li>
                <li class="betting-family">
                    前中后
                </li>
            </div>
            <div class="lobby-lower-right">
                <div v-for="(item, index) in slotConfigList" :key="'slotConfigList-' + index">
                    <div class="betting-slot-title">
                        {{item.title}}
                    </div>
                    <div v-for="(item, index) in item.slots" class="betting-slot-body" :key="item.module + '-' + item.slot + '-' + index">
                        <div class="left-slot">
                            {{item.name}}
                        </div>
                        <div class="middle-slot">
                            {{item.odds}}
                        </div>
                        <div class="right-slot" v-on:click="betting(item.module, item.slot, item.amount)">
                            <div class="chip-icon">
                                <img class="chip-icon-img" :src="imgChipIcon"/>
                            </div>
                            <span class="chip-amount">{{item.amount}}</span>
                        </div>
                    </div>
                </div>
                <div class="betting-slot-title">
                    <!-- 下面留点空，防止被筹码盖住。 -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            imgChipIcon: require('@/assets/chip-icon.png'),
            gameType: 'lottery_jsssc',
            slotConfigList: [
                {
                    title: '总和，龙虎和',
                    slots: [
                        {name: '总和大', module: 'SUM_BALL_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '总和小', module: 'SUM_BALL_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '总和单', module: 'SUM_BALL_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '总和双', module: 'SUM_BALL_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0},
                        {name: '龙', module: 'DRAGON_TIGER_TIE', slot: 'DRAGON', odds: 1.9999, amount: 0},
                        {name: '虎', module: 'DRAGON_TIGER_TIE', slot: 'TIGER', odds: 1.9999, amount: 0},
                        {name: '和', module: 'DRAGON_TIGER_TIE', slot: 'TIE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第一球',
                    slots: [
                        {name: '大', module: 'SINGLE_BALL_1_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', module: 'SINGLE_BALL_1_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', module: 'SINGLE_BALL_1_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', module: 'SINGLE_BALL_1_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第二球',
                    slots: [
                        {name: '大', module: 'SINGLE_BALL_2_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', module: 'SINGLE_BALL_2_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', module: 'SINGLE_BALL_2_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', module: 'SINGLE_BALL_2_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第三球',
                    slots: [
                        {name: '大', module: 'SINGLE_BALL_3_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', module: 'SINGLE_BALL_3_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', module: 'SINGLE_BALL_3_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', module: 'SINGLE_BALL_3_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第四球',
                    slots: [
                        {name: '大', module: 'SINGLE_BALL_4_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', module: 'SINGLE_BALL_4_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', module: 'SINGLE_BALL_4_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', module: 'SINGLE_BALL_4_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第五球',
                    slots: [
                        {name: '大', module: 'SINGLE_BALL_5_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', module: 'SINGLE_BALL_5_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', module: 'SINGLE_BALL_5_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', module: 'SINGLE_BALL_5_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                }
            ]
        }
    },
    components: {
    },
    methods: {
        betting (kind, slot, amount) {
            var reqData = {
                game_type: this.gameType,
                kind: kind,
                slot: slot,
                amount: amount
            }
            this.$api.post('http://localhost:8203/lottery/betting', reqData).then((response) => {
                let data = response.data
                if (data.code === 20000) {
                    this.$toast.success(data.err)
                } else {
                    this.$toast.error(data.err)
                }
            }, (err) => {
                this.$toast.error(err)
            })
        }
    }
}
</script>
<style >
* { padding: 0; margin: 0; }
.ji-su-shi-shi-cai-lobby{
    width:100%;
    position:absolute;
    top:50px;
    bottom:75px;
    background-color:#fff;
}
.lobby-upper{
    width: 100%;
    height: 20%;
    background-color: #191925;
    box-shadow: inset 0px 0px 0px 1px burlywood;
}
.lobby-lower{
    width: 100%;
    height: 80%;
}
.lobby-lower-left{
    float:left;
    width: 20%;
    height: 100%;
    background-color: #191925;
}
.lobby-lower-left .betting-family{
    margin-bottom:1px;
    width: 100%;
    height: 80px;
    text-align: left;
    line-height: 80px;
    color: black;
    background-color: burlywood;
}
.lobby-lower-right{
    float:right;
    width: 80%;
    height: 100%;
    overflow: auto;
    background-color: #191925;
}
.lobby-lower-right::-webkit-scrollbar{
    display: none;
}
.betting-slot-title{
    margin-bottom:0.1px;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: burlywood;
}
.betting-slot-body{
    margin-bottom:0.1px;
    width: 100%;
    height: 50px;
}
.betting-slot-body .left-slot{
    float: left;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: bold;
    color: burlywood;
}
.betting-slot-body .middle-slot{
    float: left;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: yellow;
}
.betting-slot-body .right-slot{
    float: left;
    width: 60%;
    height: 100%;
    display: flex;
    border-radius: 5px;
    box-shadow: inset 0px 0px 1px 0px burlywood;
}
.betting-slot-body .right-slot .chip-icon{
    float: left;
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.betting-slot-body .right-slot .chip-icon .chip-icon-img{
    width: 50%;
    height: 50%;
}
.betting-slot-body .right-slot .chip-amount{
    float: right;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: yellow;
}
</style>
