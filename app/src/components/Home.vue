<template>
    <div class="home">
        <home-header />
        <router-view></router-view>
        我是主页
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
