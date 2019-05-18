<template>
  <div class="echarts">
    <v-chart
      :option="bar"
      :loading="loading"
      @ready="onReady"
      @click="onClick"
    />
    <button @click="doRandom">Random</button>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/lite.js'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'

export default {
  components: {'v-chart': IEcharts},
  name: 'echarts',
  data: () => ({
    loading: false,
    bar: {
      title: {
        text: '易递名片分析'
      },
      tooltip: {},
      xAxis: {
        data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
      },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }),
  methods: {
    doRandom () {
      const that = this
      let data = []
      for (let i = 0, min = 5, max = 99; i < 6; i++) {
        data.push(Math.floor(Math.random() * (max + 1 - min) + min))
      }
      that.loading = true
      that.bar.series[0].data = data
      setTimeout(function () {
        that.loading = false
      }, 500)
    },
    onReady (instance, ECharts) {
      console.log(instance, ECharts)
    },
    onClick (event, instance, ECharts) {
      console.log(arguments)
    }
  }
}
</script>

<style scoped>
  .echarts {
    width: 500px;
    height: 600px;
  }
</style>
