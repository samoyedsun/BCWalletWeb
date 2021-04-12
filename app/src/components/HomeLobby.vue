<template>
    <div class="home-lobby">
        <div class="item" :class="curSelect==item.id?'opacity':''" v-for="(item,index) in lotteries" :key="index" @touchstart="touchstart(index)" @touchend="touchend()">
            <span class="name">{{item.name}}</span>
            <span class="count-down-time-title">{{item.countDownTimeTitle}}</span>
            <span class="count-down-time-form">{{item.countDownTimeForm}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            lotteries: [
                {
                    id: 0,
                    name: '极速时时彩',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '00:00',
                    time: '',
                    pagePath: '/lottery/jisushishicai'
                },
                {
                    id: 1,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 2,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 3,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 4,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 5,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 6,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 7,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 8,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 9,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 10,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 11,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 12,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 13,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                },
                {
                    id: 14,
                    name: '敬请期待!',
                    countDownTimeTitle: '下注中',
                    countDownTimeForm: '--:--'
                }
            ],
            curSelect: null
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
        touchstart (index) {
            for (let i = 0, len = this.lotteries.length; i < len; ++i) {
                if (this.lotteries[i].id === index) {
                    this.curSelect = i
                }
            }
        },
        touchend () {
            var slotInfo = this.lotteries[this.curSelect]
            if (!slotInfo) return
            this.curSelect = null

            if (!slotInfo.pagePath) {
                let err = '功能开发中..., 敬请期待!'
                return this.$toast.default(err)
            }
            this.$router.push({ path: slotInfo.pagePath })
        },
        updateLotteryStateList (callBack) {
            var reqData = {}
            var that = this
            var processRequest = function () {
                that.$api.post('/lottery/get_lottery_state_list', reqData).then((response) => {
                    let result = response.data
                    if (result.code === 10000) {
                        callBack(result.data)
                    } else if (result.code === 10201) {
                        console.log('waiting 1s!')
                        setTimeout(processRequest, 1000)
                    } else {
                        that.$toast.error(result.err)
                    }
                }, (result) => {
                    // that.$toast.error(result.err)
                })
            }
            processRequest()
        },
        processUpdateLotteryStateListLoop () {
            this.updateLotteryStateList((data) => {
                let countDownTimeTitle = data.lottery_jsssc.count_down_time_title
                let countDownTime = data.lottery_jsssc.count_down_time
                for (let i = 0, len = this.lotteries.length; i < len; ++i) {
                    if (this.lotteries[i].id === 0) {
                        this.lotteries[i].countDownTimeTitle = countDownTimeTitle
                        this.lotteries[i].countDownTimeForm = this.formatSeconds(countDownTime)
                    }
                }
                this.timer = setInterval(() => {
                    countDownTime--
                    for (let i = 0, len = this.lotteries.length; i < len; ++i) {
                        if (this.lotteries[i].id === 0) {
                            this.lotteries[i].countDownTimeForm = this.formatSeconds(countDownTime)
                        }
                    }
                    if (countDownTime <= 0) {
                        clearInterval(this.timer)
                        this.processUpdateLotteryStateListLoop()
                    }
                }, 1000)
            })
        }
    },
    created () {
        this.processUpdateLotteryStateListLoop()
    },
    beforeDestroy () {
        clearInterval(this.timer)
    }
}
</script>
<style >
* { padding: 0; margin: 0; }
.home-lobby{
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    overflow: auto;
    height: 300px;
}
.home-lobby::-webkit-scrollbar{
    display: none;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    border-radius: 5px;
    margin: 1.5%;
    background: #2a2c45;
}
.opacity{
    opacity: 0.1;
    background: #e5e5e5;
}
.home-lobby .item .name{
    margin-top: 5px;
    font-weight: bold;
    color: burlywood;
}
.home-lobby .item .count-down-time-title{
    margin-top: 5px;
    width: 60px;
    border-radius: 10px;
    box-shadow: inset 0px 0px 50px 0px #53f708;
}
.home-lobby .item .count-down-time-form{
    margin-top: 5px;
    margin-bottom: 5px;
    width: 60px;
    color: #53f708;
    font-weight: bold;
}
</style>
