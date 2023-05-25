<template>
    <div class="app">
        <ShowInfo name="why" :age="18" :height="1.88" />
        <ShowInfo name="kobe" :age="30" :height="1.98" />
    </div>
</template>

<script>
import ShowInfo from './components/ShowInfo.vue';
export default {
    components: {
        ShowInfo
    }
}
</script>

<style scoped></style>