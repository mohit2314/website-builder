<template>
  <div class="hl_page-creator--menu">
    <div class="menu--left">
      <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Back"><i
          class="fas fa-arrow-left"></i>
      </button>
      <div class="btn-group">
        <button @click="changeView('desktop')" type="button"
          :class="['btn', 'btn-light', 'btn-sm', { 'btn-primary': viewMode === 'desktop' }]" data-tooltip="tooltip"
          data-placement="top" title="Desktop" id="page-creator-desktop">
          <i class="fas fa-desktop"></i>
        </button>
        <button @click="changeView('mobile')" type="button"
          :class="['btn', 'btn-light', 'btn-sm', { 'btn-primary': viewMode === 'mobile' }]" data-tooltip="tooltip"
          data-placement="top" title="Mobile" id="page-creator-mobile">
          <i class="fas fa-mobile-alt"></i>
        </button>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Apps"><i
            class="fas fa-plug"></i>
        </button>
        <div class="dropdown" id="settings-group">
          <button @click.stop="toggleDropdown('settings')" type="button" class="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip"
            data-placement="top" title="Settings"><i class="fas fa-cogs"></i><span class="btn-text">Settings</span>
          </button>
          <div class="dropdown-menu show" v-show="openDropdown === 'settings'">
            <div class="nav">
              <a @click="openCustomizationSidebar('settings')" class="dropdown-item" data-toggle="tab"
                href="#integrations">Integrations</a>
              <a class="dropdown-item" data-toggle="tab" href="#seo">SEO Meta Data</a>
              <a class="dropdown-item" data-toggle="tab" href="#tracking">Tracking Code</a>
              <a class="dropdown-item" data-toggle="tab" href="#css">Custom CSS</a>
              <a class="dropdown-item" data-toggle="tab" href="#background">Background</a>
              <a class="dropdown-item" data-toggle="tab" href="#typography">Typography</a>
              <a class="dropdown-item" data-toggle="tab" href="#general">General</a>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button @click.stop="toggleDropdown('popup')" type="button" class="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip"
            data-placement="top" title="Pop up"><i class="fas fa-external-link-alt"></i><span class="btn-text">Pop
              up</span>
          </button>
          <div class="dropdown-menu show" v-show="openDropdown === 'popup'">
            <a class="dropdown-item" href="#">Show Popup</a>
            <a class="dropdown-item" href="#">Edit Settings</a>
          </div>
        </div>
        <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Undo"><i
            class="fas fa-undo"></i>
        </button>
        <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Redo"
          disabled><i class="fas fa-redo"></i>
        </button>
      </div>
    </div>
    <div class="menu--right">
      <div class="btn-group">
        <div class="dropdown" id="section-group">
          <button @click.stop="toggleDropdown('section')" type="button" class="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip"
            data-placement="top" title="Sections"><i class="fas fa-expand"></i><span class="btn-text">Sections</span>
          </button>
          <div class="dropdown-menu show" v-show="openDropdown === 'section'">
            <div class="nav">
              <a @click="openCustomizationSidebar('add-section')" class="dropdown-item" data-toggle="tab"
                href="#add-section">Add Section</a>
              <a @click="openCustomizationSidebar('manage-sections')" class="dropdown-item" data-toggle="tab"
                href="#manage-sections">Manage</a>
            </div>
          </div>
        </div>
        <div class="dropdown" id="row-group">
          <button @click.stop="toggleDropdown('row')" type="button" class="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip"
            data-placement="top" title="Rows"><i class="fas fa-bars"></i><span class="btn-text">Rows</span>
          </button>
          <div class="dropdown-menu show" v-show="openDropdown === 'row'">
            <div class="nav">
              <a class="dropdown-item" href="#" @click.prevent="openCustomizationSidebar('add-row')">Add Row</a>
              <a class="dropdown-item" data-toggle="tab" href="#manage-rows">Manage</a>
            </div>
          </div>
        </div>
        <button @click.stop="openCustomizationSidebar('manage-columns')" type="button" class="btn btn-light btn-sm"
          data-tooltip="tooltip" data-placement="top" title="Columns" id="column-group"><i
            class="fas fa-columns"></i><span class="btn-text">Columns</span>
        </button>
        <div class="dropdown" id="element-group">
          <button @click.stop="toggleDropdown('elements')" type="button" class="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip"
            data-placement="top" title="Elements"><i class="fas fa-code"></i><span class="btn-text">Elements</span>
          </button>
          <div class="dropdown-menu show" v-show="openDropdown === 'elements'">
            <div class="nav">
              <a @click.prevent="openCustomizationSidebar('add-elements')" class="dropdown-item" data-toggle="tab"
                href="#add-element">Add Element</a>
              <a class="dropdown-item" data-toggle="tab" href="#manage-elements">Manage</a>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <button type="button" :class="['btn', 'btn-light', 'btn-sm', { 'btn-primary': previewMode }]"
          data-tooltip="tooltip" data-placement="top" :title="previewMode ? 'Exit Preview' : 'Preview'"
          @click="togglePreviewMode">
          <i :class="previewMode ? 'fas fa-times' : 'far fa-eye'"></i>
          <span class="btn-text">{{ previewMode ? 'Exit Preview' : 'Preview' }}</span>
        </button>
        <button type="button" class="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Save"><i
            class="far fa-save"></i><span class="btn-text">Save</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar'
import { usePageBuilderStore } from '@/stores/pageBuilderStore'

const pageBuilder = usePageBuilderStore();
const previewMode = computed(() => pageBuilder.previewMode);
const viewMode = computed(() => pageBuilder.viewMode);
const togglePreviewMode = () => pageBuilder.togglePreviewMode();
const changeView = (mode: 'desktop' | 'mobile') => pageBuilder.setViewMode(mode);

const openDropdown = ref<string | null>(null)
const store = useCustomizationSidebarStore()

function toggleDropdown(name: string) {
  openDropdown.value = openDropdown.value === name ? null : name
}

function closeDropdowns() {
  openDropdown.value = null
}

function openCustomizationSidebar(type: string) {
  store.openSidebar(type)
  closeDropdowns()
}

// Close dropdowns when clicking outside
function onClickOutside(event: MouseEvent) {
  const menu = (event.target as HTMLElement).closest('.dropdown')
  if (!menu) closeDropdowns()
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<style></style>