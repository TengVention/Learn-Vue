import { createApp } from 'vue' // 不支持template选项
// import { createApp } from 'vue/dist/vue.esm-bundler' // compile代码
import App from './App.vue' // vue-loader：template -> createNode过程
import "./utils/abc/cba/nba/index.js"

/**
 * 1. jsconfig.json的演练
 *      作用：给VSCode读取，VSCode在读取到其中的内容时，更加友好的给我们代码提示。
 * 2. 引入Vue的版本
 *      默认Vue版本：runtime、vue-loader完成compile的编译过程
 *      vue.esm-bundler：runtime + compile（vue源码）， 对template进行编译
 * 3. 补充：单文件Vue style是有自己的作用域的
 * 4. 补充：通过vite创建一个vue项目
 * 
 */
// 元素 -> createNode：由Vue的源码完成
// compile的代码
// const App = {
//     template: `<h2>Hello Vue</h2>`,
//     data() {
//         return {

//         }
//     }
// }

createApp(App).mount('#app')
