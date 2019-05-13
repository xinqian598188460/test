<template>
  <div id="app">
    <img width="350px" height="300px" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      v-bind:test="test"
      @tel="telMethod"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data: function () {
    return {
      test: 0
    }
  },
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    telMethod: function (msg) {
      window.console.log('次数为' + msg)
      this.test++
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
