<template>
  <div v-if="customizationSidebar.activeSidebar === 'manage-element' && customizationSidebar.customizingElement"
    class="headline-config-panel">
    <h3 class="headline-config-title">Customize Paragraph</h3>
    <div class="form-group">
      <label class="form-label">Text</label>
      <input v-model="customizationSidebar.customizingElement.properties.text" class="form-input"
        placeholder="Paragraph Text" />
    </div>
    <div class="form-group">
      <label class="form-label">Font Size</label>
      <input v-model="customizationSidebar.customizingElement.properties.fontSize" class="form-input" type="text"
        placeholder="e.g. 1rem" />
    </div>
    <div class="form-group">
      <label class="form-label">Color</label>
      <input v-model="customizationSidebar.customizingElement.properties.color" class="form-input" type="color" />
    </div>
    <div class="form-group">
      <label class="form-label">Alignment</label>
      <select v-model="customizationSidebar.customizingElement.properties.align" class="form-select">
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar'
const customizationSidebar = useCustomizationSidebarStore();
</script>

<style scoped>
@import './ElementConfigShared.scss';
</style>
