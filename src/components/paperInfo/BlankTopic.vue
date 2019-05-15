<template>
  <div class="w-50 m-auto">
    <b-form-group
      :invalid-feedback="invalidFeedback"
      :state="titleState"
      class="mt-3"
    >
      <b-input-group prepend="填空题题目:">
        <b-form-input v-model="blankItem.title" :state="titleState" trim></b-form-input>
        <b-input-group-append>
          <b-button @click="del" class="ml-1">删除本题</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
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
        return '请输入填空题题目！'
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
