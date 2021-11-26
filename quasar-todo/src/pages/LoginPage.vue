<template>
  <q-page
    class="flex flex-center bg-purple-10"
    padding
  >
    <div
      class="full-width"
      style="max-width: 50vh"
    >
      <h5 class="q-my-md text-center text-white">
        Login
      </h5>
      <q-card>
        <q-card-section>
          <q-form>
            <q-input
              label="Email"
              placeholder="email@email.com"
              type="email"
              filled
              class="q-mb-md"
            />
            <q-input
              label="Password"
              placeholder="email@email.com"
              type="password"
              filled
              class="q-mb-sm"
            />
            <q-checkbox
              :model-value="true "
              label="remember me"
            />
          </q-form>
        </q-card-section>
        <q-btn
          label="login"
          class="full-width"
          square
          color="purple-4"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
