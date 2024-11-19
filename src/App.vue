<template>
  <div class="app-container">
    <header class="header">
      <h1>{{ title }}</h1>
    </header>
    <main class="content">
      <div class="card">
        <h2>Custom Jira UI</h2>

        <p>Status: {{ status }}</p>
        <button @click="fetchIssues" class="button">
          Fetch Recent Issues
        </button>
        <div v-if="issues.length > 0" class="issues-list">
          <div v-for="issue in issues" :key="issue.id" class="issue-item">
            {{ issue.key }} - {{ issue.summary }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Jira Custom UI')
const status = ref('Ready')
const issues = ref<Array<{ id: string; key: string; summary: string }>>([])

const fetchIssues = () => {
  status.value = 'Fetching...'
  // Simulate fetching issues
  setTimeout(() => {
    issues.value = [
      { id: '1', key: 'PROJ-1', summary: 'Test Issue 1' },
      { id: '2', key: 'PROJ-2', summary: 'Test Issue 2' }
    ]
    status.value = 'Done'
  }, 1000)
}
</script>
