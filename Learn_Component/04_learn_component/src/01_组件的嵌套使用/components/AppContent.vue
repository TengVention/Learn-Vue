<template>
    <div class="content">
        <div class="banner">banner</div>
        <AppContentList></AppContentList>
    </div>
</template>

<script>
import AppContentList from './AppContentList.vue';
export default {
    components: {
        AppContentList
    }
}
</script>

<style scoped>
    .content {
        background-color: purple;
        color: white;
    }
</style>