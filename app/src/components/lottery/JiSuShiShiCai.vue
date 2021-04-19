<template>
    <div class="ji-su-shi-shi-cai">
        <lottery-header />
        <ji-su-shi-shi-cai-lobby />
        <lottery-bottom ref="lotteryBottom" />
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
    methods: {
        getCurrChip () {
            return this.$refs.lotteryBottom.getCurrChip()
        },
        updateMoney (money) {
            return this.$refs.lotteryBottom.updateMoney(money)
        }
    }
}
</script>

<style>
</style>
