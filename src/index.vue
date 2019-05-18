<template>
  <div id="app">
<!--    <p class="w-50">-->
<!--      &lt;!&ndash; 使用 router-link 组件来导航. &ndash;&gt;-->
<!--      &lt;!&ndash; 通过传入 `to` 属性指定链接. &ndash;&gt;-->
<!--      &lt;!&ndash; <router-link> 默认会被渲染成一个 `<a>` 标签 &ndash;&gt;-->
<!--      <router-link to="/paper">Go to Paper</router-link>-->
<!--      <router-link to="/echarts">Go to echarts</router-link>-->
<!--    </p>-->
<!--    &lt;!&ndash; 路由出口 &ndash;&gt;-->
<!--    &lt;!&ndash; 路由匹配到的组件将渲染在这里 &ndash;&gt;-->
    <router-view class="m-auto"></router-view>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

</style>
