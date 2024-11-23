<template>
  <div class="app-container">
    <div>{{ mapping }}</div>
    <div>{{ status }}</div>

    <br>
    <br>

    <input type="file" @change="addFile" />

    <br>
    <br>

    <button @click="getDevelopers">get dev</button>
    <div>{{ developers }}</div>

    <button @click="deleteDeveloper">delete dev</button>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FileUtil } from './utils/file-util'
import { ValidationUtil } from './utils/validation-util'
import { invoke } from '@forge/bridge';

const mapping = ref({})
const status = ref('')

const addFile = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return
  try {
    const content = await FileUtil.readFile(file)
    const parsedContent = JSON.parse(content)
    if (ValidationUtil.isValidMapping(parsedContent)) {
      await invoke('saveDevelopers', parsedContent)
      getDevelopers()
    } else {
      status.value = 'Invalid mapping format'
    }
  } catch (error) {
    status.value = 'Error processing file'
    console.error('File processing error:', error)
  }
}

const developers = ref<unknown>('')
const getDevelopers = async () => {
  try {
    const result = await invoke('getDevelopers')
    developers.value = result
  } catch (error) {
    developers.value = 'Error invoking function'
  }
}

const deleteDeveloper = async () => {
  try {
    await invoke('deleteDevelopers')
    getDevelopers()
  } catch (error) {
    developers.value = 'Error invoking function'
  }
}


</script>
