<template>
  <div class="hl_page-creator--column" :class="{ active: isHovered }" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false">
    <div class="hl_page-creator--column">
      <div href="#" class="new-element-blank">
        <span class="btn btn-light6 btn-slim">Add New Element</span>
      </div>
    </div>
    <ElementBlock v-if="column.element" :element="column.element" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ElementBlock from './ElementBlock.vue';
import type { ColumnData } from '@/stores/pageBuilderStore';

defineProps<{ column: ColumnData, rowId?: string }>();
const isHovered = ref(false);
</script>
