<template>
  <div class="app-container">
    <input type="file" @change="setDevelopers" />

    <br>
    <br>

    <button @click="getDevelopers">get dev</button>
    <div>{{ developers }}</div>

    <button @click="deleteDeveloper">delete dev</button>

    <VCard>
      <template #header>
        <h2>Api provider</h2>
      </template>
      <template #body>
        <VSelect
          v-model="selectedValue"
          :options="options"
          placeholder="Assignee"
          searchPlaceholder="Search people..."
          @change="handleChange"
        />
      </template>
    </VCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VCard, VSelect } from '@/components/ui';
import { API_PROVIDER } from '@/constants/ai-provider-const';
import type { ApiProvider } from '@/types/ai-provider-type';
import { useDevelopers } from './composables/useDevelopers';

const selectedValue = ref<ApiProvider>(API_PROVIDER.OPENAI);
const handleChange = (value: ApiProvider) => selectedValue.value = value
const options = ref([
  { value: API_PROVIDER.OPENAI, label: API_PROVIDER.OPENAI },
  { value: API_PROVIDER.ANTHROPIC, label: API_PROVIDER.ANTHROPIC },
]);


const { deleteDeveloper, developers, getDevelopers, setDevelopers } = useDevelopers()
</script>
