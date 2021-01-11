<template>
  <div id="learn">
    <test-c></test-c>
    <h1>count: {{ count }}</h1>
    <h1>doubleCount: {{ doubleCount }}</h1>
    <button @click="add">add</button>
    <router-link to="/about?a=1"> about </router-link>
    <router-link to="/list"> list </router-link>
  </div>
</template>

<script>
import {
  createApp,
  ref,
  reactive,
  computed,
  watch,
  getCurrentInstance,
} from "vue";
export default {
  setup() {
    // 由于我们不能在 setup函数中使用 data 和 methods，所以 Vue 为了避免我们错误的使用，直接将 setup函数中的this修改成了 undefined
    console.log("this", this);
    // ref()可以把原来的数据类型变为响应式对象
    const count = ref(222);
    // reactive()也可以把原来的数据类型变为响应式对象
    const profile = reactive({
      age: 1811,
    });
    // ref和reactive的区别: ref()传入的是js的基本数据类型; reactive()中传入的是object普通对象

    // 定义方法
    // setup函数只能是同步的不能是异步的
    const add = () => {
      count.value++;
    };

    // 计算属性
    const doubleCount = computed(() => count.value * 2);

    // 监听器
    // 第一个参数是监听的值，count.value 表示当 count.value 发生变化就会触发监听器的回调函数，即第二个参数，第二个参数可以执行监听时候的回调
    watch(
      () => count.value,
      (val) => {
        console.log(`count is ${val}`);
      }
    );
    //reactive的包装是深层次的里面的属性也包装成了响应式对象
    const name = reactive({
      firstName: "",
      lastName: "",
    });

    // 获取路由信息
    const { ctx } = getCurrentInstance();
    // console.log(ctx.$router.currentRoute.value);

    /*  watch、computed、普通js函数的区别:
        watch和computed如何选择?在于使用场景上
            watch重点为了监听做事情. 看重的不是返回结果, 而是属性的变化.
            computed重点为了得到一个属性值,看重的是它的返回结果.
        普通js函数和computed的区别:
            computed性能会更好一些, 它有一个计算缓存; 普通js函数没有计算缓存.
            如果computed里面的变量或值没有发生变化, 那么就不会重新执行计算, 而是从计算缓存中读取结果.
        所以优先使用watch和computed
    */

    const vm = createApp(app);
    // 注册组件 : 这段代码必须在mount('#app')之前调用
    // 第一个参数: 组件的名字
    // 第二个参数: 接收一组组件的选项参数
    vm.component("test-c", {
      // 创建自定义组件
      template: "<div>hello</div>",
    });
    vm.mount("#learn");

    return {
      count,
      add,
      doubleCount,
    };
  },
};
</script>