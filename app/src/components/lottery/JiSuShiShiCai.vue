<template>
    <div class="ji-su-shi-shi-cai">
        <lottery-header />
        <ji-su-shi-shi-cai-lobby />
        <lottery-bottom />
    </div>
</template>

<script>
import LotteryHeader from '../LotteryHeader'
import JiSuShiShiCaiLobby from './JiSuShiShiCaiLobby'
import LotteryBottom from '../LotteryBottom'
export default {
    components: {
        LotteryHeader,
        JiSuShiShiCaiLobby,
        LotteryBottom
    },
    data () {
        return {

        }
    },
    mounted () {
    }
}
</script>

<style>
</style>
