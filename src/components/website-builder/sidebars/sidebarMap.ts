// src/components/website-builder/sidebars/sidebarMap.ts
import { defineAsyncComponent } from 'vue';

export const sidebarMap = {
  'add-row': defineAsyncComponent(() => import('@/components/website-builder/sidebars/AddRowSidebar.vue')),
  'manage-rows': defineAsyncComponent(() => import('@/components/website-builder/sidebars/ManageRowSidebar.vue')),
  'add-elements': defineAsyncComponent(() => import('@/components/website-builder/sidebars/AddElementsSidebar.vue')),
  'manage-columns': defineAsyncComponent(() => import('@/components/website-builder/sidebars/ManageColumns.vue')),
  'settings': defineAsyncComponent(() => import('@/components/website-builder/sidebars/SettingSidebar.vue')),
  'add-section': defineAsyncComponent(() => import('@/components/website-builder/sidebars/AddSection.vue')),
  'manage-sections': defineAsyncComponent(() => import('@/components/website-builder/sidebars/ManageSection.vue')),
};

export const elementsConfigMap = {
  'HeadlineElement': defineAsyncComponent(() => import('@/components/website-builder/sidebars/customizations/HeadlineElementConfig.vue')),
  'ImageElement': defineAsyncComponent(() => import('@/components/website-builder/sidebars/customizations/ImageElementConfig.vue')),
};