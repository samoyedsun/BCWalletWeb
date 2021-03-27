import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Chat from '@/components/Chat'
import Me from '@/components/Me'
import Wallet from '@/components/Wallet'
import LotteryJiSuShiShiCai from '@/components/lottery/JiSuShiShiCai'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/lottery/jisushishicai',
            meta: {
                title: '极速时时彩'
            },
            component: LotteryJiSuShiShiCai
        },
        {
            path: '/login',
            meta: {
                title: '登陆'
            },
            component: Login
        },
        {
            path: '/home',
            meta: {
                title: '首页'
            },
            component: Home
        },
        {
            path: '/chat',
            meta: {
                title: '聊天'
            },
            component: Chat
        },
        {
            path: '/me',
            meta: {
                title: '我的'
            },
            component: Me
        },
        {
            path: '/wallet',
            meta: {
                title: '钱包'
            },
            component: Wallet
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
