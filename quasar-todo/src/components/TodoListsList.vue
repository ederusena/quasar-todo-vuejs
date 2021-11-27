<template>
  <q-list>
    <q-toolbar class="bg-primary" />
    <q-item class="bg-grey-3">
      <q-item-section>
        Lists
      </q-item-section>
      <q-item-section side>
        <CreateTodoListButton />
      </q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section side>
        <q-icon
          name="mdi-shopping"
          color="red"
        />
      </q-item-section>
      <q-item-section>
        Shopping
      </q-item-section>
      <q-item-section side>
        12
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import CreateTodoListButton from 'components/CreateTodoListButton.vue'

export default {
  // name: 'ComponentName',
  components: {
    CreateTodoListButton
  },
  setup () {
    return {}
  }
}
</script>
