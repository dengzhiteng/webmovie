<template>
  <div class="home">
    <h1>count: {{ count }}</h1>
    <h1>doubleCount: {{ doubleCount }}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { ref, computed, watch, getCurrentInstance } from "vue";
export default {
  setup() {
    // 定义普通变量
    const count = ref(222);

    // 定义方法
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

    // 获取路由信息
    const { ctx } = getCurrentInstance();
    console.log(ctx.$router.currentRoute.value);

    return {
      count,
      add,
      doubleCount,
    };
  },
};
</script>