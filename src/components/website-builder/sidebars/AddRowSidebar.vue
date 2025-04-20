<template>
  <section class="add-row-sidebar">

    <div id="add-row" role="tabpanel" aria-labelledby="add-row-tab">
      <div>
        <h2>Add Row</h2>
        <div class="add-row-body add-row-sidebar__body">
          <div class="row-cards">
            <div v-for="option in rowOptions" :key="option.key" class="row-card" @click="handleAddRow(option)">
              <div class="icon">
                <i class="fas fa-columns"></i>
              </div>
              <h5>{{ option.label }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageBuilderStore } from '@/stores/pageBuilderStore';
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar';

const pageBuilder = usePageBuilderStore();
const customizationSidebar = useCustomizationSidebarStore();

// Define row options for maintainability
const rowOptions = [
  { key: '1', label: '1 Column', columns: 1 },
  { key: '2', label: '2 Column', columns: 2 },
  { key: '3', label: '3 Column', columns: 3 },
  { key: '4', label: '4 Column', columns: 4 },
  { key: '5', label: '5 Column', columns: 5 },
  { key: '6', label: '6 Column', columns: 6 },
  { key: 'left-sidebar', label: 'Left Sidebar', columns: 'left-sidebar' },
  { key: 'right-sidebar', label: 'Right Sidebar', columns: 'right-sidebar' },
];

function handleAddRow(option: { columns: number | string }) {
  const sectionId = customizationSidebar.selectedSectionId;
  if (sectionId) {
    // Handle numbered columns for now
    if (typeof option.columns === 'number') {
      pageBuilder.addRow(sectionId, option.columns);
    } else {
      // Case if column is left or right sidebar

    }
    customizationSidebar.closeSidebar();
  }
}
</script>


<style lang="scss">
.add-row-sidebar {
  &__body {
    padding: 15px 20px;
  }

  &__close {
    cursor: pointer;
    opacity: 1 !important;
  }
}
</style>