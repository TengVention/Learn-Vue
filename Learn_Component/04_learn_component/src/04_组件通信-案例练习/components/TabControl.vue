<template>
    <div class="tab-control">
        <template v-for="(item,index) in titles" :key="item">
            <div class="tab-control-item" 
                 @click="itemClick(index)"
                 :class="{ active: index === currentIndex }">
                <span>{{ item }}</span>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    emits: ["tabItemClick"],
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit("tabItemClick", index)
        }
    }
}
</script>

<style scoped>
.tab-control {
    display: flex;
}

.tab-control-item {
    flex: 1;
    text-align: center;
}
.tab-control-item.active {
    color: red;
    font-weight: 700;
}
.tab-control-item.active span {
    border-bottom: 3px solid red;
    padding: 8px;
}
</style>