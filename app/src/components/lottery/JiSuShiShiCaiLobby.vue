<template>
    <div class="ji-su-shi-shi-cai-lobby">
        <div class="lobby-upper">
            <div class="prev-issue">
                <div class="issue-number">
                    <span>{{prevIssue}}</span>期
                </div>
                <div class="balls-number">
                    <span>{{prevBalls[0]}}</span>
                    <span>{{prevBalls[1]}}</span>
                    <span>{{prevBalls[2]}}</span>
                    <span>{{prevBalls[3]}}</span>
                    <span>{{prevBalls[4]}}</span>
                </div>
            </div>
            <div class="curr-issue">
                <div class="issue-number">
                    <span>{{currIssue}}</span>期
                </div>
                <div class="balls-number">
                    <span class="count-down-time-title">{{countDownTimeTitle}}</span>
                    <span class="count-down-time-form">{{countDownTimeForm}}</span>
                </div>
            </div>
        </div>
        <div class="lobby-lower">
            <div class="lobby-lower-left">
                <ul>
                    <li v-for="(family, index) in familyList" class="betting-family" :key="'bettingFamily-' + index" v-on:click="showFamily(family)">
                        {{family}}
                    </li>
                </ul>
            </div>
            <div class="lobby-lower-right">
                <div v-for="(item, index) in bettingSlotList" :key="'bettingSlot-' + index" v-show="item.family==family">
                    <div class="betting-slot-title">
                        {{item.title}}
                    </div>
                    <div v-for="(item, index) in item.slots" class="betting-slot-body" :key="item.kind + '-' + item.slot + '-' + index">
                        <div class="left-slot">
                            {{item.name}}
                        </div>
                        <div class="middle-slot">
                            {{item.odds}}
                        </div>
                        <div class="right-slot" v-on:click="betting(item.kind, item.slot, item.amount)">
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
            timer: null,
            prevIssue: 0,
            prevBalls: [
                0, 0, 0, 0, 0
            ],
            currIssue: 0,
            countDownTimeTitle: '下注中',
            countDownTimeForm: '00:00',
            imgChipIcon: require('@/assets/chip-icon.png'),
            gameType: 'lottery_jsssc',
            gameState: 'OPENING',
            gameStateConst: {
                OPENING: 'OPENING',
                SEALING: 'SEALING'
            },
            family: '两面',
            familyList: [
                '两面',
                '1-5球',
                '前中后'
            ],
            bettingSlotList: [
                {
                    title: '总和，龙虎和',
                    family: '两面',
                    slots: [
                        {name: '总和大', kind: 'SUM_BALL_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '总和小', kind: 'SUM_BALL_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '总和单', kind: 'SUM_BALL_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '总和双', kind: 'SUM_BALL_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0},
                        {name: '龙', kind: 'DRAGON_TIGER_TIE', slot: 'DRAGON', odds: 1.9999, amount: 0},
                        {name: '虎', kind: 'DRAGON_TIGER_TIE', slot: 'TIGER', odds: 1.9999, amount: 0},
                        {name: '和', kind: 'DRAGON_TIGER_TIE', slot: 'TIE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第一球',
                    family: '两面',
                    slots: [
                        {name: '大', kind: 'SINGLE_BALL_1_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', kind: 'SINGLE_BALL_1_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', kind: 'SINGLE_BALL_1_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', kind: 'SINGLE_BALL_1_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第二球',
                    family: '两面',
                    slots: [
                        {name: '大', kind: 'SINGLE_BALL_2_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', kind: 'SINGLE_BALL_2_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', kind: 'SINGLE_BALL_2_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', kind: 'SINGLE_BALL_2_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第三球',
                    family: '两面',
                    slots: [
                        {name: '大', kind: 'SINGLE_BALL_3_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', kind: 'SINGLE_BALL_3_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', kind: 'SINGLE_BALL_3_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', kind: 'SINGLE_BALL_3_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第四球',
                    family: '两面',
                    slots: [
                        {name: '大', kind: 'SINGLE_BALL_4_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', kind: 'SINGLE_BALL_4_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', kind: 'SINGLE_BALL_4_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', kind: 'SINGLE_BALL_4_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第五球',
                    family: '两面',
                    slots: [
                        {name: '大', kind: 'SINGLE_BALL_5_SIZE', slot: 'LARGE', odds: 1.9999, amount: 0},
                        {name: '小', kind: 'SINGLE_BALL_5_SIZE', slot: 'SMALL', odds: 1.9999, amount: 0},
                        {name: '单', kind: 'SINGLE_BALL_5_FACE', slot: 'SINGLE', odds: 1.9999, amount: 0},
                        {name: '双', kind: 'SINGLE_BALL_5_FACE', slot: 'DOUBLE', odds: 1.9999, amount: 0}
                    ]
                },
                {
                    title: '第一球',
                    family: '1-5球',
                    slots: [
                        {name: '0', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER0', odds: 9.999, amount: 0},
                        {name: '1', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER1', odds: 9.999, amount: 0},
                        {name: '2', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER2', odds: 9.999, amount: 0},
                        {name: '3', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER3', odds: 9.999, amount: 0},
                        {name: '4', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER4', odds: 9.999, amount: 0},
                        {name: '5', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER5', odds: 9.999, amount: 0},
                        {name: '6', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER6', odds: 9.999, amount: 0},
                        {name: '7', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER7', odds: 9.999, amount: 0},
                        {name: '8', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER8', odds: 9.999, amount: 0},
                        {name: '9', kind: 'SINGLE_BALL_1_VALUE', slot: 'NUMBER9', odds: 9.999, amount: 0}
                    ]
                },
                {
                    title: '第二球',
                    family: '1-5球',
                    slots: [
                        {name: '0', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER0', odds: 9.999, amount: 0},
                        {name: '1', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER1', odds: 9.999, amount: 0},
                        {name: '2', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER2', odds: 9.999, amount: 0},
                        {name: '3', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER3', odds: 9.999, amount: 0},
                        {name: '4', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER4', odds: 9.999, amount: 0},
                        {name: '5', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER5', odds: 9.999, amount: 0},
                        {name: '6', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER6', odds: 9.999, amount: 0},
                        {name: '7', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER7', odds: 9.999, amount: 0},
                        {name: '8', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER8', odds: 9.999, amount: 0},
                        {name: '9', kind: 'SINGLE_BALL_2_VALUE', slot: 'NUMBER9', odds: 9.999, amount: 0}
                    ]
                },
                {
                    title: '第三球',
                    family: '1-5球',
                    slots: [
                        {name: '0', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER0', odds: 9.999, amount: 0},
                        {name: '1', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER1', odds: 9.999, amount: 0},
                        {name: '2', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER2', odds: 9.999, amount: 0},
                        {name: '3', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER3', odds: 9.999, amount: 0},
                        {name: '4', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER4', odds: 9.999, amount: 0},
                        {name: '5', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER5', odds: 9.999, amount: 0},
                        {name: '6', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER6', odds: 9.999, amount: 0},
                        {name: '7', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER7', odds: 9.999, amount: 0},
                        {name: '8', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER8', odds: 9.999, amount: 0},
                        {name: '9', kind: 'SINGLE_BALL_3_VALUE', slot: 'NUMBER9', odds: 9.999, amount: 0}
                    ]
                },
                {
                    title: '第四球',
                    family: '1-5球',
                    slots: [
                        {name: '0', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER0', odds: 9.999, amount: 0},
                        {name: '1', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER1', odds: 9.999, amount: 0},
                        {name: '2', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER2', odds: 9.999, amount: 0},
                        {name: '3', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER3', odds: 9.999, amount: 0},
                        {name: '4', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER4', odds: 9.999, amount: 0},
                        {name: '5', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER5', odds: 9.999, amount: 0},
                        {name: '6', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER6', odds: 9.999, amount: 0},
                        {name: '7', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER7', odds: 9.999, amount: 0},
                        {name: '8', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER8', odds: 9.999, amount: 0},
                        {name: '9', kind: 'SINGLE_BALL_4_VALUE', slot: 'NUMBER9', odds: 9.999, amount: 0}
                    ]
                },
                {
                    title: '第四球',
                    family: '1-5球',
                    slots: [
                        {name: '0', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER0', odds: 9.999, amount: 0},
                        {name: '1', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER1', odds: 9.999, amount: 0},
                        {name: '2', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER2', odds: 9.999, amount: 0},
                        {name: '3', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER3', odds: 9.999, amount: 0},
                        {name: '4', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER4', odds: 9.999, amount: 0},
                        {name: '5', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER5', odds: 9.999, amount: 0},
                        {name: '6', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER6', odds: 9.999, amount: 0},
                        {name: '7', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER7', odds: 9.999, amount: 0},
                        {name: '8', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER8', odds: 9.999, amount: 0},
                        {name: '9', kind: 'SINGLE_BALL_5_VALUE', slot: 'NUMBER9', odds: 9.999, amount: 0}
                    ]
                },
                {
                    title: '前三',
                    family: '前中后',
                    slots: [
                        {name: '豹子', kind: 'FIRST_THREE_BALL', slot: 'LEOPARD', odds: 69, amount: 0},
                        {name: '顺子', kind: 'FIRST_THREE_BALL', slot: 'STRAIGHT', odds: 12.902, amount: 0},
                        {name: '对子', kind: 'FIRST_THREE_BALL', slot: 'COUPLET', odds: 2.7, amount: 0},
                        {name: '半顺', kind: 'FIRST_THREE_BALL', slot: 'SEMI_STRAIGHT', odds: 2.1, amount: 0},
                        {name: '杂六', kind: 'FIRST_THREE_BALL', slot: 'DISORDER', odds: 2.4, amount: 0}
                    ]
                },
                {
                    title: '中三',
                    family: '前中后',
                    slots: [
                        {name: '豹子', kind: 'MIDDLE_THREE_BALL', slot: 'LEOPARD', odds: 69, amount: 0},
                        {name: '顺子', kind: 'MIDDLE_THREE_BALL', slot: 'STRAIGHT', odds: 12.902, amount: 0},
                        {name: '对子', kind: 'MIDDLE_THREE_BALL', slot: 'COUPLET', odds: 2.7, amount: 0},
                        {name: '半顺', kind: 'MIDDLE_THREE_BALL', slot: 'SEMI_STRAIGHT', odds: 2.1, amount: 0},
                        {name: '杂六', kind: 'MIDDLE_THREE_BALL', slot: 'DISORDER', odds: 2.4, amount: 0}
                    ]
                },
                {
                    title: '后三',
                    family: '前中后',
                    slots: [
                        {name: '豹子', kind: 'LAST_THREE_BALL', slot: 'LEOPARD', odds: 69, amount: 0},
                        {name: '顺子', kind: 'LAST_THREE_BALL', slot: 'STRAIGHT', odds: 12.902, amount: 0},
                        {name: '对子', kind: 'LAST_THREE_BALL', slot: 'COUPLET', odds: 2.7, amount: 0},
                        {name: '半顺', kind: 'LAST_THREE_BALL', slot: 'SEMI_STRAIGHT', odds: 2.1, amount: 0},
                        {name: '杂六', kind: 'LAST_THREE_BALL', slot: 'DISORDER', odds: 2.4, amount: 0}
                    ]
                }
            ]
        }
    },
    components: {
    },
    methods: {
        formatSeconds (sec) {
            let min = 0
            if (sec > 60) {
                min = Math.floor(sec / 60)
                sec = sec % 60
            }
            min = (Array(2).join(0) + min).slice(-2)
            sec = (Array(2).join(0) + sec).slice(-2)
            return min + ':' + sec
        },
        showFamily (family) {
            this.family = family
        },
        resetAllSlotAmount (kindSlotToAmount) {
            if (this.gameState === this.gameStateConst.SEALING) {
                this.setAllSlotAmount('-')
            } else {
                this.setAllSlotAmount(0)
                for (let key in kindSlotToAmount) {
                    let kindSlotList = key.split('-')
                    let kind = kindSlotList[0]
                    let slot = kindSlotList[1]
                    let amount = kindSlotToAmount[key]
                    this.updateSlotAmount(kind, slot, amount)
                }
            }
        },
        setAllSlotAmount (amount) {
            for (let i = 0, len = this.bettingSlotList.length; i < len; i++) {
                let bettingSlot = this.bettingSlotList[i]
                let slotList = bettingSlot.slots
                for (let i = 0, len = slotList.length; i < len; i++) {
                    let slotInfo = slotList[i]
                    slotInfo.amount = amount
                }
            }
        },
        updateSlotAmount (kind, slot, amount) {
            for (let i = 0, len = this.bettingSlotList.length; i < len; i++) {
                let bettingSlot = this.bettingSlotList[i]
                let slotList = bettingSlot.slots
                for (let i = 0, len = slotList.length; i < len; i++) {
                    let slotInfo = slotList[i]
                    if (slotInfo.kind === kind && slotInfo.slot === slot) {
                        slotInfo.amount = amount
                        return true
                    }
                }
            }
            return false
        },
        betting (kind, slot, amount) {
            if (this.gameState === this.gameStateConst.SEALING) return
            var currChip = this.$parent.getCurrChip()
            var reqData = {
                game_type: this.gameType,
                kind: kind,
                slot: slot,
                amount: amount + currChip
            }
            var that = this
            var processRequest = function () {
                that.$api.post('http://localhost:8203/lottery/betting', reqData).then((response) => {
                    let result = response.data
                    if (result.code === 10000) {
                        that.resetAllSlotAmount(result.data.kind_slot_to_amount)
                    } else if (result.code === 10201) {
                        console.log('waiting 1s!')
                        setTimeout(processRequest, 1000)
                    } else {
                        that.$toast.error(result.err)
                    }
                }, (err) => {
                    that.$toast.error(err)
                })
            }
            processRequest()
        },
        updateLotteryInfo (callBack) {
            var reqData = {
                game_type: this.gameType
            }
            var that = this
            var processRequest = function () {
                that.$api.post('http://localhost:8203/lottery/get_lottery_info', reqData).then((response) => {
                    let result = response.data
                    if (result.code === 10000) {
                        callBack(result.data)
                    } else if (result.code === 10201) {
                        console.log('waiting 1s!')
                        setTimeout(processRequest, 1000)
                    } else {
                        that.$toast.error(result.err)
                    }
                }, (err) => {
                    that.$toast.error(err)
                })
            }
            processRequest()
        },
        processUpdateLotteryInfoLoop () {
            this.updateLotteryInfo((data) => {
                this.prevIssue = data.prev_issue
                this.prevBalls = data.prev_balls
                this.currIssue = data.curr_issue
                this.countDownTimeTitle = data.count_down_time_title
                let countDownTime = data.count_down_time
                this.countDownTimeForm = this.formatSeconds(countDownTime)
                this.gameState = data.game_state
                this.resetAllSlotAmount(data.kind_slot_to_amount)

                this.timer = setInterval(() => {
                    countDownTime--
                    this.countDownTimeForm = this.formatSeconds(countDownTime)
                    if (countDownTime <= 0) {
                        clearInterval(this.timer)
                        this.processUpdateLotteryInfoLoop()
                    }
                }, 1000)
            })
        }
    },
    mounted () {
        this.processUpdateLotteryInfoLoop()
    },
    beforeDestroy () {
        clearInterval(this.timer)
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
    background-color: #2a2c45;
    box-shadow: inset 0px 0px 0px 1px burlywood;
}
.lobby-upper .prev-issue{
    width: 100%;
    height: 50%;
}
.lobby-upper .prev-issue .issue-number{
    float: left;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    color: #53f708;
}
.lobby-upper .prev-issue .issue-number span{
    color: white;
}
.lobby-upper .prev-issue .balls-number{
    float: right;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
}
.lobby-upper .prev-issue .balls-number span{
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border: 2px solid #53f708;
    border-radius: 50%;
    color: white;
    box-shadow: inset 0px 0px 1px 0px burlywood;
}
.lobby-upper .curr-issue{
    width: 100%;
    height: 50%;
}
.lobby-upper .curr-issue .issue-number{
    float: left;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    color: #53f708;
}
.lobby-upper .curr-issue .issue-number span{
    color: white;
}
.lobby-upper .curr-issue .balls-number{
    float: right;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
}
.lobby-upper .curr-issue .balls-number .count-down-time-title{
    margin-right: 5px;
    width: 60px;
    border-radius: 10px;
    box-shadow: inset 0px 0px 50px 0px #53f708;
}
.lobby-upper .curr-issue .balls-number .count-down-time-form{
    margin-right: 5px;
    width: 60px;
    color: #53f708;
    font-weight: bold;
}
.lobby-lower{
    width: 100%;
    height: 80%;
}
.lobby-lower-left{
    float: left;
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
    float: right;
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
