<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.card {
  background: white;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.card-header {
  padding: 16px;
  border-bottom: 1px solid #DFE1E6;
}

.card-body {
  padding: 24px;
}
</style>