<template>
    <div>
        <h2>Category</h2>
    </div>
</template>

<script>
import eventBus from './util/event-bus';
    export default {
        methods: {
            whyEventHandler() {
                console.log("Category中监听到whyEvent");
            }
        },
        created() {
            eventBus.on("whyEvent", this.whyEventHandler)
        },
        unmounted() {
            console.log("Category组件已被移除")
            eventBus.off("whyEvent", this.whyEventHandler)
        }
    }
</script>

<style scoped>

</style>