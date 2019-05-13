<template>
  <div>
    <b-form-group
      label="题目标题"
      :invalid-feedback="invalidFeedback"
      :state="titleState"
    >
      <b-form-input v-model="optionItem.title" :state="titleState" trim class="w-50 m-auto"></b-form-input>
    </b-form-group>
    <b-button @click="del">X</b-button>
    <b-container fluid>
      <b-row class="my-1" v-for="option in optionItem.optionChoiceList" :key="option.num">
        <b-col sm="3">
          <label :for="`type-${option.num}`" v-text="'选项'+option.num+':'"></label>
        </b-col>
        <b-col sm="9">
          <b-form-input :id="`type-${option.num}`" :type="option.num" v-model="option.text"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
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
    }
  },
  methods: {
    del () {
      this.$emit('delThisOption', this.num)
    }
  }
}
</script>
