<template>
  <div class="collapse-container">
    <div
      class="collapse-header"
      :class="{ 'is-open': isOpen }"
      @click="toggleCollapse"
    >
      <div class="collapse-title">
        <slot name="title">{{ title }}</slot>
        <VCaret :isOpen="isOpen"/>
      </div>
      <div v-if="subtitle" class="collapse-subtitle">
        {{ subtitle }}
      </div>
    </div>

    <transition
      name="collapse"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div
        v-if="isOpen"
        class="collapse-content"
        ref="contentRef"
      >
        <slot>
          <p>Default content</p>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VCaret from './v-caret.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Collapse Section'
  },
  subtitle: {
    type: String,
    default: null
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.defaultOpen)
const contentRef = ref(null)

const toggleCollapse = () => {
  isOpen.value = !isOpen.value
}

const onEnter = (el: Element, done: () => void) => {
  (el as HTMLElement).style.height = `${(el as HTMLElement).scrollHeight}px`
  done()
}

const onLeave = (el: Element, done: () => void) => {
  (el as HTMLElement).style.height = '0px'
  done()
}
</script>

<style scoped>
.collapse-container {
  border: 1px solid #DFE1E6;
  border-radius: 3px;
  margin-bottom: 10px;
}

.collapse-header {
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  cursor: pointer;
  user-select: none;
  background-color: #F4F5F7;
  transition: background-color 0.2s;
}

.collapse-header:hover {
  background-color: #EBECF0;
}

.collapse-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.collapse-subtitle {
  color: #5E6C84;
  font-size: 0.85em;
  margin-top: 4px;
}

.collapse-icon {
  transition: transform 0.2s;
}

.collapse-icon.rotated {
  transform: rotate(180deg);
}

.collapse-content {
  padding: 16px;
  background-color: white;
  overflow: hidden;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  height: 0;
}
</style>
