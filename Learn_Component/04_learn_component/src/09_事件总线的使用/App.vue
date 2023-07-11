<template>
    <div class="app">
        <div>App中的message: {{ message }}</div>
        <home></home>
        <category v-if="isShowCategory"></category>
        <button @click="isShowCategory = false">隐藏Category</button>
    </div>
</template>

<script>
import Home from './Home.vue';
import EventBus from './util/event-bus';
import Category from './Category.vue';
export default {
    components: {
        Home,
        Category
    },
    data() {
        return {
            message: "Hello App",
            isShowCategory: true
        }
    },
    created() {
        EventBus.on("whyEvent", (name, age, height)=> {
            console.log("eventBus在App中的监听：", name, age, height)
            this.message = `name:${name}, age:${age}, height:${height}`
        })
    }
}
</script>

<style scoped>
</style>