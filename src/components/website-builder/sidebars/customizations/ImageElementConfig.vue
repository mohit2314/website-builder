<template>
  <div v-if="customizationSidebar.activeSidebar === 'manage-element' && customizationSidebar.customizingElement"
    class="image-config-panel image-config__panel">
    <h3 class="image-config__title">Customize Image</h3>
    <div class="image-config__group">
      <label class="image-config__label">Image URL</label>
      <input v-model="customizationSidebar.customizingElement.properties.src" class="image-config__input"
        placeholder="Image URL" />
    </div>
    <div class="image-config__group">
      <label class="image-config__label">Alt Text</label>
      <input v-model="customizationSidebar.customizingElement.properties.alt" class="image-config__input"
        placeholder="Alt Text" />
    </div>
    <div class="image-config__group">
      <label class="image-config__label">Width (px or %)</label>
      <input v-model="customizationSidebar.customizingElement.properties.width" class="image-config__input"
        placeholder="e.g. 100% or 300" />
    </div>
    <div class="image-config__group">
      <label class="image-config__label">Height (px or %)</label>
      <input v-model="customizationSidebar.customizingElement.properties.height" class="image-config__input"
        placeholder="e.g. auto or 200" />
    </div>
    <div class="image-config__group">
      <label class="image-config__label">Border Radius</label>
      <input v-model="customizationSidebar.customizingElement.properties.borderRadius" class="image-config__input"
        placeholder="e.g. 0, 8px, 50%" />
    </div>
    <div class="image-config__group">
      <label class="image-config__label">Alignment</label>
      <select v-model="customizationSidebar.customizingElement.properties.align" class="image-config__select">
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

<style lang="scss" scoped>
.image-config {
  &__panel {
    background: #f9fbfd;
    border-radius: 14px;
    padding: 24px 18px 18px 18px;
    box-shadow: 0 2px 8px rgba(30, 40, 90, 0.06);
    margin: 0 0 12px 0;
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #222b45;
    margin-bottom: 18px;
    letter-spacing: 0.01em;
  }

  &__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  &__label {
    font-size: 0.97rem;
    color: #5a6270;
    margin-bottom: 6px;
    font-weight: 500;
  }

  &__input,
  &__select {
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

  &__input:focus,
  &__select:focus {
    border-color: #a3bffa;
    box-shadow: 0 0 0 2px #a3bffa33;
  }

  &__select {
    cursor: pointer;
  }
}
</style>
