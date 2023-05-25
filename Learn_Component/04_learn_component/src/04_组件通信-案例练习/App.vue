<template>
    <div class="app">
        <tab-control :titles="['衣服', '裤子', '鞋子']"></tab-control>
    </div>
</template>

<script>
import TabControl from './components/TabControl.vue';
export default {
    components: {
        TabControl
    }
}
</script>

<style scoped></style>