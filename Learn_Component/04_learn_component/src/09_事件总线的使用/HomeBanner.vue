<template>
    <div class="banner">
        <button @click="bannerBtnClick">banner按钮</button>
    </div>
</template>

<script>
    import eventBus from './util/event-bus'
    export default {
        methods: {
            bannerBtnClick() {
                console.log("点击banner按钮")
                eventBus.emit("whyEvent", "why", 18, 1.88)
            }
        }
    }
</script>

<style scoped>

</style>