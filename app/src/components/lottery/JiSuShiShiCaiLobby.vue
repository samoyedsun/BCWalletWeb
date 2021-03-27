<template>
    <div class="ji-su-shi-shi-cai-lobby">
        <div class="lobby-upper">
        </div>
        <div class="lobby-lower">
            <div class="lobby-lower-left">
                <li class="betting-module">
                    两面
                </li>
                <li class="betting-module">
                    1-5球
                </li>
                <li class="betting-module">
                    前中后
                </li>
            </div>
            <div class="lobby-lower-right">
                <div class="betting-slot-title">
                    总和,龙虎
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        总和大
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        总和小
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        总和单
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        总和双
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        龙
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        虎
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        和
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-title">
                    第一球
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        大
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        小
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        单
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-body">
                    <div class="left-slot">
                        双
                    </div>
                    <div class="middle-slot">
                        1.9999
                    </div>
                    <div class="right-slot">
                        <div class="chip_icon">
                            <img class="chip_icon_img" :src="img_chip_icon"/>
                        </div>
                        <span class="chip_num">0</span>
                    </div>
                </div>
                <div class="betting-slot-title">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            img_chip_icon: require('@/assets/chip_icon.png')
        }
    },
    components: {
    },
    methods: {
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
.lobby-lower-left .betting-module{
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
    box-shadow: inset 0 1px 5px 0 burlywood;
}
.betting-slot-body .right-slot .chip_icon{
    float: left;
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.betting-slot-body .right-slot .chip_icon .chip_icon_img{
    width: 50%;
    height: 50%;
}
.betting-slot-body .right-slot .chip_num{
    float: right;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: yellow;
}
</style>
