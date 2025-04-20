<template>
  <div v-if="customizationSidebar.activeSidebar === 'manage-element' && customizationSidebar.customizingElement"
    class="headline-config-panel">
    <h3 class="headline-config-title">Customize Headline</h3>
    <div class="form-group">
      <label class="form-label">Text</label>
      <input v-model="customizationSidebar.customizingElement.properties.text" class="form-input"
        placeholder="Headline Text" />
    </div>
    <div class="form-group">
      <label class="form-label">Alignment</label>
      <select v-model="customizationSidebar.customizingElement.properties.align" class="form-select">
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Font Weight</label>
      <select v-model="customizationSidebar.customizingElement.properties.fontWeight" class="form-select">
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
        <option value="bolder">Bolder</option>
      </select>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar'
const customizationSidebar = useCustomizationSidebarStore();
</script>

<style scoped>
.headline-config-panel {
  background: #f9fbfd;
  border-radius: 14px;
  padding: 24px 18px 18px 18px;
  box-shadow: 0 2px 8px rgba(30, 40, 90, 0.06);
  margin: 0 0 12px 0;
}

.headline-config-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #222b45;
  margin-bottom: 18px;
  letter-spacing: 0.01em;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.form-label {
  font-size: 0.97rem;
  color: #5a6270;
  margin-bottom: 6px;
  font-weight: 500;
}

.form-input,
.form-select {
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 7px;
  border: 1px solid #e3e8f0;
  background: #fff;
  color: #222b45;
  box-shadow: 0 1px 2px rgba(30, 40, 90, 0.03);
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
}

.form-input:focus,
.form-select:focus {
  border-color: #a3bffa;
  box-shadow: 0 0 0 2px #a3bffa33;
}

.form-select {
  cursor: pointer;
}
</style>