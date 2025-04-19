<template>
  <aside class="sidebar hl_page-creator--rows-group" :class="{ open: modelValue }">
    <span v-if="modelValue" @click="closeSidebar" class="close-group add-row-sidebar__close" id="close-row-group"><i
        class="icon icon-close"></i></span>
    <component :is="currentSidebarComponent" v-if="currentSidebarComponent" />
  </aside>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import AddRowSidebar from '@/components/website-builder/sidebars/AddRowSidebar.vue'
import ManageRowSidebar from '@/components/website-builder/sidebars/ManageRowSidebar.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  activeSidebar: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])

const sidebarMap = {
  'add-row': AddRowSidebar,
  'manage-rows': ManageRowSidebar
}

const currentSidebarComponent = computed(() => sidebarMap[props.activeSidebar] || null)

function closeSidebar() {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.sidebar {
  width: 350px;
  background: #fff;
  border-left: 1px solid #eee;
  transition: transform 0.3s;
  transform: translateX(100%);
  position: fixed;
  right: 0;
  top: 84px;
  bottom: 0;
  z-index: 1000;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.05);
}

.sidebar.open {
  transform: translateX(0);
}
</style>