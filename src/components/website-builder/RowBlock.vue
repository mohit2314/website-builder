<template>
  <div class="hl_page-creator--row" :class="{ active: isHovered }" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false" @click="setActiveRow(row.id)" :key="row.id">
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Up"><i class="icon icon-arrow-up-2"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Down"><i class="icon icon-arrow-down-2"></i></span>
      </div>
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Settings"><i class="fas fa-cog"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Clone"><i class="far fa-eye"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Save"><i class="far fa-copy"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Delete"><i class="far fa-trash-alt"></i></span>
      </div>

    </div>
    <span @click.stop="$emit('add-row', sectionId)" class="add-new-row" data-tooltip="tooltip" data-placement="bottom"
      title="Add New Row"><i class="icon icon-plus"></i></span>
    <ColumnBlock v-for="column in row.columns" :key="column.id" :column="column" :rowId="row.id" :sectionId="sectionId"
      @add-element="$emit('add-element', row.id, column.id, $event)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ColumnBlock from './ColumnBlock.vue';
import type { RowData } from '@/stores/pageBuilderStore';
import { usePageBuilderStore } from '@/stores/pageBuilderStore';
const pageBuilder = usePageBuilderStore();

function setActiveRow(id: string) {
  pageBuilder.setActiveRowId(id);
}
defineProps<{ row: RowData, sectionId?: string }>();
const isHovered = ref(false);
</script>
