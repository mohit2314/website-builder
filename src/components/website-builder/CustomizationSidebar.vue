<template>
  <aside class="sidebar hl_page-creator--rows-group" :class="{ open: store.isOpen }">
    <span v-if="store.isOpen" @click="closeSidebar" class="close-group add-row-sidebar__close" id="close-row-group"><i
        class="icon icon-close"></i></span>
    <component :is="currentSidebarComponent" v-if="currentSidebarComponent" />
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar'
import AddRowSidebar from '@/components/website-builder/sidebars/AddRowSidebar.vue'
import ManageRowSidebar from '@/components/website-builder/sidebars/ManageRowSidebar.vue'
import AddElementsSidebar from '@/components/website-builder/sidebars/AddElementsSidebar.vue'
import ManageColumns from '@/components/website-builder/sidebars/ManageColumns.vue'
import SettingSidebar from '@/components/website-builder/sidebars/SettingSidebar.vue'
import AddSection from '@/components/website-builder/sidebars/AddSection.vue'
import ManageSection from '@/components/website-builder/sidebars/ManageSection.vue'
import HeadlineElementConfig from '@/components/website-builder/sidebars/customizations/HeadlineElementConfig.vue'

const store = useCustomizationSidebarStore()

const sidebarMap = {
  'add-row': AddRowSidebar,
  'manage-rows': ManageRowSidebar,
  'add-elements': AddElementsSidebar,
  'manage-columns': ManageColumns,
  'settings': SettingSidebar,
  'add-section': AddSection,
  'manage-sections': ManageSection
}

const elementsConfigMap = {
  'HeadlineElement': HeadlineElementConfig
}

const currentSidebarComponent = computed(() => store.activeSidebar === 'manage-element' ? elementsConfigMap[store.customizingElement?.type] : sidebarMap[store.activeSidebar])

function closeSidebar() {
  store.closeSidebar()
}
</script>

<style scoped>
.sidebar {
  max-width: 450px;
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