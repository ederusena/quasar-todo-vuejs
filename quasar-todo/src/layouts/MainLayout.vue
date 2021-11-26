<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Todon't list
        </q-toolbar-title>

        <q-btn
          icon="mdi-logout"
          flat
          rounded
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-toolbar class="bg-primary" />
        <q-item class="bg-grey-3">
          <q-item-section>
            Lists
          </q-item-section>

          <q-item-section side>
            <q-btn
              flat
              size="sm"
              round
              icon="mdi-plus"
            />
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section side>
            <q-icon name="mdi-shopping" />
          </q-item-section>

          <q-item-section>
            Shopping
          </q-item-section>

          <q-item-section side>
            12
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
