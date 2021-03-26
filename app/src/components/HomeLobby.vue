<template>
    <div class="main">
        <div class="item" :class="curSelect==sudoku.id?'opacity':''" v-for="(sudoku,index) in sudokus" :key="index" @touchstart="touchstart(index)" @touchend="touchend">
            <span class="name">{{sudoku.name}}</span>
            <span class="time">{{sudoku.time}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            sudokus: [
                {
                    id: 0,
                    name: '重庆时时彩',
                    time: '02:33'
                },
                {
                    id: 1,
                    name: '广东快乐十分',
                    time: '02:33'
                },
                {
                    id: 2,
                    name: '北京赛车',
                    time: '02:33'
                },
                {
                    id: 3,
                    name: '北京快乐8',
                    time: '02:33'
                },
                {
                    id: 4,
                    name: '幸运飞艇',
                    time: '02:33'
                },
                {
                    id: 5,
                    name: '极速赛车',
                    time: '02:33'
                },
                {
                    id: 6,
                    name: '快乐时时彩',
                    time: '02:33'
                },
                {
                    id: 7,
                    name: '新疆时时彩',
                    time: '02:33'
                },
                {
                    id: 8,
                    name: 'CG北京赛车',
                    time: '02:33'
                },
                {
                    id: 9,
                    name: 'CG北京赛车',
                    time: '02:33'
                },
                {
                    id: 10,
                    name: 'CG北京赛车',
                    time: '02:33'
                },
                {
                    id: 11,
                    name: 'CG北京赛车',
                    time: '02:33'
                },
                {
                    id: 12,
                    name: 'CG北京赛车',
                    time: '02:33'
                },
                {
                    id: 13,
                    name: 'CG北京赛车',
                    time: '02:33'
                },
                {
                    id: 14,
                    name: 'CG北京赛车',
                    time: '02:33'
                }
            ],
            curSelect: null
        }
    },
    components: {

    },
    methods: {
        touchstart (e) {
            var that = this
            var list = that.sudokus
            for (var i = 0, len = list.length; i < len; ++i) {
                if (list[i].id === e) {
                    that.curSelect = i
                }
            }
        },
        touchend () {
            var that = this
            that.curSelect = null
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
