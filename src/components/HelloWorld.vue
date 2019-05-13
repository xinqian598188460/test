<template>
  <div class="hello">
    <h1 @click="helloClick">
      {{ msg }},点击次数为<a
        href="#"
        @click.stop.prevent="$emit('tel', ++clickTime)"
        >{{ test }}</a
      >
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      clickTime: 0
    }
  },
  props: {
    msg: String,
    test: Number
  },
  methods: {
    helloClick: function () {
      window.console.log(this.clickTime)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
