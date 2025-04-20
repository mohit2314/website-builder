<template>
  <div class="hl_page-creator--element" :class="{ active: isHovered }" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false">
    <div class="hl_page-creator--actions">
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Move"><i class="fas fa-arrows-alt"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Clone"><i class="far fa-eye"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Save"><i class="far fa-copy"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Delete"><i class="far fa-trash-alt"></i></span>
      </div>
    </div>
    <span class="add-new-element" data-tooltip="tooltip" data-placement="bottom" title="Add New Element"><i
        class="icon icon-plus"></i></span>
    <div class="element-container">
      <h1>Heading Text Goes Here</h1>
    </div>
    <!-- <div>{{ element.type }}: {{ element.content }}</div> -->
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ElementData } from '@/stores/pageBuilderStore';

defineProps<{ element: ElementData }>();
const isHovered = ref(false);
</script>
