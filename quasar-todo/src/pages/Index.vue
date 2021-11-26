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

      <q-list bordered>
        <q-item>
          <q-item-section side>
            <q-checkbox :model-value="true" />
          </q-item-section>

          <q-item-section>
            Go Shopping
          </q-item-section>

          <q-item-section side>
            <q-btn
              flat
              round
              size="sm"
              icon="mdi-delete"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <q-card class="col-xs-3">
      <q-toolbar class="bg-primary">
        <q-btn
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
export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      search: ''
    }
  }
})
</script>
