<template>
  <div>
    <b-button @click="addOption()" variant="success">添加选择题</b-button>
    <b-button @click="addBlank()" variant="success">添加填空题</b-button>
    <option-topic v-for="item in optionTopicItems" :optionItem="item" :key="'option_'+item.count" v-on:delThisOption="delThisOption"></option-topic>
    <blank-topic v-for="item in blankTopicItems" :blankItem="item" :key="'blank_'+item.count" v-on:delThisBlank="delThisBlank"></blank-topic>
  </div>
</template>

<script>
import OptionTopic from './OptionTopic'
import BlankTopic from './BlankTopic'

export default {
  data: function () {
    return {
      optionTopicCount: 0,
      blankTopicCount: 0,
      optionTopicItems: [],
      blankTopicItems: []
    }
  },
  name: 'PaperInfo',
  components: {
    OptionTopic,
    BlankTopic
  },
  methods: {
    addOption: function () {
      this.optionTopicItems.push({
        title: '',
        count: this.optionTopicCount++,
        type: '单选题',
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
      this.blankTopicItems.push({
        title: '',
        count: this.blankTopicCount++
      })
    },
    delThisOption: function (count) {
      if ((this.optionTopicItems.length + this.blankTopicItems.length) <= 1) {
        alert('一张问卷至少有一道题！')
        return
      }
      this.optionTopicItems.splice(count, 1)
      this.optionTopicCount--
    },
    delThisBlank: function (count) {
      if ((this.optionTopicItems.length + this.blankTopicItems.length) <= 1) {
        alert('一张问卷至少有一道题！')
        return
      }
      this.blankTopicItems.splice(count, 1)
      this.blankTopicCount--
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
