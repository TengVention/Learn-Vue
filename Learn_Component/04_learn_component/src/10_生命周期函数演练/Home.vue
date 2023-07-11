<template>
    <h2>home</h2>
</template>

<script>
    export default {
        beforeCreate() {
            console.log("home beforeCreate")
        },
        created() {
            console.log("home create")
        },
        beforeUnmount() {
            console.log("home beforeUnmount")
        },
        unmounted() {
            console.log("home unmounted")
        }
    }
</script>

<style scoped>

</style>