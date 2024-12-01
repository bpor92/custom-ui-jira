 <template>
  <svg
    class="caret"
    :class="{ 'caret--open': isOpen }"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
 </template>

 <script lang="ts" setup>

 const { isOpen = false } = defineProps<{isOpen: Boolean}>()

 </script>

<style lang="css" scoped>
.caret {
  width: 16px;
  height: 16px;
  color: #42526E;
  transition: transform 0.2s ease;
}

.caret--open {
  transform: rotate(180deg);
}
</style>
