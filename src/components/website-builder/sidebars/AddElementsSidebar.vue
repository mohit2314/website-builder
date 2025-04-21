<template>
  <section class="hl_page-creator--element-group active" style="max-width: 450px;top:0;">
    <div>
      <div>
        <div id="add-element" role="tabpanel" aria-labelledby="add-element-tab">
          <div class="add-element">
            <div class="add-element-menu">
              <ul>
                <li v-for="cat in categories" :key="cat.value" :class="{ active: filterCategory === cat.value }">
                  <a href="#" @click.prevent="filterCategory = cat.value">{{ cat.label }}</a>
                </li>
              </ul>
            </div>
            <div class="add-element-body">
              <div class="form-group">
                <input type="text" v-model="search" class="form-control" placeholder="Search">
              </div>
              <div v-for="group in filteredGroups" :key="group" class="element-group">
                <h4>{{ group }}</h4>
                <div class="element-cards">
                  <div v-for="el in filteredElementsByGroup[group]" :key="el.label" class="element-card"
                    @click="handleSelectElement(el)" draggable="true" @dragstart="onDragStart(el, $event)">
                    <div class="icon">
                      <i :class="el.icon"></i>
                    </div>
                    <h5>{{ el.label }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePageBuilderStore } from '@/stores/pageBuilderStore'
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar'
import { v4 as uuidv4 } from 'uuid';
const pageBuilder = usePageBuilderStore()
const customizationSidebar = useCustomizationSidebarStore()

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Text', value: 'Text' },
  { label: 'Media', value: 'Media' },
  { label: 'Form', value: 'Form' },
  { label: 'Content', value: 'Content Blocks' },
  { label: 'Countdown', value: 'Countdown' },
  { label: 'Misc', value: 'Misc Elements' }
]

const elements = [
  // Text
  { label: 'Headline', icon: 'fas fa-heading', group: 'Text', type: 'HeadlineElement', properties: { text: 'Your Headline' } },
  { label: 'Sub-headline', icon: 'fas fa-font', group: 'Text', type: 'SubHeadlineElement' },
  { label: 'Paragraph', icon: 'fas fa-paragraph', group: 'Text', type: 'ParagraphElement' },
  { label: 'Bullet List', icon: 'fas fa-list', group: 'Text', type: 'BulletListElement' },
  // Media
  { label: 'Image', icon: 'fas fa-image', group: 'Media', type: 'ImageElement' },
  { label: 'Image Popup', icon: 'fas fa-images', group: 'Media', type: 'ImagePopupElement' },
  { label: 'Video', icon: 'fas fa-play-circle', group: 'Media', type: 'VideoElement' },
  { label: 'Video popup', icon: 'far fa-play-circle', group: 'Media', type: 'VideoPopupElement' },
  { label: 'Audio player', icon: 'fas fa-volume-up', group: 'Media', type: 'AudioPlayerElement' },
  // Form
  { label: 'Button', icon: 'fas fa-stop', group: 'Form', type: 'ButtonElement' },
  { label: 'Facebook Option', icon: 'fab fa-facebook-f', group: 'Form', type: 'FacebookOptionElement' },
  { label: 'Input', icon: 'far fa-square', group: 'Form' },
  { label: 'Select Box', icon: 'far fa-hand-pointer', group: 'Form' },
  { label: 'Text Area', icon: 'fas fa-comment-alt', group: 'Form' },
  { label: 'Checkbox Headline', icon: 'fas fa-check-square', group: 'Form' },
  // Advance Form
  { label: 'SMS Sign up', icon: 'fas fa-sms', group: 'Advance Form' },
  { label: 'Billing Add.', icon: 'fas fa-file-invoice', group: 'Advance Form' },
  { label: 'Shipping Add.', icon: 'fas fa-file-invoice', group: 'Advance Form' },
  { label: 'Survey', icon: 'fas fa-poll-h', group: 'Advance Form' },
  // Content Blocks
  { label: 'Icon', icon: 'fas fa-circle', group: 'Content Blocks' },
  { label: 'Img Feature', icon: 'fas fa-file-image', group: 'Content Blocks' },
  { label: 'Navigation', icon: 'fas fa-link', group: 'Content Blocks' },
  { label: 'FAQ', icon: 'far fa-question-circle', group: 'Content Blocks' },
  { label: 'Divider', icon: 'far fa-window-minimize', group: 'Content Blocks' },
  { label: 'Progress bar', icon: 'fas fa-window-minimize', group: 'Content Blocks' },
  { label: 'Image List', icon: 'fas fa-list', group: 'Content Blocks' },
  { label: 'Pricing Table', icon: 'fas fa-table', group: 'Content Blocks' },
  // Countdown
  { label: 'Countdown', icon: 'fas fa-hourglass-start', group: 'Countdown' },
  { label: 'Minute Timer', icon: 'far fa-clock', group: 'Countdown' },
  { label: 'Day Timer', icon: 'fas fa-clock', group: 'Countdown' },
  // Misc Elements
  { label: 'Social Share', icon: 'fas fa-share-alt-square', group: 'Misc Elements' },
  { label: 'Privacy Notice', icon: 'fas fa-bell', group: 'Misc Elements' },
  { label: 'FB Comments', icon: 'fas fa-comments', group: 'Misc Elements' },
  { label: 'Text Block', icon: 'fas fa-align-center', group: 'Misc Elements' },
  { label: 'Custom JS/HTML', icon: 'fas fa-code', group: 'Misc Elements' },
]

function handleSelectElement(el: any) {
  const sectionId = customizationSidebar.editingSectionId
  const rowId = customizationSidebar.editingRowId
  const columnId = customizationSidebar.editingColumnId
  console.log("Editing section ID's", sectionId, rowId, columnId)
  if (sectionId && rowId && columnId) {
    pageBuilder.addElement(sectionId, rowId, columnId, {
      id: uuidv4(),
      type: el.type,
      properties: { ...el.properties }
    })
    customizationSidebar.closeSidebar()
  }
}



const search = ref('')
const filterCategory = ref('all')

const filteredElements = computed(() => {
  let filtered = elements
  if (filterCategory.value !== 'all') {
    // handle Content/Misc/Countdown mapping
    if (filterCategory.value === 'Content') {
      filtered = filtered.filter(el => el.group === 'Content Blocks')
    } else if (filterCategory.value === 'Misc') {
      filtered = filtered.filter(el => el.group === 'Misc Elements')
    } else {
      filtered = filtered.filter(el => el.group === filterCategory.value)
    }
  }
  if (search.value.trim()) {
    const s = search.value.trim().toLowerCase()
    filtered = filtered.filter(el =>
      el.label.toLowerCase().includes(s) ||
      el.group.toLowerCase().includes(s)
    )
  }
  return filtered
})

const filteredGroups = computed(() => {
  // unique group names in filteredElements
  return [...new Set(filteredElements.value.map(el => el.group))]
})

const filteredElementsByGroup = computed(() => {
  const map: Record<string, typeof elements> = {}
  filteredGroups.value.forEach(group => {
    map[group] = filteredElements.value.filter(el => el.group === group)
  })
  return map
})

function onDragStart(el: any, event: DragEvent) {
  // Store the element type and default properties in dataTransfer
  event.dataTransfer.setData('application/json', JSON.stringify(el));

}
</script>

<style></style>