<template>
    <h2>message: {{ message }} - {{ counter }}</h2>
    <button @click="message = 'hello message'">修改message</button>
    <button @click="counter++">+1</button>
    <div>
        <home v-if="isShowHome"></home>
        <button @click="isShowHome = !isShowHome">显示/隐藏home</button>
    </div>
</template>

<script>
import Home from './Home.vue'
    export default {
        data() {
            return {
                message: "Hello App",
                counter: 0,
                isShowHome: true
            }
        },
        components: {
            Home
        },
        // 1.组件准备创建
        beforeCreate() {
            console.log("beforeCreate")
        },
        // 2.组件创建完成
        created() {
            console.log("create")
            console.log("1.发送网络请求，请求数据")
            console.log("2.监听eventBus数据")
            console.log("3.监听watch数据")
        },
        // 3.组件template准备被挂载
        beforeMount() {
            console.log("beforeMount")
        },
        // 4.组件template被挂载，虚拟DOM->真实DOM
        mounted() {
            console.log("mounted")
            console.log("1.获取DOM")
            console.log("2.使用DOM")
        },
        // 5.数据发送变化
        // 5.1准备更新DOM
        beforeUpdate() {
            console.log("beforeUpdate")
        },
        // 5.2更新DOM
        updated() {
            console.log("updated")
        },
        // 6.卸载VNode -> 修改虚拟DOM
        // 6.1准备卸载
        beforeUnmount() {
            console.log("beforeUnmount")
        },
        // 6.2DOM元素完成卸载
        unmounted() {
            console.log("unmounted")
        }
    }
</script>

<style scoped>

</style>