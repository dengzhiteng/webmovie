一、setup 函数的特性以及作用

可以确定的是 Vue3.0 是兼容 Vue2.x 版本的 也就是说我们再日常工作中 可以在 Vue3 中使用 Vue2.x 的相关语法 但是当你真正开始使用 Vue3 写项目时 你会发现他比 Vue2.x 方便的多

Vue3 的一大特性函数 ---- setup

1、setup 函数是处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数 也就说在 setup 函数中是无法 使用 data 和 methods 中的数据和方法的

2、setup 函数是 Composition API（组合 API）的入口

3、在 setup 函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用

二、setup 函数的注意点：

1、由于在执行 setup 函数的时候，还没有执行 Created 生命周期方法，所以在 setup 函数中，无法使用 data 和 methods 的变量和方法

2、由于我们不能在 setup 函数中使用 data 和 methods，所以 Vue 为了避免我们错误的使用，直接将 setup 函数中的 this 修改成了 undefined

3、setup 函数只能是同步的不能是异步的
用法 1:结合 ref 使用

```
<template>
  <div id="app">
    {{name}}
    <p>{{age}}</p>
    <button @click="plusOne()">+</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name:'app',
  data(){
    return {
      name:'xiaosan'
    }
  },
  setup(){
    const name =ref('小四')
    const age=ref(18)
    function plusOne(){
      age.value++ //想改变值或获取值 必须.value
    }
    return { //必须返回 模板中才能使用
      name,age,plusOne
    }
  }
}
</script>
```
