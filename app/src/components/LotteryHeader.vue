<template>
    <div class="home-header">
        <div class="go-back" @touchstart="touchstart()" @touchend="touchend()">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        touchstart () {
        },
        touchend () {
            this.$router.go(-1)
        }
    },
    created () {
    }
}
</script>

<style scoped>
.home-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #2a2c45;
}
.go-back{
    width: 0px;
    height: 0px;
    border-right: 15px solid #53f708;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    position: absolute;
    left: 10px;
    top: 7.5px;
}
</style>
