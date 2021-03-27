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
                        0
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
                        0
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
                        0
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
                        0
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
                        0
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
                        0
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
                        0
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
                        0
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
                        0
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
                        0
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
                        0
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
    background-color:red;
}
.lobby-upper{
    width: 100%;
    height: 20%;
    background-color: rgb(2, 2, 24);
}
.lobby-lower{
    width: 100%;
    height: 80%;
    background-color: rgb(0, 255, 0);
}
.lobby-lower-left{
    float:left;
    width: 20%;
    height: 100%;
    background-color: #191925;
}
.betting-module{
    margin: 0 auto;
    width: 100%;
    height: 80px;
    text-align: left;
    line-height: 80px;
    border: 1px solid #2bff00;
}
.lobby-lower-right{
    float:right;
    width: 80%;
    height: 100%;
    overflow: auto;
    background-color: #191925;
}
.betting-slot-title{
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    background-color: #191925;
}
.betting-slot-body{
    width: 100%;
    height: 50px;
    background-color: #191925;
}
.betting-slot-body .left-slot{
    float: left;
    margin: 1%;
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    color: rgb(243, 239, 7);
}
.betting-slot-body .middle-slot{
    float: left;
    margin: 1%;
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    color: #2bff00;
}
.betting-slot-body .right-slot{
    float: left;
    margin: 1%;
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: inset 0 1px 5px 0 #2bff00;
}
</style>
