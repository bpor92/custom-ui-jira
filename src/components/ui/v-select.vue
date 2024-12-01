<template>
  <div class="select" v-on-click-outside="handleClickOutside">
    <VLabel v-if="label">
      {{ label }}
    </VLabel>
    <div
      @click="toggleDropdown"
      class="select__box"
      :class="{ 'select__box--open': isOpen }"
    >
      <span class="select__text">
        {{ selectedLabel || placeholder }}
      </span>
      <VCaret :isOpen="isOpen" />
    </div>

    <div
      v-if="isOpen"
      class="select__dropdown"
    >
      <ul class="select__list">
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="select__option"
          :class="{ 'select__option--selected': option.value === modelValue }"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import VCaret from './v-caret.vue'

interface SelectOption {
  value: string | number
  label: string
}

interface Props {
  options: SelectOption[]
  placeholder?: string
  modelValue?: string | number,
  label?: string
}

const { placeholder = 'Select an option', modelValue = '', options = [], label = '' } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const isOpen = ref(false)

const selectedLabel = computed(() => {
  const selectedOption = options.find(opt => opt.value === modelValue)
  return selectedOption?.label ?? ''
})

const toggleDropdown = (): void => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: SelectOption): void => {
  isOpen.value = false
  emit('update:modelValue', option.value)
}

const handleClickOutside = (event: MouseEvent): void => {
  const target = event.target as HTMLElement
  if (!target.closest('.select')) {
    isOpen.value = false
  }
}

</script>

<style>
.select {
  position: relative;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.select__box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  background-color: #FAFBFC;
  border: 1px solid #DFE1E6;
  border-radius: 3px;
  cursor: pointer;
  min-height: 16px;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.select__box:hover {
  background-color: #F4F5F7;
}

.select__box--open {
  border: 2px solid #0052CC;
  background-color: #FFFFFF;
}

.select__text {
  font-size: 14px;
  color: #172B4D;
}

.select__caret {
  width: 16px;
  height: 16px;
  color: #42526E;
  transition: transform 0.2s ease;
}

.select__caret--open {
  transform: rotate(180deg);
}

.select__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background-color: #FFFFFF;
  border: 1px solid #DFE1E6;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25);
  z-index: 1000;
}

.select__list {
  margin: 0;
  padding: 4px 0;
  list-style: none;
}

.select__option {
  padding: 8px 12px;
  font-size: 14px;
  color: #172B4D;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.select__option:hover {
  background-color: #F4F5F7;
}

.select__option--selected {
  background-color: #F4F5F7;
}
</style>
