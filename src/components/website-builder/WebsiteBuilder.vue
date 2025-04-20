<template>
  <section class="hl_wrapper nav-shrink d-flex">

    <section class="hl_wrapper--inner page-creator" id="page-creator">

      <section class="hl_page-creator--main">
        <!-- Editor toolbar -->
        <EditorToolbar />
        <!-- Editor playground -->
        <EditorPlayground />
      </section>
      <CustomizationSidebar />

    </section>

  </section>
</template>

<script setup lang="ts">
import EditorToolbar from '@/components/website-builder/EditorToolbar.vue'
import EditorPlayground from '@/components/website-builder/EditorPlayground.vue'
import CustomizationSidebar from '@/components/website-builder/CustomizationSidebar.vue';
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar'

const store = useCustomizationSidebarStore()

</script>

<style></style>