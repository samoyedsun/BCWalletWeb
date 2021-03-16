<template>
    <div class="wallet">
        <home-header />
        <router-view></router-view>
        我是钱包
        <home-bottom />
    </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeBottom from './HomeBottom'
export default {
    components: {
        HomeHeader,
        HomeBottom
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
