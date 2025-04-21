<template>
  <div class="hl_page-creator--column" :class="{ active: isHovered }" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false" @click="setActiveColumn(column.id)">
    <div class="hl_page-creator--column">
      <div v-if="!column.element" href="#" class="new-element-blank column-dropzone" @dragover.prevent @drop="onDrop">
        <span @click="openCustomizationSidebar('add-elements')" class="btn btn-light6 btn-slim">Add New Element</span>
      </div>
    </div>
    <div>
      <ElementBlock v-if="column.element" :element="column.element" :rowId="rowId" :sectionId="sectionId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ElementBlock from './ElementBlock.vue';
import type { ColumnData } from '@/stores/pageBuilderStore';
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar'
import { v4 as uuidv4 } from 'uuid';
import { usePageBuilderStore } from '@/stores/pageBuilderStore';
const props = defineProps<{ column: ColumnData, rowId?: string, sectionId?: string }>();

const store = useCustomizationSidebarStore()
const pageBuilder = usePageBuilderStore();

function setActiveColumn(id: string) {
  pageBuilder.setActiveColumnId(id);
}
const isHovered = ref(false);

function openCustomizationSidebar(type: string) {
  console.log('Section, Row, Column', props.sectionId, props.rowId, props.column.id)
  // Set the context for where the element will be added
  if (typeof props.column !== 'undefined' && props.column.id && typeof props.rowId !== 'undefined') {
    store.setEditingSectionId(props.sectionId || ''); // If sectionId is not on column, update this logic
    store.setEditingRowId(props.rowId);
    store.setEditingColumnId(props.column.id);
  }
  store.openSidebar(type);
}

function onDrop(event: DragEvent) {
  console.log("Event", event)
  const data = event.dataTransfer.getData('application/json');
  if (data) {
    const el = JSON.parse(data);
    // Generate a unique ID for the new element
    const newElement = {
      id: uuidv4(),
      type: el.type,
      properties: { ...el.properties }
    };
    // Add element to the column
    pageBuilder.addElement(props.sectionId, props.rowId, props.column.id, newElement);
  }
}
</script>
