<template>
  <section v-for="(section, sIdx) in sections" :key="section.id" class="hl_page-creator--section"
    :class="{ active: hovered.section }" @mouseenter="hovered.section = true" @mouseleave="hovered.section = false"
    @click="setActiveSection(section.id)"
    :style="{
      backgroundColor: section.properties?.backgroundColor || undefined,
      padding: `${section.properties?.paddingTop || 0}px ${section.properties?.paddingRight || 0}px ${section.properties?.paddingBottom || 0}px ${section.properties?.paddingLeft || 0}px`
    }"
>
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span @click.stop="handleMoveSection(sIdx, -1)" :class="{ 'disabled': sIdx === 0 }" data-tooltip="tooltip"
          data-placement="right" title="Up">
          <i class="icon icon-arrow-up-2"></i>
        </span>
        <span @click.stop="handleMoveSection(sIdx, 1)" :class="{ 'disabled': sIdx === sections.length - 1 }"
          data-tooltip="tooltip" data-placement="right" title="Down">
          <i class="icon icon-arrow-down-2"></i>
        </span>
      </div>
      <div class="more-actions">
        <span @click.stop="openCustomizationSidebar('section-settings')" data-tooltip="tooltip" data-placement="left"
          title="Settings"><i class="fas fa-cog"></i></span>
        <span data-tooltip="tooltip" data-placement="left" title="Clone"><i class="far fa-eye"></i></span>
        <span data-tooltip="tooltip" data-placement="left" title="Save"><i class="far fa-copy"></i></span>
        <span data-tooltip="tooltip" data-placement="left" title="Delete"><i class="far fa-trash-alt"></i></span>
      </div>
    </div>
    <span @click="insertNewSection(sIdx)" class="add-new-section" data-tooltip="tooltip" data-placement="bottom"
      title="Add New Section"><i class="icon icon-plus"></i></span>
    <div v-if="section.rows && section.rows.length > 0">
      <RowBlock v-for="row in section.rows" :key="row.id" :row="row" :sectionId="section.id"
        @add-row="handleAddRow(section.id)" @add-column="$emit('add-column', section.id, row.id)"
        @add-element="$emit('add-element', section.id, row.id, $event)" />
    </div>

    <div v-if="section.rows.length === 0" href="#" class="new-row-blank" @click="handleAddRow(section.id)">
      <span class="btn btn-light5 btn-slim">Add New Row</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import RowBlock from './RowBlock.vue';
import { usePageBuilderStore } from '@/stores/pageBuilderStore';
import { storeToRefs } from 'pinia';
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar';


const pageBuilder = usePageBuilderStore();
const customizationSidebar = useCustomizationSidebarStore();

const sections = ref(pageBuilder.sections);
// const sections = computed(() => ref(pageBuilder.sections.values))
// const { sections } = storeToRefs(pageBuilder);
const hovered = ref({
  section: null as number | null,
  row: null as number | null,
  column: null as number | null,
  element: null as number | null,
});

function setActiveSection(id: string) {
  pageBuilder.setActiveSectionId(id);
}

function handleAddRow(sectionId: string) {
  customizationSidebar.setEditingSectionId(sectionId);
  customizationSidebar.openSidebar('add-row');
}

function insertNewSection(sIdx: number) {
  pageBuilder.insertNewSection(sIdx);
  customizationSidebar.setEditingSectionId(pageBuilder.sections[pageBuilder.sections.length - 1].id);
  customizationSidebar.openSidebar('add-row');
}

function handleMoveSection(sIdx: number, offset: number) {
  pageBuilder.moveSection(sIdx, offset);
}

function openCustomizationSidebar(type: string) {
  customizationSidebar.openSidebar(type);
}
</script>

<style scoped>
.disabled {
  opacity: 0.4;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
