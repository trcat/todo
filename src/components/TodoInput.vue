<template>
  <div class="todo-input">
    <input class="todo-input__title" v-model="title" type="text" placeholder="请输入标题" />
    <textarea
      class="todo-input__description"
      v-model="description"
      placeholder="请输入描述"
    ></textarea>
    <div class="todo-input__submit-wrapper">
      <button class="todo-input__submit" @click="handleSubmit">{{ submitText }}</button>
    </div>
  </div>
  <hr />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { setTodo } from '../api'

const props = defineProps({
  titleValue: {
    type: String,
    default: ''
  },
  descriptionValue: {
    type: String,
    default: ''
  },
  submitText: {
    type: String,
    default: '新增'
  },
  onSubmit: Function
})
const emits = defineEmits(['afterSubmit'])

const title = ref(props.titleValue)
const description = ref(props.descriptionValue)

async function handleSubmit() {
  const data = { title: title.value, description: description.value }
  if (props.onSubmit) {
    props.onSubmit(data)
  } else {
    await setTodo(data)
    emits('afterSubmit')
  }
}
</script>
<style lang="scss">
.todo-input {
  display: flex;
  flex-direction: column;

  &__title,
  &__description {
    margin-bottom: var(--margin-default);
  }

  &__submit-wrapper {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
