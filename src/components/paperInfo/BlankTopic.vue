<template>
  <div>
    <b-form-group
      label="题目标题"
      :invalid-feedback="invalidFeedback"
      :state="titleState"
    >
      <b-form-input v-model="blankItem.title" :state="titleState" trim class="w-50 m-auto"></b-form-input>
    </b-form-group>
    <b-button @click="del">X</b-button>
    <b-form-input size="sm" v-model="blankItem.text" class="w-50 m-auto"></b-form-input>
  </div>
</template>

<script>
export default {
  computed: {
    titleState () {
      return this.blankItem.title.length > 0
    },
    invalidFeedback () {
      if (this.blankItem.title.length > 0) {
        return ''
      } else {
        return '请输入题目标题！'
      }
    }
  },
  props: ['blankItem'],
  data () {
    return {
    }
  },
  methods: {
    del () {
      this.$emit('delThisBlank', this.num)
    }
  }
}
</script>
