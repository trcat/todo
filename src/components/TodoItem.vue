<template>
  <div class="todo-item">
    <TodoInput
      v-if="isEdit"
      :title-value="title"
      :description-value="description"
      :on-submit="handleSubmit"
      submit-text="完成"
    />
    <template v-else>
      <label class="todo-item__checkbox">
        <input type="checkbox" @change="handleDelete" />
        {{ title }}
      </label>
      <p class="todo-item__description">{{ description }}</p>
      <div class="todo-item__button-wrapper">
        <button @click="handleEdit">编辑</button>
      </div>
      <hr />
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { deleteTodo, editTodo, type TodoData } from '../api'
import TodoInput from './TodoInput.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: String,
  description: String
})

const emits = defineEmits(['afterDelete'])

const isEdit = ref(false)

async function handleEdit() {
  isEdit.value = true
}

async function handleDelete() {
  await deleteTodo(props.id)
  emits('afterDelete')
}

async function handleSubmit(data: TodoData) {
  isEdit.value = false
  await editTodo({ ...data, id: props.id })
  emits('afterDelete')
}
</script>
<style lang="scss">
.todo-item {
  &__checkbox {
    display: block;
  }

  &__button-wrapper {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
