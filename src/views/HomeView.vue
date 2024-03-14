<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTodo } from '../api'
import type { TodoItem } from '../api/types'
import TodoItemVue from '../components/TodoItem.vue'
import TodoInput from '@/components/TodoInput.vue'

const data = ref<TodoItem[]>([])
onMounted(() => {
  fetch()
})

async function fetch() {
  data.value = await getTodo()
}
</script>

<template>
  <main>
    <TodoInput @after-submit="fetch" />
    <TodoItemVue
      v-for="item in data"
      :key="item.key[1]"
      :id="item.key[1]"
      :title="item.value.title"
      :description="item.value.description"
      @after-delete="fetch"
    />
  </main>
</template>
