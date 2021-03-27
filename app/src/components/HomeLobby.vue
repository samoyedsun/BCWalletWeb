<template>
    <div class="main">
        <div class="item" :class="curSelect==sudoku.id?'opacity':''" v-for="(sudoku,index) in lotteries" :key="index" @touchstart="touchstart(index)" @touchend="touchend()">
            <span class="name">{{sudoku.name}}</span>
            <span class="time">{{sudoku.time}}</span>
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
                    time: '02:33',
                    pagePath: '/lottery/jisushishicai'
                },
                {
                    id: 1,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 2,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 3,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 4,
                    name: '幸运飞艇',
                    time: '02:33'
                },
                {
                    id: 5,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 6,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 7,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 8,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 9,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 10,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 11,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 12,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 13,
                    name: '敬请期待!',
                    time: '02:33'
                },
                {
                    id: 14,
                    name: '敬请期待!',
                    time: '02:33'
                }
            ],
            curSelect: null
        }
    },
    components: {

    },
    methods: {
        touchstart (index) {
            var that = this
            var list = that.lotteries
            for (var i = 0, len = list.length; i < len; ++i) {
                if (list[i].id === index) {
                    that.curSelect = i
                }
            }
        },
        touchend () {
            var that = this
            var list = that.lotteries
            var slotInfo = list[that.curSelect]
            if (!slotInfo) return
            that.curSelect = null

            if (!slotInfo.pagePath) {
                let err = '功能开发中..., 敬请期待!'
                return that.$toast.default(err)
            }
            that.$router.push({ path: slotInfo.pagePath })
        }
    }
}
</script>
<style >
* { padding: 0; margin: 0; }
.main{
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    overflow: auto;
    height: 300px;
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
.name{
    font-weight: bold;
    color: rgb(243, 239, 7);
}
.time{
    width: 80%;
    height: 30px;
    color: #53f708;
    margin-bottom: 3px;
    border-radius: 14px 14px 14px 14px;
    display: block;
    font-weight: bold;
}
</style>
