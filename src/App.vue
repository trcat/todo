<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { storageKey } from './utils'

if (import.meta.env.MODE === 'production') {
  const domain = localStorage.getItem(storageKey)

  if (!domain) {
    const router = useRouter()
    router.push({ name: 'login' })
  }
}
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@use './assets/style/index.scss';
</style>
