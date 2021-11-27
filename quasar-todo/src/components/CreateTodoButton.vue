<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
  },
  methods: {
    handleButtonClicked () {
      this.$q.dialog({
        title: 'Create Todo List',
        prompt: {
          model: '',
          type: 'text'
        }
      })
        .onOk(this.createTodo)
    },
    createTodo (data) {
      this.$q.notify({
        color: 'positive',
        message: `Created Todo List: ${data}`,
        icon: 'mdi-check'
      })
    }
  }
}
</script>
