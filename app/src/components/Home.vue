<template>
    <div class="home">
        <home-header />
        <home-banner />
        <home-lobby />
        <home-bottom />
    </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeBanner from './HomeBanner'
import HomeLobby from './HomeLobby'
import HomeBottom from './HomeBottom'
export default {
    components: {
        HomeHeader,
        HomeBanner,
        HomeLobby,
        HomeBottom
    },
    data () {
        return {
        }
    },
    created () {

    }
}
</script>

<style>

</style>
