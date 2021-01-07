<template>
  <div class="home">
    <h1>count: {{ count }}</h1>
    <h1>doubleCount: {{ doubleCount }}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const count = ref(222);
    const add = () => {
      count.value++;
    };
    const doubleCount = computed(() => count.value * 2);
    return {
      count,
      add,
      doubleCount,
    };
  },
};
</script>