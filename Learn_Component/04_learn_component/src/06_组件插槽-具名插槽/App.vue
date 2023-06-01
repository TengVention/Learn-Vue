<template>
    <div class="app">
        <nav-bar>
            <template v-slot:left>
                <button>返回</button>
            </template>
            <template v-slot:center>
                <span>内容</span>
            </template>
            <template v-slot:right>
                <a href="#">登录</a>
            </template>
        </nav-bar>

        <nav-bar>
            <template v-slot:[position]>
                <a href="#">注册</a>
            </template>
        </nav-bar>
        <button @click=" position = 'left' ">left</button>
        <button @click=" position = 'center' ">center</button>
        <button @click=" position = 'right' ">right</button>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
    components: {
        NavBar
    },
    data() {
        return {
            position: "center"
        }
    }
}
</script>

<style scoped></style>