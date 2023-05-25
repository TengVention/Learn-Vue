<template>
    <div class="info">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>身高：{{ height }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    // props的数组用法
    // props: ["name", "age", "height"]
    props: {
        name: {
            type: String,
            default: "我是默认的name"
        },
        age: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 1.11
        }
    }
}
</script>

<style scoped></style>