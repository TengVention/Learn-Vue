<template>
  <div>
    <h2>{{ title }}</h2>
    <div>计数器: {{ counter }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <product-item></product-item>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      title: "我还是标题",
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>

<style>
h2 {
  color: red;
}
</style>