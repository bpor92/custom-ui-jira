<template>
  <div class="app-container">
    <input type="file" @change="setDevelopers" />

    <br>
    <br>

    <button @click="getDevelopers">get dev</button>
    <div>{{ developers }}</div>

    <button @click="deleteDeveloper">delete dev</button>

  </div>
</template>

<script setup lang="ts">
import { useDevelopers } from './composables/useDevelopers';

const { deleteDeveloper, developers, getDevelopers, setDevelopers } = useDevelopers()
</script>
