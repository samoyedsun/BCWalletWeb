<template>
    <div class="chat">
        <home-header />
        我是聊天页
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
