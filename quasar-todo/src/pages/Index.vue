<template>
  <q-page class="row">
    <!-- <div
      class="bg-blue col-3"
      style="height: 22px"
    />

    <div
      class="bg-purple col-3"
      style="height: 22px"
    />

    <div
      class="bg-green col-6"
      style="height: 22px"
    /> -->

    <q-card class="col-xs-9">
      <q-toolbar>
        <q-input
          placeholder="What needs to be search?"
          dense
          borderless
          class="full-width"
          :model-value="search"
        >
          <template #append>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>
      </q-toolbar>

      <TodosList bordered />
    </q-card>

    <q-card
      class="col-xs-3"
      square
    >
      <q-toolbar class="bg-primary">
        <CreateTodoButton
          fab
          color="blue-5"
          class="q-ml-lg "
          style="margin-bottom: -47px"
          icon="mdi-plus"
        />
      </q-toolbar>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CreateTodoButton from 'components/CreateTodoButton.vue'
import TodosList from 'components/TodosList.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    CreateTodoButton,
    TodosList
  },
  data () {
    return {
      search: ''
    }
  }
})
</script>
