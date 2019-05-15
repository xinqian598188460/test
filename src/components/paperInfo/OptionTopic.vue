<template>
  <div class="w-50 m-auto">
    <b-form-group
      :invalid-feedback="invalidFeedback"
      :state="titleState"
      class="mt-3"
    >
      <b-input-group prepend="选择题题目:">
        <b-form-input v-model="optionItem.title" :state="titleState" trim></b-form-input>
        <b-input-group-append>
          <b-button @click="del" class="ml-1">删除本题</b-button>
          <b-button @click="addOpt" class="ml-1">添加选项</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <b-input-group :prepend="'选项'+option.num+':'" class="mt-3" v-for="(option,index) in optionItem.optionChoiceList" :key="option.num">
      <b-form-input :id="`type-${option.num}`" v-model="option.text"></b-form-input>
      <b-input-group-append>
        <b-button variant="info" @click="delOpt(index)">删除该选项</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  computed: {
    titleState () {
      return this.optionItem.title.length > 0
    },
    invalidFeedback () {
      if (this.optionItem.title.length > 0) {
        return ''
      } else {
        return '请输入题目标题！'
      }
    }
  },
  props: ['optionItem'],
  data () {
    return {
      optionEnum: {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H',
        9: 'I',
        10: 'J'
      }
    }
  },
  methods: {
    del () {
      this.$emit('delThisOption', this.num)
    },
    addOpt () {
      if (this.optionItem.optionSize + 1 > 10) {
        window.alert('选项已经十条啦！')
        return
      }
      this.optionItem.optionChoiceList.push({
        num: this.optionEnum[this.optionItem.optionSize + 1],
        text: ''
      })
      this.optionItem.optionSize++
    },
    delOpt (index) {
      this.optionItem.optionChoiceList.splice(index, 1)
      this.optionItem.optionSize--
    }
  }
}
</script>
