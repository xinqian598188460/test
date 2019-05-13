<template>
  <div id="app">
    <b-button @click="addOption()" variant="success">添加选择题</b-button>
    <b-button @click="addBlank()" variant="success">添加填空题</b-button>
    <option-topic v-for="item in optionItems" :optionItem="item" :key="'option_'+item.count" v-on:delThisOption="delThisOption"></option-topic>
    <blank-topic v-for="item in blankItems" :blankItem="item" :key="'blank_'+item.count" v-on:delThisBlank="delThisBlank"></blank-topic>
  </div>
</template>

<script>
import OptionTopic from './components/paperInfo/OptionTopic'
import BlankTopic from './components/paperInfo/BlankTopic'

export default {
  data: function () {
    return {
      optionCount: 0,
      blankCount: 0,
      optionItems: [],
      blankItems: []
    }
  },
  name: 'app',
  components: {
    OptionTopic,
    BlankTopic
  },
  methods: {
    addOption: function () {
      this.optionItems.push({
        title: '',
        count: this.optionCount++,
        optionSize: 4,
        optionChoiceList: [{
          num: 'A',
          text: ''
        }, {
          num: 'B',
          text: ''
        }, {
          num: 'C',
          text: ''
        }, {
          num: 'D',
          text: ''
        }]
      })
    },
    addBlank: function () {
      this.blankItems.push({
        title: '',
        count: this.blankCount++
      })
    },
    delThisOption: function (count) {
      this.optionItems.splice(count, 1)
      this.optionCount--
    },
    delThisBlank: function (count) {
      this.blankItems.splice(count, 1)
      this.blankCount--
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
