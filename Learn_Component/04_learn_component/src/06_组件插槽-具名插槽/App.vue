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
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
    components: {
        NavBar
    }
}
</script>

<style scoped></style>