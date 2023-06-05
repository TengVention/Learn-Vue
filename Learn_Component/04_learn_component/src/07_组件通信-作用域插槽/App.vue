<template>
    <div class="app">
        <!-- tab-control -->
        <tab-control :titles="['衣服', '裤子', '鞋子']" @tab-item-click="tabItemClick" />
        <!-- 展示内容 -->
        <h2>{{ pageContents[currentIndex] }}</h2>
        <tab-control :titles="['衣服', '裤子', '鞋子']" @tab-item-click="tabItemClick">
            <template #default="props">
                <a href="#">{{ props.item }}</a>
            </template>
        </tab-control>
        <tab-control :titles="['衣服', '裤子', '鞋子']" @tab-item-click="tabItemClick">
            <template v-slot:default="props">
                <button>{{ props.item }}</button>
            </template>
        </tab-control>
    </div>
</template>

<script>
import TabControl from './components/TabControl.vue';
export default {
    components: {
        TabControl
    },
    data() {
        return {
            currentIndex: 0,
            pageContents: ["衣服列表", "裤子列表", "鞋子列表"]
        }
    },
    methods: {
        tabItemClick(index) {
            console.log(index)
            this.currentIndex = index
        }
    }
}
</script>

<style scoped></style>