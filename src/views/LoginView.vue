<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storageKey } from '../utils'

const domain = ref('')
const router = useRouter()

function confirm() {
  if (domain.value) {
    localStorage.setItem(storageKey, domain.value)

    router.push({ name: 'home' })
  } else {
    alert('请输入有效内容！')
  }
}
</script>
<template>
  <h2>请输入神秘代码</h2>
  <input v-model="domain" type="text" />
  <button @click="confirm">确定</button>
</template>
