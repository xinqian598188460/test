<template>
  <div>
    <b-alert class="w-50 m-auto" show variant="primary">Primary Alert</b-alert>
    <b-alert class="w-50 m-auto" show variant="secondary">Secondary Alert</b-alert>
    <b-alert class="w-50 m-auto" show variant="success">Success Alert</b-alert>
    <b-alert class="w-50 m-auto" show variant="danger">Danger Alert</b-alert>
    <b-alert class="w-50 m-auto" show variant="warning">Warning Alert</b-alert>
    <b-alert class="w-50 m-auto" show variant="info">Info Alert</b-alert>
    <b-alert class="w-50 m-auto" show variant="light">Light Alert</b-alert>
    <b-alert class="w-50 m-auto" show variant="dark">Dark Alert</b-alert>
    <b-button variant="info" class="w-50">
      Show alert with count-down timer
    </b-button>
    <b-form-input v-model="text" placeholder="Enter your name" class="w-50 m-auto"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'paperInfo',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>

</style>
