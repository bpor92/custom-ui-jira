<template>
  <div class="app-container">

    <VCollapse
      title="Settings"
      :default-open="false"
    >
      <VSelect
        v-model="selectedValue"
        :options="options"
        label="Api provider:"
        placeholder="Assignee"
        searchPlaceholder="Search people..."
        @change="handleChange"
      />

      <br>

      <div>Wybierz plik:</div>
      <input type="file" @change="setDevelopers" />
      <br>

      <div>Załaduj plik:</div>
      <button @click="getDevelopers">get dev</button>
      <br>

      <div>Usuń plik:</div>
      <button @click="deleteDeveloper">delete dev</button>
    </VCollapse>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VCard, VSelect, VCollapse } from '@/components/ui';
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
