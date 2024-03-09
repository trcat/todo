<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getTodo } from '../api'
import type { TodoItem } from '../api/types'

const data = ref<TodoItem[]>([])
onMounted(async () => {
  data.value = await getTodo()
})
</script>

<template>
  <main>
    <div v-for="item in data" :key="item.key[1]" class="todo-item">
      <label class="todo-item__checkbox">
        <input type="checkbox">
        {{ item.value.title }}
      </label>
      <p class="todo-item__description">{{ item.value.description }}</p>
      <hr>
    </div>
  </main>
</template>

<style>
.todo-item__checkbox {
  display: block;
}
</style>
