import { createApp } from 'vue'
import App from './App.vue'
import ProductItem from './ProductItem.vue'

const app = createApp(App)
// 全局注册
// app.component("product-item", ProductItem)
app.mount("#app")
