<template>
    <div class="home-banner">
        <img v-for="(item, index) in imgArray"  :key="index"  :src="item" v-show="n==index"/>
    </div>
</template>

<script>
export default {
    data () {
        return {
            n: 0, // 默认图片是第一张开始
            imgArray: [
                require('@/assets/mob-banner1.png'),
                require('@/assets/mob-banner2.png'),
                require('@/assets/mob-banner3.png')
            ] // 获取图片位置
        }
    },
    created () {
        this.play()
    },
    methods: {
        play () {
            this.timer = setInterval(this.autoPlay, 5000) // 用定时器控制每张图的显示时间
        },
        autoPlay () {
            this.$data.n++
            if (this.imgArray.length === this.n) {
                this.n = 0
            }
        },
        clickImg (index) {
            this.n = index
        }
    },
    beforeDestroy () {
        clearInterval(this.timer)
    }
}
</script>
<style scoped>
.home-banner{
    width: 100%;
    height: 150px;
}
img{
    width: 95%;
    height: 100%;
    border-radius: 14px;
}
</style>
