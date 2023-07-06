<template>
    <div class="app">
        <home></home>
        <div>App: {{ message }}</div>
        <button @click="message = 'Hello world'">修改message</button>
    </div>
</template>

<script>
import { computed } from 'vue';
import Home from './Home.vue';
export default {
    components: {
        Home
    },
    data() {
        return {
            message: "Hello App"
        }
    },
    provide() {
        return {
            name: "dwc",
            age: 18,
            message: computed(()=> this.message)
        }
    }
}
</script>

<style scoped>
</style>