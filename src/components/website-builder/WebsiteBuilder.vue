<template>
  <section class="hl_wrapper nav-shrink d-flex">
    <section class="hl_wrapper--inner page-creator" id="page-creator" :class="[viewMode + '-view']">
      <section class="hl_page-creator--main">
        <!-- Editor toolbar -->
        <EditorToolbar v-if="!previewMode" />
        <!-- Editor playground (always shown) -->
        <EditorPlayground />
      </section>
      <CustomizationSidebar v-if="!previewMode" />
    </section>
  </section>
</template>

<script setup lang="ts">
import EditorToolbar from '@/components/website-builder/EditorToolbar.vue'
import EditorPlayground from '@/components/website-builder/EditorPlayground.vue'
import CustomizationSidebar from '@/components/website-builder/CustomizationSidebar.vue';
import { storeToRefs } from 'pinia';
import { usePageBuilderStore } from '@/stores/pageBuilderStore'

const pageBuilder = usePageBuilderStore();
const { previewMode, viewMode } = storeToRefs(pageBuilder);
</script>

<style>
/* Example: adjust for mobile view */
.hl_page-creator--main {
  transition:
    max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    margin 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-view .hl_page-creator--main {
  max-width: 430px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  background: #fff;
}

.desktop-view .hl_page-creator--main {
  max-width: 100%;
  margin: 0;
  border: none;
  box-shadow: none;
  background: none;
}
</style>